import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background1: string;
      background2: string;
      background3: string;
      background4: string;
      background5: string;
      background6: string;
      text: string;
      textActive: string;
      textLight: string;
      textDark: string;
      primary: string;
      danger: string;
      warning: string;
    };
  }
}
