export interface DataTypes {
  date: string;
  clicks: number;
}

export interface Link {
  id: string;
  redirectURL: string;
  link: string;
  title: string;
  date: string;
  data: DataTypes[];
}

export interface InitLink {
  links: Link[];
}
