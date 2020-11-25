import React from "react";
import CurrentUserA from "./CurrentUserA";
import SignInAndSignUpA from "./SignInAndSugnUpA";

const AuthenticationA = ({ user, loadingA }) => {
  if (loadingA) return null;
  return <div>{user ? <CurrentUserA {...user} /> : <SignInAndSignUpA />}</div>;
};

export default AuthenticationA;
