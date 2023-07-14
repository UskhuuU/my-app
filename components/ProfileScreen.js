import { View, Text, ScrollView, Alert } from "react-native";
import { useClerk, useUser } from "@clerk/clerk-expo";
import { Card, Button } from "react-native-paper";
import { Image } from "expo-image";
import EditProfileScreen from "./EditProfileScreen";

export default function ProfileScreen() {
  const { signOut } = useClerk;
  const { user } = useUser;
  console.log(JSON.stringify(user, null, 4));
  function HandleSignOut() {
    Alert.alert("Гарах уу?", null, [
      { text: "Үгүй", style: "cancel" },
      { text: "Гарах", onPress: () => signOut() },
    ]);
  }
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ gap: 30 }}>
          <Card
            style={{
              backgroundColor: "#1401DC",
              height: 120,
            }}
          >
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Image
                style={{
                  width: 80,
                  backgroundColor: "black",
                  height: 80,
                  borderRadius: 50,
                  marginVertical: 20,
                  marginLeft: 20,
                }}
                source="https://picsum.photos/seed/696/3000/2000"
              />
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20, marginTop: 35, color: "white" }}>
                    Uskhuu
                  </Text>
                  <Text style={{ fontSize: 10, marginTop: 5, color: "white" }}>
                    uskhuubatsuuri@gmail.com
                  </Text>
                </View>
              </View>
            </View>
          </Card>
          <View>
            <Card>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View>
                  <Button onPress={() => navigation.push(EditProfileScreen)}>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 20,
                        color: "black",
                        marginLeft: -15,
                      }}
                    >
                      My account
                    </Text>
                  </Button>
                  <Text
                    style={{
                      fontSize: 10,
                      marginLeft: 10,
                      marginVertical: 5,
                      color: "gray",
                      marginTop: -5,
                    }}
                  >
                    Make changes to your account
                  </Text>
                </View>
              </View>
              {/* <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Saved Beneficiary
                  </Text>
                  <Text
                    style={{ fontSize: 10, marginVertical: 5, color: "gray" }}
                  >
                    Manage your saved account
                  </Text>
                </View>
              </View> */}
              {/* <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Face ID / Touch ID
                  </Text>
                  <Text
                    style={{ fontSize: 10, marginVertical: 5, color: "gray" }}
                  >
                    Manage your device security
                  </Text>
                </View>
              </View> */}
              {/* <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Two-Factor Authentication
                  </Text>
                  <Text
                    style={{ fontSize: 10, marginVertical: 5, color: "gray" }}
                  >
                    Further secure your account for safety
                  </Text>
                </View>
              </View> */}
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View>
                  <Text>
                    <Button onPress={HandleSignOut}>
                      <Text
                        style={{ fontSize: 20, marginTop: 20, color: "black" }}
                      >
                        Log Out
                      </Text>
                    </Button>
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      marginVertical: 5,
                      color: "gray",
                      marginLeft: 10,
                      marginTop: -5,
                    }}
                  >
                    Further secure your account for safety
                  </Text>
                </View>
              </View>
            </Card>
          </View>
          <Text style={{ fontSize: 20 }}>More</Text>
          <View>
            <Card>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 20, marginVertical: 10 }}>
                  Help & support
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 10,
                }}
              >
                <Text style={{ fontSize: 20, marginVertical: 10 }}>
                  About App
                </Text>
              </View>
            </Card>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
