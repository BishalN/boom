// this is onboarding flow page

"use client";

import Link from "next/link";
import Image from "next/image";
import { WelcomeOnBoardForm } from "@/components/onboarding/welcome-onboard-form";
import { WorkspaceAddForm } from "@/components/onboarding/workspace-form";
import { InviteYourTeammatesForm } from "@/components/onboarding/invite-teammates-form";
import { ChooseYourRecorder } from "@/components/onboarding/choose-recorder";

export default function WelcomePage() {
  return (
    <main>
      <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <h1 className="text-2xl">Boom</h1>
            <WelcomeOnBoardForm />
            <WorkspaceAddForm />
            <InviteYourTeammatesForm />
            <ChooseYourRecorder />
          </div>
        </div>
        <div className="hidden bg-muted lg:block">
          <div className="flex h-full flex-col items-center justify-center">
            <Image
              src="/fav.avif"
              alt="Image"
              width="400"
              height="400"
              className="rounded-lg shadow-xl"
            />
            <p className="text-muted-foreground">
              Boom! Record your screen like a pro
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
