import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Button } from "react-native-paper";

export default function SignUpScreen({ onSignIn, navigation }) {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // const goToSignIn = () => {
  //   // onSignIn;
  //   navigation.push("SignIn");
  // };
  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={{ marginTop: 130, justifyContent: "center" }}>
      {!pendingVerification && (
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 40 }}>
            Бүртгүүлэх
          </Text>
          <View style={{ marginBottom: 40, gap: 10 }}>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email"
              onChangeText={setEmailAddress}
              style={{
                height: 50,
                fontSize: 20,
                borderRadius: 10,
                backgroundColor: "pink",
              }}
            />
            <TextInput
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              style={{
                height: 50,
                fontSize: 20,
                borderRadius: 10,
                backgroundColor: "pink",
              }}
            />
          </View>

          <Button mode="contained" onPress={onSignUpPress}>
            <Text>Sign up</Text>
          </Button>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 17 }}>
              Аль хэдийн бүртгүүлсэн бол:
            </Text>
            <Button
              onPress={() => navigation.push("SignIn")}
              style={{ textAlign: "center", fontSize: 17 }}
            >
              Нэвтрэх
            </Button>
          </View>
        </View>
      )}

      {pendingVerification && (
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 40 }}>
            Check your email
          </Text>
          <View style={{ marginBottom: 40, gap: 10 }}>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={setCode}
              style={{
                height: 50,
                fontSize: 20,
                borderRadius: 10,
                backgroundColor: "pink",
              }}
            />
          </View>
          <Button mode="contained" onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </Button>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <Button
              onPress={onSignUpPress}
              style={{ textAlign: "center", fontSize: 17 }}
            >
              Resend
            </Button>
          </View>
        </View>
      )}
    </View>
  );
}
