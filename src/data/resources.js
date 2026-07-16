export const resourcesCategories = [
  {
    id: 'all',
    label: 'All topics',
    description: 'Browse every question across operations, shipping, services, billing, and preparation.',
    accent: 'twilightIndigo',
  },
  {
    id: 'general',
    label: 'General',
    description: 'Fleet capabilities, service regions, equipment, safety, and how Vital operates day to day.',
    accent: 'twilightIndigo',
  },
  {
    id: 'pricing',
    label: 'Pricing & billing',
    description: 'Quotes, rates, accessorials, detention, and payment options.',
    accent: 'twilightIndigo',
  },
  {
    id: 'service',
    label: 'Services',
    description: 'Liftgate, specialized freight, temperature control, warehousing, leasing, and capacity.',
    accent: 'aliceBlue',
  },
  {
    id: 'shipment',
    label: 'Shipment',
    description: 'Pickup, delivery, tracking, delays, documentation, and freight handling on the road.',
    accent: 'racingRed',
  },
  {
    id: 'preparation',
    label: 'Shipper preparation',
    description: 'Packaging, labeling, pickup readiness, and oversized freight guidelines.',
    accent: 'racingRed',
  },
]

export const resourcesPage = {
  hero: {
    eyebrow: 'Resources',
    title: 'Knowledge hub for shippers and partners',
    subtitle:
      'Sustainability insights, case studies, and answers to the questions shippers ask most — organized by topic so you can find what you need fast.',
    stats: [
      { value: '30+', label: 'FAQ answers' },
      { value: '5', label: 'Topic areas' },
      { value: '24/7', label: 'Dispatch support' },
      { value: '13', label: 'State region' },
    ],
  },
  sustainability: {
    eyebrow: 'Sustainability',
    title: 'Built into every mile',
    body: 'At Vital Transportation, sustainability is central to our mission and built into the core of our daily operations. By leveraging optimized route planning, a modern fuel-efficient fleet, and disciplined driving practices, we actively reduce fuel consumption and emissions on every mile we haul. We combine these operational efficiencies with energy-conscious warehouse management to minimize our environmental footprint. Our commitment goes beyond equipment — we empower our entire team, from drivers to warehouse staff, to drive sustainable change. By implementing practical solutions that reduce waste and conserve energy, we ensure that a culture of environmental responsibility is maintained across every mile of our operation, contributing to a cleaner, more sustainable supply chain.',
  },
  caseStudies: {
    eyebrow: 'Case studies',
    title: 'Real results, real operations',
    body: 'Discover how Vital Transportation achieves measurable results and delivers innovative solutions by exploring our collection of real-world case studies and in-depth whitepapers.',
    status: 'Coming soon',
  },
}

export const homeFaqSection = {
  eyebrow: 'FAQ',
  title: 'Quick answers to get you started',
  description:
    'A preview of what shippers ask most — explore the full FAQ library on Resources for 30+ answers across operations, shipping, billing, and preparation.',
  featuredIds: [
    'freight-types',
    'track-shipment',
    'liftgate',
    'request-quote',
    'own-fleet',
  ],
}

