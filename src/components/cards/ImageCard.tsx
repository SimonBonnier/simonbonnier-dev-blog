import { HTMLAttributes } from "react";
import DateFormatter from "../dateFormatter";
import { LinkButton } from "../buttons/linkButton";
import { Tag } from "../tag";
import Image from "next/image";
import { splitClassesFromProps } from "@/logic/splitClassesFromProps";
import { BlogPost } from "@/types/commonTypes";

export function ImageCard({ 
        post,
        height,
        width,
        ...props 
    }: { 
        post: BlogPost,
        height?: number,
        width?: number
    } & HTMLAttributes<HTMLDivElement>) {
    let { classes, ...rest } = splitClassesFromProps(props, "flex flex-col rounded-lg bg-zinc-800 justify-between rounded-2xl");

    return (
        <div
            className={classes.join(" ")}
            style={{ height: height, width: width }}
            {...rest}
        >
            <div>
                <Tag 
                    className={"m-4 absolute"} 
                    tag={post.category} />
                {
                    post.coverImageUrl && (
                        <Image
                            className={"object-cover rounded-2xl rounded-b-none"}
                            src={post.coverImageUrl}
                            width={width}
                            height={((height || 0) / 3)}
                            alt=""
                        />
                    )    
                }
            </div>
            <div className="text-white mx-4">
                <h3 className="text-3xl font-bold pb-2">
                    {post.title}
                </h3>
                <p className="text-md">
                    {post.summary}
                </p>
            </div>
            <div className="flex justify-between items-center mx-4">
                <LinkButton className="my-3" href={`/blog/posts/${post.slug}`} label="Read more" />
                { 
                    <DateFormatter className="text-zinc-300"
                        dateString={post.date} 
                    /> 
                }
            </div>
        </div>
    );
}
