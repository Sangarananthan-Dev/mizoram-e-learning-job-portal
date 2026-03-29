"use client";

import { useEffect, useState } from "react";

export default function ProgressBar({ value, color = "#3D5A80" }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setWidth(value);
    }, 40);

    return () => window.clearTimeout(timer);
  }, [value]);

  return (
    <div className="h-2 overflow-hidden rounded-full bg-[var(--color-surface)]">
      <div
        className="h-full rounded-full transition-[width] duration-700 ease-out"
        style={{ backgroundColor: color, width: `${width}%` }}
      />
    </div>
  );
}
