import React from "react";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy;{currentYear} <span className="text-bold">innThomas</span>. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, EmailJS, Vercel hosting.
      </p>
    </footer>
  );
}
