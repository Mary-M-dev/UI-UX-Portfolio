// Featured projects data for Mary's portfolio
export const projects = [
  {
    id: 'dtma',
    title: 'DTMA',
    fullTitle: 'Designing an AI-Enabled Learning Journey for Digital Transformation Education',
    product: 'DTMA',
    category: 'Web App',
    cardBg: '#E8EDF5',
    image: '/Screenshots/22.png',
    imageStyle: 'contain',
    description: 'Helping professionals learn digital transformation through AI-powered courses and real-time support.',
    icon: '🚀',
    role: 'UI/UX Designer',
    year: 2026,
    industry: 'EdTech',
    tags: ['Figma', 'Kiro', 'Miro'],
    overview: 'Digital transformation is one of the most discussed yet misunderstood shifts across organizations today. While companies continue investing in technology and transformation initiatives, many teams still struggle to connect strategy with practical execution. Most learning experiences in this space are fragmented, overly theoretical, and disconnected from real operational contexts. Traditional platforms focus on static content delivery rather than helping learners apply transformation concepts in meaningful ways.\n\nTo address this gap, DigitalQatalyst developed the Digital Transformation Management Academy (DTMA): a structured learning ecosystem designed to help individuals and organizations understand and apply digital transformation through practical, scalable learning experiences.\n\nDTMA is built around DigitalQatalyst\'s 6 Digital Perspectives and serves three core learner groups: Digital Workers, Digital Leaders, and Digital Transformation Specialists / Architects.\n\nWhile the DTMA courses define what learners need to understand, the DTMA platform defines how learning is delivered, experienced, and scaled.\n\nAs the Product Owner and UI/UX Designer for the platform, I led the design of the experience layer powering the ecosystem, including course discovery, AI-supported learning, instructor tools, operational dashboards, and multi-role workflows.\n\nThe goal was not to design another LMS, but to create a scalable, AI-enabled learning system for continuous capability building and enterprise transformation adoption.',
    overviewParagraphs: [
      'While many organizations are investing heavily in digital transformation, digital workers are often expected to translate broad transformation goals into practical, day-to-day outcomes without clear, usable guidance. Existing learning resources are often fragmented and overly theoretical, making it difficult to apply concepts effectively in real workplace environments.',
      'To address this gap, DigitalQatalyst is building the Digital Transformation Management Academy (DTMA), a structured learning platform designed to help digital workers understand and apply digital transformation in real organizational contexts using DigitalQatalyst\'s 6 Digital Perspectives framework.',
      'In this case study, I will take you through how I designed the end to end AI enabled learning journey for digital transformation education.'
    ],
    problem: 'With the rise of Economy 4.0, digital transformation is accelerating across industries, but many people still struggle to understand what is changing and what it means in their specific roles. Learning resources are often scattered, static, and too theoretical, making it difficult for digital workers, leaders, and transformation architects to build a clear and practical understanding they can actually apply in real work settings.',
    research: 'This project started with existing research and strategic input shared by the stakeholder team. My role was to go through these findings, understand what they meant from a product perspective, and turn them into clear direction for the DTMA experience. To strengthen this understanding, I also had conversations with key stakeholders to better understand what DTMA was meant to solve for users and for the organization. From there, I synthesized the findings into patterns that helped shape the product and UX direction.',
    researchInsights: {
      title: 'Key Insights (From Stakeholder Input & Synthesis)',
      points: [
        'Digital transformation is widely talked about, but people struggle to connect the different parts of it in a meaningful way',
        'Learning is scattered across different sources, which makes it hard to build a clear understanding',
        'Most learning platforms focus on content delivery, not helping people apply what they learn',
        'Learners often don\'t have support when they try to use what they\'ve learned in real situations',
        'Organizations don\'t have a clear way to see whether learning is actually building capability'
      ]
    },
    keyInsight: 'The main gap is not access to information, it\'s helping people understand it, apply it, and see it translate into real capability inside organizations.',
    personas: [
      {
        name: 'Digital Worker',
        quote: 'I want to understand what digital transformation means for my daily work.',
        profile: [
          'Early to mid-career professionals',
          'Operate within business or operational functions',
          'Limited exposure to structured digital transformation frameworks'
        ],
        goals: [
          'Understand digital transformation in simple, practical terms',
          'Improve daily productivity using digital tools and practices',
          'Build foundational digital skills relevant to their role'
        ],
        needs: [
          'Clear, simplified explanations of complex concepts',
          'Step-by-step learning paths',
          'Real-world examples and practical application'
        ],
        painPoints: [
          'Overwhelmed by abstract transformation concepts',
          'Struggles to connect learning to actual job tasks',
          'Limited structured guidance for beginners'
        ]
      },
      {
        name: 'Digital Leader',
        quote: 'I need to translate digital transformation into team execution and results.',
        profile: [
          'Managers, heads of departments, functional leaders',
          'Responsible for team performance and adoption of digital practices',
          'Act as a bridge between strategy and execution'
        ],
        goals: [
          'Drive digital adoption within teams',
          'Translate transformation strategy into actionable execution',
          'Improve efficiency and performance through digital practices'
        ],
        needs: [
          'Strategic understanding of digital transformation',
          'Visibility into team capability and progress',
          'Tools to support decision-making and alignment'
        ],
        painPoints: [
          'Gap between strategy and execution',
          'Difficulty tracking transformation impact',
          'Lack of structured guidance for team enablement'
        ]
      },
      {
        name: 'Digital Transformation Specialist / Architect',
        quote: 'I design and scale digital transformation across the organization.',
        profile: [
          'Transformation leads, architects, consultants',
          'Responsible for designing transformation frameworks and roadmaps',
          'Operate across business, technology, and operations'
        ],
        goals: [
          'Design and scale transformation programs',
          'Align systems, processes, and people',
          'Standardize transformation frameworks across the organization'
        ],
        needs: [
          'Structured, comprehensive transformation knowledge',
          'Tools for system-level thinking and planning',
          'Visibility into enterprise-wide learning and adoption'
        ],
        painPoints: [
          'Fragmented execution across departments',
          'Lack of unified transformation framework',
          'Difficulty scaling consistent capability building'
        ]
      }
    ],
    userJourney: 'Mapped the complete journey from project setup to team collaboration and reporting.',
    wireframes: 'Created detailed wireframes for dashboard, project management, and analytics.',
    designDecisions: 'Built an intuitive interface with role-based access and real-time collaboration.',
    screens: 'Designed professional enterprise interfaces with data visualization.',
    impact: 'Helped 50+ enterprises streamline their digital transformation initiatives.',
    featured: true,
  },
  {
    id: 'reserve-me-management',
    title: 'Reserve Me Management',
    fullTitle: 'Reserve Me Restaurant Management App Redesign',
    product: 'Restaurant Management Platform',
    category: 'Web App',
    cardBg: '#FFF5F5',
    image: '/Dash board.png',
    imageStyle: 'cover',
    role: 'UI/UX Designer',
    tags: ['Figma'],
    description: 'Enabling restaurants to join and manage themselves through a self-service platform.',
    icon: '🏪',
    caseStudyContent: {
      heroImage: '/Dash board.png',
      heroImageStyle: 'cover',
      overview: [
        'Reserve Me is a restaurant discovery and reservation platform connecting diners with restaurants across Kenya.',
        'For the platform to grow, restaurants need to be able to join Reserve Me and manage their presence independently.',
        'I redesigned the restaurant-side experience to move from a founder-led restaurant registration process to a self-service experience, allowing restaurant owners to register, onboard, and manage their restaurants themselves.',
      ],
      challenge: {
        intro: 'The existing process relied heavily on the Reserve Me founder to recruit restaurants and register them on the platform. While this approach could work when onboarding restaurants individually, it created a scalability challenge: restaurant owners could not independently discover the platform and set up their own businesses.',
        closing: 'This would reduce the dependency on manual restaurant registration while giving restaurant owners more ownership of their presence on the platform.',
        flowImage: '/Userflows/1.png',
      },
      sections: [
        {
          title: '01: Restaurant Onboarding',
          intro: 'The first part of the redesign focused on creating a dedicated onboarding journey for restaurant owners. Instead of the founder registering the restaurant on their behalf, owners can now start the process themselves and provide the information needed to establish their restaurant on Reserve Me.',
          subsections: [
            {
              title: 'Registration',
              desc: 'Restaurant owners create an account and begin their restaurant registration journey.',
            },
            {
              title: 'Restaurant Setup',
              desc: 'The onboarding flow guides owners through the essential information required to establish their restaurant. The information is structured into manageable steps rather than asking owners to complete everything at once.',
            },
            {
              title: 'Completion',
              desc: 'Once the onboarding process is complete, the restaurant owner is taken into the management dashboard where they can continue updating and managing their restaurant.',
            },
          ],
          flow: 'Register → Restaurant Setup → Complete → Dashboard',
          flowImage: '/Userflows/2.png',
          hifiScreens: [
            '/Hifionboard/Sign up.png',
            '/Hifionboard/Onboarding 1.png',
            '/Hifionboard/Onboarding 2.png',
            '/Hifionboard/Onboarding 3.png',
            '/Hifionboard/Onboarding 4.png',
            '/Hifionboard/Onboarding 5.png',
            '/Hifionboard/Onboarding 6.png',
            '/Hifionboard/Onboarding 7.png',
            '/Hifionboard/Onboarding 8.png',
            '/Hifionboard/Onboarding 9.png',
            '/Hifionboard/Onboarding 10.png',
            '/Hifionboard/Onboarding 11.png',
          ],
        },
        {
          title: '02: Restaurant Management Dashboard',
          intro: 'Once a restaurant has completed onboarding, the owner moves into the restaurant management dashboard. The dashboard is designed for ongoing management, allowing owners to maintain and update their presence on Reserve Me.',
          closing: 'This creates a clear separation between joining Reserve Me and managing your restaurant on Reserve Me.',
          hifiScreens: [
            '/Hifisc/Dash board.png',
            '/Hifisc/View menu page.png',
            '/Hifisc/Products screen first time user.png',
            '/Hifisc/Add menu Item.png',
            '/Hifisc/Add product category saved and menu Items saved.png',
            '/Hifisc/Menu category filtered.png',
            '/Hifisc/Special offers first time restaurant.png',
            '/Hifisc/Add special offer pop up modal.png',
            '/Hifisc/Special offers aded screen.png',
            '/Hifisc/All notifications for a first time user 0r zero notifications.png',
            '/Hifisc/All Notifications screen.png',
            '/Hifisc/Notifications  ODERS screen.png',
            '/Hifisc/Notifications  Reservations  screen.png',
            '/Hifisc/Notifications  Reviews screen.png',
            '/Hifisc/reports screen.png',
            '/Hifisc/Generate report clicked.png',
          ],
        },
      ],
      designDecisions: [
        {
          title: 'Self-Service Registration',
          desc: 'The experience allows restaurant owners to join Reserve Me without requiring the founder to manually register their business.',
        },
        {
          title: 'Guided Onboarding',
          desc: 'Restaurant setup is structured into a clear flow so owners understand what information they need to provide before accessing the management experience.',
        },
        {
          title: 'Separate Onboarding & Management',
          desc: 'Initial setup is separated from ongoing restaurant management, giving each experience a clear purpose.',
        },
        {
          title: 'Designed for Scale',
          desc: 'Moving restaurant registration into a self-service experience creates a foundation for Reserve Me to onboard more restaurants without relying entirely on manual recruitment and setup.',
        },
      ],
      designDecisionsImage: '/image.png',
      outcome: [
        'Self-service restaurant registration',
        'Scalable onboarding process',
        'Owner-controlled restaurant management',
        'Foundation for platform growth',
      ],
      outcomeIntro: 'The redesign shifted Reserve Me\'s restaurant acquisition experience from "Founder recruits → Founder registers restaurant" to "Restaurant discovers → Restaurant registers → Restaurant onboards → Restaurant manages".',
      outcomeClosing: 'This created a more scalable way for restaurants to join the platform while giving restaurant owners greater control over their business presence. The management dashboard then provides the tools they need to continue updating their restaurant and managing their activity on Reserve Me.',
      reflection: 'This project showed me how a seemingly simple onboarding flow can have a much bigger impact on a product\'s ability to scale. The challenge wasn\'t only about improving the interface. It was about changing who owns the onboarding process: from the Reserve Me founder to the restaurant itself. That shift turned restaurant registration from a manual operational process into a self-service product experience.',
    },
    featured: true,
  },
  {
    id: 'reserve-me',
    title: 'Reserve Me',
    fullTitle: 'Reserve Me Mobile App Redesign',
    product: 'Reserve Me',
    category: 'Mobile App',
    cardBg: '#FDE8E8',
    image: '/Screenshots/rm.png',
    imageStyle: 'contain',
    role: 'UI/UX Designer',
    tags: ['Figma'],
    description: 'Redesigning a restaurant booking app to make discovering and reserving tables easier.',
    icon: '🍽️',
    caseStudyContent: {
      heroImage: '/Screenshots/rm.png',
      heroImageStyle: 'contain',
      overview: [
        'Reserve Me is a restaurant discovery and reservation platform that helps users explore dining experiences and book tables across Kenya. From casual dining spots to fine dining restaurants, the platform aims to simplify how users discover and reserve restaurants.',
        'While the app already supported restaurant discovery and booking, the mobile experience had gaps in usability, visual consistency, and overall user flow clarity.',
        'This redesign focused on improving the user experience, visual design, and brand identity, with the goal of making restaurant discovery more intuitive, engaging, and trustworthy.',
      ],
      scopeItems: [
        'UX audit of existing mobile app',
        'UI redesign of core screens',
        'Branding refinement and visual consistency',
        'Improvement of onboarding, discovery, and reservation flows',
      ],
      problem: {
        intro: 'Although Reserve Me provided access to restaurant listings and reservations, the experience had several friction points that affected usability and trust.',
        label: 'Users struggled with:',
        points: [
          'Inconsistent visual design across screens',
          'Lack of clear brand identity',
          'Limited personalization in discovery',
          'Weak onboarding and authentication flows',
          'Difficulty quickly finding relevant restaurants',
        ],
        closing: 'The overall experience felt functional, but not intuitive or engaging enough for confident decision-making.',
      },
      audit: [
        {
          title: '1. Weak Visual Language & Branding',
          intro: 'The app relied heavily on illustrations instead of real restaurant imagery and did not consistently use Reserve Me\'s brand colors. This made the experience feel less immersive and reduced brand recognition.',
          impact: ['Low visual trust', 'Weak brand identity', 'Reduced emotional connection to restaurants'],
          images: ['/wv/on.png', '/wv/on1.png', '/wv/on3.png'],
        },
        {
          title: '2. Incomplete Authentication Experience',
          intro: 'The login and sign-up flows lacked key modern UX patterns.',
          issues: ['No Google sign-up option', 'No password visibility toggle', 'No error or validation states', 'No password recovery flow'],
          impact: ['Friction during onboarding', 'Risk of user drop-off', 'Poor usability in authentication flows'],
          images: ['/au/au.png', '/au/au1.png', '/au/au2.png', '/au/au3.png'],
        },
        {
          title: '3. Lack of Personalization on Home Screen',
          intro: 'The home screen did not adapt to user behavior or context. There was no visibility of:',
          issues: ['Upcoming reservations', 'Previously selected preferences', 'Contextual recommendations'],
          impact: ['Home screen lacked relevance for returning users', 'Increased effort to continue previous actions'],
          images: ['/home/Hm.png', '/home/hm2.png'],
        },
        {
          title: '4. Weak Discovery Structure',
          intro: 'Restaurant discovery lacked strong prioritization and guidance. Users had limited ways to refine results quickly based on intent such as:',
          issues: ['Top rated restaurants', 'Nearby options', 'Special offers', 'Cuisine or experience type'],
          impact: ['Increased decision fatigue', 'Slower discovery process', 'Overwhelming browsing experience'],
          images: ['/sn/s.png', '/sn/s1.png', '/sn/s3.png'],
        },
        {
          title: '5. Limited Context-Aware Search',
          intro: 'While filtering existed, the system did not fully adapt results based on user-selected preferences such as location or date.',
          impact: ['Users had to manually re-evaluate options', 'Less relevant search results', 'Reduced efficiency in finding available restaurants'],
        },
        {
          title: '6. Missing Engagement & Brand Storytelling',
          intro: 'The app launched directly into the experience without a branded entry point.',
          impact: ['Weak first impression', 'Missed opportunity for brand recognition'],
        },
      ],
      keyInsights: [
        { title: '1. Clarity', desc: 'Users needed a more structured and scannable interface to reduce cognitive load during restaurant discovery.' },
        { title: '2. Confidence', desc: 'Users needed better support through authentication, clearer information hierarchy, and more reliable decision-making cues.' },
        { title: '3. Context', desc: 'The experience needed to feel more personalized and aware of user intent (location, time, preferences, reservations).' },
      ],
      designGoals: [
        { title: 'Improve Visual Consistency', desc: 'Create a unified design system aligned with Reserve Me branding.' },
        { title: 'Simplify Discovery', desc: 'Make it easier for users to find restaurants based on intent (location, budget, cuisine, and occasion).' },
        { title: 'Strengthen Onboarding & Trust', desc: 'Improve authentication flows and reduce friction during sign-up and login.' },
        { title: 'Introduce Context-Aware Experience', desc: 'Make the home and discovery screens more relevant to user behavior and preferences.' },
      ],
      designApproach: {
        flow: ['Discover', 'Evaluate', 'Reserve'],
        question: 'How might we help users go from "I want to eat out" to "I\'ve booked a table" with less friction and more confidence?',
      },
      keyImprovements: [
        {
          title: 'Branding & Visual Identity',
          points: [
            'Applied Reserve Me brand colors across the app',
            'Replaced illustrations with real restaurant imagery',
            'Improved typography and visual hierarchy',
          ],
          result: 'A more cohesive, premium, and recognizable brand experience.',
        },
        {
          title: 'Authentication Experience',
          points: [
            'Added Google Sign-Up',
            'Introduced password visibility and recovery',
            'Implemented validation and error states',
          ],
          result: 'A smoother, more secure onboarding experience.',
        },
        {
          title: 'Contextual Home Experience',
          points: [
            'Surfaced upcoming reservations',
            'Added personalized discovery sections',
            'Improved continuity for returning users',
          ],
          result: 'A more relevant and engaging home experience.',
        },
        {
          title: 'Smarter Restaurant Discovery',
          points: [
            'Added quick filters (Top Rated, Nearby, Special Offers, Hidden Gems)',
            'Improved restaurant card hierarchy',
            'Prioritized key decision-making information',
          ],
          result: 'Faster restaurant discovery and decision-making.',
        },
        {
          title: 'Context-Aware Search',
          points: [
            'Introduced location and date-based filtering',
            'Simplified search with tag-based inputs',
            'Improved result relevance based on user intent',
          ],
          result: 'A more personalized and efficient search experience.',
        },
      ],
      outcome: [
        'Intuitive discovery platform',
        'Visually consistent brand experience',
        'Context-aware recommendation system',
        'Trust-driven booking experience',
      ],
      outcomeIntro: 'The redesign transformed Reserve Me from a functional restaurant listing app into a more:',
      outcomeClosing: 'The focus was not just on improving visuals, but on making the entire journey from discovery to reservation feel faster, clearer, and more engaging.',
      reflection: 'This project reinforced how much impact visual hierarchy, clarity, and context can have on user decision-making. Even small improvements such as better filters, clearer authentication flows, and stronger branding can significantly improve how users experience and trust a product.',
    },
    featured: true,
  },
  {
    id: 'health-mobile',
    title: 'AFYACARE',
    fullTitle: 'Designing an accessible telehealth platform for elderly Kenyans',
    product: 'AFYACARE',
    category: 'Mobile App',
    cardBg: '#E0F2F1',
    image: '',
    imageStyle: 'contain',
    description: 'Designing a telehealth app that helps elderly Kenyans access healthcare from home.',
    icon: '🏥',
    role: 'UX/UI Designer',
    tags: ['Figma', 'Miro'],
    caseStudyContent: {
      heroImage: '',
      overview: [
        'I came across a design challenge that asked designers to create a telehealth platform tailored to elderly users.',
        'The challenge immediately caught my attention because while telehealth has the potential to improve healthcare access, many digital healthcare products are designed for users who are already comfortable with technology. Elderly individuals often face additional barriers such as limited digital literacy, declining vision, reduced dexterity, and anxiety when navigating unfamiliar digital experiences.',
        'Rather than approaching this as a healthcare platform challenge, I saw it as an opportunity to design for confidence, accessibility, and independence.',
        'To make the project more relevant to my local context, I focused on elderly Kenyans and explored how technology could help them access healthcare services from home while reducing common barriers such as travel, long hospital queues, and reliance on family members for routine medical care.',
      ],
      scopeItems: [
        'Project Type: Design Challenge',
        'Timeline: 2 Weeks',
        'Tools: Figma, Miro',
      ],
      challenge: {
        intro: 'Design a user-friendly telehealth platform that enables elderly users to:',
        points: [
          'Access healthcare services remotely',
          'Book appointments with ease',
          'Attend virtual consultations',
          'Manage prescriptions and follow-up care',
          'Navigate the experience confidently regardless of their level of digital literacy',
        ],
      },
      problem: {
        intro: 'Healthcare access remains a challenge for many elderly Kenyans. A routine medical consultation may require:',
        points: [
          'Travelling long distances',
          'Waiting in crowded facilities',
          'Coordinating transportation',
          'Depending on family members for support',
        ],
        closing: 'While telehealth can help address these challenges, many existing healthcare applications introduce a different set of problems: complex navigation, small text and icons, information overload, confusing appointment booking processes, and limited accessibility options. As a result, many elderly users may feel excluded from digital healthcare solutions.',
      },
      hmw: 'How might we help elderly Kenyans access healthcare services remotely without feeling overwhelmed by technology?',
      keyInsights: [
        { title: 'Users Need Guidance', desc: 'Many elderly users are not frequent technology users and require voice instructions, clear onboarding, and step-by-step guidance.' },
        { title: 'Accessibility Cannot Be Optional', desc: 'Users need larger text, adjustable contrast, large touch targets, and clear visual hierarchy.' },
        { title: 'Confidence Matters More Than Speed', desc: 'Users need confirmation messages, appointment reminders, clear instructions, and error recovery support.' },
        { title: 'Healthcare Often Involves Family Support', desc: 'In many Kenyan households, family members assist elderly relatives: sharing consultation summaries and caregiver support is essential.' },
      ],
      designPrinciples: [
        { title: 'Simplicity Over Complexity', desc: 'Prioritize essential tasks and eliminate unnecessary decisions.' },
        { title: 'Accessibility First', desc: 'Design for varying levels of vision, dexterity, and digital literacy.' },
        { title: 'Build Confidence', desc: 'Provide reassurance and clear feedback throughout the experience.' },
        { title: 'Support Care Networks', desc: 'Recognize that healthcare is often a shared responsibility between patients and caregivers.' },
      ],
      userFlows: [
        { title: 'Account Setup', desc: 'Helping users create an account and personalize accessibility settings.' },
        { title: 'Appointment Booking', desc: 'Allowing users to easily discover doctors and schedule appointments.' },
        { title: 'Consultation Experience', desc: 'Providing a simple and stress-free virtual consultation experience.' },
        { title: 'Follow-Up Care', desc: 'Helping users understand prescriptions and next steps.' },
        { title: 'Caregiver Support', desc: 'Allowing trusted family members to access important healthcare information.' },
      ],
      showJourneyTitle: true,
      showUserFlowImage: true,
      wireframes: {
        intro: 'I translated the user flows into mid-fidelity wireframes to focus on structure and usability. At this stage, the goal was simple: Make sure elderly users can complete key tasks without confusion.',
        decisions: [
          'Removed full onboarding → replaced with a single welcome screen',
          'Kept home screen minimal and action-focused',
          'Broke appointment booking into simple steps',
          'Reduced consultation screen to essential controls only',
          'Structured post-consultation information clearly',
        ],
      },
      hifiDesign: {
        intro: 'The high-fidelity design focused on clarity, trust, and accessibility. The aim was to make the experience feel calm and easy to use for elderly users.',
        visualDirection: [
          'Clean and minimal interface',
          'High readability and strong hierarchy',
          'Friendly, non-clinical healthcare feel',
          'Calm color palette (teal/green-based)',
        ],
        screenHighlights: [
          { title: 'Welcome Screen', desc: 'Simple entry point into the app with a clear start action.' },
          { title: 'Home Dashboard', desc: 'Only 3 core actions: Book Appointment, Upcoming Visits, Prescriptions.' },
          { title: 'Booking Flow', desc: 'Step-by-step doctor selection, suggested time slots, clear confirmation state.' },
          { title: 'Consultation Screen', desc: 'Large video area, minimal controls, clear call status.' },
          { title: 'Post-Consultation', desc: 'Summary of visit, prescription details, follow-up instructions, share with caregiver option.' },
        ],
      },
      designTradeoffs: [
        { title: 'Simplicity vs Features', desc: 'Prioritized only essential healthcare tasks.' },
        { title: 'Guided Flow vs Flexibility', desc: 'Step-by-step flows reduce confusion.' },
        { title: 'Information Density vs Readability', desc: 'More spacing and fewer elements per screen.' },
      ],
      accessibilityFeatures: [
        'Large, readable typography',
        'High contrast UI',
        'Large touch targets',
        'Simple language',
        'Consistent layouts',
      ],
      outcome: [
        'Booking healthcare appointments easily',
        'Attending consultations with confidence',
        'Understanding medical feedback clearly',
        'Involving caregivers when needed',
      ],
      outcomeIntro: 'The final design supports elderly Kenyans in:',
      reflection: 'This project reinforced a key insight: Simplicity is what makes healthcare usable. By reducing complexity and focusing on clarity, the experience becomes more accessible for elderly users navigating digital healthcare for the first time.',
    },
    featured: true,
  },
];

