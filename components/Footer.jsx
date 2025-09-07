// components/Footer.jsx
"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} PSD Tools. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
