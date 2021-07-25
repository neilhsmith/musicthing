// https://github.com/flexdinesh/react-socks
// Copied manually for learning purposes.

import BreakpointUtils from "./BreakpointUtils";
import {
  useCurrentWidth,
  useCurrentBreakpointName,
} from "./BreakpointProvider";

const extractBreakpointAndModifierFromProps = (props: any) => {
  let breakpoint;
  let modifier;
  let tagName = props.tagName || "div";
  let className = props.className || "";
  let style = props.style;
  let usesCustomQuery = false;

  Object.keys(props).forEach((prop: any) => {
    if (prop === "up" || prop === "down" || prop === "only") {
      modifier = prop;
    } else if (prop === "customQuery") {
      usesCustomQuery = true;
    } else if (prop !== "tagName" && prop !== "className" && prop !== "style") {
      breakpoint = prop;
    }
  });

  if (modifier === "up" || modifier === "down" || modifier === "only") {
    usesCustomQuery = false;
  }

  if (!modifier && !usesCustomQuery) modifier = "only";

  return {
    breakpoint,
    modifier,
    tagName,
    className,
    style,
    customQuery: usesCustomQuery ? props.customQuery : null,
  };
};

const Breakpoint = ({ children, ...rest }: any) => {
  const { breakpoint, modifier, className, tagName, style, customQuery } =
    extractBreakpointAndModifierFromProps(rest);

  const currentWidth = useCurrentWidth();
  const currentBreakpointName = useCurrentBreakpointName();

  const shouldRender = BreakpointUtils.shouldRender({
    breakpointName: breakpoint,
    modifier,
    currentBreakpointName,
    currentWidth,
    customQuery,
  });

  if (!shouldRender) return null;

  const Tag = tagName;
  return (
    <Tag
      className={`breakpoint ${breakpoint}-${modifier} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
};

export default Breakpoint;
