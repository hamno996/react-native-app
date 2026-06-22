import { View, Text } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { usePostHog } from "posthog-react-native";
import { useSignIn } from "@clerk/expo";

const SignIn = () => {
  const { signIn, errors, fetchStatus } = useSignIn();
  const router = useRouter();
  const posthog = usePostHog();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouhed, setPasswordTouched] = useState(false);

  const emailValid =
    emailAddress.length === 0 ||
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
  const passwordValid = password.length > 0;
  const formValid =
    emailAddress.length > 0 && password.length > 0 && emailValid;

  const handleSubmit = async () => {
    if (!formValid) return;

    const { error } = await signIn.password({
      emailAddress,
      password,
    });

    if (error) {
      console.log(JSON.stringify(error, null, 2));
      posthog.capture("user_signin_failed", {
        error_message: error.message,
      });
      return;
    }

    if (signIn.status === "complete") {
      await signIn.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session?.currentTask) {
            console.log(session?.currentTask);
            return;
          }

          posthog.identify(emailAddress, {
            $set: { email: emailAddress },
            $set_once: { first_sign_in_date: new Date().toISOString() },
          });
          posthog.capture("user_signed_in", { email: emailAddress });
        },
      });
    }
  };

  return (
    <View>
      <Text>SignIn</Text>
      <Link
        href="/(auth)/sign-in"
        onPress={() => posthog.capture("sign_in_initiated")}
      >
        Sign Up
      </Link>
    </View>
  );
};

export default SignIn;
