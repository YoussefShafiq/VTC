export const company = {
  name: 'Vital Transportation Corp.',
  shortName: 'Vital',
  tagline: 'Asset-based logistics with personal accountability.',
  phone: '+1 (888) 000-0000',
  email: 'info@vitaltransport.com',
  address: {
    line1: '91 New England Ave',
    city: 'Piscataway',
    state: 'NJ',
    zip: '08854',
  },
  since: 2011,
}

export const routes = {
  home: '/',
  services: '/services',
  about: '/about',
  resources: '/resources',
}

export const navLinks = [
  {
    label: 'Services',
    href: routes.services,
  },
  { label: 'About Us', href: routes.about },
  { label: 'Resources', href: routes.resources },
]

export const hero = {
  eyebrow: 'NY & NJ Port Region · Since 2011',
  title: 'Dependable logistics built on clarity, accountability, and follow-through.',
  subtitle:
    'Vital Transportation Corp. is an asset-based carrier and logistics partner serving the NY/NJ port region and major interstate corridors with drayage, OTR, intermodal, LTL, and warehouse-backed distribution.',
  primaryCta: 'Request a Quote',
  secondaryCta: 'Explore Solutions',
}

export const introCards = [
  {
    title: 'Port-to-door precision',
    description:
      'From terminal retrieval to final delivery, Vital manages container flow with real-time dispatch visibility and disciplined execution across every handoff.',
    href: '/services',
    cta: 'View capabilities',
  },
  {
    title: 'Scaled strength, personal service',
    description:
      'Customers work directly with experienced professionals who understand their freight, communicate clearly, and manage shipments with real accountability.',
    href: '/about',
    cta: 'Why companies choose us',
  },
  {
    title: 'Flexible capacity, peak-ready',
    description:
      'Whether steady season or surge, Vital maintains the safety certifications, equipment, and warehouse infrastructure to keep your supply chain moving.',
    href: '/about',
    cta: 'About Vital',
  },
]

export const about = {
  title: 'A modern carrier with a relationship-driven model',
  paragraphs: [
    'Vital Transportation Corp. operates from a centrally located facility in Piscataway, New Jersey, supporting importers, exporters, manufacturers, retailers, and distribution networks throughout the region.',
    'The company provides port drayage, OTR trucking, LTL service, transloading, and warehouse solutions designed to streamline container flow and improve supply chain efficiency — with all required safety and compliance certifications.',
    'Vital presents a professional identity built on clarity, transparency, and operational discipline — combining the operational strength of a scaled carrier with the personal attention of a privately run logistics partner.',
  ],
  stats: [
    { value: '2011', label: 'Founded' },
    { value: 'NY/NJ', label: 'Port presence' },
    { value: 'HazMat', label: 'Certified ops' },
    { value: '24/7', label: 'Dispatch support' },
  ],
}

