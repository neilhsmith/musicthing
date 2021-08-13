import { ReactNode, createElement } from "react";
import styled from "styled-components";

import { SpacingProps, generateSpacingCss } from "utils/spacing";
import { SizingProps, generateSizingCss } from "utils/sizing";

interface FlexboxProps extends SpacingProps, SizingProps {
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "stretch";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  alignSelf?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  children: ReactNode;
  display?: "flex" | "inline-flex";
  element?:
    | "article"
    | "aside"
    | "div"
    | "figure"
    | "footer"
    | "header"
    | "main"
    | "nav"
    | "section";
  flex?: number | string;
  flexBasis?: number | string;
  flexDirection?: "column-reverse" | "column" | "row-reverse" | "row";
  flexFlow?: string; // todo: limit this to actual flex-flow values
  flexGrow?: number | string;
  flexShrink?: number | string;
  flexWrap?: "nowrap" | "wrap-reverse" | "wrap";
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-around"
    | "space-between";
}

const Flexbox = styled(
  ({
    alignContent,
    alignItems,
    alignSelf,
    children,
    display,
    element,
    flex,
    flexBasis,
    flexDirection,
    flexFlow,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    height,
    maxHeight,
    minHeight,
    width,
    maxWidth,
    minWidth,
    ...otherProps
  }: FlexboxProps) => createElement(element || "div", otherProps, children)
)`
  ${(props) => propIfExists(props.alignContent, "align-content")}
  ${(props) => propIfExists(props.alignItems, "align-items")}
  ${(props) => propIfExists(props.alignSelf, "align-self")}
  ${(props) => propIfExists(props.display, "display") ?? "display: flex;"}
  ${(props) => propIfTruthyOrZero(props.flex, "flex")}
  ${(props) => propIfTruthyOrZero(props.flexBasis, "flex-basis")}
  ${(props) => propIfExists(props.flexDirection, "flex-direction")}
  ${(props) => propIfExists(props.flexFlow, "flex-flow")}
  ${(props) => propIfTruthyOrZero(props.flexGrow, "flex-grow")}
  ${(props) => propIfTruthyOrZero(props.flexShrink, "flex-shrink")}
  ${(props) => propIfExists(props.flexWrap, "flex-wrap")}
  ${(props) => propIfExists(props.justifyContent, "justify-content")}
  ${(props) => generateSpacingCss(props)}
  ${(props) => generateSizingCss(props)}
`;

export default Flexbox;

function propIfExists(prop: string | number | undefined, cssClass: string) {
  return prop ? `${cssClass}: ${prop};` : null;
}

function propIfTruthyOrZero(
  prop: number | string | undefined,
  cssClass: string
) {
  if (prop || prop === 0) {
    return propIfExists(prop, cssClass);
  }
  return null;
}
