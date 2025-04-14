import axios from "axios";

const fetchTriviaAPI = async (
  amount = "",
  category = "",
  difficulty = "",
  type = ""
) => {
  const baseUrl = "https://opentdb.com/api.php";

  console.log("getting this", amount, category, difficulty, type);

  const urlBuild = () => {
    let url = baseUrl + "?amount=" + amount;

    if (category) {
      url += "&category=" + category;
    }
    if (difficulty) {
      url += "&difficulty=" + difficulty;
    }
    if (type) {
      url += "&type=" + type;
    }
    return url;
  };

  try {
    const response = await axios.get(urlBuild());
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
