export type NavLink = {
  text: string,
  route: string,
};

export interface Post extends PostFrontmatter {
  collection: string;
  id: string;
  excerpt?: string;
};

export interface PostFrontmatter {
  title: string;
  desc: string;
  date?: string;
  tags: string[];
  banner?: {
    url: string;
    pos?: string;
  };
  blurhash_of_src?: Record<string, string>;
};

export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  location: string;
  time: string;
};