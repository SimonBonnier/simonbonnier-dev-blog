import { getAllPosts, getPostBySlug } from "../lib/api";
import { ImageCard } from "../components/ImageCard"
import { FlexContainer } from "@/components/flexContainer";
import { GridContainer, GridItem } from "@/components/gridContainer";
import { HeroPost } from "@/components/heroPost/heroPost";

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
                <FlexContainer 
                    direction="col"
                    className="rounded-lg">
                    <h1 className="text-4xl mb-3">Curious about web development?</h1>
                    <p className="text-5xl font-black mb-3">I <span className="text-blue-500">GOT</span> you !</p>
                    <p className="text-2xl leading-10 text-neutral-300">
                        Get tips about web development 
                        in <span className="font-bold">C#</span>, <span className="font-bold">React</span> and <span className="font-bold">TypeScript</span>. 
                        <br /> 
                        With focus on code <span className="font-bold">quality</span>, <span className="font-bold">performance</span> and <span className="font-bold">automation</span>.
                    </p>
                </FlexContainer>

                <GridContainer rows={2} cols={3} gap={4}>
                    <GridItem colSpan={3} rowSpan={1}>
                        <HeroPost post={heroPost} />
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={1}>
                        <div className="flex flex-col">
                            {recentPosts.map((post) => (
                                <div key={post.title}>
                                    <ImageCard 
                                        className="shadow-[inset_0_0_80px_10px_rgba(0,0,0,0.3)]"
                                        post={post} 
                                        height={400} 
                                        width={350} />
                                </div>
                            ))}
                        </div>
                    </GridItem>
                </GridContainer>
            </main>
        </div>
    );
}