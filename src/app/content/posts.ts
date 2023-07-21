import { BlogPost } from '@/types/commonTypes';
import Post1 from '../content/posts/post-1.mdx';

export const posts: BlogPost[] = [
    {
        slug: "post1",
        title: "Why typescript are amazing",
        category: "Development",
        summary: "It's simply the best",
        coverImageUrl: "/blog/post1.jpg",
        date: "2022-11-14T05:35:07.322Z",
        content: Post1
    }
]