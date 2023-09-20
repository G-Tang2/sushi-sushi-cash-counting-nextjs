"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import * as Form from "@radix-ui/react-form";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ROLE } from "@/types/roles";

function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      ...userInfo,
      redirect: false,
    });

    if (res?.error)
      return setErrorMessage("Username or password is incorrect.");

    // redirect to role dashboard
    const session = await getSession();
    if (session?.user.role.toLowerCase() == ROLE.ADMIN) {
      router.replace("admin/dashboard");
    } else if (session?.user.role.toLowerCase() == ROLE.USER) {
      router.replace("user/dashboard");
    } else {
      throw new Error(
        "Unauthorised Account. Please request a new account from the admin."
      );
    }
  };

  return (
    <>
      <Form.Root className="w-[260px]" onSubmit={handleSubmit}>
        <Form.Field className="grid my-3" name="username">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] ">
              Username
            </Form.Label>
            <Form.Message
              className="text-[13px] opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full text-black bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
              type="text"
              onChange={handleChange}
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid my-3" name="password">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] ">
              Password
            </Form.Label>
            <Form.Message
              className="text-[13px]  opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full text-black inline-flex h-[35px]  items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none outline-none "
              type="password"
              onChange={handleChange}
              required
            />
          </Form.Control>
        </Form.Field>
        {errorMessage ? (
          <div className="bg-red-600 bg-opacity-80 text-sm w-full h-10 my-1 justify-center items-center inline-flex rounded-[4px]">
            {errorMessage}
          </div>
        ) : null}
        <Form.Submit asChild>
          <button className="btn">Sign In</button>
        </Form.Submit>
      </Form.Root>
    </>
  );
}

export default LoginForm;
