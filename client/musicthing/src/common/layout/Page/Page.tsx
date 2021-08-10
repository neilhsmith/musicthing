import { ReactNode } from "react";

import "./page.styles.scss";

/**
 * A basic component used to wrap individual pages. It simply provides a
 * background-color and sets its height to be equal to the viewport & renders
 * children.
 */

type PageProps = {
  /** The children to render within the page. */
  children: ReactNode;
};

export default function Page({ children }: PageProps) {
  return <div className="page">{children}</div>;
}
