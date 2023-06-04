import { HTMLAttributes } from "react";
import DateFormatter from "./dateFormatter";
import { Items } from "./postPreview";
import Link from "next/link";

type TailwindWidth = {
    w: string,
    sm?: string,
    md?: string,
    lg?: string
}

type TailwindHeight = {
    h: string,
    sm?: string,
    md?: string,
    lg?: string
}

export function ImageCard({ 
        post,
        ...props 
    }: { 
        post: Items,
    } & HTMLAttributes<HTMLDivElement>) {
    let { className, ...internalProps } = props;
    let cardContainerClasses = `flex flex-col justify-between bg-white bg-center text-gray-800 shadow-md overflow-hidden`;
    cardContainerClasses += (` ${className}`)

    return (
        <div
            className={cardContainerClasses}
            style={{ backgroundImage: 'url(https://placeimg.com/1000/1000/any)'}}
            {...internalProps}
        >
            <div className="flex justify-between items-center mx-4">
                <div className="bg-blue-500 mt-1 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">
                    {post.category}
                </div>
                <div className="bg-blue-500 mt-1 w-55 shadow flex flex-col-reverse px-2 py-1 text-xs rounded text-center font-bold text-white">
                    {<DateFormatter dateString={post.date} />}
                </div>
            </div>
            <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8">
                <h3 className="text-xl font-bold pb-2">
                    {post.title}
                </h3>
                <p className="text-gray-500 text-sm">
                    {post.excerpt} <Link className="font-bold cursor-pointer" href={`/posts/${post.slug}`}>Read more</Link>
                </p>
            </div>
        </div>
    );
}