// Experience data
export const experience = [
  {
    company: 'Digital Qatalyst',
    role: 'Product Owner & Product Designer',
    duration: 'AUG 2025 – Present',
    location: 'In-person',
    achievements: [
      'Own product vision, roadmap, and user experience for learning platforms',
      'Design and deliver end-to-end digital user experiences',
      'Build AI-assisted functional prototypes to validate concepts before engineering implementation',
      'Define and prioritize product backlogs and lead sprint reviews to ensure delivery aligns with business value',
      'Facilitate stakeholder demos and feedback loops, iterate rapidly on prototypes',
      'Coordinate with engineers to ensure scalable implementation',
    ],
  },
  {
    company: 'Belfor Tech Consultants',
    role: 'UI/UX Design Intern',
    duration: '2025',
    location: 'Kenya Remote',
    achievements: [
      'Designed user-friendly web and mobile interfaces aligned with business goals',
      'Conducted user research and usability testing to inform design decisions',
      'Created wireframes, prototypes, and maintained design systems',
      'Collaborated with cross-functional teams to implement and refine designs',
      'Ensured brand consistency, accessibility, and advocated for UX best practices',
    ],
  },
  {
    company: 'Faith Foundry Tech',
    role: 'UI/UX Design Intern',
    duration: '2024',
    location: 'Kenya Hybrid',
    achievements: [
      'Supported end-to-end design process through research, prototyping, and stakeholder engagement',
      'Created marketing materials and contributed to various creative design initiatives',
      'Provided administrative support, including drafting emails, memos, and pitch decks',
      'Designed presentation slides and assisted with internal/external communications',
      'Used Framer, Webflow, and presentation software to prepare reports and special projects',
    ],
  },
  {
    company: 'Space Ya Tech Cohort 1 Mastercraft Internship',
    role: 'Product Design Intern',
    duration: '2024',
    location: 'Kenya Remote',
    achievements: [
      'Collaborated with a team of designers to research and design a property management platform',
      'Conducted market research, iterated on designs, and implemented stakeholder feedback',
      'Gained hands-on experience in collaborative design and user-centered processes',
    ],
  },
  {
    company: 'Zuri HNG Internship',
    role: 'Product Design Track',
    duration: '2023',
    location: 'Remote, Nigeria',
    achievements: [
      'Gained strong foundation in UI/UX design principles and best practices',
      'Collaborated with product teams to design intuitive interfaces and scalable design systems',
      'Created and tested prototypes to validate concepts and improve usability',
      'Enhanced website UX by optimizing navigation and interaction flows',
      'Completed multiple real-world design challenges with user-centered solutions',
    ],
  },
];

// Skills data
export const skills = [
  {
    category: 'Product Strategy',
    items: ['Product Ownership', 'Product Strategy', 'Stakeholder Management', 'Agile & Sprint Planning', 'Design Thinking'],
  },
  {
    category: 'UX/UI Design',
    items: ['User Experience Design', 'Conversational UX', 'Wireframing & Interactive Prototyping', 'Design Systems', 'Information Architecture'],
  },
  {
    category: 'Research & Testing',
    items: ['User Research', 'Usability Testing', 'Design Thinking', 'User-Centered Design'],
  },
  {
    category: 'AI-Assisted Design',
    items: ['AI-Assisted Prototyping', 'ChatGPT', 'NotebookLM', 'Midjourney', 'Magic Patterns'],
  },
  {
    category: 'Design Tools',
    items: ['Figma', 'Framer', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro'],
  },
  {
    category: 'Development & Collaboration',
    items: ['HTML & CSS', 'GitHub', 'Cursor', 'Kiro', 'Lovable', 'Antigravity'],
  },
  {
    category: 'Productivity & Organization',
    items: ['Google Workspace', 'Trello', 'Miro', 'Notion'],
  },
];
