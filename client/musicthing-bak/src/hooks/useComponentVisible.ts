import { useState, useRef, useEffect } from "react";

// manages a isComponentVisible prop & closes the component when clicking outside
// the ref or pressing the esc key
export default function useComponentVisible(inititalIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(inititalIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && !isComponentVisible) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
