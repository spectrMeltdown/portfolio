import BgGradient from "@/components/ui/gradient-bg";
import BgParticles from "@/components/ui/particles";
import type { ReactNode } from "react";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <BgGradient />
      <BgParticles />
      {children}
      <Toaster theme="system" />
      {/* <div>{children}</div> */}
    </>
  );
}
