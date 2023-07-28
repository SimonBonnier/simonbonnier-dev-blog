import Link from "next/link";
import { NavLink } from "./navLink";

export default function Navbar() {
    return (
      <div>
        <nav className="container mb-6 pt-6 px-6 m-auto w-4/5 flex justify-between">
          <Link href={"/"}
            className="text-xl font-bold">
            Simon Bonnier
          </Link>
          <ul className="flex space-x-6 text-lg">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink href="https://github.com/SimonBonnier/">
                Github
              </NavLink>
            </li>
          </ul>
          <Link className="text-xl font-bold" href={'https://github.com/SimonBonnier/'}>GitHub</Link>
        </nav>
      </div>
    );
  }