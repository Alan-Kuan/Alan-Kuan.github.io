export interface Link {
  url: string,
  title: string,
  icon: string,
};

export interface Profile {
  name: string,
  title: string,
  links: Link[],
  email_b64: string,
  intro: string,
};

export interface Post {
  collection: string,
  title: string,
  slug: string,
  tags: string[],
  date?: string,
  first_img?: string,
  first_paragraph?: string,
};

export interface ConfPub {
  title: string,
  authors: string[],
  conference: string,
  location: string,
  time: string,
};

// NOTE: may add new publication type in the future
export type Publication = ConfPub;