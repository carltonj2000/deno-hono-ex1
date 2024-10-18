import { html } from "hono/html";

type Props = {
  title: string;
  // deno-lint-ignore no-explicit-any
  children?: any;
};

const Layout = (props: Props) => html`<!DOCTYPE html>
  <html>
    <head>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <title>${props.title}</title>
    </head>
    <body>
      ${props.children}
    </body>
  </html>`;

export default Layout;
