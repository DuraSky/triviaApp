import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screens
import DifficultyScreen from "./screens/DifficultyScreen";
// import CategoryScreen from './screens/CategoryScreen';
// import TriviaScreen from './screens/TriviaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Difficulty">
        <Stack.Screen name="Difficulty" component={DifficultyScreen} />
        {/* <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Trivia" component={TriviaScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
