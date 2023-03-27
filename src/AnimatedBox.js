import { useFrame } from "@react-three/fiber";

function MyAnimatedBox({ wallRefs, ballRefs }) {
  const directions = ["bottomLeft", "bottomRight"];

  const balls = ballRefs.map((ball) => {
    ball.direction = directions[Math.floor(Math.random() * directions.length)];
    ball.speedx = Math.random() * (0.05 - 0.01) + 0.01;
    ball.speedy = Math.random() * (0.05 - 0.01) + 0.01;
    return ball;
  });

  useFrame(() => {
    const wallsX = [
      wallRefs[1].current.position.x,
      wallRefs[3].current.position.x,
    ];
    const wallsY = [
      wallRefs[0].current.position.y,
      wallRefs[2].current.position.y,
    ];
    const bounds = {
      minX: Math.min(...wallsX),
      maxX: Math.max(...wallsX),
      minY: Math.min(...wallsY),
      maxY: Math.max(...wallsY),
    };

    balls.forEach((ball) => {
      const ballActualPosition = ball.current.position;
      const { direction, speedx, speedy } = ball;

      ballActualPosition.y +=
        direction === "topLeft" || direction === "topRight" ? speedy : -speedy;
      ballActualPosition.x +=
        direction === "topRight" || direction === "bottomRight"
          ? speedx
          : -speedx;

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

export default MyAnimatedBox;
