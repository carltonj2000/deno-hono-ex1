import { Hono } from "hono";
import { assertEquals } from "@std/assert";

import { app } from "./app.ts";

Deno.test("Hello World", async () => {
  app.get("/", (c) => c.text("Please test me"));

  const res = await app.request("http://localhost:8000/");
  assertEquals(res.status, 200);
});
