import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "4e5fed96269c4657abf336c4b7d9f7ef" },
});
