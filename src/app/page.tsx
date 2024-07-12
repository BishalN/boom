import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";

export default async function Home() {
  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main>
        <h1>Hello world</h1>
      </main>
    </HydrateClient>
  );
}
