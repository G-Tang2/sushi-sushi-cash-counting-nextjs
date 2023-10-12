import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <Link className="btn w-fit" href="create/daily-taking">
        Create New
      </Link>
    </div>
  );
}
