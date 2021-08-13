import { render } from "test-utils";

import Flexbox from "./Flexbox";

describe("Component: Flexbox", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Flexbox
        alignContent="flex-start"
        alignItems="center"
        alignSelf="center"
        display="flex"
        element="article"
        flex="1"
        flexBasis="1"
        flexDirection="column"
        flexFlow="row"
        flexGrow="1"
        flexShrink="1"
        flexWrap="nowrap"
        justifyContent="space-around"
        margin="1rem"
        marginTop="1rem"
        marginRight="1rem"
        marginBottom="1rem"
        marginLeft="1rem"
        padding="1rem"
        paddingTop="1rem"
        paddingRight="1rem"
        paddingBottom="1rem"
        paddingLeft="1rem"
        height="1rem"
        maxHeight="1rem"
        minHeight="1rem"
        width="1rem"
        maxWidth="1rem"
        minWidth="1rem"
      >
        <span data-testid="42">a child</span>
      </Flexbox>
    );

    expect(container.firstChild).toMatchSnapshot();

    expect(container.firstChild).toHaveStyleRule("align-content", "flex-start");
    expect(container.firstChild).toHaveStyleRule("align-items", "center");
    expect(container.firstChild).toHaveStyleRule("align-self", "center");
    expect(container.firstChild).toHaveStyleRule("display", "flex");
    expect(container.firstChild).toHaveStyleRule("flex", "1");
    expect(container.firstChild).toHaveStyleRule("flex-basis", "1");
    expect(container.firstChild).toHaveStyleRule("flex-direction", "column");
    expect(container.firstChild).toHaveStyleRule("flex-flow", "row");
    expect(container.firstChild).toHaveStyleRule("flex-grow", "1");
    expect(container.firstChild).toHaveStyleRule("flex-shrink", "1");
    expect(container.firstChild).toHaveStyleRule("flex-wrap", "nowrap");
    expect(container.firstChild).toHaveStyleRule(
      "justify-content",
      "space-around"
    );
    expect(container.firstChild).toHaveStyleRule("margin", "1rem");
    expect(container.firstChild).toHaveStyleRule("margin-top", "1rem");
    expect(container.firstChild).toHaveStyleRule("margin-right", "1rem");
    expect(container.firstChild).toHaveStyleRule("margin-bottom", "1rem");
    expect(container.firstChild).toHaveStyleRule("margin-left", "1rem");
    expect(container.firstChild).toHaveStyleRule("padding", "1rem");
    expect(container.firstChild).toHaveStyleRule("padding-top", "1rem");
    expect(container.firstChild).toHaveStyleRule("padding-right", "1rem");
    expect(container.firstChild).toHaveStyleRule("padding-bottom", "1rem");
    expect(container.firstChild).toHaveStyleRule("padding-left", "1rem");
    expect(container.firstChild).toHaveStyleRule("height", "1rem");
    expect(container.firstChild).toHaveStyleRule("max-height", "1rem");
    expect(container.firstChild).toHaveStyleRule("min-height", "1rem");
    expect(container.firstChild).toHaveStyleRule("width", "1rem");
    expect(container.firstChild).toHaveStyleRule("max-width", "1rem");
    expect(container.firstChild).toHaveStyleRule("min-width", "1rem");
  });
});
