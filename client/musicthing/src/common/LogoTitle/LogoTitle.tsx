import styled from "styled-components";

import logo from "logo.svg";

/**
 * Displays the app's logo and title.
 */

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.textActive};
  font-size: clamp(2.2rem, 1.4vw, 3.8rem);
`;

export default function LogoTitle() {
  return (
    <Wrapper>
      <Image src={logo} alt="logo" />
      <Title>MusicThing</Title>
    </Wrapper>
  );
}