export const resourcesFaqs = [
  // General
  {
    id: 'freight-types',
    category: 'general',
    question: 'What types of freight does Vital Transportation haul?',
    answer:
      'Vital handles port drayage and container transport, intermodal and rail-connected moves, over-the-road truckload (dry van and temperature-controlled), LTL and partial truckload, warehouse-backed distribution, and specialized final-mile delivery with liftgate service.',
  },
  {
    id: 'service-regions',
    category: 'general',
    question: 'What areas or regions does Vital Transportation service?',
    answer:
      'Vital is headquartered in Piscataway, New Jersey and serves the Northeast & Mid-Atlantic Service Region — covering Connecticut, Delaware, Maine, Maryland, Massachusetts, New Hampshire, New Jersey, New York, Pennsylvania, Rhode Island, Vermont, Virginia, and West Virginia — plus major East Coast ports and interstate corridors. Need coverage beyond this region? Contact us — Vital can still help.',
    bullets: [
      'Multi-port East Coast drayage: NY/NJ, Philadelphia, Baltimore, Boston, Wilmington & Hampton Roads',
      'Northeast & Mid-Atlantic Service Region regional lanes',
      'Warehouse and distribution support from Piscataway, NJ',
    ],
  },
  {
    id: 'equipment',
    category: 'general',
    question: 'What equipment does Vital Transportation operate (box trucks, liftgates, tractors, etc.)?',
    answer:
      'Vital operates a company-owned fleet including tractor-trailers, dry vans, temperature-controlled units, box trucks, and liftgate-equipped vehicles for retail and commercial final-mile delivery. Equipment is matched to your freight requirements — from container chassis at the port to 53\' dry vans for OTR and warehouse programs.',
  },
  {
    id: 'safety-compliance',
    category: 'general',
    question: 'What are Vital Transportation\'s safety and compliance standards?',
    answer:
      'Safety without compromise is a core operational goal at Vital. Our standards include hands-on driver training, DOT-compliant operations and documentation, GPS-enabled fleet monitoring, secure yard and warehouse infrastructure, and continuously evolving safety methods across all departments.',
  },
  {
    id: 'dedicated-contact',
    category: 'general',
    question: 'Do customers get a dedicated dispatcher or point of contact?',
    answer:
      'Yes. Vital\'s relationship-driven model means customers work directly with experienced dispatch and account professionals who understand their freight, communicate clearly, and manage shipments with real accountability — not a faceless call center.',
  },
  {
    id: 'operating-hours',
    category: 'general',
    question: 'What are Vital Transportation\'s operating hours?',
    answer:
      'Vital provides 24/7 dispatch support for active shipments. Office and warehouse operations follow standard business hours with extended coverage available for time-critical and port-driven programs. Contact dispatch for appointment-specific scheduling.',
  },
  {
    id: 'own-fleet',
    category: 'general',
    question: 'Does Vital have their own fleet of drivers and vehicles?',
    answer:
      'Absolutely. Vital boasts its own dedicated fleet of drivers and vehicles. This allows us to maintain high standards of service, ensure consistent quality, and provide reliable, timely deliveries. Our fleet is comprised of well-maintained, modern vehicles operated by professional, trained drivers.',
  },

  // Shipment
  {
    id: 'on-time-delivery',
    category: 'shipment',
    question: 'How does Vital Transportation ensure on-time pickup and delivery?',
    answer:
      'Vital combines real-time dispatch visibility, disciplined execution at every handoff, and experienced professionals who know port terminals and regional lanes. Appointment-based routing, proactive communication, and GPS-enabled fleet monitoring help keep pickups and deliveries on schedule.',
  },
  {
    id: 'track-shipment',
    category: 'shipment',
    question: 'How can I track my shipment or get status updates?',
    answer:
      'Tracking your shipments with Vital is straightforward and user-friendly. We offer two main methods for shipment tracking:',
    bullets: [
      'Access to our Transportation Management System (TMS), where you can view real-time updates.',
      'Direct communication: email or call our dispatcher for immediate confirmations and updates regarding your shipment.',
    ],
  },
  {
    id: 'schedule-pickup',
    category: 'shipment',
    question: 'What is the process for scheduling a pickup?',
    answer:
      'Contact Vital with your pickup details — origin, destination, freight type, equipment needs, and preferred timing. Our dispatch team confirms capacity, assigns a driver, and coordinates terminal or warehouse access. For recurring lanes, dedicated fleet programs can be arranged.',
  },
  {
    id: 'weather-delays',
    category: 'shipment',
    question: 'What happens if my shipment is delayed due to weather or road conditions?',
    answer:
      'When weather or road conditions affect transit, Vital communicates proactively with updated ETAs and alternative routing where possible. Safety remains the priority — drivers follow disciplined protocols and dispatch keeps you informed until delivery is completed.',
  },
  {
    id: 'damaged-freight',
    category: 'shipment',
    question: 'What is Vital Transportation\'s policy for damaged freight?',
    answer:
      'Vital takes freight integrity seriously. If damage occurs, notify dispatch immediately with documentation and photos. Claims are handled in accordance with applicable carrier terms and the Bill of Lading. Proper packaging and accurate BOL information help protect your shipment from pickup through delivery.',
  },
  {
    id: 'bol-requirements',
    category: 'shipment',
    question: 'What information is required on the Bill of Lading (BOL)?',
    answer:
      'A complete BOL should include shipper and consignee details, pickup and delivery addresses, piece count, weight, freight description, special handling instructions, and any reference numbers. For specialized freight, compliant documentation and classification details are required.',
  },
  {
    id: 'weight-size-limits',
    category: 'shipment',
    question: 'What are the weight and size limits for shipments?',
    answer:
      'Limits depend on equipment type and lane. Vital handles standard dry van and container loads as well as overweight and out-of-gauge container moves with the right equipment and certified personnel. Share dimensions and weight when requesting a quote so we can assign the correct asset.',
  },

  // Services
  {
    id: 'liftgate',
    category: 'service',
    question: 'Does Vital Transportation offer liftgate service?',
    answer:
      'Yes. Vital provides retail and commercial final-mile delivery with liftgate-equipped vehicles and appointment-based delivery windows for locations without dock access.',
  },
  {
    id: 'white-glove',
    category: 'service',
    question: 'Does Vital Transportation provide inside delivery or white-glove handling?',
    answer:
      'Vital supports specialized and final-mile programs with tailored standard operating procedures. Inside delivery and white-glove requirements vary by account — discuss your handling needs when requesting a quote so we can build the right service level.',
  },
  {
    id: 'fragile-high-value',
    category: 'service',
    question: 'Can Vital Transportation handle fragile or high-value freight?',
    answer:
      'Yes. Vital manages specialized freight with secure chain-of-custody handling, compliant documentation where required, and customer-specific SOPs built around your freight requirements. Share handling instructions upfront for proper planning.',
  },
  {
    id: 'temperature-controlled',
    category: 'service',
    question: 'Does Vital Transportation offer temperature-controlled or refrigerated service?',
    answer:
      'Yes. Vital offers temperature-controlled truckload options with reefer-equipped assets to protect product integrity from pickup through delivery on regional and long-haul lanes.',
  },
  {
    id: 'recurring-pickups',
    category: 'service',
    question: 'Can Vital Transportation support recurring or scheduled daily/weekly pickups?',
    answer:
      'Yes. Dedicated fleet programs provide guaranteed capacity, consistent drivers, and predictable costs for recurring freight lanes — ideal for daily or weekly pickup schedules.',
  },
  {
    id: 'peak-season',
    category: 'service',
    question: 'How does Vital Transportation handle peak season or sudden volume spikes?',
    answer:
      'Vital maintains flexible capacity and warehouse infrastructure to support steady season and surge volume. Whether port peak, retail season, or unexpected overflow, our scaled fleet and dispatch team adapt to keep your supply chain moving.',
  },
  {
    id: 'last-mile',
    category: 'service',
    question: 'Does Vital Transportation offer last-mile or final-mile delivery?',
    answer:
      'Yes. Vital\'s specialized and final-mile capabilities include retail and commercial delivery with liftgate service, appointment-based windows, and tailored logistics support for complex last-mile requirements.',
  },
  {
    id: 'shipping-documentation',
    category: 'service',
    question: 'What documentation is required for shipping with Vital Transportation?',
    answer:
      'Requirements vary by freight type. Standard moves need a complete BOL and contact details. Import/export and specialized freight may require additional customs-related documentation, compliance certificates, or customer-specific paperwork. Dispatch will confirm what is needed for your shipment.',
  },
  {
    id: 'storage-trailers',
    category: 'service',
    question: 'Do you offer storage trailers?',
    answer:
      'Absolutely. Vital provides economical storage trailer solutions for your warehousing needs. Storage trailers can be delivered directly to your site within a 50-mile radius of our headquarters for easy onsite product storage. Cargoes in Vital trailers are fully insured, offering both efficiency and security.',
  },
  {
    id: 'warehouse-services',
    category: 'service',
    question: 'Do you offer warehouse services?',
    answer:
      'Yes. Vital offers comprehensive warehouse services including storage, display assembly, temporary merchandise staging, and pick and pack fulfillment. We support shippers of every size — from small local companies to large-scale retail and distribution programs — with the agility to pivot as your volume changes.',
  },
  {
    id: 'leased-equipment',
    category: 'service',
    question: 'Inquire about leased equipment',
    answer:
      'Vital provides leasing options for 53\' dry vans, available for both storage and road use. Contact us directly for leasing terms, availability, and conditions tailored to your operation.',
  },

  // Pricing & billing
  {
    id: 'pricing-structure',
    category: 'pricing',
    question: 'How does Vital Transportation structure pricing?',
    answer:
      'Pricing is tailored to your lane, equipment type, service level, and freight profile. Vital provides clear quotes based on your shipment details — port drayage, intermodal, OTR, LTL, warehouse, or specialized moves across the Northeast & Mid-Atlantic Service Region.',
  },
  {
    id: 'accessorials',
    category: 'pricing',
    question: 'Are accessorial charges applied, and what are they?',
    answer:
      'Accessorial charges may apply for services beyond standard linehaul — such as liftgate delivery, detention, appointment windows, specialized handling, or specialized equipment. Your quote and rate confirmation will outline applicable accessorials for your move.',
  },
  {
    id: 'detention-fees',
    category: 'pricing',
    question: 'How are detention or waiting time fees handled?',
    answer:
      'Detention policies are defined in your rate agreement. When drivers wait beyond agreed free time at pickup or delivery, detention may apply. Vital communicates delays proactively and documents wait time in accordance with your account terms.',
  },
  {
    id: 'request-quote',
    category: 'pricing',
    question: 'How do I request a quote?',
    answer:
      'Submit a quote request through our website contact form with your origin, destination, freight details, and service type. Our team reviews your shipment information and responds with a tailored quote.',
  },
  {
    id: 'payment-methods',
    category: 'pricing',
    question: 'What payment methods does Vital Transportation accept?',
    answer:
      'Payment terms are established during account setup. Vital processes invoices for approved commercial accounts and coordinates billing details with your operations or AP team. Contact us for specific payment method and terms questions.',
  },

  // Shipper preparation
  {
    id: 'packaging-palletizing',
    category: 'preparation',
    question: 'How should freight be packaged or palletized?',
    answer:
      'Freight should be securely palletized or crated with stable stacking, appropriate stretch wrap, and protection suited to your product. Proper packaging reduces damage risk and speeds loading at pickup.',
  },
  {
    id: 'labeling',
    category: 'preparation',
    question: 'What are the labeling requirements?',
    answer:
      'Each handling unit should be clearly labeled with shipper and consignee information, piece count, weight where required, and any special handling instructions. Specialized freight requires compliant labels and documentation per applicable standards.',
  },
  {
    id: 'pickup-preparation',
    category: 'preparation',
    question: 'How do I prepare freight for pickup?',
    answer:
      'Have freight staged and accessible at the agreed pickup time, with BOL and reference numbers ready. Confirm dock or ground-level access, notify dispatch of any site restrictions, and communicate special handling needs before the driver arrives.',
  },
  {
    id: 'oversized-heavy',
    category: 'preparation',
    question: 'What are the guidelines for oversized or heavy freight?',
    answer:
      'Share exact dimensions, weight, and commodity details when booking. Vital handles overweight and out-of-gauge container moves with specialized equipment and certified personnel. Advance notice ensures the correct chassis, permits, and routing are arranged.',
  },
]
