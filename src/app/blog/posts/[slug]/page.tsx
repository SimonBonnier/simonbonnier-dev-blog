import markdownStyles from "./markdownStyles.module.css";
import { posts } from '../../../content/posts';

export default async function Post({ params }: { params: { slug: string } }) {

  const slug = params.slug;
  const post = posts.find(x => x.slug === slug);
  if(post == null) {
    return <></>
  }

  return (
    <div className="container">
      <main className="mb-20">
        <div className="w-full text-white">
          <h1 className="text-4xl">{post.title}</h1>
          <div className={markdownStyles["markdown"]}>
            {
              post.content({})
            }
          </div>
        </div>
      </main>
    </div>
  );
}