"use client";

import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <nav className="flex justify-end px-8 py-3 border-b-[1px] border-gray-500 border-opacity-60">
      <button className="btn w-20" onClick={() => signOut()}>
        Sign Out{" "}
      </button>
    </nav>
  );
}
