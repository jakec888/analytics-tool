export interface DataTypes {
  date: string;
  clicks: number;
}

export interface LinkData {
  _id: string;
  redirectURL: string;
  link: string;
  title: string;
  date: string;
  data: DataTypes[];
}

export interface LinksType {
  links: LinkData[];
}
