import { apiClient } from '@api-client';
import type { Users } from '@interfaces/users/users.interface';
const getUsers = () => {
    const url = '/users';
    return apiClient.get<Users[]>(url);
}

export const UsersService = {
    getUsers
}