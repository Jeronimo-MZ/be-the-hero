import axios from "axios";
import Config from "react-native-config";

const api = axios.create({
    // baseUrl: process.env.REACT_APP_LOCAL_BASE_URL,
    // baseURL: "http://192.168.43.28:3333",
	baseURL: "https://backend-bth.herokuapp.com",
});

export default api;
