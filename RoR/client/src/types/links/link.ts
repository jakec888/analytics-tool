/*
 *
 * this is the file that handles the typescript interface for the link redux store data structure
 *
 */
export interface AnalyticsTypes {
  date: string;
  clicks: number;
}

export interface Link {
  _id: string;
  redirectURL: string;
  link: string;
  title: string;
  date: string;
  analytics: AnalyticsTypes[];
}

export interface InitLink {
  links: Link[];
}
