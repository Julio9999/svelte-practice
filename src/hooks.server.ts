import { redirect, type Handle } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';

export const handle: Handle = async ({ event, resolve }) => {
    const access_token = event.cookies.get('access_token');
    const pathName = event.url.pathname;

    let user = null;

    if (access_token) {
        user = jwt.decode(access_token);

        if (!user) {
            console.error('Token inválido o corrupto');
            throw redirect(307, '/error');
        }


        if (pathName === '/login') {
            throw redirect(307, '/');
        }
    } else {
        if (pathName !== '/login') {
            throw redirect(307, '/login');
        }
    }

	event.locals.user = user;
    return resolve(event);
};
