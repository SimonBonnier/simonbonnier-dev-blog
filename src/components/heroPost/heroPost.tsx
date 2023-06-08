import Image from "next/image";
import { Items } from "../postPreview";
import DateFormatter from "../dateFormatter";
import { LinkButton } from "../buttons/linkButton";
import { Tag } from "../tag";

export function HeroPost({ post }: { post: Items }) {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="relative flex flex-col items-start w-full max-w-xl lg:max-w-screen-xl bg-zinc-900">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <Tag tag={post.category} /> 
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                        {post.title}
                    </h2>
                    <p className="pr-5 mb-5 text-base text-white md:text-xl">
                        {post.excerpt}
                    </p>
                    <p className="mb-5">
                        { <DateFormatter className="text-zinc-300" dateString={post.date} /> }
                    </p>
                    <div className="flex items-center">
                        <LinkButton href="/" label="Read more" />
                    </div>
                </div>
            </div>
            <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
                <svg
                    className="absolute left-0 hidden h-full text-zinc-900 transform -translate-x-1/2 lg:block z-10"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    preserveAspectRatio="none slice"
                >
                    <path d="M50 0H100L50 100H0L50 0Z" />
                </svg>
                <Image
                    className={"object-cover rounded-2xl rounded-bl-none"}
                    src="/hero-image-2.jpg"
                    fill={true}
                    alt=""
                />
            </div>
        </div>
    );
}
