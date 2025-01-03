import { BLOG } from "@/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-white h-16 flex-auto items-center content-center">
        <Link href="/">
          <h1 className="text-center">{BLOG.TITLE}</h1>
        </Link>
      </div>
    </header>
  );
}
