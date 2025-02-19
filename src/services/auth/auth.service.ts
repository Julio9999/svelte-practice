import { apiClient } from "@api-client";
import type { CheckSession } from "@interfaces/auth/auth.interface";

interface LoginParams {
    email: string;
    password: string;
}

const login = ({email, password}: LoginParams) => {
    const url = '/auth/login';
    return apiClient.post(url, {email, password});
}

const checkSession = () => {
    const url = '/auth/checkSession';
    return apiClient.get<CheckSession>(url)
}

export const AuthService = {
    login,
    checkSession
}