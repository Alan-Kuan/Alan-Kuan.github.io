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
  banner_url?: string;
};

export interface Publication {
  title: string;
  authors: string[];
  conference: string;
  location: string;
  time: string;
};