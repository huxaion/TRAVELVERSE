"use client";

import { ReactNode, useEffect, useRef } from "react";

export function Modal({
  title,
  children,
  open = true,
  onClose,
}: {
  title: string;
  children: ReactNode;
  open?: boolean;
  onClose?: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const dialog = dialogRef.current;
    const getFocusable = () =>
      dialog
        ? Array.from(
            dialog.querySelectorAll<HTMLElement>(
              "button, [href], input, select, textarea, [tabindex]:not([tabindex^='-'])",
            ),
          )
        : [];

    getFocusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) onClose();
      if (event.key !== "Tab" || !dialog) return;

      const focusableElements = getFocusable();
      if (!focusableElements.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
      onClick={() => onClose?.()}
      aria-hidden="true"
    >
      <div
        ref={dialogRef}
        className="card w-full max-w-lg"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          {onClose ? (
            <button aria-label="Close modal" className="rounded-full border px-2 py-1 text-xs" onClick={onClose}>
              Close
            </button>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
