import React from "react";
import "./App.css";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import MyAnimatedBox from "./AnimatedBox";

function App() {
  const wallRefs = [useRef(), useRef(), useRef(), useRef()];
  const walls = [
    { position: [0, 3.1, 0], args: [8.1, 0.1], name: "top" },
    { position: [4, 0, 0], args: [0.1, 6.1], name: "right" },
    { position: [0, -3.1, 0], args: [8.1, 0.1], name: "bottom" },
    { position: [-4, 0, 0], args: [0.1, 6.1], name: "left" },
  ];
  const ballRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];

  return (
    <div className="App">
      <Canvas>
        <MyAnimatedBox wallRefs={wallRefs} ballRefs={ballRefs} />
        {ballRefs.map((el, index) => {
          return (
            <mesh key={index} position={[0, 0, 0]} ref={ballRefs[index]}>
              <circleGeometry args={[0.1, 32]} />
            </mesh>
          );
        })}
        {walls.map((el, index) => {
          return (
            <mesh key={index} position={el.position} ref={wallRefs[index]}>
              <planeGeometry args={el.args} />
            </mesh>
          );
        })}
      </Canvas>
    </div>
  );
}

export default App;
