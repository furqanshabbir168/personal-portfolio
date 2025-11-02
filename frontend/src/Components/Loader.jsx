import React, { useState, useEffect } from "react";

function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-white animate-pulse"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
              animationDelay: `${i * 0.2}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Main loader circle */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
            {/* Background circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="0.2"
            />
            {/* Progress circle */}
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray={352}
              strokeDashoffset={352 - (352 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-200"
            />
          </svg>

          {/* Center dot with pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
          </div>
        </div>

        {/* Progress percentage */}
        <div className="text-white text-4xl font-bold mb-4 tabular-nums">
          {progress}%
        </div>

        {/* Loading text */}
        <div className="text-white text-sm tracking-widest uppercase">
          Loading Portfolio
          <span className="inline-block w-12 text-left">
            {".".repeat(progress % 4)}
          </span>
        </div>

        {/* Minimal brand/name placeholder */}
        <div className="mt-12 text-white text-xs tracking-widest opacity-50">
          FURQAN
        </div>
      </div>
    </div>
  );
}

export default Loader;
