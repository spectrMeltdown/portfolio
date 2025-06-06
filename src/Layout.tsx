import type { ReactNode } from "react";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>{children}</div>
      <Toaster theme="system" />
    </>
  );
}
