import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export const api = () => {
  return axios.create({
    baseURL: "https://refu-stories-backend.herokuapp.com/api",
    headers: {
      Authorization: getToken()
    }
  });
};
