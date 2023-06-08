import { GridContainer } from "@/components/gridContainer";
import { getAllPosts } from "../../lib/api";
import { ImageCard } from "@/components/cards/ImageCard";

export default function Blog() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "category"]);

  function getAlignmentClass(index: number) {
    let real = index + 1;
    if(real > 3) {
      real = index / 3;
    }
    if(real === 1) {
      return "justify-self-start";
    } else if(real === 2) {
      return "justify-self-center";
    } else {
      return "justify-self-end";
    }

  }
  return (
    <main>
      <h1 className="text-3xl mb-5 font-bold">
        All Posts
      </h1>
      <GridContainer cols={3} rows={2} className="gap-y-8 mb-8">
      {
        posts.map((post, i) => (
          <ImageCard
            key={i}
            className={getAlignmentClass(i)}
            post={post}
            height={500}
            width={400} />
        ))
      }
      </GridContainer>
    </main>
  );
}