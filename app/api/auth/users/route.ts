import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/db";

interface NewUserRequest {
  email: string;
  username: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  email: string;
  username: string;
  role: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NextResponse> => {
  const body = await req.json();
  const { username, email, password } = body;
  const exist = await prisma.user.findFirst({
    where: {
      username: username,
    },
  });

  if (exist) {
    return new NextResponse("User already exists.", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { username, email, password: hashedPassword },
  });

  return NextResponse.json(user);
};
