export function Tag({
    tag,
    ...props
}: {
    tag: string | JSX.Element
} & React.HTMLAttributes<HTMLParagraphElement>) {
    let { className, ...rest } = props;
    let classes = className?.split(" ") || [];
    classes.push("inline-block py-px mb-4 p-2 text-xs font-semibold tracking-wider bg-blue-600 text-white uppercase rounded-full bg-teal-accent-400")

    return (
        <p className={classes.join(" ")}
            { ...rest }
        >
            {tag}
        </p>
    )
}