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
        'As the platform grew, restaurant onboarding became increasingly dependent on the founder. Restaurant owners could not independently join the platform or manage their business information.',
        'I redesigned the restaurant-side experience to shift Reserve Me from a founder-led registration process to a self-service model, allowing restaurant owners to register, onboard, and manage their restaurants themselves.',
      ],
      challenge: {
        intro: 'The existing process looked like: Founder recruits → Founder registers restaurant → Restaurant provides information → Restaurant goes live. While this worked when onboarding restaurants individually, it created an operational bottleneck. When I helped with restaurant onboarding on the previous platform, I experienced this firsthand. I often didn\'t have all the information needed to register a restaurant, which meant contacting the restaurant, waiting for the missing details, and returning to complete the setup.',
        closing: 'The person responsible for entering the information wasn\'t always the person who had it. This created an opportunity to move information collection and restaurant setup closer to its source: the restaurant owner.',
        flowImage: '/Userflows/1.png',
      },
      sections: [
        {
          title: '01: Discovery',
          intro: 'I spoke with the Reserve Me founder to understand the existing onboarding process and supplemented those conversations with my own experience helping register restaurants.',
          observations: [
            'Restaurant registration depended on the founder.',
            'Restaurant information often had to be collected manually.',
            'Missing details could pause the onboarding process.',
            'Restaurant owners had limited control over their presence on the platform.',
            'As more restaurants joined, the manual process would become increasingly difficult to sustain.',
          ],
          designOpportunity: {
            question: 'Instead of asking: How can the founder register restaurants faster? I reframed the problem as: How might we enable restaurants to register and manage themselves?',
            flow: 'Restaurant discovers → Registers → Onboards → Manages',
          },
        },
        {
          title: '02: Designing Self-Service Onboarding',
          intro: 'The first part of the redesign focused on giving restaurant owners everything they needed to establish their presence on Reserve Me without relying on the founder.',
          subsections: [
            {
              title: 'Registration',
              desc: 'Restaurant owners can create an account and start their restaurant setup themselves. The registration flow establishes the account before moving into the more detailed restaurant onboarding process.',
            },
            {
              title: 'Guided Restaurant Setup',
              desc: 'Rather than presenting all required information at once, I structured the onboarding experience into manageable steps. This allowed restaurant owners to progressively provide the information needed to establish their restaurant.',
            },
          ],
          flow: 'Create account → Add restaurant information → Complete setup → Enter dashboard',
          flowClosing: 'The goal was to make the process clear enough for an owner to complete independently without needing someone from Reserve Me to guide them through it.',
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
          title: '03: Designing the Restaurant Management Dashboard',
          intro: 'Onboarding and ongoing management serve different purposes.',
          paragraph2: 'I therefore separated the two experiences:',
          purposeBoxes: [
            {
              title: 'Onboarding',
              desc: '"Help me get my restaurant onto Reserve Me."'
            },
            {
              title: 'Management',
              desc: '"Help me manage my restaurant on Reserve Me."'
            }
          ],
          paragraph3: 'Once onboarding is complete, restaurant owners enter a dedicated management dashboard where they can continue maintaining their restaurant presence.',
          closing: 'The dashboard provides a central place for restaurant owners to manage their information and activity rather than relying on the Reserve Me team for routine updates.',
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
          desc: 'Restaurant owners can create their accounts and begin the onboarding process without requiring the founder to register the business on their behalf.',
        },
        {
          title: 'Guided Onboarding',
          desc: 'Restaurant setup is broken into manageable steps, making it easier for owners to understand what information is required.',
        },
        {
          title: 'Separate Onboarding & Management',
          desc: 'Initial setup is kept distinct from ongoing restaurant management so each experience has a clear purpose.',
        },
        {
          title: 'Owner-Controlled Information',
          desc: 'The restaurant owner becomes the source of truth for their business information, reducing the dependency on manual information collection.',
        },
        {
          title: 'Designed for Scale',
          desc: 'The new model allows Reserve Me to onboard restaurants without requiring the founder to personally complete every registration.',
        },
      ],
      designDecisionsImage: '/image.png',
      result: {
        intro: 'The redesigned experience was built and launched, shifting restaurant onboarding from a founder-led process to a self-service experience.',
        context: 'At the time of the redesign, Reserve Me had 2 restaurants on the platform. Following the launch, the platform grew to 9 restaurants.',
        metrics: [
          { label: '2 → 9', desc: 'Restaurants on Reserve Me' },
          { label: '+7', desc: 'Additional restaurants' },
          { label: '4.5×', desc: 'Growth in restaurants on the platform' }
        ],
        closing: 'The redesign established a more scalable onboarding model while giving restaurant owners greater control over their presence on Reserve Me.'
      },
      reflection: [
        'This project showed me how a seemingly simple onboarding problem can reveal a deeper product constraint.',
        'The solution wasn\'t just to make restaurant registration easier. It was to change who owns the process, moving it from the Reserve Me founder to the restaurant itself.',
        'That shift turned a manual operational task into a self-service product experience and created a foundation that could support the platform as more restaurants joined.'
      ],
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
        'Reserve Me is a restaurant discovery and reservation platform that helps diners discover restaurants and book tables across Kenya.',
        'The existing mobile experience supported the core discovery and reservation journey, but there were opportunities to improve usability, visual consistency, onboarding, and restaurant discovery.',
        'I conducted a UX audit of the existing app, discussed the product with the founder, and redesigned the core customer experience from onboarding and discovery through search and reservations.',
        'The redesign focused on making the experience clearer, more contextual, and more aligned with the Reserve Me brand.',
      ],
      challenge: {
        intro: 'The existing experience was functional, but several parts of the journey created unnecessary friction.\n\nThrough my audit and conversations with the founder, I identified four key areas:',
        points: [
          'Inconsistent visual language made the experience feel less cohesive.',
          'Authentication flows lacked important usability and feedback states.',
          'Restaurant discovery did not provide enough structure to help users quickly narrow their options.',
          'Contextual information, such as location, preferences, and reservations, was not being used effectively throughout the experience.',
        ],
        closing: 'How might we help diners go from "I want to eat out" to "I\'ve found and booked a restaurant" with less friction and more confidence?',
      },
      sections: [
        {
          title: '01: UX Audit & Discovery',
          intro: 'I independently audited the existing mobile experience across the main customer journey: Onboarding → Authentication → Home → Discovery → Search → Restaurant Selection → Reservation.\n\nI also spoke with the founder to understand the product, existing experience, and intended direction.',
          subsections: [
            {
              title: 'Key findings',
              points: [
                {
                  label: 'Clarity',
                  desc: 'The interface lacked consistent hierarchy and visual patterns, making some screens harder to scan.'
                },
                {
                  label: 'Confidence',
                  desc: 'Authentication and restaurant information needed clearer states and stronger visual cues to help users make decisions with confidence.'
                },
                {
                  label: 'Context',
                  desc: 'The experience had an opportunity to make better use of information such as location, date, preferences, and upcoming reservations.'
                }
              ]
            }
          ],
          designPrinciples: {
            intro: 'These findings shaped the redesign around three principles:',
            principles: [
              { label: 'Clarity', desc: 'Make information easier to scan and understand.' },
              { label: 'Confidence', desc: 'Give users the information and feedback they need to make decisions.' },
              { label: 'Context', desc: 'Make the experience more relevant to what the user is trying to accomplish.' }
            ]
          },
          images: ['/old/login.png', '/old/signup filled.png', '/old/home.png', '/old/WhatsApp Image 2025-06-10 at 10.01.12 AM (1).png', '/old/WhatsApp Image 2025-06-10 at 11.20.09 AM (1) 1.png', '/old/WhatsApp Image 2025-06-10 at 11.20.10 AM (3) 1.png']
        },
        {
          title: '02: Establishing a Stronger Visual Identity',
          intro: 'The existing experience relied heavily on illustrations and had inconsistent use of Reserve Me\'s visual identity.\n\nI introduced a more cohesive visual direction using:',
          improvements: [
            'Reserve Me brand colors',
            'Real restaurant imagery',
            'Stronger typography',
            'Clearer visual hierarchy',
            'Consistent spacing and components'
          ],
          designIntent: 'Rather than making Reserve Me feel like a generic restaurant directory, I wanted the interface to make restaurants and dining experiences the visual focus.',
          images: ['/wv/on.png', '/wv/on1.png', '/wv/on3.png']
        },
        {
          title: '03: Improving Onboarding & Authentication',
          intro: 'The existing authentication experience lacked several expected interaction patterns.\n\nI redesigned the flows to provide clearer guidance and feedback.',
          improvements: [
            'Google sign-up',
            'Password visibility controls',
            'Password recovery',
            'Validation states',
            'Error states',
            'Clearer form hierarchy',
            'More structured onboarding'
          ],
          goal: 'The goal was to make the first interaction with Reserve Me feel simpler and more trustworthy.',
          images: ['/au/au.png', '/au/au1.png', '/au/au2.png', '/au/au3.png']
        },
        {
          title: '04: Making Restaurant Discovery Easier',
          intro: 'The existing home and discovery experience did not give users enough ways to quickly narrow down restaurants based on what they were looking for.\n\nI introduced more structured discovery through:',
          discoveryFeatures: [
            'Top Rated',
            'Nearby',
            'Special Offers',
            'Hidden Gems',
            'Cuisine and experience categories',
            'Improved restaurant cards',
            'More prominent restaurant imagery',
            'Clearer decision-making information'
          ],
          outcome: 'This created a more scannable experience where users could quickly identify restaurants relevant to their needs.',
          images: ['/sn/s.png', '/sn/s1.png', '/sn/s3.png', '/home/Hm.png', '/home/hm2.png']
        },
        {
          title: '05: Designing for Context',
          intro: 'One of the biggest opportunities was making the experience respond more naturally to user context.\n\nI introduced concepts around:',
          contextElements: [
            'Location',
            'Date',
            'Restaurant preferences',
            'Upcoming reservations',
            'Personalized discovery'
          ],
          goal: 'The goal was to move the experience from simply showing restaurants to helping users find restaurants that fit their situation.'
        },
        {
          title: '06: A Key Design Decision: Making Location Contextual',
          intro: 'The location experience required particular attention.\n\nThe initial map interaction felt distracting because the map appeared as part of the experience even when a diner hadn\'t chosen to use location.\n\nRather than making the map permanently visible, I designed the interaction around the user\'s choice.',
          locationStates: [
            {
              state: 'Location Off',
              desc: 'The user can continue without sharing their location, keeping the interface focused.'
            },
            {
              state: 'Location On',
              desc: 'Once the diner enables location, the map becomes available to support location-based discovery.'
            }
          ],
          why: 'This allowed location to become a contextual feature rather than a persistent visual element.',
          principle: 'Surface functionality when it becomes relevant, rather than making every feature visible at once.'
        },
        {
          title: '07: Bringing the Journey Together',
          intro: 'The redesigned experience connected the core customer journey: Onboard → Discover → Search → Evaluate → Reserve.\n\nEach stage had a clear purpose:',
          journeyTable: [
            { stage: 'Onboarding', focus: 'Establish trust' },
            { stage: 'Home', focus: 'Provide a relevant starting point' },
            { stage: 'Discovery', focus: 'Help users explore' },
            { stage: 'Search', focus: 'Match user intent' },
            { stage: 'Restaurant details', focus: 'Support decision-making' },
            { stage: 'Reservation', focus: 'Make booking straightforward' }
          ],
          closing: 'The redesign was therefore not just a collection of new screens. I focused on creating a more coherent journey between them.'
        }
      ],
      hifiTitle: 'High-Fidelity Experience',
      hifiIntro: 'The final designs covered the core customer experience, including:',
      hifiScreens: [
        'Splash and onboarding',
        'Login and registration',
        'Location permissions',
        'Home and discovery',
        'Restaurant search',
        'Restaurant listings',
        'Restaurant details',
        'Reservation journey'
      ],
      hifiClosing: 'The founder later developed the redesigned experience into an APK prototype, providing a tangible implementation direction for the product.',
      hifiImages: [
        '/ff/20.png', '/ff/21.png', '/ff/22.png', '/ff/23.png', '/ff/24.png', '/ff/25.png', '/ff/26.png', '/ff/27.png', '/ff/28.png'
      ],
      outcome: {
        intro: 'The redesign established a stronger UX and visual direction for Reserve Me\'s customer-facing experience.\n\nIt delivered:',
        points: [
          'A more cohesive visual identity',
          'Clearer onboarding and authentication flows',
          'More structured restaurant discovery',
          'A more contextual approach to location and search',
          'A clearer journey from discovery to reservation'
        ],
        implementation: 'The redesigned experience was developed into an APK prototype, but I don\'t have evidence that this version was publicly launched. I therefore have not attributed user or business metrics to the redesign.'
      },
      reflection: 'This project reinforced the importance of designing for context rather than simply adding functionality.\n\nThe location experience was a good example: instead of making the map visible by default, I considered when the user actually needed it and designed the interface to respond to that choice.\n\nIt also strengthened my ability to turn an existing product into a clearer, more cohesive experience through UX auditing, prioritization, and interface design.',
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
