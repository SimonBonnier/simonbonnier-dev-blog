import { BlogPost } from '@/types/commonTypes';
import EF_Post1 from '../content/posts/part1-setting-up-the-database.mdx';
import EF_Post2 from '../content/posts/part2-basic-querying.mdx';
import { AuthorType } from '@/types/author';

export const posts: BlogPost[] = [
    {
        slug: "setting-up-a-development-database-using-docker",
        title: "Fast Track to Coding: Set Up Your Development Database in No Time",
        category: "Development",
        summary: "Setting up a postgres db in 5min using docker",
        coverImageUrl: "/blog/post1.jpg",
        date: "2024-02-05T00:00:00.000Z",
        content: EF_Post1
    },
    {
        slug: "demystify-ef-what-is-generated-and-when",
        title: "Demysityfy EF: What is really generated and when is it fetched?",
        category: "Development",
        summary: "The only article you need to understand Entity framework",
        coverImageUrl: "/blog/post1.jpg",
        date: "2024-02-05T00:00:00.000Z",
        content: EF_Post2
    }
]

export const authors: AuthorType[] = [
    {
        name: "Simon Bonnier",
        position: "Senior fullstack developer",
        description: "I'm  a senior fullstack software developer, with a primary focus on backend development using C# and .NET. ",
        image: "",
        github: "https://github.com/SimonBonnier",
        linkedin: "https://www.linkedin.com/in/simon-bonnier-3ab3a2175/",
        x: ""
    }
];