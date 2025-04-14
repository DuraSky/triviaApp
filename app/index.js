import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-web";
import fetchTriviaAPI from "../utils/triviaAPI";
import fetchCategories from "../utils/fetchCategoriesj";

import DropDownPicker from "react-native-dropdown-picker";

const helperFunction = () => {
  let questions = fetchTriviaAPI("20", "12", "hard", "");
  console.log(questions);
};

export default function Home() {
  const [amountOpen, setAmountOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const [amount, setAmount] = useState(null);
  const [category, setCategory] = useState(null);

  const [items, setItems] = useState([
    { label: "10 Questions", value: "10" },
    { label: "20 Questions", value: "20" },
    { label: "30 Questions", value: "30" },
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
    <View>
      <DropDownPicker
        open={amountOpen}
        value={amount}
        items={items}
        setOpen={setAmountOpen}
        setValue={setAmount}
        setItems={setItems}
        placeholder="Select number of questions"
      />

      <DropDownPicker
        open={categoryOpen}
        value={category}
        items={categoryItems}
        setOpen={setCategoryOpen}
        setValue={setCategory}
        setItems={setCategoryItems}
        placeholder="Select a category"
      />
      {/* <Button title="Otazky" onPress={helperFunction}>
        Pull questions
      </Button> */}
    </View>
  );
}
