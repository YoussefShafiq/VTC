export const company = {
  name: 'Vital Transportation Corp.',
  shortName: 'Vital',
  tagline: 'Asset-based logistics with personal accountability.',
  phone: '(732) 515-9361',
  email: 'info@vitaltransport.com',
  address: {
    line1: '91 New England Avenue',
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
  careers: '/careers',
  resources: '/resources',
  termsOfUse: '/legal/terms-of-use',
  privacyPolicy: '/legal/privacy-policy',
  smsTerms: '/legal/sms-terms',
}

export const legalLinks = [
  { label: 'Terms of use', href: routes.termsOfUse },
  { label: 'Privacy Policy', href: routes.privacyPolicy },
  { label: 'SMS Terms & Conditions', href: routes.smsTerms },
]

export const navLinks = [
  {
    label: 'Services',
    href: routes.services,
  },
  { label: 'About Us', href: routes.about },
  { label: 'Careers', href: routes.careers },
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
].sort((a, b) => a.title.localeCompare(b.title));

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
      role: 'Founder & Chief Executive Officer',
      bio: 'The mastermind behind Vital Transportation Corp., Mohamed\'s great leadership, operational, and management skills steer the company\'s exponential growth. With more than a decade of logistics experience, including a background as an Operations Supervisor at J.B. Hunt, he leads a nimble and adaptable company committed to customer success. He is bilingual in Arabic and English, which strengthens communication across a diverse workforce and customer base.',
      placeholder: true,
    },
    {
      name: 'Ahmed Koura',
      role: 'Founder & Chief Executive Officer',
      bio: 'Ahmed is the backbone of all operations and the driving force behind Vital\'s innovative and technological advancement. His vast operational skills and logistical insights ensure supply chains run smoothly. With a decade of experience at J.B. Hunt and a deep understanding of logistics technology, he optimizes every process — making Vital a reliable and efficient choice in the industry.',
      placeholder: true,
    },
    {
      name: 'Hamid K. Hassan',
      role: 'Founder & Chief Executive Officer',
      bio: 'Hamid is the mastermind behind Vital\'s strategic success. His forward-thinking strategies keep Vital adaptable and well-equipped to tackle challenges and embrace new opportunities. Hamid\'s commitment to innovation and risk management ensures Vital stays ahead of traditional logistics, making it a reliable and innovative partner for all freight needs.',
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

export const careerPage = {
  hero: {
    eyebrow: 'Join our team',
    title: 'Career opportunities',
    subtitle:
      "Join Vital's team and drive your future forward with a company that values growth, innovation, and your success.",
    stats: [
      { value: '50+', label: 'Professional drivers' },
      { value: '5', label: 'Career paths' },
      { value: 'NJ', label: 'Headquarters' },
      { value: '2011', label: 'Growing since' },
    ],
  },
  benefits: {
    eyebrow: 'What we offer',
    title: 'Built for your growth',
    subtitle:
      'At Vital, we invest in people the same way we invest in our fleet — with care, consistency, and a long-term view of success.',
    items: [
      {
        id: 'pay',
        number: '01',
        title: 'Competitive pay and benefits',
        description:
          "At Vital, we always ensure to recognize and reward your hard work with competitive pay and a benefits package to support you achieving all your life's milestones.",
        icon: 'currency',
      },
      {
        id: 'growth',
        number: '02',
        title: 'Career growth',
        description:
          'At Vital, we invest in you and in your future by offering constant learning opportunities and clear paths to promotion, celebrating each milestone you reach with us.',
        icon: 'trending',
      },
      {
        id: 'balance',
        number: '03',
        title: 'Work-life balance',
        description:
          'At Vital, we prioritize your well-being, ensuring a flexible work environment that allows you to have a balanced work and personal life.',
        icon: 'balance',
      },
    ],
  },
  opportunities: {
    eyebrow: 'Open roles',
    title: 'Various kinds of opportunities',
    subtitle:
      'Explore roles at Vital, from driving and diesel technician to office and warehouse positions, and join our community of highly talented professionals.',
  },
  application: {
    endpoint: import.meta.env.VITE_CAREERS_APPLY_URL || '/api/careers/apply',
    successTitle: 'Application received',
    successMessage:
      'Thank you for applying to Vital Transportation. Our team will review your application and contact you if your qualifications match our current needs.',
    submitLabel: 'Submit application',
    cvHint: 'PDF, DOC, or DOCX · max 10 MB',
    acceptedCvTypes: ['.pdf', '.doc', '.docx'],
    maxCvSizeMb: 10,
  },
  roles: [
    {
      id: 'drivers',
      title: 'Drivers',
      icon: 'truck',
      location: 'Piscataway, NJ · Local & Regional',
      employmentType: 'Full-time',
      description:
        "Join Vital Transportation's diverse team with opportunities from local New Jersey routes to regional East Coast drives. Open to both new and experienced drivers, find the perfect fit for your career ambitions with us.",
      ctaLine: 'Apply now and steer your future in the right direction!',
      overview: [
        'Vital operates a company-owned fleet serving the NY/NJ port region and major interstate corridors. Drivers are supported by 24/7 dispatch, well-maintained equipment, and a safety-first culture.',
        'Whether you prefer local New Jersey lanes or regional East Coast runs, we match routes to your experience and career goals.',
      ],
      responsibilities: [
        'Safely operate commercial vehicles on assigned local and regional routes',
        'Complete pre-trip and post-trip inspections and report equipment issues promptly',
        'Maintain accurate logs, documentation, and communication with dispatch',
        'Represent Vital professionally at customer, terminal, and warehouse locations',
        'Follow all DOT, company safety, and customer-specific operating procedures',
      ],
      requirements: [
        'Valid CDL with clean driving record',
        'Minimum 1 year commercial driving experience preferred (training considered for qualified candidates)',
        'Ability to pass DOT physical, drug screen, and background check',
        'Strong communication skills and reliability',
        'HazMat endorsement a plus',
      ],
    },
    {
      id: 'diesel-technician',
      title: 'Diesel technician',
      icon: 'wrench',
      location: 'Piscataway, NJ',
      employmentType: 'Full-time',
      description:
        'Join Vital Transportation and become the backbone of our safety and reliability. Your expertise is not just needed — it\'s celebrated.',
      ctaLine: 'Apply now and power the success that keeps America moving!',
      overview: [
        'Our shop team keeps a growing fleet road-ready — tractors, trailers, and support equipment across port drayage, OTR, and warehouse operations.',
        'You will play a direct role in Vital\'s zero-accident operational goal through preventive maintenance and quality repairs.',
      ],
      responsibilities: [
        'Diagnose and repair diesel engines, brakes, electrical systems, and trailer components',
        'Perform scheduled preventive maintenance on fleet vehicles',
        'Document repairs, parts usage, and vehicle status accurately',
        'Coordinate with dispatch and drivers to minimize downtime',
        'Maintain a clean, safe, and organized shop environment',
      ],
      requirements: [
        '2+ years diesel/heavy truck technician experience',
        'Own tools and valid driver\'s license',
        'ASE certifications preferred',
        'Ability to work independently and as part of a team',
        'Commitment to safety standards and attention to detail',
      ],
    },
    {
      id: 'office',
      title: 'Office associates',
      icon: 'briefcase',
      location: 'Piscataway, NJ',
      employmentType: 'Full-time',
      description:
        "Power the core of Vital Transportation's delivery network. Dive into a range of office roles where your skills drive our behind-the-scenes success. Explore and match with the position that best fits your career goals and grow with us.",
      ctaLine: 'Join us now and become a part of this amazing journey.',
      overview: [
        'Office associates support dispatch, customer service, billing, and operations at our Piscataway headquarters.',
        'You will work alongside experienced logistics professionals in a fast-paced, relationship-driven environment.',
      ],
      responsibilities: [
        'Support dispatch, customer communication, and shipment coordination',
        'Process documentation, billing data, and account updates accurately',
        'Assist with scheduling, reporting, and day-to-day operational tasks',
        'Collaborate across departments to resolve customer and driver needs',
        'Maintain organized records and contribute to process improvements',
      ],
      requirements: [
        'High school diploma or equivalent; associate or bachelor\'s degree a plus',
        '1+ years office, logistics, or customer service experience preferred',
        'Proficiency with email, spreadsheets, and business software',
        'Strong written and verbal communication skills',
        'Ability to multitask in a deadline-driven environment',
      ],
    },
    {
      id: 'warehouse',
      title: 'Warehouse associates',
      icon: 'warehouse',
      location: 'Piscataway, NJ',
      employmentType: 'Full-time',
      description:
        'Join the core of Vital Transportation and play a pivotal role in loading and unloading our fleet. We value and reward your contributions.',
      ctaLine: 'Explore positions and become an essential part of our team.',
      overview: [
        'Vital\'s warehouse team supports loading, unloading, staging, and value-added services for retail and distribution programs.',
        'Warehouse associates are essential to keeping freight moving between our yard, facility, and fleet.',
      ],
      responsibilities: [
        'Load and unload trailers safely and efficiently',
        'Stage, organize, and prepare freight for outbound delivery',
        'Operate warehouse equipment such as forklifts and pallet jacks (certification provided where required)',
        'Follow labeling, counting, and quality-check procedures',
        'Maintain a clean, safe warehouse and yard environment',
      ],
      requirements: [
        'Ability to lift up to 50 lbs and work on your feet for extended periods',
        'Warehouse, logistics, or manual labor experience preferred',
        'Forklift certification a plus',
        'Reliable attendance and team-oriented attitude',
        'Willingness to follow safety and operating procedures',
      ],
    },
    {
      id: 'owner-operators',
      title: 'Independent owner operators',
      icon: 'partnership',
      location: 'NY/NJ Region · Regional lanes',
      employmentType: 'Contract / Partnership',
      description:
        'We appreciate the experience behind independent owner operators. Team up with Vital for our mission of dependable support, consistent service excellence, and a commitment to safe, timely deliveries. Grow with a team that respects your independence.',
      ctaLine: 'Apply now and see how collaboration can drive success.',
      overview: [
        'Vital partners with experienced owner operators who value consistent freight, professional support, and fair collaboration.',
        'We respect your independence while providing dispatch coordination, established customer relationships, and reliable settlement processes.',
      ],
      responsibilities: [
        'Operate and maintain your own qualified commercial equipment',
        'Meet pickup and delivery appointments with professional communication',
        'Maintain required insurance, registrations, and compliance documentation',
        'Coordinate with Vital dispatch on load assignments and route updates',
        'Uphold Vital\'s safety and customer service standards on every load',
      ],
      requirements: [
        'Valid CDL and authority (or willingness to operate under applicable agreements)',
        'Minimum 2 years verifiable OTR or regional experience',
        'Properly maintained tractor and trailer meeting Vital equipment standards',
        'Current insurance and compliance documentation',
        'Strong safety record and reliable communication',
      ],
    },
  ],
  testimonials: {
    eyebrow: 'Our team',
    title: 'Employer testimonials',
    subtitle:
      'Hear from the people who power Vital every day — drivers, technicians, and operations professionals who chose to build their careers with us.',
    items: [
      {
        id: 'review-1',
        quote:
          'Great company to work for. Management is supportive and the equipment is well maintained. I feel valued every day on the road.',
        rating: 5,
        source: 'Driver review',
      },
      {
        id: 'review-2',
        quote:
          'Vital offers real growth opportunities. I started in the warehouse and moved into dispatch — they invest in their people.',
        rating: 5,
        source: 'Operations review',
      },
      {
        id: 'review-3',
        quote:
          'Competitive pay, consistent miles, and a team that actually listens. One of the best decisions I made for my driving career.',
        rating: 5,
        source: 'Driver review',
      },
      {
        id: 'review-4',
        quote:
          'The shop culture here is top-notch. Safety comes first and technicians are treated with respect.',
        rating: 5,
        source: 'Technician review',
      },
      {
        id: 'review-5',
        quote:
          'Flexible scheduling and a family-oriented environment. Vital understands that work-life balance matters.',
        rating: 5,
        source: 'Team member review',
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

export const legalContact = {
  email: 'dispatch@vitaltransportcorp.com',
  phone: '(732) 515-9361',
  address: '91 New England Ave, Piscataway, NJ 08854, USA',
}

export const legalPages = {
  termsOfUse: {
    title: 'Terms of use',
    eyebrow: 'Legal',
    intro: [
      'Welcome to Vital Transportation Corp.',
      'By accessing and using this website (the "Site"), you agree to the following terms and conditions (the "Terms of Use"). Please read them carefully as they form a binding legal agreement between you and Vital Transportation Corp. ("Vital", "we", "us"). With years of dedicated service in the logistics sector, we pledge to maintain transparency, efficiency, and reliability in every aspect of our operations.',
    ],
    sections: [
      {
        heading: '1. Acceptance of Terms',
        paragraphs: [
          'Your access to and use of the Site is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Site. By accessing or using the Site, you signify your agreement to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Site.',
        ],
      },
      {
        heading: '2. Modification of Terms',
        paragraphs: [
          'Vital reserves the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.',
        ],
      },
      {
        heading: '3. Use of the Site',
        paragraphs: [
          'The Site is intended to provide you with information about our logistics services, and you may use it for this purpose in accordance with these Terms. You agree not to misuse the Site or its services. Misuse includes, but is not limited to, using the Site data to harm others, to distribute unsolicited advertising or spam, or to engage in illegal activities. You may not disrupt the Site\'s operations or integrity with harmful code or actions that impose an unreasonable load on the Site\'s infrastructure.',
        ],
        note: 'By attempting any unauthorized use, including but not limited to the misuse of the Site data, distribution of unsolicited advertising or spam, engaging in illegal activities, or any other actions that compromise the integrity and operations of the company, you acknowledge and accept that you will be held accountable for your actions to the fullest extent permitted by law.',
      },
      {
        heading: '4. Intellectual Property',
        paragraphs: [
          'All content on this Site, including text, graphics, logos, icons, images, is the property of Vital or its content suppliers and protected by United States and international copyright laws. You may use the Site content for your personal, non-commercial informational purpose. Any other use, including reproduction, modification, distribution, transmission, or display of the content of the Site is strictly prohibited without our express written consent.',
        ],
      },
      {
        heading: '5. User Conduct',
        paragraphs: [
          'You are solely responsible for your interactions with the Site and other users. You agree to use the Site for lawful purposes only and to respect all applicable laws and regulations while using the Site. Your use of the Site is a privilege, not a right, and we reserve the right to take any action we consider if you believe you have violated these Terms, including suspending your access to the Site.',
        ],
      },
      {
        heading: '6. Disclaimer of Warranties',
        paragraphs: [
          'The Site and all information, content, materials, products, and services included on or otherwise made available to you through the Site are provided by Vital on an "as is" and "as available" basis. Vital makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, materials, products, or services included on or otherwise made available to you through the Site.',
        ],
      },
      {
        heading: '7. Limitation of Liability',
        paragraphs: [
          'To the full extent permissible by applicable law, Vital will not be liable for any damages of any kind arising from the use of the Site or from any information, content, materials, products, or services included on or otherwise made available to you through the Site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.',
        ],
      },
      {
        heading: '8. Indemnification',
        paragraphs: [
          'You agree to indemnify, defend, and hold harmless Vital, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys\' fees, resulting from any violation of these Terms or any activity related to your use of the Site (including negligent or wrongful conduct).',
        ],
      },
      {
        heading: '9. Privacy',
        paragraphs: [
          'Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please read the Privacy Policy carefully to understand how we collect, use, and protect your personal information.',
        ],
      },
      {
        heading: '10. Governing Law',
        paragraphs: [
          'These Terms and your use of the Site are governed by and construed in accordance with the laws of the State in which Vital is headquartered, without regard to its conflict of law principles.',
        ],
      },
      {
        heading: '11. Dispute Resolution',
        paragraphs: [
          'Any dispute relating in any way to your visit to the Site or to products or services sold or distributed by Vital shall be adjudicated in the jurisdiction of the company\'s headquarters, and you consent to exclusive jurisdiction and venue in such courts.',
        ],
      },
      {
        heading: '12. Miscellaneous',
        paragraphs: [
          'Should any part of these Terms be held invalid or unenforceable by a court, such a decision does not affect the validity of the remaining portions of these Terms. The remaining clauses would continue to be fully effective. Furthermore, if Vital does not enforce any particular provision, it is not to be construed as waiving any right to do so at any time. A waiver of any term is only effective if it is in writing and signed by Vital.',
        ],
      },
      {
        heading: 'Contact Information',
        paragraphs: [
          'For any questions or concerns regarding these Terms or the Site, please contact us at:',
          'Vital Transportation Corp.',
        ],
        contact: true,
      },
    ],
    closing:
      'Your use of the Site signifies your understanding and agreement to comply with the entire Terms of Use agreement.',
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    intro: [
      'Welcome to Vital Transportation, where trust and commitment to our clients\' privacy is not only the priority but the foundation of our every operation. We recognize the importance of safeguarding your personal information and are committed to transparently managing and protecting it with the highest industry standards.',
    ],
    sections: [
      {
        heading: 'Scope of Privacy Policy',
        paragraphs: [
          'At Vital Transportation Corporation ("Vital," "we," "us," or "our"), your privacy is important to us. This Privacy Policy describes how we collect, use, store, and protect your personal information when you visit our website ("Site"), contact us, or use our logistics and warehousing services.',
          'By using our website or services, you agree to the terms in this Privacy Policy.',
        ],
      },
      {
        heading: '1. Information We Collect',
        paragraphs: ['We may collect the following types of personal information:'],
        bullets: [
          'Full name, email address, postal address, phone number',
          'Company name and position',
          'Payment and billing information',
          'Communications or messages you send to us',
          'IP address, browser type, and usage data (collected via cookies and analytics tools)',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        paragraphs: ['We use the information we collect for the following purposes:'],
        bullets: [
          'To provide, improve, and personalize our logistics and warehousing services',
          'To schedule pickups, deliveries, and warehouse tasks',
          'To process invoices and account information',
          'To send operational communications (e.g., appointment reminders, updates)',
        ],
      },
      {
        heading: '3. Sharing Your Information',
        paragraphs: [
          'We do not sell or rent your personal information.',
          'We may share your information only with trusted third-party service providers (e.g., payment processors, IT service vendors), solely for the purpose of performing business operations on our behalf. These providers are bound by confidentiality agreements.',
        ],
        note: 'Mobile Opt-in, SMS Consent, and phone numbers collected for SMS communication purposes will not be shared with any third party and affiliates for marketing purposes.',
      },
      {
        heading: '4. Cookies and Tracking Technologies',
        paragraphs: [
          'We use cookies and similar technologies to improve site functionality, analyze usage patterns, and personalize content. Users can manage cookie preferences via their browser settings.',
        ],
      },
      {
        heading: '5. Data Retention',
        paragraphs: [
          'We retain personal information only as long as necessary to fulfill the purposes stated above or as required by law.',
        ],
      },
      {
        heading: '6. Your Rights and Choices',
        paragraphs: [
          'You may request access, correction, or deletion of your personal data by contacting us. You also have the right to opt out of marketing communications at any time.',
        ],
      },
      {
        heading: '7. Data Security',
        paragraphs: [
          'We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction.',
          'However, no online transmission is ever 100% secure. Please take care when submitting personal data.',
        ],
      },
      {
        heading: '8. Your Rights and Choices',
        paragraphs: ['You have the right to:'],
        bullets: [
          'Access the personal information we hold about you',
          'Request correction or deletion of your data',
          'Withdraw consent for communications (including SMS) at any time',
          'Disable cookies through browser settings',
        ],
      },
      {
        heading: '9. Children\'s Privacy',
        paragraphs: [
          'Our website and services are not directed to children under 13, and we do not knowingly collect personal data from minors.',
        ],
      },
      {
        heading: '10. Changes to This Policy',
        paragraphs: [
          'We may update this Privacy Policy from time to time. When changes are made, we will revise the "Effective Date" at the top. Continued use of our Site indicates acceptance of the updated policy.',
        ],
      },
      {
        heading: '11. Contact Information',
        paragraphs: [
          'If you have any questions or concerns regarding this Privacy Policy, please contact us:',
          'Vital Transportation Corporation',
        ],
        contact: true,
      },
    ],
  },
  smsTerms: {
    title: 'SMS Terms & Conditions',
    eyebrow: 'Legal',
    intro: [
      'Vital Transportation Corporation ("Vital," "we," "our," or "us") is committed to protecting the privacy of all customers who consent to receive SMS messages from us. The following SMS Terms & Conditions outline how we handle SMS communications with our customers, in accordance with industry standards and regulatory requirements.',
    ],
    sections: [
      {
        heading: '1. SMS Consent Communication',
        paragraphs: [
          'To comply with industry requirements and ensure transparent communication, Vital Transportation Corporation obtains clear permission before sending any SMS messages.',
          'We obtain consent verbally by asking:',
          '"Do you agree to receive text messages from Vital Transportation Corporation regarding scheduling, service updates, or account-related information? Message and data rates may apply based on your mobile plan. Message frequency may vary. You can reply STOP at any time to opt out or HELP for support. For details, please visit our Privacy Policy and SMS Terms."',
          'Consent to receive SMS messages is collected verbally during a conversation with the customer and we do not send messages without a confirmed opt-in.',
        ],
        note: 'The information (Phone Numbers) obtained as part of the SMS consent process will not be shared with third parties or affiliates for marketing purposes.',
      },
      {
        heading: '2. Types of SMS Communications',
        paragraphs: [
          'If you have consented to receive text messages from Vital Transportation Corporation, you may receive messages related to:',
        ],
        bullets: [
          'Appointment reminders',
          'Follow-up messages',
          'Billing inquiries',
          'Dispatch updates or delivery confirmations',
        ],
      },
      {
        heading: '3. Examples of SMS Messages',
        paragraphs: ['You may receive texts like:'],
        examples: [
          {
            label: 'Appointment Reminder',
            text: 'Reminder: Your pickup with Vital Transportation is scheduled for June 15 at 2:00 PM at 91 New England Ave, Piscataway, NJ. Reply STOP to unsubscribe. HELP for support.',
          },
          {
            label: 'Billing Notification',
            text: 'Vital Transportation: Your invoice is ready. View details or contact billing. STOP to cancel. HELP for assistance.',
          },
          {
            label: 'Dispatch Confirmation',
            text: 'Your vehicle is on route for today\'s pickup. Arrival expected at 3:30 PM. Reply STOP to opt out, HELP for support.',
          },
          {
            label: 'Follow-up',
            text: 'Thank you for choosing Vital Transportation. If you have questions or feedback, reply HELP. To stop messages, reply STOP.',
          },
          {
            label: 'Service Update',
            text: 'Service update: Your scheduled delivery is confirmed for Monday, July 1. STOP to cancel messages. HELP for support.',
          },
        ],
      },
      {
        heading: '4. Message Frequency',
        paragraphs: [
          'Message frequency may vary based on the type of service or communication.',
          'Example: "Message frequency may vary. You may receive up to 2 SMS messages per week regarding your appointments or account status."',
        ],
      },
      {
        heading: '5. Potential Fees for SMS Messaging',
        paragraphs: [
          'Standard message and data rates may apply. These charges depend on your mobile carrier\'s pricing plan and may vary for domestic or international messages.',
        ],
      },
      {
        heading: '6. Opt-In Method',
        paragraphs: [
          'You may opt-in to receive SMS messages from Vital Transportation Corporation in the following way:',
        ],
        bullets: ['Verbally, during a conversation'],
        paragraphsAfter: [
          'This is the only method currently used for SMS opt-in. No SMS messages are sent without this verbal consent.',
        ],
      },
      {
        heading: '7. Opt-Out Method',
        paragraphs: ['You may opt out of SMS communications at any time:'],
        bullets: [
          'Reply "STOP" to any SMS message you receive',
          'Alternatively, contact us at dispatch@vitaltransportcorp.com or call (732) 515-9361 to be removed from our SMS list',
        ],
      },
      {
        heading: '8. Help',
        paragraphs: ['If you need assistance regarding SMS messages:'],
        bullets: [
          'Reply "HELP" to any SMS you receive',
          'Or contact us directly at dispatch@vitaltransportcorp.com or (732) 515-9361',
        ],
      },
      {
        heading: '9. Standard Messaging Disclosures',
        bullets: [
          'Message and data rates may apply',
          'Message frequency may vary',
          'You may opt out at any time by texting "STOP"',
          'For assistance, text HELP or visit our website',
          'Visit our Privacy Policy to review how we collect, use, and protect your personal information',
        ],
      },
    ],
  },
}
