/**
 * Provides an interface to represent the properties for sizing (width & height)
 * and a function to generate a css string for any given sizing props.
 */

export interface SizingProps {
  height?: number | string;
  maxHeight?: number | string;
  minHeight?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
}

export const generateSizingCss = ({
  height,
  maxHeight,
  minHeight,
  width,
  maxWidth,
  minWidth,
}: SizingProps) => {
  let css = [];

  if (height) css.push(`height: ${height};`);
  if (maxHeight) css.push(`max-height: ${maxHeight};`);
  if (minHeight) css.push(`min-height: ${minHeight};`);
  if (width) css.push(`width: ${width};`);
  if (maxWidth) css.push(`max-width: ${maxWidth};`);
  if (minWidth) css.push(`min-width: ${minWidth};`);

  return css.join("");
};
