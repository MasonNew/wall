"use client";

import { useEffect, useState } from "react";

interface Brick {
  id: number;
  left: string;
  top: string;
  delay: string;
}

export function FallingBricks() {
  const [bricks, setBricks] = useState<Brick[]>([]);

  useEffect(() => {
    const newBricks = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
    setBricks(newBricks);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bricks.map((brick) => (
        <div
          key={brick.id}
          className="absolute brick"
          style={{
            left: brick.left,
            top: brick.top,
            animationDelay: brick.delay,
            opacity: 0.1
          }}
        />
      ))}
    </div>
  );
}