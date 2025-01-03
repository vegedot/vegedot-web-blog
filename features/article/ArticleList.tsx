import { Article } from "@/libs/microcms.types";
import ArticleCard from "./ArticleCard";

type Props = {
  articles: Article[];
};
export default function ArticleList({ articles }: Props) {
  return (
    <ul className="flex">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </ul>
  );
}
