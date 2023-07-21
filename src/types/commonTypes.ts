import { MDXProps } from "mdx/types";

export interface BlogPost {
    slug: string,
    title: string,
    category: string,
    summary: string,
    coverImageUrl?: string,
    content: (props: MDXProps) => JSX.Element,    
    date: string,
}