export const services = [
  {
    id: 'drayage',
    title: 'Port Drayage & Container Transport',
    summary:
      'Import and export container movement with terminal retrieval, specialized handling, and port-to-warehouse delivery.',
    description:
      'Vital manages the complete cycle of import and export container movement from NY/NJ port terminals to warehouses and end customers. With real-time dispatch visibility and a team that knows the ports, we eliminate friction between vessel discharge and final delivery — keeping your supply chain moving without delays.',
    imagePosition: 'center 35%',
    highlights: [
      {
        title: 'Terminal expertise',
        body: 'Deep familiarity with NY and NJ port terminals ensures faster retrieval, accurate documentation, and minimal dwell time on every container move.',
      },
      {
        title: 'Specialized handling',
        body: 'Overweight, out-of-gauge, and hazardous containers handled with the right equipment and certified personnel — no job too complex.',
      },
      {
        title: 'End-to-end visibility',
        body: 'Real-time dispatch updates keep you informed at every handoff, from terminal gate to final delivery, with direct access to your dispatch team.',
      },
    ],
    items: [
      'Import and export container movement',
      'Terminal retrieval and returns',
      'Overweight and specialized container handling',
      'Port to warehouse and port to customer delivery',
      'Real-time dispatch visibility and tracking',
      'Drayage support for transload and cross-dock programs',
    ],
  },
  {
    id: 'intermodal',
    title: 'Intermodal & Rail-Connected Services',
    summary:
      'Seamless rail ramp drayage and Class I carrier coordination for long-haul freight integration.',
    description:
      'Vital bridges the gap between rail and road — handling ramp drayage, container repositioning, and coordination with Class I carriers to keep long-haul freight flowing seamlessly. Our intermodal capabilities give shippers a reliable, cost-effective alternative for longer corridors without sacrificing service quality.',
    imagePosition: 'center 50%',
    highlights: [
      {
        title: 'Rail ramp efficiency',
        body: 'Rapid drayage from rail ramps to your distribution point minimizes dwell time and keeps freight on schedule across major eastern corridors.',
      },
      {
        title: 'Class I coordination',
        body: 'Established relationships with Class I rail carriers allow Vital to integrate seamlessly into larger intermodal programs and routing solutions.',
      },
      {
        title: 'Flexible repositioning',
        body: 'Container repositioning and chassis management across rail and port locations to optimize equipment availability and reduce empty moves.',
      },
    ],
    items: [
      'Rail ramp drayage',
      'Container repositioning',
      'Coordination with Class I rail carriers',
      'Rail to truck distribution support',
      'Intermodal integration for long-haul freight',
    ],
  },
  {
    id: 'otr',
    title: 'Over the Road Truckload (OTR)',
    summary:
      'Regional and long-haul dry van, temperature-controlled, and time-critical shipments with dedicated fleet options.',
    description:
      "Vital's OTR capabilities cover the full spectrum of truckload freight — from regional dry van runs to temperature-controlled and expedited shipments across major interstate corridors. Our company-owned fleet and professional driver network deliver dependable capacity whether you need a one-time move or a long-term dedicated program.",
    imagePosition: 'center 40%',
    highlights: [
      {
        title: 'Dedicated fleet programs',
        body: 'Recurring freight lanes benefit from dedicated fleet arrangements that provide guaranteed capacity, consistent drivers, and predictable costs.',
      },
      {
        title: 'Temperature-controlled capability',
        body: 'Reefer-equipped options for temperature-sensitive freight ensuring product integrity from pickup through delivery.',
      },
      {
        title: 'Expedited service',
        body: 'When timing is critical, our expedited truckload service prioritizes your freight with direct routing and real-time communication throughout.',
      },
    ],
    items: [
      'Regional and long-haul dry van service',
      'Temperature controlled truckload',
      'Expedited and time-critical shipments',
      'Multi-stop distribution routes',
      'Dedicated fleet programs for recurring freight',
    ],
  },
  {
    id: 'ltl',
    title: 'LTL & Partial Trucking',
    summary:
      'Cost-efficient palletized freight with appointment-based routing for retail and distribution centers.',
    description:
      'When a full truckload is more than you need, Vital\'s LTL and partial truckload options deliver cost-effective movement for palletized freight across retail, distribution, and e-commerce networks. Appointment-based routing and reliable scheduling ensure your freight reaches its destination on your timeline — not ours.',
    imagePosition: 'center 20%',
    highlights: [
      {
        title: 'Retail-ready scheduling',
        body: 'Appointment-based LTL routing designed for strict retail and distribution center receiving windows — we coordinate the paperwork so you don\'t have to.',
      },
      {
        title: 'Cost-efficient consolidation',
        body: 'Freight consolidation and deconsolidation programs reduce per-unit shipping costs and improve inventory flow for importers and e-commerce operations.',
      },
      {
        title: 'Partial truckload flexibility',
        body: 'For shipments too large for standard LTL but not quite a full load, partial truckload options offer the space you need at a price that works.',
      },
    ],
    items: [
      'Scheduled LTL service for palletized freight',
      'Partial truckload options for cost efficiency',
      'Retail and distribution center deliveries',
      'Appointment-based LTL routing',
      'Consolidation and deconsolidation programs',
    ],
  },
  {
    id: 'warehouse',
    title: 'Warehouse & Distribution',
    summary:
      'Short and long-term storage, cross-docking, transloading, and value-added services for importers and e-commerce.',
    description:
      "Vital's Piscataway, NJ warehouse facility supports the full range of storage and distribution needs — from short-term overflow to long-term inventory management. We have successfully managed storage, assembly, and transloading programs for major retail brands including CVS Pharmacy, Famous Footwear, and Old Navy.",
    imagePosition: 'center 65%',
    highlights: [
      {
        title: 'Flexible storage terms',
        body: 'Short and long-term storage solutions designed to scale with your inventory needs — ideal for importers managing seasonal volume and e-commerce overflow.',
      },
      {
        title: 'Value-added services',
        body: 'Palletizing, labeling, display assembly, and custom packaging services that prepare your product for retail distribution without a separate stop.',
      },
      {
        title: 'Cross-dock & transload',
        body: 'Rapid cross-docking and transloading programs reduce handling costs and transit time by moving freight efficiently between modes and carriers.',
      },
    ],
    items: [
      'Short-term and long-term storage',
      'Cross-docking and transloading',
      'Palletizing, labeling, and value-added services',
      'Freight consolidation and deconsolidation',
      'Inventory staging for retail and e-commerce',
      'Transload to truck programs for importers',
    ],
  },
  {
    id: 'specialized',
    title: 'Specialized & Final Mile',
    summary:
      'HazMat-certified transport, final mile delivery, and tailored logistics support for complex operations.',
    description:
      "Vital's specialized and final mile capabilities handle the freight that requires more than standard equipment or expertise. From HazMat-certified moves with compliant documentation to residential and commercial final mile delivery with liftgate service, we support complex logistics programs with the care they demand.",
    imagePosition: 'center 25%',
    highlights: [
      {
        title: 'HazMat certified',
        body: 'Certified drivers, compliant documentation, and secure chain-of-custody handling ensure your hazardous materials move safely and in full regulatory compliance.',
      },
      {
        title: 'Final mile precision',
        body: 'Retail and commercial final mile delivery with liftgate-equipped vehicles and appointment-based windows to meet strict delivery requirements.',
      },
      {
        title: 'Tailored SOPs',
        body: 'Customer-specific standard operating procedures built around your freight requirements — whether that means customs support, surge coverage, or specialized communication.',
      },
    ],
    items: [
      'Certified HazMat drivers and compliant documentation',
      'Retail and commercial final mile with liftgate delivery',
      'Appointment-based delivery windows',
      'Customs-related documentation assistance',
      'Surge and overflow freight coverage',
      'Customer-specific SOP development',
    ],
  },
]

