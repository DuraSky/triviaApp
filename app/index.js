import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";
import fetchTriviaAPI from "../utils/triviaAPI";

const helperFunction = () => {
  let questions = fetchTriviaAPI(10, "", "", "");
  console.log(questions);
};

export default function Home() {
  return (
    <View>
      <Button title="Otazky" onPress={helperFunction}>
        Pull questions
      </Button>
    </View>
  );
}
