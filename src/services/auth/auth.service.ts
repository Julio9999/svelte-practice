import { apiClient } from "@api-client";

interface LoginParams {
    email: string;
    password: string;
}

const login = ({email, password}: LoginParams) => {
    const url = '/auth/login';
    return apiClient.post(url, {email, password});
}

export const AuthService = {
    login
}