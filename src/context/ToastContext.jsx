import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const show = useCallback((message) => {
    setToast({ message, id: Date.now() });
    window.setTimeout(() => setToast((t) => (t && t.message === message ? null : t)), 2400);
  }, []);

  return (
    <ToastContext.Provider value={{ show, toast, dismiss: () => setToast(null) }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
