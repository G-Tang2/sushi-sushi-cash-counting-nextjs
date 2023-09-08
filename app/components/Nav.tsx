"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useSession } from "@clerk/nextjs";

export default function Home() {
  const { session } = useSession();
  return (
    <nav className="flex justify-end">
      {session ? (
        <SignOutButton className="text-white bg-primary border-2 rounded m-4 px-2 py-1 text-s" />
      ) : null}
    </nav>
  );
}
