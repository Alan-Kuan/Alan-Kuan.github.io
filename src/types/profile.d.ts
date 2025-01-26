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
};

export interface Link {
  url: string;
  title: string;
  icon?: string;
};