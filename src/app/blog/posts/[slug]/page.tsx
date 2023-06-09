import { getPostBySlug } from "../../../../lib/api";
import markdownToHtml from "../../../../lib/markdownConverter";
import markdownStyles from "./markdownStyles.module.css";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ["title", "author", "content"]);

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="container">
      <main className="mb-20">
        <div className="w-full text-white">
          <h1 className="text-4xl">{post.title}</h1>
          <p className="text-2xl text-neutral-300">{post.author}</p>
          <div
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  );
}