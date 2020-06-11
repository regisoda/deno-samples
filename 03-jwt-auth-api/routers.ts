import { Context, Router } from 'https://deno.land/x/oak/mod.ts';

import { loginUser } from './authJwt.ts';
import authMiddleware from './authMiddleware.ts';

const router = new Router();

const login = async (ctx: Context) => {
    const { value } = await ctx.request.body();

    var r = loginUser(value.username, value.password);
    if (!r) {
        ctx.response.status = 500;
        ctx.response.body = {
            message: 'Internal server error'
        }
    }
    else if (r.payload) {
        ctx.response.status = 200;
        ctx.response.body = r.payload
    }
    else {
        ctx.response.status = 422;
        ctx.response.body = {
            message: 'Invalid username or password'
        };
    }
};

const guest = (ctx: Context) => {
    ctx.response.body = 'Guest success';
};

const auth = (ctx: Context) => {
    ctx.response.body = 'Auth success';
}

router.get("/", (ctx: Context) => {
    ctx.response.body = "JWT Auth API";
});

router
    .post('/login', login)
    .get('/guest', guest)
    .get('/auth', authMiddleware, auth)
    ;

export default router;