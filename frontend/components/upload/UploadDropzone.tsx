"use client";

import { useRef, useState } from "react";
import { Upload, Clipboard, Link2 } from "lucide-react";
import ImagePreview from "./ImagePreview";

interface UploadDropzoneProps {
  mode: "image" | "video";
}

export default function UploadDropzone({
  mode,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const openFilePicker = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setSelectedFile(file);

    if (mode === "image") {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setPreviewUrl("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900 p-10 transition hover:border-blue-500">

        <div className="flex flex-col items-center">

          <Upload size={60} className="text-blue-500" />

          <h2 className="mt-6 text-3xl font-bold text-white">
            {mode === "image"
              ? "Upload Screenshot"
              : "Upload Gameplay"}
          </h2>

          <p className="mt-4 text-center text-slate-400">
            {mode === "image"
              ? "Drag your Clash of Clans screenshot here."
              : "Drag your gameplay video here."}
          </p>

          <input
            ref={inputRef}
            type="file"
            hidden
            accept={
              mode === "image"
                ? "image/*"
                : "video/*"
            }
            onChange={handleFileChange}
          />

          <button
            onClick={openFilePicker}
            className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Browse Files
          </button>

          <div className="my-8 flex items-center gap-3">

            <div className="h-px w-24 bg-slate-700" />

            <span className="text-slate-500">
              OR
            </span>

            <div className="h-px w-24 bg-slate-700" />

          </div>

          {mode === "image" ? (
            <button className="flex items-center gap-3 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:bg-slate-800">
              <Clipboard size={20} />
              Paste Screenshot
            </button>
          ) : (
            <button className="flex items-center gap-3 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:bg-slate-800">
              <Link2 size={20} />
              Paste YouTube URL
            </button>
          )}

          <p className="mt-8 text-sm text-slate-500">
            {mode === "image"
              ? "PNG • JPG • JPEG • WEBP"
              : "MP4 • MOV • AVI • MKV • WEBM"}
          </p>

        </div>

      </div>

      {selectedFile && mode === "image" && (
        <ImagePreview
          imageUrl={previewUrl}
          fileName={selectedFile.name}
          fileSize={selectedFile.size}
          onRemove={removeFile}
        />
      )}
    </>
  );
}