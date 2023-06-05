import { HTMLAttributes } from "react"

type GridBreakPoints = {
    rows?: string,
    cols?: string,
}

type GridContainerProps = {
    children: JSX.Element | JSX.Element[],
    rows?: number,
    cols?: number,
    gap?: number,
    sm?: GridBreakPoints
    md?: GridBreakPoints
    lg?: GridBreakPoints
    xl?: GridBreakPoints
}

export function GridContainer({ 
    children, 
    rows, 
    cols,
    gap,
    sm,
    md,
    lg,
    xl,
    ...props }: GridContainerProps & HTMLAttributes<HTMLDivElement>) {
    
    let { className, ...internalProps } = props;
    let defaultClassName = "grid";
    if(rows) {
        defaultClassName = appendClass(defaultClassName, `grid-rows-${rows}`)
    }
    if(cols) {
        defaultClassName = appendClass(defaultClassName, `grid-cols-${cols}`)
    }
    defaultClassName = appendBreakPointClasses(defaultClassName, "sm", sm)
    defaultClassName = appendClass(defaultClassName, className || "")
    defaultClassName = appendClass(defaultClassName, gap ? `gap-${gap}` : "")

    function appendClass(defaultClassName: string, classToAdd: string): string {
        defaultClassName += ` ${classToAdd}`;
        return defaultClassName;
    }

    function appendBreakPointClasses(defaultClassName: string, 
                                     breakPoint: "sm" | "md" | "lg | xl", 
                                     breakPointValue: GridBreakPoints | undefined): string {
        if(breakPointValue?.cols) {
            defaultClassName = appendClass(defaultClassName, `${breakPoint}:grid-cols-${breakPointValue.cols}`)
        }
        if (breakPointValue?.rows) {
            defaultClassName = appendClass(defaultClassName, `${breakPoint}:grid-rows-${breakPointValue.rows}`)
        }
        return defaultClassName;
    }

    return (
        <div className={defaultClassName + ` ${className}`} {...internalProps}>
            { children }
        </div>
    )
}

export function GridItem({
    children,
    colSpan,
    rowSpan,
    ...props
}: {
    colSpan?: number,
    rowSpan?: number
} & HTMLAttributes<HTMLElement>) {

    let { className, ...internalProps } = props;
    let defaultClassName = (className || "");    

    if(colSpan) {
        defaultClassName = appendClass(`col-span-${colSpan}`, defaultClassName);
    }
    if(rowSpan) {
        defaultClassName = appendClass(`row-span-${rowSpan}`, defaultClassName);
    }

    function appendClass(defaultClassName: string, classToAdd: string): string {
        defaultClassName += ` ${classToAdd}`;
        return defaultClassName;
    }

    return (
        <div className={defaultClassName}>
            {children}
        </div>
    )
}