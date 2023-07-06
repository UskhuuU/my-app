import { useState } from "react";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";

export default function LoginFlow() {
  const [isSignUp, setIsSignUp] = useState(true);
  if (isSignUp) return <SignUpScreen onSignIn={() => setIsSignUp(false)} />;
  return (
    <>
      <SignInScreen onSignUp={() => setIsSignUp(true)} />
    </>
  );
}
