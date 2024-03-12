export interface Link {
  url: string,
  title: string,
  icon: string,
};

export interface Profile {
  profile_url: string,
  name: string,
  title: string,
  links: Link[],
  email_b64: string,
  intro: string,
};

export interface Article {
  title: string,
  excerpt: string,
};