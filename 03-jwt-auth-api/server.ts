import 'https://deno.land/x/dotenv/load.ts';

import { Application } from 'https://deno.land/x/oak/mod.ts';

import router from './routers.ts';


const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = Deno.env.get('PORT');

console.log(`Started on port: ${PORT}`);
await app.listen(`localhost:${PORT}`);