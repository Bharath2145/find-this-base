import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import SearchCard from "@/components/home/SearchCard";
import ContributeCard from "@/components/home/ContributeCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">

      <Navbar />

      <Hero />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-2">

        <SearchCard />

        <ContributeCard />

      </section>

    </main>
  );
}