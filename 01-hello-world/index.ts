import { serve } from "https://deno.land/std@0.55.0/http/server.ts";
const s = serve({ port: 8000 });
console.log('Welcome to Deno 🦕')
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "\nHello World.\n" });
}