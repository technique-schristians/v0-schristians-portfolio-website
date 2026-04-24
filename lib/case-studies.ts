export type CaseStudy = {
  slug: string
  shortTitle: string
  navTitle: string
  fullTitle: string
  description: string
  summary: string
  homeBlurb: string
  image: string
  imageAlt: string
  /** Pulled from each company's logo for the home-page card background */
  brandBg: string
  brandBgAlt: string
  imageSide: "left" | "right"
  extendedStudyUrl: string
  problem: string
  approach: { label: string; description: string }[]
  research: {
    body: string
    quote: string
  }
  strategy: string
  design: { phase: string; body: string }[]
  outcome: {
    body: string
    stat: string
  }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "onetrust-risk-management",
    shortTitle: "OneTrust: Risk Management",
    navTitle: "OneTrust — Risk Management",
    fullTitle: "OneTrust: High-Impact Risk Management",
    description:
      "Driving product evolution by synthesizing insights from $4.6M ARR customer accounts into a data-backed roadmap and modular design architecture.",
    summary: "Strategic Risk Management Redesign",
    homeBlurb:
      "I rebuilt OneTrust's risk module by interviewing eleven enterprise customers worth a combined $4.6M ARR, then translated their pain points into a multi-quarter roadmap. The result: a modular, scalable design that turned compliance work into a strategic advantage.",
    image: "/case-studies/onetrust-risk-management.png",
    imageAlt:
      "OneTrust IT Security Risk Management dashboard showing hierarchical risk listing with stages and aggregate risk scores",
    brandBg: "#1F4E40",
    brandBgAlt: "#15382E",
    imageSide: "right",
    extendedStudyUrl:
      "https://www.figma.com/proto/A6opN0osTKQvVRqdZl86Da/Risk-Management-Portfolio-April-2025?page-id=51%3A41387&node-id=51-42790&viewport=-1477%2C210%2C0.06&t=3zaDmeX9U0FkYQTn-1&scaling=contain&content-scaling=fixed&starting-point-node-id=51%3A42790",
    problem:
      "The existing risk management module was misaligned with the workflows of our highest-value enterprise clients. My goal was to validate core pain points across a massive revenue block and rebuild the design roadmap to address systemic usability and scalability issues.",
    approach: [
      {
        label: "Revenue-Led Research",
        description:
          "Conducted deep-dive interviews with 11 key enterprise customers representing $4.6M in ARR.",
      },
      {
        label: "Thematic Synthesis",
        description:
          "Aggregated raw feedback into high-level strategic themes to drive cross-functional alignment.",
      },
      {
        label: "Backward Roadmapping",
        description:
          "Worked backward from agreed-upon themes to define a multi-quarter execution plan.",
      },
      {
        label: "Iterative Prototyping",
        description:
          "Delivered high-fidelity designs that addressed the prioritized 'big rock' requirements first.",
      },
    ],
    research: {
      body: "This phase was defined by high-stakes discovery. By interviewing eleven enterprise customers with a combined $4.6 million in ARR, we moved past anecdotal feedback and identified the high-revenue friction points that mattered. We mapped the findings into a Key Findings matrix and learned the primary blockers weren't UI-deep — they were rooted in how risk data was aggregated and visualized at scale.",
      quote:
        "We didn't just listen to users; we audited the workflows of our most significant financial stakeholders to ensure our design strategy moved the needle on retention.",
    },
    strategy:
      "The strategy used a Work Backwards model. Once leadership and engineering agreed on the themes from research, we built a roadmap starting from the ideal one-year vision. That let us prioritize a 3RR (Release Roadmap) focused on Critical Fixes in the first nine months while laying the architectural groundwork for advanced predictive risk modeling in year two.",
    design: [
      {
        phase: "Phase 1 — Thematic Alignment",
        body: "Design started by translating customer themes into functional wireframes. I worked daily with Product and Engineering to make sure proposed solutions — improved risk scoring visibility, bulk-action workflows — were technically feasible. This stage was critical for proving our designs directly addressed the ARR-killing issues surfaced during research.",
      },
      {
        phase: "Phase 2 — High-Fidelity Execution",
        body: "Moving into high-fidelity, we iterated on a modular risk dashboard that scales from mid-market to global enterprise. By pulling developers into refinement throughout the process, the complex data visualizations stayed performant. The final designs delivered a streamlined, high-trust experience for identifying, assessing, and mitigating enterprise-wide risk.",
      },
    ],
    outcome: {
      body: "The redesign aligned the OneTrust Risk Management product with the needs of its most valuable customers. By grounding our design decisions in $4.6M of protected ARR, we secured executive buy-in for a long-term roadmap that reduced friction and solidified loyalty. The outcome was a more intuitive, scalable platform that turned risk from a compliance chore into a strategic business advantage.",
      stat: "Validated Design Roadmap Supported by $4.6M in Customer ARR",
    },
  },
  {
    slug: "fonda-dashboard",
    shortTitle: "Fonda: Startup Dashboard",
    navTitle: "Fonda — Startup Dashboard",
    fullTitle: "Fonda Restaurant Onboarding & Dashboard Redesign",
    description:
      "Streamlining the 0-to-1 merchant journey and architecting a scalable, data-dense dashboard to reduce onboarding friction and empower restaurant growth.",
    summary: "Fonda Startup Dashboard Redesign",
    homeBlurb:
      "Fonda's platform was bleeding merchants at onboarding and overwhelming them with a cluttered dashboard. I restructured the IA, simplified a ten-step setup into a guided sequence, and shipped a data-dense interface restaurants could actually run their business on.",
    image: "/case-studies/fonda-dashboard.png",
    imageAlt:
      "Fonda restaurant storefront analytics dashboard with sales chart, customer breakdowns, and promotions table",
    brandBg: "#B85C00",
    brandBgAlt: "#7E3F00",
    imageSide: "left",
    extendedStudyUrl:
      "https://www.figma.com/proto/CKEndBCNDGN9Y9bjdVU5dR/Business-Dashboard?page-id=2408%3A46682&node-id=2408-46685&viewport=696%2C492%2C0.08&t=airoMFkdGz80jH09-1&scaling=contain&content-scaling=fixed&starting-point-node-id=2408%3A46685",
    problem:
      "In Spring 2024, Fonda's platform was losing users to a disjointed onboarding experience and a cluttered dashboard. I was brought in to streamline the 0-to-1 merchant journey and redesign the core interface so it would scale as the company's feature set expanded.",
    approach: [
      {
        label: "Research & Discovery",
        description:
          "Audited the existing dashboard and benchmarked against industry leaders like Toast and DoorDash.",
      },
      {
        label: "Strategy & IA",
        description:
          "Defined a 12-month roadmap and restructured information architecture to support complex menu management.",
      },
      {
        label: "Iterative Design",
        description:
          "Built low-fidelity flows and partnered with engineering to validate technical feasibility before high-fi polish.",
      },
      {
        label: "Handoff & Execution",
        description:
          "Delivered an end-to-end prototype and design system documentation for seamless development.",
      },
    ],
    research: {
      body: "We did a deep dive into the existing dashboard to surface friction points in the legacy UI. Benchmarking against eight-plus competitors — UberEats, DoorDash, and others — let us map out the essential features and menu flows. This phase cross-referenced user pain points with technical debt so the new strategy addressed both usability and backend constraints.",
      quote:
        "The legacy dashboard wasn't just cluttered; it lacked the structural hierarchy needed for a restaurant to manage high-volume orders without manual errors.",
    },
    strategy:
      "Our strategy centered on a 12-month vision to transition from a basic interface to a robust business engine. We prioritized a modular Menu Flow that gave merchants granular control over categories and items. The roadmap kept the design functional as Fonda scaled to more restaurant customers.",
    design: [
      {
        phase: "Phase 1 — Architecture & Collaboration",
        body: "Design started with a complete overhaul of the information architecture. I worked alongside engineering to validate components — every table, every toggle had to be buildable inside our sprint cycles. This dev-first mindset prevented late-stage redesigns and made the wireframe-to-code transition smooth.",
      },
      {
        phase: "Phase 2 — Iteration to High-Fidelity",
        body: "Through several iterations we evolved the onboarding flow from a complex ten-step process into a streamlined sequence. Testing high-fidelity prototypes refined the visual hierarchy of the end-to-end dashboard, focusing on data density without sacrificing readability. Each iteration was backed by stakeholder feedback to align business goals with user needs.",
      },
    ],
    outcome: {
      body: "The final redesign turned Fonda from a confusing black box into a transparent, self-service merchant experience. By simplifying the IA and shipping a modular menu management system, we empowered restaurant owners to manage complex menus without technical support. Initial setup friction dropped dramatically and the platform was finally able to scale alongside the company's growing feature set.",
      stat: "50% Faster Restaurant Menu Configuration",
    },
  },
  {
    slug: "onetrust-copilot",
    shortTitle: "OneTrust: AI Copilot",
    navTitle: "OneTrust — AI Copilot",
    fullTitle: "OneTrust Copilot: Conversational AI for Privacy & Governance",
    description:
      "An AI-native conversational interface designed to simplify complex regulatory and privacy workflows for compliance teams.",
    summary: "OneTrust AI Copilot",
    homeBlurb:
      "Compliance officers were drowning in regulatory documentation. I designed OneTrust Copilot — a sidebar AI assistant that turns dense policy data into verifiable, actionable answers. It moved the platform from reactive lookup to proactive, agentic privacy work.",
    image: "/case-studies/onetrust-copilot.png",
    imageAlt:
      "OneTrust Employee Portal documents page with AI Copilot panel answering a gift policy question with cited sources",
    brandBg: "#1F4E40",
    brandBgAlt: "#15382E",
    imageSide: "right",
    extendedStudyUrl:
      "https://www.figma.com/proto/srXQcnkPqi3cSj0b3wSFvy/UX-Onsite-July-2024?page-id=0%3A1&node-id=1-156&viewport=1276%2C-169%2C0.13&t=Cvbwki4YBKXGDDIW-1&scaling=contain&content-scaling=fixed",
    problem:
      "Enterprise users struggle to navigate dense regulatory data and policy documentation. We aimed to replace manual, high-friction search with an intelligent conversational Copilot that delivers instant, verifiable answers and automates privacy request workflows.",
    approach: [
      {
        label: "Context Setting",
        description:
          "Audited existing top-down problem statements and benchmarked competitive AI conversational patterns.",
      },
      {
        label: "Strategic Roadmap",
        description:
          "Defined a multi-phase vision moving from basic retrieval to agentic Human-in-the-loop automation.",
      },
      {
        label: "Collaborative Design",
        description:
          "Iterated on conversational UI components alongside engineering to ensure real-time data accuracy.",
      },
      {
        label: "Governance & Policy",
        description:
          "Implemented strict AI monitoring and policy frameworks to ensure response reliability and security.",
      },
    ],
    research: {
      body: "We ran an extensive TrustWeek audit, analyzing past, present, and future user needs for conversational AI. Benchmarking ten-plus AI platforms made it clear users didn't just want a chatbot — they needed a reasoning engine capable of citing specific guidance like the UK ICO and Mexico Data Rights. That research laid the foundation for our retrieval-augmented generation strategy.",
      quote:
        "The goal isn't just to talk to the data — it's to make the data actionable without requiring a law degree to interpret the results.",
    },
    strategy:
      "Our strategy was anchored to a 3-Release (9-month) to 1-year roadmap. We focused on moving from a Search & Summarize model to a long-term vision where the Copilot acts as an agent. Key strategic pillars: supporting dynamic customer views, managing AI classification, and establishing a 12-24 month path toward autonomous compliance monitoring.",
    design: [
      {
        phase: "Phase 1 — Conversational Foundations",
        body: "Design began by defining the Copilot Flow — a sidebar copilot that persists across the OneTrust ecosystem. I partnered with engineering from day one on how searching states and content-generated blocks should render. We prioritized Human-in-the-loop, letting users verify AI sources directly inside the chat interface.",
      },
      {
        phase: "Phase 2 — Iteration & Edge Cases",
        body: "Across dozens of iterations we refined the feedback loop, moving from simple text responses to rich, interactive elements like 'check for updates' and data-guidance chips. Bringing developers into every sprint meant the final high-fidelity designs — including the AI monitoring dashboards — were technically viable from day one.",
      },
    ],
    outcome: {
      body: "OneTrust Copilot transitioned the platform from a reactive tool into a proactive assistant. Embedding conversational AI directly into the privacy workflow eliminated the need to manually parse thousands of pages of regulatory documentation. Compliance officers can now generate accurate, verifiable answers and automate complex tasks in real-time, accelerating decision-making across the enterprise.",
      stat: "65% Faster Completion of Complex Regulatory Research Tasks",
    },
  },
  {
    slug: "salesforce-checkout",
    shortTitle: "Salesforce Commerce Cloud: Checkout",
    navTitle: "Salesforce — Commerce Checkout",
    fullTitle: "Salesforce: B2B Commerce Checkout Re-imagined",
    description:
      "Modernizing enterprise checkout by transitioning from a closed backend system to a flexible, component-based builder that unified B2B and B2C commerce architectures.",
    summary: "Salesforce B2B Commerce Checkout",
    homeBlurb:
      "The 2020 B2B checkout was a black box that integrators preferred to rebuild from scratch. I led the architecture of a component-based Checkout Builder that unified B2B and B2C — drag-and-drop steps, global styles, and a debuggable foundation merchants and developers could actually trust.",
    image: "/case-studies/salesforce-checkout.jpg",
    imageAlt:
      "Salesforce Commerce Cloud checkout builder for Alpine Coffee with delivery, shipping, and payment steps and a button-styling configuration panel",
    brandBg: "#0D2C50",
    brandBgAlt: "#06182E",
    imageSide: "left",
    extendedStudyUrl:
      "https://docs.google.com/presentation/d/1g6yWeGpAsFVpsjoVEp5BXu4JcaGUqyR1ZCKxHy7PxDA/edit?slide=id.g26dcc60bd7d_0_912#slide=id.g26dcc60bd7d_0_912",
    problem:
      "The 2020 B2B checkout launch was a backend solution that was hard to debug, hard to customize, and inconsistent with the rest of our new MVP builder. I led the effort to research user pain points and architect a new Checkout Builder that simplified implementation for developers and merchants alike.",
    approach: [
      {
        label: "Discovery & Audit",
        description:
          "Identified friction points in the June 2020 release through deep-dive sessions with system integrators.",
      },
      {
        label: "Architecture Strategy",
        description:
          "Designed a multi-layered component framework supporting global styling and modular checkout steps.",
      },
      {
        label: "Cross-Cloud Alignment",
        description:
          "Partnered with the B2C team to identify architectural overlaps and unify the commerce experience.",
      },
      {
        label: "Iterative Prototyping",
        description:
          "Built high-fidelity builder mocks and validated technical feasibility with demo engineers.",
      },
    ],
    research: {
      body: "We conducted extensive interviews with system integrators and our internal Demo Engineers — the people implementing customer storefronts. The feedback was brutal: the system was so hard to customize that some developers preferred rebuilding from scratch. The depth of technical debt pushed us toward a Builder approach instead of simple UI tweaks.",
      quote:
        "The current checkout is a black box. It's easier to build a custom solution from the ground up than to fix what's currently in the platform.",
    },
    strategy:
      "Our strategy focused on a 12-month unification roadmap. Once we recognized that B2B and B2C checkout requirements were functionally interchangeable, we pivoted from a siloed B2B tool to a universal Commerce Cloud framework. The rollout was multi-phased: establish global styles, modularize payment and shipping blocks, then enable a drag-and-drop builder.",
    design: [
      {
        phase: "Phase 1 — The Component Framework",
        body: "Design began by breaking the checkout into functional blocks. I collaborated with checkout engineering to keep components lightweight while still flexible. We focused on a Checkout Builder interface where merchants could toggle between global branding and individual step customization without touching code.",
      },
      {
        phase: "Phase 2 — High-Fidelity Iteration",
        body: "I iterated to balance the no-code requirements of merchants with the low-code needs of developers. Bringing developers into design reviews early made sure the builder's output was technically achievable. The final high-fidelity design enabled real-time visual editing of shipping, payment, and summary sections.",
      },
    ],
    outcome: {
      body: "The project resulted in the complete merger of the B2B and B2C commerce checkout teams — at the time, forming the modern Salesforce Commerce Cloud. We replaced the rigid legacy system with a modular builder that drastically reduced implementation time. Merchants gained the ability to launch checkouts faster, and developers benefited from a transparent, debuggable architecture.",
      stat: "100% Unification of B2B and B2C Checkout Architectures",
    },
  },
  {
    slug: "automation-anywhere",
    shortTitle: "Automation Anywhere: AI Widget",
    navTitle: "Automation Anywhere — AI Widget",
    fullTitle: "Automation Anywhere: AI-Powered Process Orchestration",
    description:
      "Reimagining enterprise workflow automation by transitioning from manual process connections to a Generative AI-driven 'Next Best Action' engine for complex B2B orchestration.",
    summary: "B2B Automation & GenAI Integration",
    homeBlurb:
      "Enterprise customers were stitching together Salesforce, SAP, and Genesys by hand. I led the redesign of Automation Anywhere's B2B widget into a GenAI-driven engine that recommends Next Best Actions — turning manual orchestration into approval of AI-suggested automations.",
    image: "/case-studies/automation-anywhere.png",
    imageAlt:
      "Automation Anywhere patient health record orchestration widget showing AI Co-Pilot workflow steps for after-visit summaries",
    brandBg: "#A0341A",
    brandBgAlt: "#6B2210",
    imageSide: "right",
    extendedStudyUrl:
      "https://docs.google.com/presentation/d/18A8Dft1wUoZ4I6LD8AzirLW8hkyGE9yB1AaO6Pf9XHw/edit?slide=id.g26dcc60bd7d_0_539#slide=id.g26dcc60bd7d_0_539",
    problem:
      "Enterprise customers struggled to connect siloed automations across disparate systems like Salesforce, SAP, and Genesys, leading to slow turnaround times and high-friction workflows. I led the initiative to evolve this B2B widget from a manual integration connector into an intelligent engine for complex, multi-step business processes.",
    approach: [
      {
        label: "Stakeholder Discovery",
        description:
          "Ran 12+ sessions with Sales Engineers, AA Engineers, and existing customers to audit complex use cases.",
      },
      {
        label: "Iterative Workflow Design",
        description:
          "Developed multiple interaction flows to establish a steel thread for cross-enterprise orchestration.",
      },
      {
        label: "GenAI Pivot",
        description:
          "Rapidly organized cross-functional workshops when GenAI emerged to rethink the entire product interface.",
      },
      {
        label: "Intelligence Integration",
        description:
          "Shifted from manual connections to a data-driven model that recommends automations using LLM insights.",
      },
    ],
    research: {
      body: "Our research dove into high-volume business units like Finance, HR, and IT. We surfaced critical friction points — Delta Airlines refund requests, the manual checks required for HR background screenings — that proved manual orchestration was the primary bottleneck for enterprise scalability.",
      quote:
        "The turnaround time has to be quicker — a human staff has to read the full text, and the workflow chain for approving these requests must be improved.",
    },
    strategy:
      "Strategy evolved from a standard multi-release vision into an urgent GenAI-Native roadmap. Originally we were focused on a microsite IA and low-fi wireframes for manual process connections, but we pivoted to an Intelligence-First approach. The new direction connected enterprise data with Next Best Actions, using AI to recommend the most efficient automation paths across Salesforce, SAP, and Genesys.",
    design: [
      {
        phase: "Phase 1 — From Manual to Steel Thread",
        body: "Design started by mapping the enterprise orchestration flow between Call Center Agents and Finance Analysts. I worked cross-functionally to ensure interaction accuracy across external design systems like SAP. This stage established the foundational logic engineers needed to build the initial API-led medical claim automation.",
      },
      {
        phase: "Phase 2 — The GenAI Evolution",
        body: "When GenAI hit, we redesigned the widget to move past simple status tracking. In daily workshops with Engineering and PMs, we iterated on flows that let the system collect data and recommend specific automations. The final direction shifted the user experience from building a flow to approving an AI-suggested orchestration — drastically reducing cognitive load.",
      },
    ],
    outcome: {
      body: "The project transformed the Automation Anywhere widget into a forward-looking AI engine. By moving from manual Process Orchestration to GenAI-driven Next Best Actions, we enabled users to manage complex workflows — like Salesforce-to-SAP transfers — with significantly less manual configuration. Enterprise customers gained a clear path to scale their automations while maintaining high-trust data connections.",
      stat: "Unlimited Potential for AI-Driven Enterprise Data Connectivity",
    },
  },
  {
    slug: "salesforce-leadership",
    shortTitle: "Salesforce Commerce Cloud: Leadership",
    navTitle: "Salesforce — Leadership & Mentoring",
    fullTitle: "Salesforce Leadership: Coaching & Mentoring",
    description:
      "Fostering professional growth by guiding a junior designer through the end-to-end product lifecycle of AI-driven commerce features at Salesforce.",
    summary: "Salesforce Mentoring on Product Recommendations",
    homeBlurb:
      "Player-coach in practice. I onboarded a junior designer onto Einstein Deployment, then handed her the keys to an end-to-end Recommendations Component — research, customer interviews, stakeholder management. She moved from observation to total ownership in two release cycles.",
    image: "/case-studies/salesforce-leadership.png",
    imageAlt:
      "Salesforce Commerce Cloud Most-Viewed Products recommendations layout with a styling configuration panel for the Add to Cart button",
    brandBg: "#0D2C50",
    brandBgAlt: "#06182E",
    imageSide: "left",
    extendedStudyUrl:
      "https://docs.google.com/presentation/d/1GYAqiUXSzzLWWHpxNOS8CPYsdrOV9ajntSNBxllyXt4/edit?slide=id.g26dcc60bd7d_0_1159#slide=id.g26dcc60bd7d_0_1159",
    problem:
      "A junior designer needed to be onboarded and integrated into a complex ecosystem. My goal was to coach her through the delivery of high-impact features — Einstein Deployment and a Recommendations Component — while letting her take real ownership and learn from real-world project challenges.",
    approach: [
      {
        label: "Onboarding & Observation",
        description:
          "Eased the designer into the team and observed her working style during a 4-month release cycle.",
      },
      {
        label: "Mentored Execution",
        description:
          "Guided the first phase of deployment through cross-functional meetings with PMs and engineers.",
      },
      {
        label: "Stretch Initiative",
        description:
          "Transitioned her to lead an end-to-end project, including independent user research and customer interviews.",
      },
      {
        label: "Empowerment",
        description:
          "Watched her take full ownership of project decisions and answer stakeholder questions autonomously.",
      },
    ],
    research: {
      body: "Research for the Recommendations Component meant moving two months ahead of the engineering cycle to run independent user validation. I provided the templates and organized the customer sessions, but Mikaela led the interviews while I took notes. Card sorting and structured talking points revealed users prioritized data control over visual styling.",
      quote:
        "The goal was to let Mikaela embrace total ownership of an end-to-end project while learning the full scale of how UX designers actually work.",
    },
    strategy:
      "The strategy was a two-phase mentoring roadmap designed to move from observation to total ownership. Phase one focused on navigating the Salesforce release lifecycle through Einstein Deployment. Phase two — the Recommendations Component — stretched her capabilities by introducing research-driven design decisions and required her to manage the full project ecosystem independently.",
    design: [
      {
        phase: "Phase 1 — Collaborative Execution",
        body: "In phase one, design focused on Einstein Deployment — automating personalized recommendations. I introduced her to design system components and coached her through flows and several iterations. I intentionally left space for her to create and even fail, because long-term growth needs both.",
      },
      {
        phase: "Phase 2 — Research-Driven Iteration",
        body: "In phase two, Mikaela evolved the component by challenging initial assumptions through research. Working alongside PMs and engineers, she pivoted the design from style-heavy editing to data-driven controls. By the end of this phase she had transitioned from a mentored intern to a designer with full project ownership.",
      },
    ],
    outcome: {
      body: "The project delivered a research-backed recommendations component and — more importantly — the professional transformation of a junior designer. Mikaela moved from being onboarded to autonomously managing stakeholder relationships and making data-driven decisions that directly improved the customer experience.",
      stat: "100% Transition to Independent Project Ownership",
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