export const whyVital = {
  title: 'Why is it Vital?',
  description:
    'Vital Transportation is a modern, people-focused logistics partner built on clarity, professionalism, and dependable execution. Companies choose Vital for consistent performance, practical problem solving, and leadership that stays close to the work.',
  pillars: [
    'Asset-based reliability',
    'Strong NY and NJ port presence',
    'HazMat certified operations',
    'Flexible capacity during peak seasons',
    'Professional drivers and dispatch',
    'Real-time communication',
    'A human, relationship-driven service model',
    'Comprehensive drayage, intermodal, OTR, LTL, and warehouse capabilities',
  ],
}

export const leadership = {
  title: 'Leadership',
  subtitle: 'Experienced operators committed to staying close to the work and the customer.',
  members: [
    {
      name: 'Mohamed Koura',
      role: 'Chief Executive Officer',
      bio: 'Mr. Koura has been the CEO of Vital since 2011 after serving as an Operations Supervisor at JB Hunt. His background in large-scale transportation and hands-on operations allows him to lead a nimble and adaptable company that responds to the needs of its customers. He is bilingual in Arabic and English, which strengthens communication across a diverse workforce and customer base.',
      placeholder: true,
    },
    {
      name: 'Leadership Team Member',
      role: 'Operations',
      bio: 'Additional leadership profiles will be added as the team expands.',
      placeholder: true,
    },
    {
      name: 'Leadership Team Member',
      role: 'Dispatch & Fleet',
      bio: 'Additional leadership profiles will be added as the team expands.',
      placeholder: true,
    },
  ],
}

