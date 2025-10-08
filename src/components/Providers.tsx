"use client";

import { ReactNode } from "react";
import { ScrollProvider } from "@/contexts/ScrollContext";
import { ModalProvider } from "./ModalProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ScrollProvider>
      <ModalProvider>{children}</ModalProvider>
    </ScrollProvider>
  );
}
