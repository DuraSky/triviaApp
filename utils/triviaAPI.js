import axios from "axios";

const fetchTriviaAPI = async (
  amount = 10,
  category = "",
  difficulty = "",
  type = ""
) => {
  const baseUrl = "https://opentdb.com/api.php";
  const params = {
    amount,
    ...(category && { category }),
    ...(difficulty && { difficulty }),
    ...(type && { type }),
  };

  try {
    const response = await axios.get(baseUrl, { params });
    if (response.data.response_code === 0) {
      return response.data.results;
    } else {
      throw new Error("Failed to fetch trivia questions");
    }
  } catch (error) {
    console.error("Error fetching trivia questions:", error);
    throw error;
  }
};

export default fetchTriviaAPI;
