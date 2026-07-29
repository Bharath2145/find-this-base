import UploadDropzone from "@/components/upload/UploadDropzone";

export default function ScreenshotUploadPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-4 text-5xl font-bold text-white">
          Search by Screenshot
        </h1>

        <p className="mb-12 text-slate-400">
          Upload your screenshot to find the exact Clash of Clans base.
        </p>

        <UploadDropzone mode="image" />

      </div>
    </main>
  );
}