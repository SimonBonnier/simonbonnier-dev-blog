import Link from "next/link";
import { splitClassesFromProps } from "@/logic/splitClassesFromProps";

export function LinkButton({
    href,
    label,
    ...props
}: {
    href: string,
    label: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    let { classes, ...spreadedProps } = 
        splitClassesFromProps(props,
                "inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700 p-2 border-2 border-blue-500 hover:border-blue-600 rounded-md"
            );

    return (
        <Link
            href={href}
            aria-label=""
            className={classes.join(" ")}
            {...spreadedProps}
        >
             {label}
        </Link>
    )
}