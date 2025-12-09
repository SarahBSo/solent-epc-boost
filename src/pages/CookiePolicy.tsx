import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

export default function CookiePolicy() {
  return (
    <Layout>
      <Helmet>
        <title>Cookie Policy | Solent EPC</title>
        <meta name="description" content="Cookie Policy for Solent Check, a trading arm of Drum Recruitment Ltd. Learn how we use cookies on our website." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Cookie Policy – Solent Check
          </h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Last Updated:</strong> 9 December 2024
          </p>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground mb-8">
              This Cookie Policy explains how Solent Check (a trading arm of Drum Recruitment Ltd) uses cookies and similar technologies on our website.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
            <p className="text-muted-foreground mb-8">
              Cookies are small text files stored on your device when you visit a website. They help sites work properly, provide analytics, and improve user experience.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Essential Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These are needed for the website to function and cannot be switched off.
            </p>
            <p className="text-muted-foreground mb-4">Examples include:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Security and authentication cookies</li>
              <li>Load balancing and performance cookies</li>
              <li>Basic navigation cookies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Analytics & Performance Cookies</h3>
            <p className="text-muted-foreground mb-4">
              Used to understand how visitors use our website so we can improve it.
            </p>
            <p className="text-muted-foreground mb-4">Examples:</p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Google Analytics</li>
              <li>Traffic and behaviour tracking tools</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Functionality Cookies</h3>
            <p className="text-muted-foreground mb-4">
              These remember your preferences such as:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Location</li>
              <li>Form entries</li>
              <li>Display settings</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
            <p className="text-muted-foreground mb-8">
              These help us show relevant ads or measure the effectiveness of online campaigns.
              We don&apos;t overload users with ads, but certain marketing platforms (Google, Meta) may set cookies.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">3. Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Third parties may set cookies through our site, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Facebook/Meta</li>
              <li>Website hosting tools</li>
              <li>Booking or payment systems (if integrated)</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              These providers have their own privacy policies which govern how they use your data.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control cookies through your browser settings, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-muted-foreground space-y-2">
              <li>Blocking cookies</li>
              <li>Deleting cookies</li>
              <li>Setting notifications when cookies are used</li>
            </ul>
            <p className="text-muted-foreground mb-8">
              <strong>Be aware:</strong> blocking essential cookies may affect how the website performs.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">5. Consent</h2>
            <p className="text-muted-foreground mb-8">
              When you first visit our website, you may see a cookie banner or pop-up. By continuing to use the site, you accept the use of cookies unless you opt out via browser settings.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
            <p className="text-muted-foreground mb-8">
              We may update this Cookie Policy at any time. The revised version will be posted on this page with a new &quot;Last Updated&quot; date.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For questions about our Cookie Policy:
            </p>
            <p className="text-muted-foreground">
              <strong>Drum Recruitment Ltd trading as Solent Check</strong><br />
              Email:{" "}
              <a 
                href="mailto:sarah@solentcheck.co.uk" 
                className="text-primary hover:underline"
              >
                sarah@solentcheck.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
