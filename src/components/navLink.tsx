import Link from "next/link";

type NavLink = {
    href: string;
    children: React.ReactNode;
  };
  
export const NavLink = ({ href, children }: NavLink) => {
    return (
      <Link className="hover:text-gray-300 hover:underline" href={href}>
        {children}
      </Link>
    );
  };