export function splitClassesFromProps<T>(props: React.HTMLAttributes<T>, defaultClasses?: string) {
    let { className, ...rest } = props;
    let classes = className?.split(" ") || [];
    if(defaultClasses) {
        classes.push(defaultClasses)
    }
    return { classes, ...rest }
}