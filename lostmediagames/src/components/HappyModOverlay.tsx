import { useEffect, useState } from "react";

const HappyModOverlay = () => {
  const [smileys, setSmileys] = useState<{ x: number; y: number; rot: number; opacity: number }[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      rot: Math.random() * 360,
      opacity: 0.04 + Math.random() * 0.08,
    }));
    setSmileys(arr);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9997] overflow-hidden">
      {smileys.map((s, i) => (
        <div
          key={i}
          className="absolute text-4xl select-none"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            transform: `rotate(${s.rot}deg)`,
            opacity: s.opacity,
            color: "hsl(50 90% 50%)",
          }}
        >
          ☺
        </div>
      ))}
    </div>
  );
};

export default HappyModOverlay;
