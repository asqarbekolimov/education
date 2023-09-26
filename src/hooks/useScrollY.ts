import { useEffect, useState } from "react";

export const useScrollY = (): number => {
  const isBrowser = typeof window !== "undefined";
  const [useScrollY, setUseScrollY] = useState<number>(0);

  const handleScroll = (): void => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setUseScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};
