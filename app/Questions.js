import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Questions() {
  const route = useRoute();
  const { questions } = route.params;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Questions</Text>
      {questions.map((q, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <Text>
            {index + 1}. {q.question}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
