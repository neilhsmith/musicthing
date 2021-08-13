import Page from "common/layout/Page";
import Flexbox from "common/layout/Flexbox";

import LogoTitle from "common/LogoTitle";
import LoginForm from "../LoginForm";

export default function LoginPage() {
  return (
    <Page>
      <Flexbox
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <LogoTitle />
        <LoginForm />
      </Flexbox>
    </Page>
  );
}
