import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
};

const getScrollY = () => window.scrollY;
const getServerSnapshot = () => 0;

export function useScrollY() {
  return useSyncExternalStore(subscribe, getScrollY, getServerSnapshot);
}