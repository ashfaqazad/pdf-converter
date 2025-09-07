"use client";

import Link from "next/link";

export default function Blog() {
  // Dummy blog data
  const blogs = [
    {
      title: "How to Convert PDF to Word Easily",
      description:
        "Learn step-by-step how to convert your PDF files to editable Word documents quickly and securely.",
      date: "Aug 24, 2025",
      slug: "pdf-to-word-guide",
    },
    {
      title: "Merge Multiple PDFs into One File",
      description:
        "A simple tutorial on combining multiple PDF files into a single document using online tools.",
      date: "Aug 20, 2025",
      slug: "merge-pdf-guide",
    },
    {
      title: "Compress PDFs Without Losing Quality",
      description:
        "Tips and tricks to reduce PDF size while maintaining original quality for easy sharing.",
      date: "Aug 18, 2025",
      slug: "compress-pdf-guide",
    },
    {
      title: "Top 5 Free PDF Tools You Must Try",
      description:
        "Explore the best free online tools to manage your PDF files effectively in 2025.",
      date: "Aug 15, 2025",
      slug: "top-5-pdf-tools",
    },
  ];

  return (
    <main className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-3">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
            <Link
              href={`/blog/${blog.slug}`}
              className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
