import { getAllPosts, getPostBySlug } from "../lib/api";
import PostCard from "../components/postPreview";
import Link from "next/link";
import { FlexContainer } from "@/components/flexContainer";
import { HTMLAttributes } from "react";
import { GridContainer } from "@/components/gridContainer";

export default function Home() {
    const posts = getAllPosts([
        "title",
        "category",
        "date",
        "excerpt",
        "coverImage",
        "slug",
    ]);
    const recentPosts = posts.slice(0, 1);

    const heroPost = getPostBySlug("hero-post", [
        "title",
        "category",
        "excerpt",
        "slug",
        "date",
        "coverImage",
      ]);

    return (
        <div className="container mx-auto px-5 w-4/5">
            <main className="flex gap-y-6 flex-col">
                <FlexContainer direction="col" className="w-1/2 rounded-lg gap-y-">
                    <h1 className="text-4xl mb-3">Curious about web development?</h1>
                    <p className="text-5xl font-black mb-3">I <span className="text-blue-500">got</span> you !</p>
                    <p className="text-2xl leading-10 text-neutral-300">
                        Get tips about web development 
                        in <span className="font-bold">C#</span>, <span className="font-bold">React</span> and <span className="font-bold">TypeScript</span>. 
                        <br /> 
                        With focus on code <span className="font-bold">quality</span>, <span className="font-bold">performance</span> and <span className="font-bold">automation</span>.
                    </p>
                </FlexContainer>

                <GridContainer cols={3} gap={4}>
                    <div>
                        <h2 className="text-bold text-3xl p-6 pb-0">New</h2>
                        <PostCard post={heroPost} />
                    </div>
                    <div>
                        <h3 className="text-3xl p-6 pb-0">Recent Posts</h3>
                        <div className="flex flex-col">
                            {recentPosts.map((post) => (
                                <div key={post.title}>
                                    <PostCard post={post} />
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </GridContainer>
            </main>
        </div>
    );
}