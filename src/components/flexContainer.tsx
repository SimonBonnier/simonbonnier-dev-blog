export function FlexContainer({ 
    children,
    direction = "row",
    useDefaultClasses = true, 
    ...props 
}: {
    children: JSX.Element | JSX.Element[],
    direction?: "row" | "col", 
    useDefaultClasses?: boolean 
} & React.HTMLAttributes<HTMLDivElement>) {

    let { className } = props;
    let defaultClassName = useDefaultClasses ? `flex ${direction === "col" ? "flex-col" : "flex-row"}` : "";
    return (
        <section className={`${(className || "")} ${defaultClassName}`}>
            {children}
        </section>
    )
}