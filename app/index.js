import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native";

import fetchCategories from "../utils/fetchCategories";
import fetchTriviaAPI from "../utils/triviaAPI";

import styles from "./styles/styles";

import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "expo-router";

const helperFunction = async (
  amount,
  difficulty,
  category,
  type,
  navigation
) => {
  console.log("url build", amount, difficulty, category, type);

  try {
    const questions = await fetchTriviaAPI(amount, difficulty, category, type);

    navigation.navigate("Questions", { questions });
  } catch (error) {
    console.error("Failed to fetch trivia:", error);
  }
};

export default function Home() {
  const navigation = useNavigation();
  const [amountOpen, setAmountOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [difficultyOpen, setDifficultyOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState(null);
  const [difficulty, setDifficulty] = useState(null);
  const [type, setType] = useState(null);

  const [items, setItems] = useState([
    { label: "10 Questions", value: "10" },
    { label: "20 Questions", value: "20" },
    { label: "30 Questions", value: "30" },
  ]);

  const [difficulties, setDifficulties] = useState([
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Hard", value: "hard" },
  ]);

  const [types, setTypes] = useState([
    { label: "Any", value: "" },
    { label: "Multiple Choice", value: "multiple" },
    { label: "True/False", value: "boolean" },
  ]);

  const [categoryItems, setCategoryItems] = useState([]);

  // Fetch categories on mount
  useEffect(() => {
    const loadCategories = async () => {
      const rawCategories = await fetchCategories();
      const formatted = rawCategories.map((cat) => ({
        label: cat.name,
        value: String(cat.id),
      }));
      setCategoryItems(formatted);
    };

    loadCategories();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <View style={{ zIndex: 4000, marginBottom: 20 }}>
        <DropDownPicker
          open={amountOpen}
          value={amount}
          items={items}
          setOpen={setAmountOpen}
          setValue={setAmount}
          setItems={setItems}
          placeholder="Select number of questions"
          style={styles.dropdown}
          dropDownContainerStyle={{}}
        />
      </View>

      <View style={{ zIndex: 3000, marginBottom: 20 }}>
        <DropDownPicker
          open={categoryOpen}
          value={category}
          items={categoryItems}
          setOpen={setCategoryOpen}
          setValue={setCategory}
          setItems={setCategoryItems}
          placeholder="Select a category"
          style={styles.dropdown}
        />
      </View>

      <View style={{ zIndex: 2000, marginBottom: 20 }}>
        <DropDownPicker
          open={difficultyOpen}
          value={difficulty}
          items={difficulties}
          setOpen={setDifficultyOpen}
          setValue={setDifficulty}
          setItems={setDifficulties}
          placeholder="Select number of questions"
          style={styles.dropdown}
        />
      </View>

      <View style={{ zIndex: 1000, marginBottom: 20 }}>
        <DropDownPicker
          open={typeOpen}
          value={type}
          items={types}
          setOpen={setTypeOpen}
          setValue={setType}
          setItems={setTypes}
          placeholder="Select type"
          style={styles.dropdown}
        />
      </View>
      <Button
        title="Pull Questions"
        onPress={() =>
          helperFunction(amount, category, difficulty, type, navigation)
        }
      ></Button>
    </View>
  );
}
