import Page from "common/layout/Page";
import FlexCenter from "common/layout/FlexCenter";

import LogoTitle from "common/LogoTitle";

import "./loginpage.styles.scss";

export default function LoginPage() {
  return (
    <Page>
      <div className="login-page">
        <FlexCenter>
          <LogoTitle />
        </FlexCenter>
      </div>
    </Page>
  );
}
