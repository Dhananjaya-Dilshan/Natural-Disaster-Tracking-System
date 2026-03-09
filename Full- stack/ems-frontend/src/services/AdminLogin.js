import axios from "axios";



const REST_API_BASE_URL = "http://localhost:8080/api/admin/login"; 

export const adminLogin = (username, password) => axios.post(`${REST_API_BASE_URL}/login`, { username, password });



