import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "78350dbd3df445f8966e4e22bf14c723" },
});
