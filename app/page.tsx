import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Features from "@/components/Features";
import AboutDesigner from "@/components/AboutDesigner";
import Portfolio from "@/components/Portfolio";
import Performance from "@/components/Performance";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import ContactForm from "@/components/ContactForm";
import BenefitsBanner from "@/components/BenefitsBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitsBanner />
      <WhatWeDo />
      <Features />
      <AboutDesigner />
      <Portfolio />
      <Performance />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <ContactForm />
    </>
  );
}
