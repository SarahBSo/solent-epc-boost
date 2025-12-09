import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy | Solent EPC</title>
        <meta name="description" content="Privacy Policy for Solent Check, a trading arm of Drum Recruitment Ltd. Learn how we collect, use and protect your personal data." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Privacy Policy – Solent Check
          </h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last Updated:</strong> 10 December 2025
          </p>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              Solent Check is a trading arm of Drum Recruitment Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are committed to protecting your personal data and being upfront about how we collect, use and store it.
            </p>
            <p className="text-muted-foreground mb-8">
              This Privacy Policy explains what data we collect, why we collect it, how it&apos;s used, and the rights you have.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">1. Who We Are</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Drum Recruitment Ltd trading as Solent Check</strong><br />
              Registered in England &amp; Wales<br />
              Company No: 8844778<br />
              Email: <a href="mailto:info@doodleandpatch.com" className="text-primary hover:underline">info@doodleandpatch.com</a>
            </p>
            <p className="text-muted-foreground mb-8">
              We act as the Data Controller for all personal data processed through Solent Check, including EPCs, Fire Door Inspections, and Fire Risk Assessments (FRA).
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">2. What Personal Data We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information in the following categories:
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Information you give us</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address(es)</li>
              <li>Information relevant to EPCs, Fire Door Inspections, and FRAs</li>
              <li>Business details</li>
              <li>Information provided when requesting quotes or booking services</li>
              <li>Billing information (if you become a customer)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Information collected automatically</h3>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Analytics data (via Google Analytics or similar tools)</li>
              <li>Website usage information</li>
              <li>Cookies (see Section 9)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Information from third parties</h3>
            <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
              <li>Letting agents</li>
              <li>Property managers</li>
              <li>Compliance partners</li>
              <li>Publicly available sources (e.g. Companies House)</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-4">We use your data to:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Provide quotes and deliver services such as EPCs, Fire Door Inspections, and Fire Risk Assessments</li>
              <li>Produce compliance reports and documentation</li>
              <li>Carry out on-site assessments</li>
              <li>Manage billing and payments</li>
              <li>Send booking confirmations, updates, follow-ups, and reports</li>
              <li>Improve our website and marketing</li>
              <li>Keep business and regulatory records</li>
              <li>Respond to enquiries or complaints</li>
              <li>Meet our legal and insurance obligations</li>
            </ul>
            <p className="text-muted-foreground mb-8 font-semibold">
              We never sell your data. Ever.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing</h2>
            <p className="text-muted-foreground mb-4">
              We process your data under one or more of the following lawful bases:
            </p>
            <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
              <li><strong>Contract</strong> – to provide the EPC, Fire Door Inspection, or FRA service you have requested</li>
              <li><strong>Legitimate Interests</strong> – running and improving our business</li>
              <li><strong>Legal Obligation</strong> – compliance with fire safety legislation, insurance requirements, and accounting rules</li>
              <li><strong>Consent</strong> – for optional marketing communications</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">5. How Long We Keep Your Data</h2>
            <p className="text-muted-foreground mb-4">
              We retain personal data only as long as necessary:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li><strong>FRA reports, fire door inspection records, and EPC documents:</strong> 6 years</li>
              <li><strong>Invoices &amp; financial records:</strong> 6 years (HMRC requirement)</li>
              <li><strong>General enquiries:</strong> 12 months</li>
              <li><strong>Marketing subscribers:</strong> until you unsubscribe</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Where possible, data is anonymised or securely deleted once it&apos;s no longer required.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">6. Who We Share Your Data With</h2>
            <p className="text-muted-foreground mb-4">We may share your data with:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>EPC assessors</li>
              <li>Qualified Fire Door Inspectors</li>
              <li>Fire Risk Assessors</li>
              <li>Subcontractors and compliance partners</li>
              <li>Payment processors</li>
              <li>Professional advisers (accountants, solicitors, insurers)</li>
              <li>IT and website hosting providers</li>
              <li>Regulatory bodies if legally required</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              All third parties must protect your data and may only use it to perform the services we instruct.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">7. International Transfers</h2>
            <p className="text-muted-foreground mb-4">
              If any data is transferred outside the UK or EEA (e.g. through cloud providers), we ensure appropriate safeguards are in place such as:
            </p>
            <ul className="list-disc pl-6 mb-8 text-muted-foreground space-y-2">
              <li>UK-approved Standard Contractual Clauses</li>
              <li>Providers operating under recognised data protection frameworks</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Ask for deletion (&quot;right to be forgotten&quot;)</li>
              <li>Restrict or object to processing</li>
              <li>Request a copy of your data (data portability)</li>
              <li>Withdraw consent for marketing at any time</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              To exercise any of these rights, email: <a href="mailto:info@doodleandpatch.com" className="text-primary hover:underline">info@doodleandpatch.com</a>
            </p>
            <p className="text-muted-foreground mb-8">
              You also have the right to complain to the Information Commissioner&apos;s Office (ICO) if you believe we have mishandled your data.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">9. Cookies &amp; Tracking</h2>
            <p className="text-muted-foreground mb-4">Our website uses essential and optional cookies to:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Improve site performance</li>
              <li>Analyse usage</li>
              <li>Run marketing campaigns</li>
              <li>Remember your preferences</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              You can control cookies through your browser settings at any time.
            </p>
            <p className="text-muted-foreground mb-8">
              Read our full <Link to="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">10. Security Measures</h2>
            <p className="text-muted-foreground mb-4">We take data security seriously and use:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Encrypted devices</li>
              <li>Secure data storage</li>
              <li>Role-based access controls</li>
              <li>Regular backups</li>
              <li>Strong password and authentication standards</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              Despite these measures, no online system is 100% secure, but we take all reasonable steps to protect your information.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-8">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For questions about our Privacy Policy:
            </p>
            <p className="text-muted-foreground">
              <strong>Drum Recruitment Ltd trading as Solent Check</strong><br />
              Email: <a href="mailto:info@doodleandpatch.com" className="text-primary hover:underline">info@doodleandpatch.com</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
