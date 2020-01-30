import * as React from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/donate-with-checkout">
          <a>Donate with Checkout</a>
        </Link>{" "}
        |{" "}
        <Link href="/donate-with-elements">
          <a>Donate with Elements</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>
        This is a{" "}
        <Link href="https://github.com/stripe-samples">
          <a target="_blank">Stripe Sample</a>
        </Link>
        .{" "}
        <Link href="https://github.com/stripe-samples/nextjs-typescript-react-stripe-js">
          <a target="_blank">View code on GitHub</a>
        </Link>
        .
      </span>
    </footer>
  </div>
);

export default Layout;
