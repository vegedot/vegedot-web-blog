export default function Content({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-row w-11/12 mx-auto gap-x-8">
      <main className="grow">{children}</main>
      <aside className="basis-64 bg-green-500">sidebar</aside>
    </div>
  );
}
