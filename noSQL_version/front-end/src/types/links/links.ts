import { DataTypes } from './data';

export interface LinksTypes {
  _id: string;
  redirectURL: string;
  link: string;
  title: string;
  date: string;
  data: DataTypes[];
}
