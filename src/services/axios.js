import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3500",
    allowCredentials: true,
})

export default axiosInstance;