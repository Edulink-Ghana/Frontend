import axios from "axios";


const baseurl = import.meta.env.VITE_BASE_URL
export const apiClient = axios.create({
    baseURL: 'https://my-study-aid-api.onrender.com/', 
});

const token = localStorage.getItem("accessToken")

if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}