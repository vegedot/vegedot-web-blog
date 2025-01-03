import { getList } from "@/libs/microcms";
import { Blog } from "@/libs/microcms.types";

export default async function Home() {
  const data = await getList({
    limit: 10,
  });
  return (
    <>
      <div>
        {data.contents.map((item: Blog) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
}
