// https://github.com/flexdinesh/react-socks
// Copied manually for learning purposes.

import { useState, useEffect, createContext, useContext } from "react";

import BreakpointUtils from "./BreakpointUtils";

type BreakpointContextProps = {
  currentWidth: number;
  currentBreakpointName: string;
};

export const BreakpointContext = createContext<Partial<BreakpointContextProps>>(
  {
    currentWidth: BreakpointUtils.defaultWidth,
    currentBreakpointName: "",
  }
);

const BreakpointProvider = ({ children }: any) => {
  let [currentWidth, setCurrentWidth] = useState(BreakpointUtils.currentWidth);
  let [currentBreakpointName, setCurrentBreakpointName] = useState(
    BreakpointUtils.getBreakpointName(BreakpointUtils.currentWidth)
  );

  useEffect(() => {
    function handleResize() {
      const currentWidth = BreakpointUtils.currentWidth;
      const currentBreakpointName =
        BreakpointUtils.getBreakpointName(currentWidth);

      setCurrentWidth(currentWidth);
      setCurrentBreakpointName(currentBreakpointName);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <BreakpointContext.Provider
      value={{
        currentWidth,
        currentBreakpointName,
      }}
    >
      {children}
    </BreakpointContext.Provider>
  );
};

export default BreakpointProvider;

export const useCurrentWidth = () => useContext(BreakpointContext).currentWidth;

export const useCurrentBreakpointName = () =>
  useContext(BreakpointContext).currentBreakpointName;
