import axios from "axios";
const instance = axios.create({
  baseURL: "https://react-my-burger-cfc37.firebaseio.com/",
});

export default instance;
