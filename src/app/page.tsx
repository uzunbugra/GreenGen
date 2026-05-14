import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Technology from "@/components/Technology";
import AppScreenshots from "@/components/AppScreenshots";
import Impact from "@/components/Impact";
import Documentation from "@/components/Documentation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Technology />
      <AppScreenshots />
      <Impact />
      <Documentation />
    </main>
  );
}
