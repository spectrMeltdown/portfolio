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
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (wrapperRef.current) {
        // adjust parallax strength here
        wrapperRef.current.style.transform = `translateY(-${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
