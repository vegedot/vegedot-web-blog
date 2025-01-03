import { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type Tag = {
  name: string;
  logo: MicroCMSImage;
} & MicroCMSContentId &
  MicroCMSDate;

export type Article = {
  title: string;
  content: string;
  thumbnail: MicroCMSImage;
  category: Category;
  tags: Tag[];
} & MicroCMSContentId &
  MicroCMSDate;