export const aboutPage = {
  hero: {
    eyebrow: 'Our story · Since 2011',
    title: 'Growing as a team',
    subtitle:
      'What started as a single truck and a shared vision has grown into a fleet-backed logistics powerhouse trusted by importers, retailers, and distribution networks across the NY/NJ region.',
    stats: [
      { value: '2011', label: 'Founded' },
      { value: '100+', label: 'Trailers' },
      { value: '50+', label: 'Drivers' },
      { value: 'Top 100', label: 'Rated carrier' },
    ],
  },
  story: {
    lead: 'An exceptional team of logistics veterans laid the foundation of what would become not just another trucking company, but an industry powerhouse — leading through exceptional service and career-changing opportunities.',
    paragraphs: [
      'With previous experience at J.B. Hunt and more than 45 years of combined trucking industry wisdom, the founding team entered the logistics industry with a vision to revolutionize it.',
      'What started with a single truck turned into a fleet of over 100 tractor-trailers, 25 tractors, 50 adept drivers, and 4 box trucks — a true story of resilience, innovation, and an unwavering focus on customer satisfaction.',
      'In 2017, the company expanded into warehouse operations, providing storage, assembly, and transloading services. Vital has since managed programs for leading brands including CVS Pharmacy, Famous Footwear, and Old Navy.',
      'Today, Vital has earned the trust of its customers and cemented its reputation by consistently ranking among the top 100 carriers for industry leaders like Trinity, C.H. Robinson, and Total Quality Logistics.',
    ],
    milestones: [
      { year: '2011', label: 'Company founded', detail: 'Launched with a single truck and a vision to build a better logistics partner.' },
      { year: '2017', label: 'Warehouse expansion', detail: 'Grew into full warehouse operations — storage, assembly, and transloading for major retail brands.' },
      { year: 'Today', label: 'Regional leader', detail: 'Top-100 rated carrier with 100+ trailers, 50+ professional drivers, and growing.' },
    ],
  },
  values: {
    eyebrow: 'Our values',
    title: 'Where everything is vital',
    subtitle: 'What sets Vital Transportation apart is our commitment driven by a singular vision: your success. Our core values are the pillars driving us to deliver services that go beyond expectations.',
    items: [
      {
        id: 'reliability',
        number: '01',
        title: 'Reliability',
        description: 'Every move we make and every strategy we implement is aligned with one goal — your complete satisfaction. We choose excellence as our benchmark, ensuring your freight arrives on time, every time.',
        icon: 'shield-check',
      },
      {
        id: 'innovation',
        number: '02',
        title: 'Innovation',
        description: 'GPS-enabled fleet monitoring, a modern Transportation Management System, and continuously refined SOPs keep Vital adaptable and efficient — well-equipped to embrace new opportunities.',
        icon: 'lightning-bolt',
      },
      {
        id: 'trust',
        number: '03',
        title: 'Trust',
        description: 'Customers work directly with knowledgeable professionals who understand their freight. We earn trust through steady communication, accessible support, and reliable follow-through.',
        icon: 'handshake',
      },
    ],
  },
  safety: {
    eyebrow: 'Safety',
    title: 'Our goal is clear',
    subtitle: 'Safety Without Compromise — at Vital, safety is not just a policy; it\'s our promise. We ensure our staff is protected and your deliveries arrive on time, every time.',
    commitments: [
      'Hands-on driver training and highest safety standards',
      'HazMat certified drivers and compliant documentation',
      'GPS-enabled fleet monitoring across all vehicles',
      'Secure yard and warehouse infrastructure',
      'Zero-accident environment as a core operational goal',
      'Continuously evolving safety methods across all departments',
    ],
    quote: 'We\'re constantly evolving, enhancing our methods across all departments — from our offices to the open road — to serve you better.',
  },
  founders: {
    eyebrow: 'Leadership',
    title: 'Meet the team',
    subtitle: 'Three founders. Over 45 years of combined industry wisdom. One shared commitment to delivering peace of mind with every shipment.',
    members: [
      {
        name: 'Mohamed Koura',
        role: 'Founder & Chief Executive Officer',
        bio: 'The mastermind behind Vital Transportation Corp., Mohamed\'s great leadership, operational, and management skills steer the company\'s exponential growth. With more than a decade of logistics experience, including a background as an Operations Supervisor at J.B. Hunt, he leads a nimble and adaptable company committed to customer success. He is bilingual in Arabic and English, which strengthens communication across a diverse workforce and customer base.',
        initials: 'MK',
      },
      {
        name: 'Ahmed Koura',
        role: 'Founder & Chief Executive Officer',
        bio: 'Ahmed is the backbone of all operations and the driving force behind Vital\'s innovative and technological advancement. His vast operational skills and logistical insights ensure supply chains run smoothly. With a decade of experience at J.B. Hunt and a deep understanding of logistics technology, he optimizes every process — making Vital a reliable and efficient choice in the industry.',
        initials: 'AK',
      },
      {
        name: 'Hamid K. Hassan',
        role: 'Founder & Chief Executive Officer',
        bio: 'Hamid is the mastermind behind Vital\'s strategic success. His forward-thinking strategies keep Vital adaptable and well-equipped to tackle challenges and embrace new opportunities. Hamid\'s commitment to innovation and risk management ensures Vital stays ahead of traditional logistics, making it a reliable and innovative partner for all freight needs.',
        initials: 'HH',
      },
    ],
  },
}

export const regions = [
  'New Jersey',
  'New York',
  'NY and NJ Ports',
  'Regional interstate lanes',
]

