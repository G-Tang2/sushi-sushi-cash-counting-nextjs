import Link from "next/link";
import React from "react";

export default async function Home() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link href="register" className="btn">
        Register
      </Link>
    </div>
  );
}
