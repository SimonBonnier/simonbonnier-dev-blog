import DateFormatter from "./dateFormatter";
import Image from "next/image";
import Link from "next/link";
import { FlexContainer } from "./flexContainer";
import { Post } from "@/types/commonTypes";

export default function PostCard({ post }: { post: Post }) {
    return (
        <FlexContainer direction="col">
            <Image
                alt={`cover image for ${post.title}`}
                src={post.coverImage}
                width={400}
                height={400}
                style={{ maxHeight: 600 }}
            />

            <div className="flex mt-2">
                <div className="mb-2">
                    <p className="mb-2">
                        {post.category} -{" "}
                        {<DateFormatter dateString={post.date} />}
                    </p>
                    <p className="font-semibold text-2xl mb-2 group-hover:underline">
                        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </p>
                    <p>{post.excerpt}</p>
                </div>
            </div>
        </FlexContainer>
    );
}
