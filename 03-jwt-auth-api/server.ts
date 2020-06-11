import "https://deno.land/x/dotenv/load.ts";
import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { login, auth, guest } from './routers.ts'
import authMiddleware from './authMiddleware.ts';

const router = new Router();

router.get("/", (ctx) => {
    ctx.response.body = "Hello Deno!!!";
});

router
    .post('/login', login)
    .get('/guest', guest)
    .get('/auth', authMiddleware, auth) // Registering authMiddleware for /auth endpoint only
    ;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = Deno.env.get('PORT');

console.log(`Started on port: ${PORT}`);
await app.listen(`localhost:${PORT}`);