export const resourceLinks = [
  {
    title: 'Resources Hub',
    description:
      'Information and tools for prospects and customers — built to keep people coming back for credible guidance.',
    href: '/resources',
    status: 'Coming soon',
  },
  {
    title: 'Sustainability',
    description:
      'Practical insights and facility practices that support more sustainable transportation decisions.',
    href: '/resources',
    status: 'Coming soon',
  },
  {
    title: 'Case Studies',
    description:
      'Real examples of how Vital solves problems and responds to customer needs behind the scenes.',
    href: '/resources',
    status: 'Coming soon',
  },
]

export const cta = {
  title: 'Partner with Vital for seamless regional logistics',
  description:
    'Tell us about your freight and we will respond with a tailored quote — port drayage, intermodal, OTR, LTL, warehouse, or specialized moves across the NY/NJ region.',
  button: 'Submit Quote Request',
  successTitle: 'Quote request received',
  successMessage:
    'Thank you. Our team will review your shipment details and reach out shortly with a tailored quote.',
}

export const quotationForm = {
  serviceOptions: [
    { value: '', label: 'Select a service' },
    { value: 'drayage', label: 'Port Drayage & Container Transport' },
    { value: 'intermodal', label: 'Intermodal & Rail-Connected Services' },
    { value: 'otr', label: 'Over the Road Truckload (OTR)' },
    { value: 'ltl', label: 'LTL & Partial Trucking' },
    { value: 'warehouse', label: 'Warehouse & Distribution' },
    { value: 'specialized', label: 'Specialized & Final Mile' },
    { value: 'other', label: 'Other / Not sure' },
  ],
  equipmentOptions: [
    { value: '', label: 'Select equipment type' },
    { value: 'container-20', label: "20' Container" },
    { value: 'container-40', label: "40' Container" },
    { value: 'container-40hc', label: "40' High Cube Container" },
    { value: 'dry-van', label: 'Dry Van' },
    { value: 'reefer', label: 'Temperature Controlled (Reefer)' },
    { value: 'flatbed', label: 'Flatbed' },
    { value: 'other', label: 'Other' },
  ],
  specialRequirements: [
    { value: 'hazmat', label: 'HazMat' },
    { value: 'overweight', label: 'Overweight' },
    { value: 'temp-controlled', label: 'Temperature controlled' },
    { value: 'liftgate', label: 'Liftgate required' },
    { value: 'appointment', label: 'Appointment delivery' },
  ],
}

export const faqs = {
  eyebrow: 'FAQ',
  title: 'Answers to common questions',
  description:
    'Quick clarity on storage, warehousing, tracking, equipment leasing, and how Vital operates day to day.',
  items: [
    {
      id: 'storage-trailers',
      question: 'Do you offer storage trailers?',
      answer:
        'Absolutely, Vital provides economical and cost-effective storage trailer solutions for your warehousing needs. You can have our storage trailers delivered directly to your site within a 50-mile radius of our headquarters, allowing easy onsite product storage. Plus, we always ensure your cargoes in Vital trailers are fully insured, offering you both efficiency and security in your storage needs.',
    },
    {
      id: 'warehouse-services',
      question: 'Do you offer Warehouse services?',
      answer:
        'Yes, we offer comprehensive warehouse services at Vital. Whether it’s storing, assembling displays, or providing temporary storage for your merchandise. Our expertise in warehouse services is extensive and proven, having successfully managed storage, assembly, and transloading for leading brands such as CVS Pharmacy, Famous Footwear, and Old Navy.',
    },
    {
      id: 'track-shipment',
      question: 'How to track shipment',
      answer:
        'Tracking your shipments with Vital is straightforward and user-friendly. We offer two main methods for shipment tracking:',
      bullets: [
        'Access to our Transportation Management System (TMS), where you can view real-time updates.',
        'Direct communication: You can email or call our dispatcher for immediate confirmations and updates regarding your shipment.',
      ],
    },
    {
      id: 'leased-equipment',
      question: 'Inquire about leased equipment',
      answer:
        'Vital provides leasing options for 53’ dry vans, which are available for both storage and road use. If you’re interested in leasing equipment or require more information about our leasing terms and conditions, please feel free to contact us directly. We are here to assist you with all your equipment leasing needs.',
    },
    {
      id: 'own-fleet',
      question: 'Does vital have their own fleet of drivers and vehicles',
      answer:
        'Absolutely, Vital boasts its own dedicated fleet of drivers and vehicles. This allows us to maintain high standards of service, ensure consistent quality, and provide reliable, timely deliveries. Our fleet is comprised of well-maintained, modern vehicles operated by professional, trained drivers.',
    },
  ],
}
