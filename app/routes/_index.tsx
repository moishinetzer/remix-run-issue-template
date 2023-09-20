import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>TEMPLATE!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/other">See other page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
