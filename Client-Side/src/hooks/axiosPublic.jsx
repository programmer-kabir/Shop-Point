import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "",
  headers: { "X-Requested-With": "XMLHttpRequest" },
  withCredentials: true,
});

export const multipartConfig = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
