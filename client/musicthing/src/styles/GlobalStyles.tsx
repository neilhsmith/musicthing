import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-size: 1.6rem;
    line-height: 1.5;
    box-sizing: border-box;
  }

  #root {
      min-height: 100vh;
      scroll-behavior: inherit;
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    letter-spacing: -.3px;
  }

  h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      letter-spacing: -.6px;
  }

  button {
    border-radius: 0;
    cursor: pointer;
    font-weight: 500;
    outline: 0;
    border: 0;
  }
`;

export { ResetStyle, GlobalStyle };
