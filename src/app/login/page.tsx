import { LoginSection } from "@/components/login-section";
import { Button } from "@/components/ui/button";

export default async function LoginPage() {
  return (
    <main className="p-1 sm:p-4">
      <nav className="flex justify-between">
        <h1>Boom</h1>
        <Button>Sign up for free</Button>
      </nav>

      <LoginSection />
    </main>
  );
}
