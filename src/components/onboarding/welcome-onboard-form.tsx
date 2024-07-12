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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  type: z.enum(["work", "education", "personal-project"], {
    required_error: "You need to select a notification type.",
  }),
});

export function WelcomeOnBoardForm() {
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
      <h1 className="text-4xl">How are you planning to use Boom?</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Select one..</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-4 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="work" />
                      </FormControl>
                      <FormLabel className="font-normal">For work</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-4 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="education" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        For education
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-4 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="personal-projects" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        For personal projects
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Continue</Button>
        </form>
      </Form>
    </div>
  );
}
