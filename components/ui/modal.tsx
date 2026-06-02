import { ReactNode } from "react";

export function Modal({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      {children}
    </div>
  );
}
