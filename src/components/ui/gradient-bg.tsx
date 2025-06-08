import { useEffect, useRef } from "react";

export default function BgGradient() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (wrapperRef.current) {
        // adjust parallax strength here
        wrapperRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="bg-radial from-gray-800 from-0% to-gray-900 to-70%"
      ref={wrapperRef}
    ></div>
  );
}
