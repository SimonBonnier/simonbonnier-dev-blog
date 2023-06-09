import Link from "next/link";

export function IconLink({ href, children }: { href: string, children: string }) {
    return (
        <Link href={href}>
            {
                children
            }
        </Link>
    )
}