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

export const SignupSection = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center space-y-4">
      <p className="text-3xl">Signup to Boom</p>
      <Button className="w-[400px]" onClick={() => signIn("google")}>
        <SiGoogle className="mr-2 h-6 w-6" />
        Continue with Google
      </Button>
      <Button
        variant="secondary"
        className="w-[400px]"
        onClick={() => signIn("slack")}
      >
        <SiSlack className="mr-2 h-6 w-6" />
        Continue with Slack
      </Button>
      <Button className="w-[400px]">
        <SiApple className="mr-2 h-6 w-6" onClick={() => signIn("apple")} />
        Continue with Apple
      </Button>
      <Button
        variant="secondary"
        className="w-[400px]"
        onClick={() => signIn("discord")}
      >
        <SiDiscord className="mr-2 h-6 w-6" />
        Continue with Discord
      </Button>
      <Button className="w-[400px]">
        <SiGithub className="mr-2 h-6 w-6" onClick={() => signIn("github")} />
        Continue with Github
      </Button>
    </section>
  );
};
