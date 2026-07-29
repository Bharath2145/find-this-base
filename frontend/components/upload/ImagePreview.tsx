"use client";

interface ImagePreviewProps {
  imageUrl: string;
  fileName: string;
  fileSize: number;
  onRemove: () => void;
}

export default function ImagePreview({
  imageUrl,
  fileName,
  fileSize,
  onRemove,
}: ImagePreviewProps) {
  return (
    <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-6">

      <img
        src={imageUrl}
        alt="Preview"
        className="mx-auto max-h-96 rounded-xl"
      />

      <div className="mt-6 text-center">

        <h3 className="text-xl font-bold text-white">
          {fileName}
        </h3>

        <p className="mt-2 text-slate-400">
          {(fileSize / 1024 / 1024).toFixed(2)} MB
        </p>

      </div>

      <div className="mt-8 flex justify-center gap-4">

        <button
          onClick={onRemove}
          className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Remove
        </button>

        <button
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Search Base
        </button>

      </div>

    </div>
  );
}