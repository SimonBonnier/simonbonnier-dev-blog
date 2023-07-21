// lib/api.ts

import { posts } from '../app/content/posts';

export const getPostSlugs = () => posts.map(x => x.slug);

export function getPostBySlug(slug: string) {
  const post = posts.find(x => x.slug === slug);
  if(post == null) {
    throw new Error("No post with that slug");
  }
  return post;
}

export function getAllPosts(fields: string[] = []) {
  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}