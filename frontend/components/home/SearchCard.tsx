import Link from "next/link";

export default function SearchCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-500/20">
      
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl">
        📷
      </div>

      <h2 className="text-3xl font-bold text-white">
        Search by Screenshot
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        Upload a Clash of Clans screenshot to instantly find the exact base,
        copy the base link, and view every successful attack strategy.
      </p>

      <Link
        href="/upload/screenshot"
        className="mt-8 block w-full rounded-xl bg-blue-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-blue-700"
      >
        Upload Screenshot
      </Link>

    </div>
  );
}