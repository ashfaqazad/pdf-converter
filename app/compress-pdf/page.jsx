"use client";

import { useState, useRef } from "react";

export default function CompressPDF() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCompress = async () => {
    if (!file) {
      alert("Please select a PDF file to compress.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setDownloadUrl("");

    try {
      const res = await fetch("/api/compress-pdf", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.downloadUrl) {
        setDownloadUrl(data.downloadUrl);
      } else {
        alert("Compression failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Error compressing PDF!");
    } finally {
      setLoading(false);
    }
  };

  return (
<main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
  {/* Heading */}
  <div className="text-center max-w-2xl">
    <h1 className="text-3xl font-bold mb-2">Compress PDF</h1>
    <p className="text-gray-600 mb-8">
      Reduce the size of your PDF file without losing quality.
    </p>
  </div>

  {/* Upload / Compress Form */}
  <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center space-y-6 w-full max-w-md">
    {/* Hidden File Input */}
    <input
      type="file"
      accept="application/pdf"
      onChange={handleFileChange}
      ref={fileInputRef}
      className="hidden"
    />

    {/* Select File Button */}
    <button
      onClick={() => fileInputRef.current.click()}
      className="bg-blue-700 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition"
    >
      Select File
    </button>

    {/* File Info */}
    <p className="text-gray-600">
      {file ? `Selected File: ${file.name}` : "Select a PDF file to compress."}
    </p>

    {/* Compress Button */}
    <button
      className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition disabled:opacity-50"
      onClick={handleCompress}
      disabled={loading}
    >
      {loading ? "Compressing..." : "Compress PDF"}
    </button>

    {/* Download Section */}
    {downloadUrl && (
      <div className="flex flex-col items-center space-y-4 mt-6">
        <p className="text-lg font-semibold text-green-600">
          ✅ Compression Complete!
        </p>
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg font-bold hover:bg-green-700 transition"
        >
          Download Compressed PDF
        </a>
      </div>
    )}
  </div>
</main>
  );
}
