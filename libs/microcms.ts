import { createClient, MicroCMSQueries } from "microcms-js-sdk";
import { Article } from "./microcms.types";
import { notFound } from "next/navigation";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const fetchArticleList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Article>({
      endpoint: "articles",
      queries,
    })
    .catch(notFound);
  return listData;
};

export const fetchArticle = async (id: string) => {
  const data = await client.get<Article>({
    endpoint: "articles",
    contentId: id,
  }).catch(notFound);
  return data;
};