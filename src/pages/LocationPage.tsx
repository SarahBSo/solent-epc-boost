import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { Check, MapPin, Clock, Shield, FileCheck, Calendar, Users, Home, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { LucideIcon } from "lucide-react";
import { useEffect } from "react";

interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LocationData {
  name: string;
  region: string;
  hero: {
    title: string;
    subtitle: string;
    body: string;
  };
  intro: string;
  whyChoose: WhyChooseItem[];
  whatWeCheck: string[];
  deliveryTime: string;
  areasCovered: string[];
  ctaTitle: string;
  seo: {
    title: string;
    description: string;
  };
}

const locationData: Record<string, LocationData> = {
  lymington: {
    name: "Lymington",
    region: "New Forest",
    hero: {
      title: "EPC in Lymington – Local Accredited Assessor",
      subtitle: "Fast, friendly and compliant EPC assessments for sellers, landlords and agents.",
      body: "Same-day EPC certificates available across Lymington and surrounding areas.",
    },
    intro: "Solent EPC provides reliable and accredited EPC assessments across Lymington. Whether you're selling, renting or updating compliance, we deliver quick turnaround and clear guidance every step of the way.",
    whyChoose: [
      { icon: MapPin, title: "Local Assessor", description: "Based near Lymington" },
      { icon: Clock, title: "Same-Day Certificates", description: "Fast turnaround" },
      { icon: Shield, title: "Fixed Pricing", description: "Transparent costs" },
      { icon: Users, title: "Trusted Service", description: "By landlords and agents" },
    ],
    whatWeCheck: [
      "Insulation levels",
      "Heating system efficiency",
      "Glazing type",
      "Property construction",
      "Lighting efficiency",
      "Energy-saving features",
    ],
    deliveryTime: "Most EPC certificates in Lymington are completed and emailed the same day, and added to the EPC Register shortly after the assessment.",
    areasCovered: ["Lymington Town Centre", "Pennington", "Buckland", "Woodside", "Boldre", "Everton", "Lower Pennington"],
    ctaTitle: "Ready to Book Your Lymington EPC?",
    seo: {
      title: "EPC in Lymington | Local EPC Assessor | Solent EPC",
      description: "Need an EPC in Lymington? Solent EPC provides fast, accredited EPC assessments with same-day certificates for sellers, landlords and agents. Get a quote today.",
    },
  },
  "new-milton": {
    name: "New Milton",
    region: "New Forest",
    hero: {
      title: "EPC in New Milton – Fast Local Assessments",
      subtitle: "Same-day EPC certificates for landlords, sellers and agents.",
      body: "Solent EPC provides quick, accurate energy assessments across New Milton and Barton-on-Sea.",
    },
    intro: "If you need a reliable EPC in New Milton, Solent EPC offers flexible appointments, fixed pricing and fast turnaround times.",
    whyChoose: [
      { icon: Clock, title: "Same-Day Certificates", description: "Fast delivery" },
      { icon: Shield, title: "Accredited Assessor", description: "Friendly service" },
      { icon: Calendar, title: "Flexible Appointments", description: "To suit you" },
      { icon: Users, title: "Ideal for Agents", description: "Landlords welcome" },
    ],
    whatWeCheck: [
      "Heating efficiency",
      "Loft insulation",
      "Wall construction",
      "Windows and glazing",
      "Lighting",
      "Energy-saving features",
    ],
    deliveryTime: "Most EPCs in New Milton are delivered within hours of the assessment and immediately ready for use in property listings.",
    areasCovered: ["New Milton", "Barton-on-Sea", "Ashley", "Walkford", "Bashley", "Wootton"],
    ctaTitle: "Book Your EPC in New Milton Today",
    seo: {
      title: "EPC in New Milton | Accredited EPC Assessor | Solent EPC",
      description: "Need an EPC in New Milton or Barton-on-Sea? Solent EPC provides fast, friendly and accredited EPC certificates with same-day delivery. Get your quote today.",
    },
  },
  christchurch: {
    name: "Christchurch",
    region: "Dorset",
    hero: {
      title: "EPC in Christchurch – Fast, Friendly Assessments",
      subtitle: "Accredited domestic EPCs with same-day certificate delivery.",
      body: "Solent EPC covers Christchurch, Highcliffe and surrounding areas.",
    },
    intro: "We provide accurate and efficient EPC assessments for Christchurch homeowners, landlords and estate agents needing fast compliance.",
    whyChoose: [
      { icon: Calendar, title: "Flexible Appointments", description: "Work around you" },
      { icon: Clock, title: "Same-Day Results", description: "Quick turnaround" },
      { icon: FileCheck, title: "Clear Reporting", description: "Easy to understand" },
      { icon: Users, title: "Trusted Service", description: "By agents and landlords" },
    ],
    whatWeCheck: [
      "Insulation performance",
      "Heating and boiler",
      "Glazing type",
      "Wall and roof structure",
      "Lighting energy use",
    ],
    deliveryTime: "Most EPCs in Christchurch are delivered the same day and uploaded promptly to the EPC Register.",
    areasCovered: ["Christchurch Town", "Highcliffe", "Mudeford", "Burton", "Somerford", "Stanpit"],
    ctaTitle: "Need an EPC in Christchurch?",
    seo: {
      title: "EPC in Christchurch | Same-Day EPC Certificate | Solent EPC",
      description: "Fast, accredited EPC assessments in Christchurch, Highcliffe and Mudeford. Same-day certificates available. Request your quote now.",
    },
  },
  highcliffe: {
    name: "Highcliffe",
    region: "Dorset",
    hero: {
      title: "EPC in Highcliffe – Local EPC Certificates",
      subtitle: "Fast, accredited assessments for sales, rentals and compliance.",
      body: "Solent EPC serves Highcliffe and the surrounding coastal area with same-day EPC results.",
    },
    intro: "We provide straightforward, accurate EPC assessments for homeowners, landlords and holiday-let owners in Highcliffe.",
    whyChoose: [
      { icon: Calendar, title: "Same-Day Appointments", description: "Quick booking" },
      { icon: Shield, title: "Accredited & Insured", description: "Full peace of mind" },
      { icon: FileCheck, title: "Fixed Pricing", description: "No hidden costs" },
      { icon: Home, title: "All Property Types", description: "Sales, rentals, Airbnbs" },
    ],
    whatWeCheck: [
      "Insulation levels",
      "Heating system",
      "Glazing type",
      "Lighting efficiency",
      "Property construction",
    ],
    deliveryTime: "Most EPCs in Highcliffe are completed and emailed the same day.",
    areasCovered: ["Highcliffe Village", "Walkford", "Nea Meadows", "Hoburne"],
    ctaTitle: "Book Your Highcliffe EPC Today",
    seo: {
      title: "EPC in Highcliffe | Local EPC Assessor | Solent EPC",
      description: "Get a fast, accredited EPC in Highcliffe. Solent EPC provides same-day certificates for rentals, sales and holiday lets. Get your quote now.",
    },
  },
  bournemouth: {
    name: "Bournemouth",
    region: "Dorset",
    hero: {
      title: "EPC in Bournemouth – Professional EPC Assessments",
      subtitle: "Fast, accredited EPCs for landlords, sellers and agents.",
      body: "Solent EPC offers reliable EPC inspections across Bournemouth.",
    },
    intro: "If you're selling or renting a home in Bournemouth, Solent EPC delivers quick, compliant EPCs with no hassle.",
    whyChoose: [
      { icon: Clock, title: "Same-Day Certificates", description: "Fast delivery" },
      { icon: Shield, title: "Accredited Assessor", description: "Friendly service" },
      { icon: Home, title: "All Property Types", description: "Flats to houses" },
      { icon: Users, title: "Portfolio Friendly", description: "Ideal for landlords" },
    ],
    whatWeCheck: [
      "Insulation levels",
      "Heating efficiency",
      "Glazing performance",
      "Wall/roof construction",
      "Lighting and controls",
    ],
    deliveryTime: "Most EPCs in Bournemouth are completed and emailed the same day.",
    areasCovered: ["Southbourne", "Boscombe", "Westbourne", "Charminster", "Pokesdown", "Winton", "Kinson"],
    ctaTitle: "Need a Bournemouth EPC?",
    seo: {
      title: "EPC in Bournemouth | Same-Day EPC | Solent EPC",
      description: "Accredited EPC assessor in Bournemouth providing same-day EPC certificates for landlords, sellers and agents. Request your quote today.",
    },
  },
  brockenhurst: {
    name: "Brockenhurst",
    region: "New Forest",
    hero: {
      title: "EPC in Brockenhurst – Accredited Energy Assessments",
      subtitle: "Fast EPCs for rural and New Forest homes.",
      body: "Solent EPC specialises in energy assessments for Brockenhurst properties.",
    },
    intro: "We assess cottages, forest homes, period properties and modern builds throughout Brockenhurst.",
    whyChoose: [
      { icon: MapPin, title: "Local Expertise", description: "New Forest specialist" },
      { icon: Clock, title: "Same-Day Certificates", description: "Quick turnaround" },
      { icon: Shield, title: "Reliable Assessor", description: "Friendly service" },
      { icon: FileCheck, title: "Fixed Pricing", description: "Transparent costs" },
    ],
    whatWeCheck: [
      "Insulation levels",
      "Glazing type",
      "Heating systems",
      "Lighting efficiency",
      "Construction materials",
    ],
    deliveryTime: "Most EPCs in Brockenhurst are completed and emailed the same day.",
    areasCovered: ["Brockenhurst Village", "Balmer Lawn", "Rhinefield", "Forest Park"],
    ctaTitle: "Book Your Brockenhurst EPC",
    seo: {
      title: "EPC in Brockenhurst | Local New Forest EPC Assessor",
      description: "Fast, accredited EPC assessments in Brockenhurst. Ideal for rural homes, sales and rentals. Contact Solent EPC for a quote.",
    },
  },
  // Additional locations with standard template
  sway: {
    name: "Sway",
    region: "New Forest",
    hero: {
      title: "EPC in Sway – Local Accredited Assessor",
      subtitle: "Fast, friendly EPC assessments for New Forest properties.",
      body: "Same-day certificates available across Sway and surrounding villages.",
    },
    intro: "Solent EPC provides reliable EPC assessments for homeowners and landlords in Sway. We understand the unique character of New Forest properties.",
    whyChoose: [
      { icon: MapPin, title: "Local Knowledge", description: "New Forest based" },
      { icon: Clock, title: "Same-Day Certificates", description: "Fast turnaround" },
      { icon: Shield, title: "Fully Accredited", description: "DEA registered" },
      { icon: FileCheck, title: "Fixed Pricing", description: "No surprises" },
    ],
    whatWeCheck: ["Insulation levels", "Heating efficiency", "Glazing type", "Property construction", "Lighting", "Renewables"],
    deliveryTime: "Most EPCs in Sway are completed and emailed the same day.",
    areasCovered: ["Sway Village", "Tiptoe", "Wootton", "Mount Pleasant"],
    ctaTitle: "Book Your Sway EPC Today",
    seo: {
      title: "EPC in Sway | Local New Forest EPC Assessor | Solent EPC",
      description: "Need an EPC in Sway? Solent EPC provides fast, accredited assessments with same-day certificates. Get your quote today.",
    },
  },
  lyndhurst: {
    name: "Lyndhurst",
    region: "New Forest",
    hero: {
      title: "EPC in Lyndhurst – New Forest EPC Specialist",
      subtitle: "Accredited energy assessments for the heart of the New Forest.",
      body: "Same-day EPC certificates for sales, rentals and compliance.",
    },
    intro: "Solent EPC provides professional EPC assessments in Lyndhurst. From period cottages to modern homes, we assess all property types.",
    whyChoose: [
      { icon: MapPin, title: "New Forest Expert", description: "Local knowledge" },
      { icon: Clock, title: "Same-Day Service", description: "Quick results" },
      { icon: Shield, title: "Accredited & Insured", description: "Full peace of mind" },
      { icon: Users, title: "Trusted Locally", description: "By agents and landlords" },
    ],
    whatWeCheck: ["Insulation levels", "Heating systems", "Glazing type", "Wall construction", "Lighting efficiency", "Energy features"],
    deliveryTime: "Most EPCs in Lyndhurst are completed and delivered the same day.",
    areasCovered: ["Lyndhurst Village", "Bank", "Emery Down", "Swan Green"],
    ctaTitle: "Book Your Lyndhurst EPC",
    seo: {
      title: "EPC in Lyndhurst | New Forest EPC Assessor | Solent EPC",
      description: "Fast, accredited EPC assessments in Lyndhurst and the New Forest. Same-day certificates available. Get your quote today.",
    },
  },
  totton: {
    name: "Totton",
    region: "Hampshire",
    hero: {
      title: "EPC in Totton – Fast Local Assessments",
      subtitle: "Same-day EPC certificates for Hampshire properties.",
      body: "Reliable EPC inspections across Totton, Calmore and surrounding areas.",
    },
    intro: "Solent EPC offers efficient EPC assessments in Totton with flexible appointments and fast certificate delivery.",
    whyChoose: [
      { icon: Clock, title: "Same-Day Certificates", description: "Quick delivery" },
      { icon: Calendar, title: "Flexible Booking", description: "Suits your schedule" },
      { icon: Shield, title: "Fully Accredited", description: "DEA registered" },
      { icon: FileCheck, title: "Fixed Pricing", description: "Transparent costs" },
    ],
    whatWeCheck: ["Insulation levels", "Heating efficiency", "Glazing type", "Wall construction", "Lighting", "Hot water system"],
    deliveryTime: "Most EPCs in Totton are completed and emailed the same day.",
    areasCovered: ["Totton Town", "Calmore", "Testwood", "Eling", "Rushington"],
    ctaTitle: "Book Your Totton EPC Today",
    seo: {
      title: "EPC in Totton | Accredited EPC Assessor | Solent EPC",
      description: "Need an EPC in Totton? Solent EPC provides fast, accredited assessments with same-day certificate delivery. Get your quote now.",
    },
  },
  hythe: {
    name: "Hythe",
    region: "Hampshire",
    hero: {
      title: "EPC in Hythe – Local Hampshire Assessor",
      subtitle: "Fast, accredited EPCs for waterside properties.",
      body: "Same-day certificates across Hythe, Dibden and Marchwood.",
    },
    intro: "Solent EPC provides reliable EPC assessments throughout Hythe and the waterside area. Quick turnaround and clear guidance.",
    whyChoose: [
      { icon: MapPin, title: "Waterside Coverage", description: "Local assessor" },
      { icon: Clock, title: "Same-Day Certificates", description: "Fast results" },
      { icon: Shield, title: "Accredited & Insured", description: "Full peace of mind" },
      { icon: Users, title: "Agent Friendly", description: "Trusted service" },
    ],
    whatWeCheck: ["Insulation levels", "Heating systems", "Glazing type", "Property construction", "Lighting efficiency", "Renewables"],
    deliveryTime: "Most EPCs in Hythe are completed and emailed the same day.",
    areasCovered: ["Hythe Village", "Dibden", "Dibden Purlieu", "Marchwood", "Holbury"],
    ctaTitle: "Book Your Hythe EPC",
    seo: {
      title: "EPC in Hythe | Local Hampshire EPC Assessor | Solent EPC",
      description: "Fast, accredited EPC assessments in Hythe and the Waterside area. Same-day certificates available. Get your quote today.",
    },
  },
  ringwood: {
    name: "Ringwood",
    region: "Hampshire",
    hero: {
      title: "EPC in Ringwood – Accredited Local Assessor",
      subtitle: "Fast EPCs for properties on the New Forest border.",
      body: "Same-day certificates across Ringwood and surrounding areas.",
    },
    intro: "Solent EPC offers professional EPC assessments in Ringwood with flexible appointments and same-day certificate delivery.",
    whyChoose: [
      { icon: MapPin, title: "Local Service", description: "Quick response" },
      { icon: Clock, title: "Same-Day Certificates", description: "Fast turnaround" },
      { icon: Shield, title: "Fully Accredited", description: "DEA registered" },
      { icon: FileCheck, title: "Fixed Pricing", description: "No hidden fees" },
    ],
    whatWeCheck: ["Insulation levels", "Heating efficiency", "Glazing type", "Wall construction", "Lighting", "Energy features"],
    deliveryTime: "Most EPCs in Ringwood are completed and emailed the same day.",
    areasCovered: ["Ringwood Town", "Poulner", "Hightown", "Ashley Heath", "St Leonards"],
    ctaTitle: "Book Your Ringwood EPC",
    seo: {
      title: "EPC in Ringwood | Local EPC Assessor | Solent EPC",
      description: "Need an EPC in Ringwood? Solent EPC provides fast, accredited assessments with same-day delivery. Get your quote today.",
    },
  },
  "milford-on-sea": {
    name: "Milford-on-Sea",
    region: "New Forest",
    hero: {
      title: "EPC in Milford-on-Sea – Coastal EPC Specialist",
      subtitle: "Fast, accredited assessments for coastal properties.",
      body: "Same-day certificates across Milford-on-Sea and Keyhaven.",
    },
    intro: "Solent EPC provides reliable EPC assessments for coastal homes in Milford-on-Sea. From seafront properties to village homes.",
    whyChoose: [
      { icon: MapPin, title: "Coastal Expertise", description: "Local knowledge" },
      { icon: Clock, title: "Same-Day Certificates", description: "Quick delivery" },
      { icon: Shield, title: "Accredited & Insured", description: "Full coverage" },
      { icon: Home, title: "All Property Types", description: "Sales and rentals" },
    ],
    whatWeCheck: ["Insulation levels", "Heating systems", "Glazing type", "Property construction", "Lighting efficiency", "Renewables"],
    deliveryTime: "Most EPCs in Milford-on-Sea are completed and emailed the same day.",
    areasCovered: ["Milford-on-Sea Village", "Keyhaven", "Everton", "Hordle"],
    ctaTitle: "Book Your Milford-on-Sea EPC",
    seo: {
      title: "EPC in Milford-on-Sea | Coastal EPC Assessor | Solent EPC",
      description: "Fast, accredited EPC assessments in Milford-on-Sea and Keyhaven. Same-day certificates available. Get your quote today.",
    },
  },
  eastleigh: {
    name: "Eastleigh",
    region: "Hampshire",
    hero: {
      title: "EPC in Eastleigh – Professional EPC Assessments",
      subtitle: "Fast, accredited EPCs for Hampshire properties.",
      body: "Same-day certificates across Eastleigh and Chandlers Ford.",
    },
    intro: "Solent EPC offers efficient EPC assessments throughout Eastleigh with flexible appointments and quick certificate delivery.",
    whyChoose: [
      { icon: Clock, title: "Same-Day Certificates", description: "Fast turnaround" },
      { icon: Calendar, title: "Flexible Appointments", description: "Suits your schedule" },
      { icon: Shield, title: "Fully Accredited", description: "DEA registered" },
      { icon: Users, title: "Agent Friendly", description: "Portfolio discounts" },
    ],
    whatWeCheck: ["Insulation levels", "Heating efficiency", "Glazing type", "Wall construction", "Lighting", "Hot water system"],
    deliveryTime: "Most EPCs in Eastleigh are completed and emailed the same day.",
    areasCovered: ["Eastleigh Town", "Chandlers Ford", "Bishopstoke", "Fair Oak", "Velmore"],
    ctaTitle: "Book Your Eastleigh EPC",
    seo: {
      title: "EPC in Eastleigh | Accredited EPC Assessor | Solent EPC",
      description: "Need an EPC in Eastleigh or Chandlers Ford? Solent EPC provides fast, accredited assessments with same-day delivery. Get your quote now.",
    },
  },
  romsey: {
    name: "Romsey",
    region: "Hampshire",
    hero: {
      title: "EPC in Romsey – Local Accredited Assessor",
      subtitle: "Fast, friendly EPCs for Test Valley properties.",
      body: "Same-day certificates across Romsey and surrounding villages.",
    },
    intro: "Solent EPC provides professional EPC assessments in Romsey. From period homes to modern builds, we assess all property types.",
    whyChoose: [
      { icon: MapPin, title: "Test Valley Coverage", description: "Local assessor" },
      { icon: Clock, title: "Same-Day Certificates", description: "Quick results" },
      { icon: Shield, title: "Accredited & Insured", description: "Full peace of mind" },
      { icon: FileCheck, title: "Fixed Pricing", description: "Transparent costs" },
    ],
    whatWeCheck: ["Insulation levels", "Heating systems", "Glazing type", "Property construction", "Lighting efficiency", "Energy features"],
    deliveryTime: "Most EPCs in Romsey are completed and emailed the same day.",
    areasCovered: ["Romsey Town", "North Baddesley", "Ampfield", "Braishfield", "Nursling"],
    ctaTitle: "Book Your Romsey EPC",
    seo: {
      title: "EPC in Romsey | Local Hampshire EPC Assessor | Solent EPC",
      description: "Fast, accredited EPC assessments in Romsey and Test Valley. Same-day certificates available. Get your quote today.",
    },
  },
  southampton: {
    name: "Southampton",
    region: "Hampshire",
    hero: {
      title: "EPC in Southampton – Professional City Assessor",
      subtitle: "Fast, accredited EPCs across Southampton.",
      body: "Same-day certificates for flats, houses and HMOs.",
    },
    intro: "Solent EPC provides reliable EPC assessments throughout Southampton. From city centre flats to suburban family homes.",
    whyChoose: [
      { icon: Home, title: "All Property Types", description: "Flats to HMOs" },
      { icon: Clock, title: "Same-Day Certificates", description: "Fast delivery" },
      { icon: Shield, title: "Fully Accredited", description: "DEA registered" },
      { icon: Users, title: "Portfolio Friendly", description: "Landlord discounts" },
    ],
    whatWeCheck: ["Insulation levels", "Heating efficiency", "Glazing type", "Wall construction", "Lighting", "Communal heating"],
    deliveryTime: "Most EPCs in Southampton are completed and emailed the same day.",
    areasCovered: ["Southampton City", "Shirley", "Bitterne", "Woolston", "Portswood", "Bassett", "Swaythling"],
    ctaTitle: "Book Your Southampton EPC",
    seo: {
      title: "EPC in Southampton | City EPC Assessor | Solent EPC",
      description: "Accredited EPC assessor in Southampton providing same-day certificates for landlords, sellers and agents. Request your quote today.",
    },
  },
  poole: {
    name: "Poole",
    region: "Dorset",
    hero: {
      title: "EPC in Poole – Professional Coastal Assessor",
      subtitle: "Fast, accredited EPCs for Poole properties.",
      body: "Same-day certificates across Poole and Sandbanks.",
    },
    intro: "Solent EPC offers efficient EPC assessments throughout Poole. From harbour-side apartments to family homes.",
    whyChoose: [
      { icon: Clock, title: "Same-Day Certificates", description: "Quick turnaround" },
      { icon: Shield, title: "Accredited Assessor", description: "Friendly service" },
      { icon: Home, title: "All Property Types", description: "Flats to houses" },
      { icon: Users, title: "Agent Friendly", description: "Trusted locally" },
    ],
    whatWeCheck: ["Insulation levels", "Heating efficiency", "Glazing type", "Wall construction", "Lighting", "Hot water system"],
    deliveryTime: "Most EPCs in Poole are completed and emailed the same day.",
    areasCovered: ["Poole Town", "Canford Cliffs", "Parkstone", "Branksome", "Sandbanks", "Lilliput"],
    ctaTitle: "Book Your Poole EPC",
    seo: {
      title: "EPC in Poole | Coastal EPC Assessor | Solent EPC",
      description: "Need an EPC in Poole? Solent EPC provides fast, accredited assessments with same-day delivery. Get your quote today.",
    },
  },
  ferndown: {
    name: "Ferndown",
    region: "Dorset",
    hero: {
      title: "EPC in Ferndown – Local Accredited Assessor",
      subtitle: "Fast, friendly EPCs for East Dorset properties.",
      body: "Same-day certificates across Ferndown and surrounding areas.",
    },
    intro: "Solent EPC provides reliable EPC assessments in Ferndown with flexible appointments and quick certificate delivery.",
    whyChoose: [
      { icon: MapPin, title: "East Dorset Coverage", description: "Local assessor" },
      { icon: Clock, title: "Same-Day Certificates", description: "Fast results" },
      { icon: Shield, title: "Accredited & Insured", description: "Full peace of mind" },
      { icon: FileCheck, title: "Fixed Pricing", description: "No hidden fees" },
    ],
    whatWeCheck: ["Insulation levels", "Heating systems", "Glazing type", "Property construction", "Lighting efficiency", "Energy features"],
    deliveryTime: "Most EPCs in Ferndown are completed and emailed the same day.",
    areasCovered: ["Ferndown Town", "West Moors", "Longham", "Hampreston", "Trickett's Cross"],
    ctaTitle: "Book Your Ferndown EPC",
    seo: {
      title: "EPC in Ferndown | Local Dorset EPC Assessor | Solent EPC",
      description: "Fast, accredited EPC assessments in Ferndown and East Dorset. Same-day certificates available. Get your quote today.",
    },
  },
  wimborne: {
    name: "Wimborne",
    region: "Dorset",
    hero: {
      title: "EPC in Wimborne – Accredited Local Assessor",
      subtitle: "Fast EPCs for Wimborne Minster properties.",
      body: "Same-day certificates across Wimborne and surrounding villages.",
    },
    intro: "Solent EPC provides professional EPC assessments in Wimborne. From period properties to modern builds.",
    whyChoose: [
      { icon: MapPin, title: "Local Service", description: "Quick response" },
      { icon: Clock, title: "Same-Day Certificates", description: "Fast turnaround" },
      { icon: Shield, title: "Fully Accredited", description: "DEA registered" },
      { icon: Users, title: "Trusted Locally", description: "By agents and landlords" },
    ],
    whatWeCheck: ["Insulation levels", "Heating efficiency", "Glazing type", "Wall construction", "Lighting", "Hot water system"],
    deliveryTime: "Most EPCs in Wimborne are completed and emailed the same day.",
    areasCovered: ["Wimborne Minster", "Colehill", "Merley", "Canford Magna", "Pamphill"],
    ctaTitle: "Book Your Wimborne EPC",
    seo: {
      title: "EPC in Wimborne | Local Dorset EPC Assessor | Solent EPC",
      description: "Need an EPC in Wimborne? Solent EPC provides fast, accredited assessments with same-day delivery. Get your quote today.",
    },
  },
};

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = slug ? locationData[slug] : null;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.propsys.uk/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!location) {
    return (
      <Layout>
        <Helmet>
          <title>Area Not Found | Solent EPC</title>
        </Helmet>
        <div className="section-padding container-section text-center">
          <h1 className="text-3xl font-heading font-bold text-accent mb-4">Area Not Found</h1>
          <p className="text-muted-foreground mb-8">We couldn't find information for this area.</p>
          <Button asChild variant="hero">
            <Link to="/areas">View All Areas</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{location.seo.title}</title>
        <meta name="description" content={location.seo.description} />
        <link rel="canonical" href={`https://solentepc.co.uk/epc/${slug}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">{location.region}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-accent mb-4">
              {location.hero.title}
            </h1>
            <p className="text-xl font-medium text-foreground mb-2">
              {location.hero.subtitle}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {location.hero.body}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="xl">
                <a href="#book">Get Quote</a>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <a href="tel:07803280068">Call for Availability</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-lg text-foreground leading-relaxed">
              {location.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Card Grid */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-8">
            Why Choose Solent EPC in {location.name}?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {location.whyChoose.map((item) => (
              <div key={item.title} className="bg-background rounded-xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-accent mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Check - List */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
              What We Check
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {location.whatWeCheck.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Time - Text Block */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold text-accent mb-2">
                  Same-Day Certificate Delivery
                </h2>
                <p className="text-foreground">
                  {location.deliveryTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover - Card Grid */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-accent mb-6">
            Areas We Cover in {location.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {location.areasCovered.map((area) => (
              <span
                key={area}
                className="bg-card rounded-lg px-4 py-2 text-sm font-medium text-foreground shadow-sm border border-border"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Booking Form */}
      <section id="book" className="section-padding bg-primary">
        <div className="container-section">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground mb-4 text-center">
              {location.ctaTitle}
            </h2>
            <p className="text-primary-foreground/80 text-center mb-8">
              Fill in the form below and we'll get back to you to confirm your appointment.
            </p>
            <div className="bg-background rounded-xl shadow-card overflow-hidden">
              <iframe
                src="https://www.propsys.uk/widget/form/c2pJWs3JiNu2v1o1S7b6"
                style={{ width: "100%", height: "930px", border: "none", borderRadius: "3px" }}
                id="inline-c2pJWs3JiNu2v1o1S7b6"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="SCEPC 01 Website Contact Us"
                data-height="930"
                data-layout-iframe-id="inline-c2pJWs3JiNu2v1o1S7b6"
                data-form-id="c2pJWs3JiNu2v1o1S7b6"
                title="SCEPC 01 Website Contact Us"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="section-padding bg-card">
        <div className="container-section text-center">
          <h2 className="text-xl font-heading font-bold text-accent mb-4">
            Other Areas We Cover
          </h2>
          <p className="text-muted-foreground mb-6">
            We also provide EPC assessments in Lymington, New Milton, Christchurch, Bournemouth, and more.
          </p>
          <Button asChild variant="outline">
            <Link to="/areas">View All Areas</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default LocationPage;
