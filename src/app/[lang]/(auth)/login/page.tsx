"use client";

import React, { Suspense, useEffect, useState } from "react";
import { headerFont } from "@/datas/fonts";
import Input from "@/components/Input/Input";
import Button from "@/components/Button";
import { randomImage } from "@/datas/functions";

import Image from "next/image";
import Link from "next/link";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [error, setError] = useState(false);

  let router = useRouter();

  let handleClick = async () => {
    // signIn("credentials", { email: "Sincere@april.biz", username: "Bret", callbackUrl:'/', redirect: true })
    let res = (await signIn("credentials", {
      email,
      username,
      callbackUrl: "/",
      redirect: false,
    })) as { error: null | string; url: string };

    if (res.error !== null) {
      setError(true);
    } else {
      router.push(res.url);
    }

    // signIn("google")
  };

  return (
    <section
      id="login-page"
      className="w-screen h-56 max-w-2xl mx-auto px-8 pt-6 grid grid-cols-1 md:grid-cols-2"
    >
      <h1 className="sr-only">Login</h1>
      <div className="hidden md:block">
        <Suspense
          fallback={
            <div className="text-4xl text-center text-primary-main">
              Loading
            </div>
          }
        >
          <Image
            src={randomImage()}
            alt="Signup Image"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </Suspense>
      </div>
      <div>
        <form
          action="#"
          className="block h-full p-6 bg-white border border-gray-200 rounded-r-lg shadow  dark:bg-gray-800 dark:border-gray-700"
        >
          <h2
            className={`text-center pt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ${headerFont.className} `}
          >
            My Book
          </h2>
          <h4
            className={`text-center pb-4 font-bold tracking-tight text-primary-light dark:text-primary-dark ${headerFont.className} `}
          >
            Enter your credentials.
          </h4>
          <Input
            error={error}
            value={username}
            handleChange={setUsername}
            name="username"
            label="Username"
          />
          <Input
            error={error}
            value={email}
            handleChange={setEmail}
            name="email"
            label="Email"
          />
          <div className="mt-4">
            <span onClick={handleClick}>
              <Button>Login</Button>
            </span>
          </div>
          <div className="mt-4 text-disabled">
            Don't have an account yet?{" "}
            <Link href="/signup" className="font-semibold text-secondary-dark">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
