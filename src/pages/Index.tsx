import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeHelpSection } from "@/components/home/WhoWeHelpSection";
import { WhatIsEPCSection } from "@/components/home/WhatIsEPCSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { AreasSection } from "@/components/home/AreasSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { PricingSection } from "@/components/home/PricingSection";
import { FAQSection } from "@/components/home/FAQSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>EPC Assessor Lymington | Solent EPC | Hampshire & Dorset</title>
        <meta name="description" content="Fast, friendly EPC assessments in Lymington, New Forest, Hampshire & Dorset. Accredited Domestic Energy Assessor. Same-day certificates. Book your EPC today." />
        <link rel="canonical" href="https://solentepc.co.uk/" />
      </Helmet>
      <HeroSection />
      <WhoWeHelpSection />
      <WhatIsEPCSection />
      <WhyChooseUsSection />
      <AreasSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
