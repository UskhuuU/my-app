import { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { Card } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=whitep4nth3r`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  return (
    <ScrollView>
      <View style={{ flex: 1, gap: 10 }}>
        {articles.map((article) => {
          return (
            <Card
              key={article.id}
              onPress={() =>
                navigation.navigate("Details", {
                  id: article.id,
                })
              }
            >
              <Card.Title title={article.title} />
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
}
