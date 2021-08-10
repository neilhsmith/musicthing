import { ReactNode } from "react";

import "./flexcenter.styles.scss";

type FlexCenterProps = {
  children: ReactNode;
};

export default function FlexCenter({ children }: FlexCenterProps) {
  return <div className="flex-center">{children}</div>;
}
