import { useFrame } from "@react-three/fiber";
import Collision from "./Collision";

export default function MyAnimatedBox({ wallRefs, ballRefs }) {
  const startDirections = ["bottomLeft", "bottomRight"];
  let startCollisions = false;
  const balls = ballRefs.map((ball) => {
    ball.direction =
      startDirections[Math.floor(Math.random() * startDirections.length)];
    ball.speedX = Math.random() * (0.04 - 0.01) + 0.01;
    ball.speedY = Math.random() * (0.04 - 0.01) + 0.01;
    return ball;
  });

  setTimeout(() => {
    startCollisions = true;
  }, 3000);

  useFrame(() => {
    const wallsX = [
      wallRefs[1].current.position.x - 0.1,
      wallRefs[3].current.position.x + 0.1,
    ];
    const wallsY = [
      wallRefs[0].current.position.y - 0.1,
      wallRefs[2].current.position.y + 0.1,
    ];
    const bounds = {
      minX: Math.min(...wallsX),
      maxX: Math.max(...wallsX),
      minY: Math.min(...wallsY),
      maxY: Math.max(...wallsY),
    };

    balls.forEach((ball, index) => {
      const ballActualPosition = ball.current.position;
      const { direction, speedX, speedY } = ball;

      ballActualPosition.y +=
        direction === "topLeft" || direction === "topRight" ? speedY : -speedY;
      ballActualPosition.x +=
        direction === "topRight" || direction === "bottomRight"
          ? speedX
          : -speedX;

      if (startCollisions) {
        Collision(balls, ball, index, ballActualPosition);
      }

      if (ballActualPosition.x <= bounds.minX) {
        ball.direction =
          direction === "bottomLeft" ? "bottomRight" : "topRight";
      } else if (ballActualPosition.x >= bounds.maxX) {
        ball.direction = direction === "bottomRight" ? "bottomLeft" : "topLeft";
      }

      if (ballActualPosition.y <= bounds.minY) {
        ball.direction = direction === "bottomLeft" ? "topLeft" : "topRight";
      } else if (ballActualPosition.y >= bounds.maxY) {
        ball.direction = direction === "topLeft" ? "bottomLeft" : "bottomRight";
      }
    });
  });

  return null;
}
