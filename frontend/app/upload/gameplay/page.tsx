import UploadDropzone from "@/components/upload/UploadDropzone";

export default function GameplayUploadPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <h1 className="mb-4 text-5xl font-bold text-white">
          Upload Gameplay
        </h1>

        <p className="mb-12 text-slate-400">
          Upload your gameplay or paste a YouTube video.
        </p>

        <UploadDropzone mode="video" />

      </div>
    </main>
  );
}