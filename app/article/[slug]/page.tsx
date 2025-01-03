import { formatRichText } from "@/libs/formatter";
import { fetchArticle } from "@/libs/microcms";
import { ReactElement } from "react";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
export default async function ArticleSlug({ params }: Readonly<Params>): Promise<ReactElement> {
  const slug = (await params).slug;
  const data = await fetchArticle(slug);
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${formatRichText(data.content)}`,
      }}
    />
  );
}
