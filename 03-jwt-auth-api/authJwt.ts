import { Jose, makeJwt, Payload, setExpiration } from 'https://deno.land/x/djwt/create.ts';

import key from './key.ts';
import users, { User } from './users.ts';

const header: Jose = {
    alg: "HS256",
    typ: "JWT",
}

export interface AuthResult {
    payload: any,
}

const loginUser = (
    username: string, password: string
): AuthResult | any => {

    if (!username || !password) {
        return { payload: null };
    }

    var usr = users.filter((f: User) => f.username === username && f.password === password)[0];
    if (usr) {
        const payload: Payload = {
            iss: usr.username,
            exp: setExpiration(new Date().getTime() + 60000),
        }
        const jwt = makeJwt({ key, header, payload });
        if (jwt) {
            const p = {
                id: usr.id,
                username: usr.username,
                expiration: payload.exp,
                jwt,
            }
            return { payload: p }
        }
        else {
            return null;
        }

    }
    else {
        return { payload: null };
    }
};


export { loginUser };