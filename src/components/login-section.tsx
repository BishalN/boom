"use client";

import {
  SiApple,
  SiDiscord,
  SiGithub,
  SiGoogle,
  SiSlack,
} from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export const LoginSection = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center space-y-4">
      <p className="text-3xl">Login to Boom</p>
      <Button className="w-[400px]" onClick={() => signIn("google")}>
        <SiGoogle className="mr-2 h-6 w-6" />
        Sign in with Google
      </Button>
      <Button
        variant="secondary"
        className="w-[400px]"
        onClick={() => signIn("slack")}
      >
        <SiSlack className="mr-2 h-6 w-6" />
        Sign in with Slack
      </Button>
      <Button className="w-[400px]">
        <SiApple className="mr-2 h-6 w-6" onClick={() => signIn("apple")} />
        Sign in with Apple
      </Button>
      <Button
        variant="secondary"
        className="w-[400px]"
        onClick={() => signIn("discord")}
      >
        <SiDiscord className="mr-2 h-6 w-6" />
        Sign in with Discord
      </Button>
      <Button className="w-[400px]">
        <SiGithub className="mr-2 h-6 w-6" onClick={() => signIn("github")} />
        Sign in with Github
      </Button>
    </section>
  );
};
