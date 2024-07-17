import { BlogPost } from '@/types/commonTypes';
import Post1 from '../content/posts/post-1.mdx';
import EF_Post1 from '../content/posts/part1-setting-up-the-database.mdx';
import EF_Post2 from '../content/posts/part2-basic-querying.mdx';

export const posts: BlogPost[] = [
    {
        slug: "post1",
        title: "Why typescript are amazing",
        category: "Development",
        summary: "It's simply the best",
        coverImageUrl: "/blog/post1.jpg",
        date: "2022-11-14T05:35:07.322Z",
        content: Post1
    },
    {
        slug: "EFTutorialPart1",
        title: "Setting up a development database",
        category: "Development",
        summary: "Setting up a postgres db in 5min using docker",
        coverImageUrl: "/blog/post1.jpg",
        date: "2024-02-05T00:00:00.000Z",
        content: EF_Post1
    },
    {
        slug: "EFTutorialPart2",
        title: "Demysityfy Entity framework queries",
        category: "Development",
        summary: "The only articel you need to understand Entity framework",
        coverImageUrl: "/blog/post1.jpg",
        date: "2024-02-05T00:00:00.000Z",
        content: EF_Post2
    }
]