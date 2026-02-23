"use client";

import { useScrollWarmth } from "@/hooks/useScrollWarmth";

export default function WarmthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollWarmth();
  return <>{children}</>;
}
