import React from "react";
import { Text, TextInput, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";
import { Button } from "react-native-paper";

export default function SignInScreen() {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View
      style={{
        marginTop: 130,
        justifyContent: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 40 }}>
        Нэвтрэх
      </Text>
      <View style={{ marginBottom: 40, gap: 10 }}>
        <TextInput
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          style={{
            height: 50,
            fontSize: 20,
            borderRadius: 10,
            backgroundColor: "pink",
          }}
        />

        <TextInput
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          style={{
            height: 50,
            fontSize: 20,
            borderRadius: 10,
            backgroundColor: "pink",
          }}
        />
      </View>

      <Button mode="contained" onPress={onSignInPress}>
        <Text>Sign in</Text>
      </Button>
    </View>
  );
}
