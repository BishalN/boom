import { SignupSection } from "@/components/signup-section";
import { Button } from "@/components/ui/button";

export default async function SignupPage() {
  return (
    <main className="p-1 sm:p-4">
      <nav className="flex justify-between">
        <h1>Boom</h1>
        <Button>Login</Button>
      </nav>

      <SignupSection />
    </main>
  );
}
