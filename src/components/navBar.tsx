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
              <NavLink href="https://github.com/garrett-huggins/next13-blog-starter">
                Github
              </NavLink>
            </li>
          </ul>
          <a href="www.github.com" className="text-xl font-bold">GitHub</a>
        </nav>
      </div>
    );
  }