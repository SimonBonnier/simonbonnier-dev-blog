// lib/api.ts

import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "@/types/commonTypes";

const postsDirectory = join(process.cwd(), "src", "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const posts: Post = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      posts[field] = realSlug;
    }
    if (field === "content") {
      posts[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      posts[field] = data[field];
    }
  });

  return posts;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}