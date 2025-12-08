import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/home/ContactSection";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Book Your EPC | Contact Solent EPC</title>
        <meta name="description" content="Book your EPC assessment today. Fast, friendly service with same-day certificates. Contact Solent EPC for availability." />
        <link rel="canonical" href="https://solentepc.co.uk/contact" />
      </Helmet>

      <ContactSection />
    </Layout>
  );
};

export default Contact;
