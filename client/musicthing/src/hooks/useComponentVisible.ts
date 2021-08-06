import { useState, useRef, SyntheticEvent, useEffect } from "react";

// manages a isComponentVisible prop & closes the component when clicking outside
// the ref
export default function useComponentVisible(inititalIsVisible: boolean) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(inititalIsVisible);
  const ref = useRef<HTMLDivElement>(null);

  // todo: event type
  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}
