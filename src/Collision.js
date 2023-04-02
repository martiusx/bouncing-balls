export default function Collision(balls, ball, index, ballActualPosition) {
  balls.forEach((otherBall, otherIndex) => {
    if (index === otherIndex) {
      return;
    }

    const dx = ballActualPosition.x - otherBall.current.position.x;
    const dy = ballActualPosition.y - otherBall.current.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance =
      ball.current.geometry.parameters.radius +
      otherBall.current.geometry.parameters.radius;

    if (distance < minDistance) {
      const tempDirection = ball.direction;
      ball.direction = otherBall.direction;
      otherBall.direction = tempDirection;
    }
  });
}
