import { ReactNode } from "react";

import "./flexcenter.styles.scss";

/**
 * Sets the height to 100% and uses flex to vertically & horizontally center its
 * children.
 */

type FlexCenterProps = {
  children: ReactNode;
};

export default function FlexCenter({ children }: FlexCenterProps) {
  return <div className="flex-center">{children}</div>;
}
