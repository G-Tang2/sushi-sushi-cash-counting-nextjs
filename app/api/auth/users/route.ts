import startDB from "@/lib/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

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

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;

  await startDB();

  const oldUser = await User.findOne({ username: body.username });
  if (oldUser)
    return NextResponse.json(
      { error: "User already exists." },
      { status: 422 }
    );

  const user = await User.create({ ...body });

  return NextResponse.json({
    user: {
      ...user,
      id: user._id.toString(),
    },
  });
};
