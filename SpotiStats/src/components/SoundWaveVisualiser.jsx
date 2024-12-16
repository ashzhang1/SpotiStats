import { useEffect, useRef } from "react";
import "../styles/components/SoundWaveVisualiser.css";

const SoundWaveVisualizer = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (loaderRef.current) {
      const dots = loaderRef.current.querySelectorAll(".sound-wave-dot");
      const DELAY = 300;

      dots.forEach((dot, index) => {
        dot.style.setProperty("--delay", `${DELAY * index}`);
      });
    }
  }, []);

  return (
    <div className="sound-wave-container">
      <div
        ref={loaderRef}
        className="sound-wave-loader"
        role="presentation"
        aria-hidden="true"
      >
        {[...Array(6)].map((_, index) => (
          <div key={index} className="sound-wave-dot" />
        ))}
      </div>
    </div>
  );
};

export default SoundWaveVisualizer;
