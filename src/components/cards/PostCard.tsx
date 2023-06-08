import { HTMLAttributes } from "react";
import DateFormatter from "../dateFormatter";
import { Items } from "../postPreview";
import Link from "next/link";
import { LinkButton } from "../buttons/linkButton";
import { Tag } from "../tag";

export function PostCard({ 
        post,
        height,
        width,
        ...props 
    }: { 
        post: Items,
        height?: number,
        width?: number
    } & HTMLAttributes<HTMLDivElement>) {
    let { className, ...internalProps } = props;
    let cardContainerClasses = `flex flex-col rounded-lg bg-zinc-800 justify-between`;
    cardContainerClasses += (` ${className}`)

    return (
        <div
            className={cardContainerClasses}
            style={{ height: height, width: width }}
            {...internalProps}
        >
            <div>
                <Tag className={"m-4"} tag={post.category} />
            </div>
            <div className="text-white mx-4">
                <h3 className="text-3xl font-bold pb-2">
                    {post.title}
                </h3>
                <p className="text-md">
                    {post.excerpt}
                </p>
            </div>
            <div className="flex justify-between items-center mx-4">
                <LinkButton className="my-3" href="/" label="Read more" />
                { 
                    <DateFormatter 
                        className="text-zinc-300"
                        dateString={post.date}
                    /> 
                }
            </div>
        </div>
    );
}
