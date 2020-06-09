import "https://deno.land/x/dotenv/load.ts";

const PORT = Deno.env.get("PORT") || 3333;

export {
  PORT,
};
