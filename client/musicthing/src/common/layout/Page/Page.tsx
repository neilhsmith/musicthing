import { ReactNode } from "react";
import styled from "styled-components";

/**
 * A basic component used to wrap individual pages. It simply provides a colors,
 * sets its height to be equal to the viewport and renders children.
 */

type PageProps = {
  /** The children to render within the page. */
  children: ReactNode;
};

const StyledPage = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background1};
  color: ${(props) => props.theme.colors.text};
`;

const Page = ({ children }: PageProps) => <StyledPage>{children}</StyledPage>;

export default Page;
