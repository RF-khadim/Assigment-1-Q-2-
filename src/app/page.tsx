import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul className=" flex items-center justify-center w-96 gap-6">
        <li>
          <Link
            className="bg-slate-500 px-4 py-1 text-white rounded-md"
            href="/About"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="bg-slate-500 px-4 py-1 text-white rounded-md"
            href="/Contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="bg-slate-500 px-4 py-1 text-white rounded-md"
            href="/Profile"
          >
            Services
          </Link>
        </li>
      </ul>{" "}
    </div>
  );
}
