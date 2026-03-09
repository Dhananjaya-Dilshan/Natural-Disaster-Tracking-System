import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/api/Disaster";


export const listDesasaters = () => axios.get(REST_API_BASE_URL);

export const CreateDesasater = (Desasater) => axios.post(REST_API_BASE_URL,Desasater);

export const getDesasater = (DisasterId) => axios.get(REST_API_BASE_URL + '/' + DisasterId);

export const updateDesasater = (DisasterId,Desasater) => axios.put(REST_API_BASE_URL + '/' + DisasterId,Desasater);

export const deleteDesasater = (DisasterId) => axios.delete(REST_API_BASE_URL + '/' + DisasterId);