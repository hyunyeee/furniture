import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-page-green flex h-screen w-full flex-col items-center justify-center">
      {children}
    </div>
  );
}
