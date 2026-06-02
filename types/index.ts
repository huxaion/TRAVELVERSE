export type Country = {
  id: string;
  name: string;
  slug: string;
  currency: string;
  language: string;
  bestTime: string;
};

export type City = {
  id: string;
  name: string;
  slug: string;
  countrySlug: string;
  averageBudget: string;
};

export type Destination = {
  id: string;
  name: string;
  slug: string;
  citySlug: string;
  summary: string;
  hiddenGem: string;
};

export type Post = {
  id: string;
  author: string;
  city: string;
  country: string;
  content: string;
  likes: number;
};
