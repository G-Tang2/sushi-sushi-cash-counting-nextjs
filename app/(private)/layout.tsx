import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Nav from "@/components/Nav";

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  // all users have to sign in first
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/");

  return (
    <>
      <Nav />
      {children}
    </>
  );
}
