"use client";
import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import * as Form from "@radix-ui/react-form";

const SignUp = () => {
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInfo),
    }).then((res) => res.json());

    if (res?.error) return setError(res.error);
  };

  return (
    <Form.Root className="w-[260px]" onSubmit={handleSubmit}>
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] text-white font-medium leading-[35px] ">
            Email
          </Form.Label>
          <Form.Message
            className="text-[13px]  opacity-[0.8]"
            match="valueMissing"
          >
            Please enter your username
          </Form.Message>
          {error ? (
            <Form.Message
              className="text-[13px]  opacity-[0.8]"
              match="valueMissing"
            >
              {error}
            </Form.Message>
          ) : null}
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
            type="text"
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="username">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] text-white font-medium leading-[35px] ">
            Username
          </Form.Label>
          <Form.Message
            className="text-[13px]  opacity-[0.8]"
            match="valueMissing"
          >
            Please enter your username
          </Form.Message>
          {error ? (
            <Form.Message
              className="text-[13px]  opacity-[0.8]"
              match="valueMissing"
            >
              {error}
            </Form.Message>
          ) : null}
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
            type="text"
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="password">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] text-white font-medium leading-[35px] ">
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
            className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none  shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
            type="password"
            onChange={handleChange}
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
          Sign Up
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default SignUp;
