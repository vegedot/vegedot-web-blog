import { Article } from "@/libs/microcms.types";
import Link from "next/link";
import TagChit from "../tag/TagChit";
import CategoryChit from "../category/CategoryChit";

type Props = {
  article: Article;
};
export default function ArticleCard({ article }: Props) {
  const publishedDate = article.publishedAt
    ? article.publishedAt.split("T")[0].replaceAll("-", ".")
    : article.createdAt.split("T")[0].replaceAll("-", ".");
  return (
    <li className="relative flex flex-col bg-white mr-6 mb-1 rounded-xl overflow-hidden">
      <picture>
        <source
          type="image/webp"
          srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&dpr=1 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&dpr=2 2x`}
        />
        <img
          src={article.thumbnail?.url || `/no-image.png`}
          alt=""
          width={article.thumbnail?.width}
          height={article.thumbnail?.height}
        />
      </picture>
      <div className="grow flex flex-col p-4">
        <div className="flex justify-between items-center mb-3">
          <CategoryChit category={article.category} />
          <div className="text-sm text-gray-600">{publishedDate}</div>
        </div>
        <div className="mb-4">
          <Link href={`/article/${article.id}`} className="font-bold hover:opacity-50 hover:transition-opacity before:absolute before:inset-0">
            {article.title}
          </Link>
        </div>
        <ul className="flex flex-wrap mt-auto">
          {article.tags.map((tag) => (
            <li key={tag.id} className="mr-1 mb-1">
              <TagChit tag={tag} />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
