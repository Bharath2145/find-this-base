import Link from "next/link";

export default function ContributeCard() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-green-500 hover:shadow-green-500/20">

      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-3xl">
        🎥
      </div>

      <h2 className="text-3xl font-bold text-white">
        Contribute Gameplay
      </h2>

      <p className="mt-4 leading-7 text-slate-400">
        Upload your Clash of Clans attack video. Our AI extracts only new
        unique layouts, removes duplicates, and sends them for review.
      </p>

      <Link
        href="/upload/gameplay"
        className="mt-8 block w-full rounded-xl bg-green-600 py-4 text-center text-lg font-semibold text-white transition hover:bg-green-700"
      >
        Upload Gameplay
      </Link>

    </div>
  );
}