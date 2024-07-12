import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "../ui/button";
import { HeroCards } from "./hero-cards";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <main className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] bg-clip-text text-transparent">
              Boom
            </span>{" "}
            Open source alternative
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] bg-clip-text text-transparent">
              Loom
            </span>
          </h2>
        </main>

        <p className="mx-auto text-xl text-muted-foreground md:w-10/12 lg:mx-0">
          Create and share video messages with your team, friends, and family.
        </p>

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <Link href="/signup">
            <Button className="w-full md:w-1/3">Get Started</Button>
          </Link>

          <a
            rel="noreferrer noopener"
            href="https://github.com/bishaln/boom.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
