import markdownStyles from "./markdownStyles.module.css";
import { posts } from "../../../content/posts";

export default async function Post({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const post = posts.find((x) => x.slug === slug);
    if (post == null) {
        return <></>;
    }

    return (
        <div className="container">
            <main className="mb-20 bg-white text-black rounded-lg p-6 max-w-5xl mx-auto">
                <h1 className="text-4xl">{post.title}</h1>
                <div className={markdownStyles["markdown"]}>
                    {post.content({})}
                </div>
            </main>
        </div>
    );
}

export async function generateStaticParams() {
    const paths = posts.map((x) => {
        return {
            slug: x.slug,
        };
    });
    return paths;
}
