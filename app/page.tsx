import ArticleList from "@/features/article/ArticleList";
import { fetchArticleList } from "@/libs/microcms";

export default async function Home() {
  const data = await fetchArticleList({
    limit: 10,
  });
  return (
    <>
      <div className="flex flex-row w-11/12 mx-auto pt-12 gap-x-8">
        <main className="grow">
          <ArticleList articles={data.contents} />
        </main>
        <aside className="basis-64 bg-green-500">sidebar</aside>
      </div>
    </>
  );
}
