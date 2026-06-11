// Featured projects data for Mary's portfolio
export const projects = [
  {
    id: 'dtma',
    title: 'DTMA',
    fullTitle: 'Designing an AI-Enabled Learning Journey for Digital Transformation Education',
    product: 'DTMA',
    category: 'Web App',
    cardBg: '#ffffff',
    image: '/Screenshots/22.png',
    imageStyle: 'contain',
    description: 'A structured learning ecosystem for digital transformation capability building across organizations.',
    icon: '🚀',
    role: 'UI/UX Designer',
    year: 2026,
    industry: 'EdTech',
    tags: ['Figma', 'Kiro', 'Miro'],
    overview: 'Digital transformation is one of the most discussed yet misunderstood shifts across organizations today. While companies continue investing in technology and transformation initiatives, many teams still struggle to connect strategy with practical execution. Most learning experiences in this space are fragmented, overly theoretical, and disconnected from real operational contexts. Traditional platforms focus on static content delivery rather than helping learners apply transformation concepts in meaningful ways.\n\nTo address this gap, DigitalQatalyst developed the Digital Transformation Management Academy (DTMA) — a structured learning ecosystem designed to help individuals and organizations understand and apply digital transformation through practical, scalable learning experiences.\n\nDTMA is built around DigitalQatalyst\'s 6 Digital Perspectives and serves three core learner groups: Digital Workers, Digital Leaders, and Digital Transformation Specialists / Architects.\n\nWhile the DTMA courses define what learners need to understand, the DTMA platform defines how learning is delivered, experienced, and scaled.\n\nAs the Product Owner and UI/UX Designer for the platform, I led the design of the experience layer powering the ecosystem — including course discovery, AI-supported learning, instructor tools, operational dashboards, and multi-role workflows.\n\nThe goal was not to design another LMS, but to create a scalable, AI-enabled learning system for continuous capability building and enterprise transformation adoption.',
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
    id: 'reserve-me',
    title: 'Reserve Me',
    fullTitle: 'Reserve Me Mobile App Redesign',
    product: 'Reserve Me',
    category: 'Mobile App',
    cardBg: '#ffffff',
    image: '/Screenshots/rm.png',
    imageStyle: 'contain',
    role: 'UI/UX Designer',
    tags: ['Figma'],
    description: 'A mobile app for easy restaurant and venue reservations with real-time availability.',
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
    title: 'Health Mobile App',
    fullTitle: 'Making Healthcare More Accessible for Elderly Kenyans',
    product: 'Telehealth Platform',
    category: 'Mobile App',
    cardBg: '#FFF1F2',
    image: '',
    imageStyle: 'contain',
    description: 'A telehealth platform that helps older adults access healthcare from home.',
    icon: '🏥',
    role: 'UX/UI Designer',
    tags: ['Figma'],
    caseStudyContent: {
      heroImage: '/Screenshots/reserve.png',
      overview: [
        'As Kenya\'s elderly population continues to grow, so does the demand for accessible healthcare. Yet for many older adults, seeking medical care still means travelling long distances, waiting in crowded hospitals, and depending on family members for support.',
        'At the same time, while telehealth services are becoming increasingly common, many digital healthcare solutions are designed for tech-savvy users and often overlook the unique needs of elderly patients.',
        'This project challenged me to design a telehealth experience that is simple, accessible, and trustworthy for elderly Kenyans.',
      ],
      scopeItems: [
        'User Research',
        'UX Strategy',
        'Wireframes',
        'High-Fidelity Designs',
        'Interactive Prototype',
      ],
      problem: {
        intro: 'For many elderly Kenyans, accessing healthcare isn\'t always straightforward. A routine doctor\'s appointment may involve:',
        points: [
          'Travelling long distances',
          'Waiting in queues for hours',
          'Relying on family members for transportation',
          'Missing follow-up appointments due to mobility limitations',
        ],
        closing: 'While telehealth has the potential to solve these challenges, existing healthcare apps often introduce new barriers: complex navigation, small text sizes, too many choices, and unfamiliar digital experiences. The result is that many elderly users struggle to adopt digital healthcare solutions.',
      },
      hmw: 'How might we help elderly Kenyans access healthcare services remotely without feeling overwhelmed by technology?',
      research: [
        {
          title: 'Healthcare Challenges',
          points: [
            'Frequent hospital visits can be physically demanding.',
            'Specialist care is not always easily accessible.',
            'Long waiting times discourage regular consultations.',
          ],
        },
        {
          title: 'Technology Challenges',
          points: [
            'Many elderly users are unfamiliar with modern digital interfaces.',
            'Complex workflows create anxiety and confusion.',
            'Small text and cluttered screens reduce usability.',
          ],
        },
        {
          title: 'Social Dynamics',
          points: [
            'Healthcare decisions are often supported by family members.',
            'Adult children and caregivers frequently help schedule appointments, manage medications, and access healthcare information.',
            'This highlighted an opportunity to design beyond the patient and consider the broader support system.',
          ],
        },
      ],
      successCriteria: [
        'Find healthcare services easily',
        'Book appointments without assistance',
        'Attend consultations remotely',
        'Access prescriptions and health information',
        'Feel confident throughout the experience',
      ],
      competitiveInsights: [
        'Dense information layouts',
        'Small interface elements',
        'Complex onboarding flows',
        'Limited caregiver support',
      ],
      designPrinciples: [
        { title: 'Simplicity Over Complexity', desc: 'Reduce unnecessary choices and focus on essential actions.' },
        { title: 'Accessibility First', desc: 'Design for varying levels of vision, dexterity, and digital literacy.' },
        { title: 'Build Confidence', desc: 'Help users feel supported and reassured at every step.' },
        { title: 'Support Care Networks', desc: 'Recognize that healthcare often involves family members and caregivers.' },
      ],
      userJourneySteps: [
        'Need Medical Help',
        'Find a Doctor',
        'Book Appointment',
        'Receive Confirmation',
        'Attend Consultation',
        'Receive Prescription',
        'Manage Follow-Up Care',
      ],
      experiencesDesigned: [
        'Doctor Discovery',
        'Appointment Booking',
        'Consultation Management',
        'Prescription Access',
        'Medication Reminders',
        'Caregiver Support',
      ],
      keyDesignDecisions: [
        {
          title: 'Making Primary Actions Obvious',
          desc: 'To reduce cognitive load, I designed clear entry points for the most common tasks: Book Appointment, Join Consultation, View Prescriptions.',
        },
        {
          title: 'Prioritizing Readability',
          desc: 'Design decisions included larger typography, high color contrast, generous spacing, and clear visual hierarchy.',
        },
        {
          title: 'Supporting Different Comfort Levels',
          desc: 'The platform supports both Voice Consultations and Video Consultations to accommodate different preferences and reduce technology-related anxiety.',
        },
        {
          title: 'Designing for Family Support',
          desc: 'I explored caregiver-assisted experiences that allow trusted family members to help manage appointments and reminders.',
        },
      ],
      tradeoffs: [
        {
          title: 'More Features vs Simplicity',
          decision: 'Focus on core healthcare tasks first.',
          why: 'Simplicity improves adoption among elderly users.',
        },
        {
          title: 'Information Density vs Accessibility',
          decision: 'Use larger UI elements and progressive disclosure.',
          why: 'Easier scanning and improved readability.',
        },
        {
          title: 'Video-First vs User Comfort',
          decision: 'Offer both voice and video consultations.',
          why: 'Users can choose the method that feels most familiar.',
        },
      ],
      finalExperiences: [
        'Onboarding',
        'Home Dashboard',
        'Doctor Discovery',
        'Appointment Scheduling',
        'Consultation Experience',
        'Prescription Management',
        'Medication Reminders',
        'Caregiver Support',
      ],
      accessibilityFeatures: [
        'Large touch targets',
        'High contrast interface',
        'Clear navigation',
        'Large typography',
        'Consistent layouts',
        'Simple language',
        'Error prevention patterns',
      ],
      successMetrics: [
        'Task completion rate',
        'Time to complete tasks',
        'Error frequency',
        'User confidence scores',
        'Satisfaction ratings',
      ],
      reflection: 'This project reinforced an important lesson: Designing for accessibility is not about adding special features — it\'s about removing barriers. By focusing on simplicity, clarity, and confidence, I was able to create a telehealth experience that makes healthcare more accessible for elderly Kenyans while supporting the people who help care for them.',
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
