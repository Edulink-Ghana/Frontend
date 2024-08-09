import { apiClient } from "./config";

export const apiSignUp = async(payload) => {
    return apiClient.post("/register" , payload);
};

export const apiLogin = async(payload) => {
    return apiClient.post("/token/login" , payload)

};

export const apiCheckUserNameExists = async(_userName) => {
    return apiClient.get(`/auth/${_userName}`);
};