import { SiGooglechrome } from "@icons-pack/react-simple-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { CheckIcon } from "lucide-react";

export const ChooseYourRecorder = () => {
  return (
    <main>
      <h1 className="text-3xl">Choose Your Recorder</h1>
      <p className="text-muted-foreground">
        try chrome extension since its simple to setup
      </p>
      <Card>
        <CardHeader className="flex flex-col items-center justify-center">
          <SiGooglechrome size={40} />
          <CardTitle>Chrome extension</CardTitle>
          <CardDescription>
            Get started fast with quick installation
          </CardDescription>
          <Button className="w-full">Install</Button>
        </CardHeader>
        <div className="border-t-2 p-2" />
        <CardContent>
          <ul>
            <li className="flex items-center space-x-2 text-muted-foreground">
              <CheckIcon className="h-4 w-4" />
              <span>Easy to install</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};
