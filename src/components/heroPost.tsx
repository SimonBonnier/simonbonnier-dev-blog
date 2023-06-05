import Image from "next/image";
import { Items } from "./postPreview";
import Link from "next/link";
import DateFormatter from "./dateFormatter";

export function HeroPost({ post }: { post: Items }) {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
            <div className="relative flex flex-col items-start w-full max-w-xl lg:max-w-screen-xl bg-zinc-900">
                <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
                    <p className="inline-block py-px mb-4 p-2 text-xs font-semibold tracking-wider bg-blue-600 text-white uppercase rounded-full bg-teal-accent-400">
                        {post.category}
                    </p>
                    <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                        {post.title}
                    </h2>
                    <p className="pr-5 mb-5 text-base text-white md:text-xl">
                        {post.excerpt}
                    </p>
                    <p className="mb-5">
                        {<DateFormatter dateString={post.date} />}
                    </p>
                    <div className="flex items-center">
                        <Link
                            href="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-white transition-colors duration-200 hover:text-deep-purple-accent-700 p-2 border-2 border-blue-500 rounded-md"
                        >
                            Read more
                        </Link>
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
                    className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                    src="/heroImage.jpg"
                    fill={true}
                    alt=""
                />
            </div>
        </div>
    );
}
