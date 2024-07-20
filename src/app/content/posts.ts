import { BlogPost } from '@/types/commonTypes';
import EF_Post1 from '../content/posts/part1-setting-up-the-database.mdx';
import EF_Post2 from '../content/posts/part2-basic-querying.mdx';

export const posts: BlogPost[] = [
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