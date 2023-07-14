import { useWindowDimensions, Text, ScrollView } from "react-native";
import RenderHtml from "react-native-render-html";
import { useState, useEffect } from "react";
import { Button } from "react-native-paper";

export default function DetailScreen({ navigation, route }) {
  const { id } = route.params;
  const [article, setArcticle] = useState([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetch(`https://dev.to/api/articles/whitep4nth3r/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArcticle(data);
      });
  },[id]);

  return (
    <ScrollView>
      <Text style={{ fontSize: 30, fontWeight: 900 }}>{article.title}</Text>
      <Button
        icon="comment"
        mode="contained"
        onPress={() => navigation.navigate("Comments")}
      >
        {article.comments_count}
      </Button>
      <RenderHtml
        contentWidth={width}
        source={{
          __html: article.body_html,
        }}
      />
     
    </ScrollView>
  );
}
