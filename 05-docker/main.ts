import { serve } from "./deps.ts";

const PORT = 6667;
const s = serve(`0.0.0.0:${PORT}`);

console.log(`Server started on port ${PORT}`);
for await (const req of s) {
    req.respond({ body: "\nHello Beautiful World!!!\n\n\n" });
}