/*
 *
 * this is the file that handles the typescript interface for the link redux store data structure
 *
 */
export interface DataTypes {
  date: string;
  clicks: number;
}

export interface Link {
  _id: string;
  redirectURL: string;
  link: string;
  title: string;
  date: string;
  data: DataTypes[];
}

export interface InitLink {
  links: Link[];
}
