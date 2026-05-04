import {
  MoveDirection,
  OutMode,
  type ISourceOptions,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useRef, useState } from "react";

export default function BgParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    // only be run once
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // a bit better than basic version, but also not too big
    }).then(() => {
      setInit(true);
    });
  }, []);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef({ y: 0, t: 0 });
  const blurRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    if (!init) return;

    const el = wrapperRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const parallaxStrength = 0.3;
    const blurMaxPx = 2.5;
    const blurSpeedScale = 480;
    const blurDecay = 0.88;
    const blurFloor = 0.02;

    lastScrollRef.current = {
      y: window.scrollY,
      t: performance.now(),
    };

    const tickDecay = () => {
      const node = wrapperRef.current;
      if (!node || reduceMotion.matches) return;

      blurRef.current *= blurDecay;
      if (blurRef.current > blurFloor) {
        node.style.filter = `blur(${blurRef.current.toFixed(2)}px)`;
        rafRef.current = requestAnimationFrame(tickDecay);
      } else {
        blurRef.current = 0;
        node.style.filter = "";
        rafRef.current = 0;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const node = wrapperRef.current;
      if (!node) return;

      node.style.transform = `translateY(-${scrollY * parallaxStrength}px)`;

      if (reduceMotion.matches) {
        node.style.filter = "";
        blurRef.current = 0;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
        lastScrollRef.current = { y: scrollY, t: performance.now() };
        return;
      }

      const now = performance.now();
      const { y: lastY, t: lastT } = lastScrollRef.current;
      const dt = Math.max(1, now - lastT);
      const speedPxPerMs = Math.abs(scrollY - lastY) / dt;
      lastScrollRef.current = { y: scrollY, t: now };

      const instantBlur = Math.min(blurMaxPx, speedPxPerMs * blurSpeedScale);
      blurRef.current = Math.max(blurRef.current, instantBlur);
      node.style.filter = `blur(${blurRef.current.toFixed(2)}px)`;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tickDecay);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      blurRef.current = 0;
      if (wrapperRef.current) {
        wrapperRef.current.style.filter = "";
      }
    };
  }, [init]);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        // color: {
        //   value: "#0d47a1",
        // },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "parallax",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          parallax: {
            enable: true,
            force: 70,
            smooth: 10,
          },
          // repulse: {
          //   distance: 200,
          //   duration: 0.4,
          // },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div
        className="fixed top-0 left-0 -z-10 h-screen w-full overflow-hidden"
        ref={wrapperRef}
      >
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return <></>;
}
