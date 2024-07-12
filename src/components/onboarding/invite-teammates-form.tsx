"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  email: z
    .string({
      required_error: "You need to enter an email address.",
    })
    .email("Please enter a valid email address."),
});

export function InviteYourTeammatesForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl">Invite your teammates</h1>
      <p className="text-muted-foreground">
        Communicating with your team is easier when they are all in one place.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Invite</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Separate email with comma, space, tab or enter"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-2">
            <Button type="submit">Invite and continue</Button>
            <Button type="submit" variant="outline">
              Not now
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
