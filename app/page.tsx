import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Offer from "@/components/Offer";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Requirements from "@/components/Requirements";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Offer />
        <Benefits />
        <HowItWorks />
        <Requirements />
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
