import { MicroCMSContentId, MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

export type Blog = {
  title: string;
  content: string;
  eyeCatch: MicroCMSImage;
  category: Category;
} & MicroCMSContentId &
  MicroCMSDate;

export type Article = Blog & MicroCMSContentId & MicroCMSDate;
