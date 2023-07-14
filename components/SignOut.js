import { Text, Alert } from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";

export default function SignOut() {
  const { signOut } = useClerk;
  const { user } = useUser;
  console.log(JSON.stringify(user, null, 4));
  function HandleSignOut() {
    Alert.alert("Гарах уу?", null, [
      { text: "Үгүй", style: "cancel" },
      { text: "Гарах", onPress: () => signOut() },
    ]);
  }
}
