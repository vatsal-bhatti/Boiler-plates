import axios from "axios";

export const API = axios.create({
  baseURL: "url",
  timeout: 10000,
});

// example to write the axios functions

// export const getProducts = async () => {
//     try {
//       const res = await API.get("products");
//       return {
//         success: true,
//         data: res.data,
//         error: null,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         data: [],
//         error: error.message,
//       };
//     }
//   };
