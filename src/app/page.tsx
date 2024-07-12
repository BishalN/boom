import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
