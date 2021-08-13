/**
 * Provides an interface to represent the properties for spacing (margin &
 * padding) and a function to generate a css string for any given spacing props.
 */

export interface SpacingProps {
  margin?: number | string;
  marginTop?: number | string;
  marginRight?: number | string;
  marginBottom?: number | string;
  marginLeft?: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingRight?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
}

export const generateSpacingCss = ({
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
}: SpacingProps) => {
  let css = [];

  if (margin) css.push(`margin: ${margin};`);
  if (marginTop) css.push(`margin-top: ${marginTop};`);
  if (marginRight) css.push(`margin-right: ${marginRight};`);
  if (marginBottom) css.push(`margin-bottom: ${marginBottom};`);
  if (marginLeft) css.push(`margin-left: ${marginLeft};`);
  if (padding) css.push(`padding: ${padding};`);
  if (paddingTop) css.push(`padding-top: ${paddingTop};`);
  if (paddingRight) css.push(`padding-right: ${paddingRight};`);
  if (paddingBottom) css.push(`padding-bottom: ${paddingBottom};`);
  if (paddingLeft) css.push(`padding-left: ${paddingLeft};`);

  return css.join("");
};
