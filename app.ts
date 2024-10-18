import { Hono } from "hono";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";

export const app = new Hono();

app.use("*", logger(), poweredBy());
app.get("/", (c) => {
  return c.text("Hello Deno!");
});
