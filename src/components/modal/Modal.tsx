import { PropsWithChildren } from "react";

export default function Modal({ children }: PropsWithChildren) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#0000009d] z-10 flex items-center justify-center">
      {children}
    </div>
  );
}
