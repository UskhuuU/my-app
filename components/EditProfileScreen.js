import { View, Text, ScrollView } from "react-native";

import { Card, Button } from "react-native-paper";
import { Image } from "expo-image";

export default function ProfileScreen() {
  return (
    <ScrollView>
      <View style={{ marginHorizontal: 20, gap: 30 }}>
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
          </View>
        </Card>
        <View>
          <Card>
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
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}
