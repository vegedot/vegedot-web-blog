import { Category } from "@/libs/microcms.types";

type Props = {
  category: Category;
};
export default function CategoryChit({ category }: Props) {
  return (
    <div className="text-xs tracking-widest rounded-md px-3 py-1 bg-lime-200 text-lime-800">{category.name}
    </div>
  );
}