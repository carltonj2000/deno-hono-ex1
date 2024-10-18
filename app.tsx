import { Hono } from "hono";
import { logger } from "hono/logger";
import { poweredBy } from "hono/powered-by";
import { serveStatic } from "hono/deno";

import Layout from "./layout.tsx";

const app = new Hono();

app.use("*", logger(), poweredBy());
app.all("/favicon.ico", serveStatic({ path: "./public/favicon.ico" }));

app.get("/", (c) => {
  return c.text("Hello Deno!");
});

app.get("/someHtml", (c) => {
  return c.html("<h1>hi</h1>");
});

app.get("/someHtmlViaJsx", (c) => {
  return c.html(
    <Layout title="hi">
      <h1>JSX generate HTML</h1>
    </Layout>
  );
});

export default app;

/*
 * Form commented blocks of code
    <Layout title="hi">
      <h1>JSX generate HTML</h1>
    </Layout>

*/
