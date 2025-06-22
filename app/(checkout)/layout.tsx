import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full min-h-screen w-full bg-[#e8f3ff] p-8">
      {children}
    </div>
  );
}
