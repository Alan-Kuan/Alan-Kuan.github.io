export interface Link {
  url: string;
  title: string;
  icon?: string;
}

export interface Profile {
  name: string;
  title: string;
  org: {
    text: string,
    url: string,
  };
  links: Link[];
  email: {
    addr_b64: string,
    title: string,
  };
}

export interface Post extends PostData {
  collection: string;
  id: string;
  excerpt?: string;
}

export interface PostData {
  title: string;
  desc: string;
  date?: string;
  tags: string[];
  banner_url?: string;
}

export interface ConfPub {
  title: string;
  authors: string[];
  conference: string;
  location: string;
  time: string;
}

// NOTE: may add new publication type in the future
export type Publication = ConfPub;