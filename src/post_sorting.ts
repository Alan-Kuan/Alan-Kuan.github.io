import type { CollectionEntry, CollectionKey } from 'astro:content';

type AstroPost = CollectionEntry<CollectionKey>;

export function byDate(a: AstroPost, b: AstroPost): number {
  if (a.collection === 'articles' && b.collection === 'articles') {
    return Date.parse(b.data.date) - Date.parse(a.data.date);
  }
  return 0;
}