"use client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="flex flex-col h-screen justify-center items-center w-[260px]">
      <h2 className="text-xl p-5">Page Not Found.</h2>
      <p>
        The page you are looking for does not exist or you do not have access.
      </p>
      <Link href="/" className="btn">
        Go Home
      </Link>
    </main>
  );
}
