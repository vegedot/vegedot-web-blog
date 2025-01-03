import { Tag } from "@/libs/microcms.types";

type Props = {
  tag: Tag;
};
export default function TagChit({ tag }: Props) {
  return (
    <div className="inline-block text-xs text-gray-700 border-solid border border-gray-400 rounded-md px-2 py-1">
      <div className="inline-block mr-1">#</div><div className="inline-block pr-1">{tag.name}</div>
    </div>
  );
}
// TODO : when has logo image, replace # to logo image