export function FlexContainer({ 
    children,
    direction = "row",
    justifyContent,
    alignItems,
    gap,
    gapX,
    gapY,
    ...props 
}: {
    children: JSX.Element | JSX.Element[],
    direction?: "row" | "col",
    justifyContent?: JustifyContent,
    alignItems?: AlignItems,
    gap?: number,
    gapX?: number,
    gapY?: number,
} & React.HTMLAttributes<HTMLDivElement>) {

    let { className } = props;
    let defaultClassName = "flex";
    if(direction === "col") {
        defaultClassName = appendClass("flex-col", defaultClassName)
    } else if (direction === "row") {
        defaultClassName = appendClass("flex-row", defaultClassName)
    }
    defaultClassName = appendClass(getJustifyContentClass(justifyContent), defaultClassName)
    defaultClassName = appendClass(getAlignItemClass(alignItems), defaultClassName)
    defaultClassName = gap ? appendClass(`gap-${gap}`, defaultClassName) : defaultClassName;
    defaultClassName = gapX ? appendClass(`gap-x-${gapX}`, defaultClassName) : defaultClassName;
    defaultClassName = gapY ? appendClass(`gap-y-${gapY}`, defaultClassName) : defaultClassName;

    function appendClass(defaultClassName: string, classToAdd: string): string {
        defaultClassName += ` ${classToAdd}`;
        return defaultClassName;
    }    

    function getJustifyContentClass(type?: JustifyContent) {
        if(!type) {
            return "";
        }
        return `justify-${type}`;
    }

    function getAlignItemClass(type?: AlignItems) {
        if(!type) {
            return "";
        }
        return `items-${type}`;
    }

    return (
        <section className={`${(className || "")} ${defaultClassName}`}>
            {children}
        </section>
    )
}

type JustifyContent = "normal" |
                    "start" |
                    "end" |
                    "center" |
                    "between" |
                    "around" |
                    "evenly" |
                    "stretch";

type AlignItems = "start" |
                "end" |
                "center" |
                "baseline" |
                "stretch";