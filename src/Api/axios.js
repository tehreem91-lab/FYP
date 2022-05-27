import axios from "axios";

export const auth = axios.create({
  baseURL: "https://updated-innovative-server.herokuapp.com/api/user",
});
