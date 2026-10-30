import { Project, Certification, SkillItem, EducationDetail } from '../types';

export const PERSONAL_INFO = {
  name: 'Mounika Chowdhary K',
  shortName: 'Mounika',
  badge: 'SIH 2026 Qualified // Open to Opportunities',
  roles: [
    'AI/ML Student',
    'Full Stack Developer',
    'Problem Solver',
  ],
  roleSubtitle: 'B.Tech CSE (AI & ML) Student | Web Developer | Programmer | AI/ML Enthusiast',
  institution: 'REVA University, Bangalore',
  duration: '2025 - 2029',
  email: 'mounikachowdaryk012@gmail.com',
  github: 'https://github.com/mounikachowdaryk012',
  linkedin: 'https://linkedin.com/in/mounikachowdaryk',
  location: 'Bangalore, Karnataka, India',
  about: [
    'I am currently pursuing my B.Tech degree in Computer Science Engineering (AI & ML) at REVA University.',
    'I have hands-on experience in programming, web development, database management, and building academic projects.',
    'I am passionate about learning new technologies, solving problems, and creating innovative software solutions.',
  ],
  stats: [
    { label: 'Projects Built', value: '8+' },
    { label: 'Certifications', value: '4' },
    { label: 'Hackathon Track', value: 'SIH 2026 Qualified' },
    { label: 'Core Stack', value: 'React + AI/ML' },
  ],
};

export const EDUCATION_DATA: EducationDetail = {
  degree: 'Bachelor of Technology (B.Tech)',
  specialization: 'Artificial Intelligence and Machine Learning (AI & ML)',
  institution: 'REVA University',
  location: 'Bangalore, Karnataka, India',
  timeline: '2025 - 2029',
  description:
    'Rigorous engineering curriculum centered on deep computing fundamentals, artificial intelligence, neural networks, machine learning algorithms, and modern software development pipelines.',
  coursework: [
    'Data Structures & Algorithms',
    'Machine Learning Foundations',
    'Database Management Systems (DBMS)',
    'Object-Oriented Programming (C++ & Python)',
    'Web Architecture & Client-Side Systems',
    'Computer Organization & Operating Systems',
    'Discrete Mathematics & Linear Algebra',
  ],
  keyHighlights: [
    'Smart India Hackathon (SIH) 2026 Qualified representing university teams',
    'Active member of technical innovation hubs and competitive coding cohorts',
    'Engaged in hands-on rapid prototyping across IoT, AI prediction, and full-stack web platforms',
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'blood-bank',
    title: 'Blood Bank Management System',
    category: 'web',
    categoryLabel: 'Full-Stack Web Application',
    description:
      'Web application for blood donor registration and blood bank management with database integration and admin features.',
    detailedDescription:
      'A comprehensive healthcare portal designed to bridge the gap between voluntary blood donors, patients, and hospital blood banks. Features role-based access for administrators, real-time inventory tracking by blood group, donor eligibility screening, and appointment scheduling.',
    technologies: ['React.js', 'JavaScript', 'Supabase', 'SQL', 'Vercel'],
    githubUrl: 'https://github.com/mounikachowdaryk012/blood-bank-management',
    liveUrl: 'https://blood-bank-management.vercel.app',
    featured: true,
    highlightMetric: 'Live Donor DB',
    highlights: [
      'Multi-role authentication for donors and bank admins',
      'Real-time blood stock level telemetry with shortage alerts',
      'Instant search and filter by blood group and city radius',
    ],
    architecture: [
      'Supabase PostgreSQL database with Row Level Security (RLS)',
      'Responsive React frontend with component-driven state architecture',
      'Automated deployment and edge-routing on Vercel',
    ],
  },
  {
    id: 'ipl-ticket-booking',
    title: 'IPL Ticket Booking System',
    category: 'web',
    categoryLabel: 'Sports & Event Platform',
    description:
      'Cricket ticket booking application with match listings, booking pages and booking history.',
    detailedDescription:
      'Interactive ticketing portal built for Indian Premier League cricket fans. Users can explore upcoming tournament fixtures, select stadium stadium stands with seat tier pricing, view live seat availability, and manage their ticket reservations with virtual passes.',
    technologies: ['React.js', 'Vite', 'React Router', 'Supabase'],
    githubUrl: 'https://github.com/mounikachowdaryk012/ipl-ticket-booking',
    liveUrl: 'https://ipl-booking-system.vercel.app',
    featured: true,
    highlightMetric: 'Match Fixtures & Seats',
    highlights: [
      'Visual stadium layout with tiered seating zones',
      'Dynamic match schedules with team filter algorithms',
      'Instant booking confirmation with downloadable virtual pass',
    ],
    architecture: [
      'Vite build engine for lightning-fast route transitions',
      'React Router DOM dynamic routing for match and checkout views',
      'Relational schema in Supabase for fixtures, stadiums, and bookings',
    ],
  },
  {
    id: 'tasty-bites',
    title: 'Tasty Bites',
    category: 'web',
    categoryLabel: 'E-Commerce / Food Ordering',
    description:
      'Food ordering website with browsing and ordering functionality.',
    detailedDescription:
      'Modern food delivery and restaurant discovery web app. Features an appetizing visual menu, category filtering (Starters, Main Course, Desserts, Beverages), dynamic cart calculations with tax and delivery estimates, and smooth checkout flow.',
    technologies: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Supabase'],
    githubUrl: 'https://github.com/mounikachowdaryk012/tasty-bites',
    liveUrl: 'https://tasty-bites-hub.vercel.app',
    featured: false,
    highlightMetric: 'Interactive Menu & Cart',
    highlights: [
      'Dynamic cart drawer with instant subtotal and tax calculation',
      'Categorized culinary catalog with diet preferences (Veg/Non-Veg)',
      'Customer order history and order status feedback',
    ],
    architecture: [
      'React state management for real-time cart persistence',
      'Supabase table schemas for dishes, orders, and customer logs',
      'Tailored responsive layouts optimized for mobile ordering',
    ],
  },
  {
    id: 'code-atlas',
    title: 'CodeAtlas - Programming Cheat Sheets',
    category: 'tools',
    categoryLabel: 'Developer Knowledge Hub',
    description:
      'Programming reference website containing syntax guides and examples.',
    detailedDescription:
      'A streamlined quick-reference portal engineered for developers and students. Houses cheat sheets, syntax breakdowns, standard library patterns, and code snippets for languages like C, C++, Python, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/mounikachowdaryk012/code-atlas',
    liveUrl: 'https://code-atlas-ref.vercel.app',
    featured: false,
    highlightMetric: 'Rapid Syntax Lookup',
    highlights: [
      'Instant keyword search across all language syntax libraries',
      'One-click snippet copy-to-clipboard with visual feedback',
      'Dark mode high-contrast code highlighting for comfortable reading',
    ],
    architecture: [
      'Lightweight vanilla JavaScript architecture for zero-delay loading',
      'Semantic HTML5 structure for optimal keyboard navigation and accessibility',
      'Organized JSON data maps for multi-language syntax indices',
    ],
  },
  {
    id: 'reva-movie-house',
    title: 'Reva Movie House',
    category: 'web',
    categoryLabel: 'Media & Entertainment',
    description:
      'Movie browsing application with interactive interface.',
    detailedDescription:
      'Campus cinema portal presenting upcoming movie screenings, trending cinema titles, trailer previews, and genre sorting. Built with sleek dark aesthetic and responsive grid cards.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/mounikachowdaryk012/reva-movie-house',
    liveUrl: 'https://reva-movie-house.vercel.app',
    featured: false,
    highlightMetric: 'Campus Cinema Showcase',
    highlights: [
      'Interactive movie card flips revealing cast, synopsis, and rating',
      'Category filtering across action, sci-fi, drama, and campus cinema',
      'Showtime reservation simulator with instant seat selection',
    ],
    architecture: [
      'Vanilla DOM manipulation with modern CSS grid layouts',
      'Custom animations using CSS3 transitions and transforms',
      'Client-side state tracking for selected showtimes',
    ],
  },
  {
    id: 'digital-wallet',
    title: 'My Digital Wallet',
    category: 'web',
    categoryLabel: 'Fintech Simulation',
    description:
      'Digital wallet application for managing balances and virtual transactions.',
    detailedDescription:
      'A secure fintech web application prototype that allows users to manage multiple virtual currency balances, send funds to peers, track transaction histories with category tags, and set monthly spending caps.',
    technologies: ['React.js', 'JavaScript', 'SQL'],
    githubUrl: 'https://github.com/mounikachowdaryk012/my-digital-wallet',
    liveUrl: 'https://my-digital-wallet.vercel.app',
    featured: false,
    highlightMetric: 'Ledger & Transaction Logs',
    highlights: [
      'Simulated ledger maintaining atomic debit/credit balances',
      'Interactive expense breakdown charts with category filtering',
      'Audit log with transaction receipt modal generator',
    ],
    architecture: [
      'React component state synchronized with relational SQL tables',
      'Client-side transaction validation ensuring non-negative balances',
      'Clean tabular view with sorting by date, amount, and recipient',
    ],
  },
  {
    id: 'satquery-ai',
    title: 'SatQuery AI - Disaster Prediction',
    category: 'aiml',
    categoryLabel: 'AI/ML & Geospatial Intelligence',
    description:
      'AI based solution using satellite imagery analysis for disaster prediction.',
    detailedDescription:
      'An advanced machine learning framework that evaluates high-resolution multispectral satellite images to detect early environmental anomalies such as flood vulnerability, wildfire risk zones, and severe storm runoff. Designed to provide actionable insights for disaster relief agencies.',
    technologies: ['AI/ML', 'Satellite Imagery', 'Disaster Management', 'Python'],
    githubUrl: 'https://github.com/mounikachowdaryk012/satquery-ai-disaster-prediction',
    liveUrl: 'https://satquery-ai.vercel.app',
    featured: true,
    highlightMetric: 'Geospatial AI Predictor',
    highlights: [
      'Convolutional neural analysis on multi-spectral satellite tiles',
      'Risk contour heatmaps indicating flood and wildfire hazards',
      'Automated disaster alert dispatch with confidence scores',
    ],
    architecture: [
      'Computer Vision pipeline processing satellite data bands',
      'Predictive model trained for anomaly detection and terrain changes',
      'Interactive web dashboard displaying geospatial disaster zones',
    ],
  },
  {
    id: 'arduino-fire-detection',
    title: 'Arduino Fire Detection and Sprinkler System',
    category: 'iot',
    categoryLabel: 'Embedded IoT & Robotics',
    description:
      'Prototype that detects fire and activates water sprinkling.',
    detailedDescription:
      'An autonomous hardware and embedded systems safety device. Uses optical flame detection sensors coupled with an Arduino Uno microcontroller to identify localized fire outbreaks in real time, triggering buzzer warnings and a high-efficiency DC water pump sprinkler system.',
    technologies: ['Arduino Uno', 'Flame Sensor', 'Water Pump', 'C++ / Embedded C'],
    githubUrl: 'https://github.com/mounikachowdaryk012/arduino-fire-detection-sprinkler',
    liveUrl: 'https://github.com/mounikachowdaryk012/arduino-fire-detection-sprinkler',
    featured: false,
    highlightMetric: 'Real-time Autonomous Response',
    highlights: [
      'Sub-second optical flame detection using infrared spectrum sensors',
      'Microcontroller relay activating high-pressure DC water sprinkler pump',
      'Audible alarm siren and status LED feedback system',
    ],
    architecture: [
      'Arduino Uno programmed with low-latency Embedded C loops',
      'Relay driver module isolating high-current pump circuitry',
      'Threshold tuning logic for ambient light rejection',
    ],
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'sih-qualified',
    title: 'Smart India Hackathon (SIH) 2026 Qualified',
    issuer: 'Ministry of Education & AICTE, Govt. of India',
    category: 'Hackathon',
    isHackathon: true,
    description:
      'Qualified in the prestigious Smart India Hackathon 2026 after presenting an innovative technical software solution, demonstrating rapid architecture design and problem solving.',
    skills: ['Rapid Prototyping', 'Team Collaboration', 'Problem Solving', 'Full-Stack Delivery'],
    date: '2026',
    credentialId: 'SIH-2026-QUALIFIED',
  },
  {
    id: 'nptel-python',
    title: 'Programming, Data Structures and Algorithms Using Python',
    issuer: 'NPTEL (IIT Madras / SWAYAM)',
    category: 'Computer Science',
    description:
      'Rigorous certification validating algorithmic complexity, data structures (Trees, Graphs, Hash Tables), sorting algorithms, and idiomatic Python programming.',
    skills: ['Data Structures', 'Algorithms', 'Python 3', 'Time Complexity Analysis'],
    date: 'Certified Academic Credential',
    credentialId: 'NPTEL-CS-PYTHON-2024',
  },
  {
    id: 'ibm-skillsbuild',
    title: 'Python for Data Science & Programming',
    issuer: 'IBM SkillsBuild',
    category: 'AI & Python',
    description:
      'Comprehensive industry certification from IBM demonstrating core Python proficiency, data manipulation, file handling, and computational logic foundations.',
    skills: ['Python', 'Data Analysis', 'Logic Engineering', 'Software Best Practices'],
    date: 'IBM Verified Credential',
    credentialId: 'IBM-SKILLS-PY-0194',
  },
  {
    id: 'wadhwani-foundation',
    title: 'Innovation and Entrepreneurship',
    issuer: 'Wadhwani Foundation',
    category: 'Entrepreneurship',
    description:
      'Certified in user-centric innovation methodologies, product design thinking, business modeling, agile sprint execution, and sustainable tech ventures.',
    skills: ['Design Thinking', 'Product Strategy', 'Agile Methodologies', 'Value Proposition'],
    date: 'Wadhwani Certified',
    credentialId: 'WF-INN-ENT-2024',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming
  {
    name: 'Python',
    level: 90,
    tagline: 'AI/ML algorithms, data structures & backend logic',
    category: 'Programming',
    icon: 'Terminal',
    projectsUsed: ['SatQuery AI', 'NPTEL Coursework', 'IBM Python'],
  },
  {
    name: 'JavaScript',
    level: 88,
    tagline: 'ES6+, asynchronous event loops & modern web runtime',
    category: 'Programming',
    icon: 'Code2',
    projectsUsed: ['Blood Bank System', 'IPL Ticket Booking', 'Tasty Bites'],
  },
  {
    name: 'C++',
    level: 85,
    tagline: 'Object-oriented programming, memory architecture & algorithms',
    category: 'Programming',
    icon: 'Cpu',
    projectsUsed: ['Academic DSA', 'Arduino Fire Detection'],
  },
  {
    name: 'C',
    level: 82,
    tagline: 'Low-level computing, pointers & hardware interfaces',
    category: 'Programming',
    icon: 'Binary',
    projectsUsed: ['Computer Architecture', 'Microcontroller Logic'],
  },

  // Web
  {
    name: 'React.js',
    level: 90,
    tagline: 'Component lifecycle, hooks, state machines & reactive UI',
    category: 'Web',
    icon: 'Atom',
    projectsUsed: ['Blood Bank System', 'IPL Booking', 'Tasty Bites', 'Digital Wallet'],
  },
  {
    name: 'HTML5',
    level: 95,
    tagline: 'Semantic markup, accessibility standards & SEO structures',
    category: 'Web',
    icon: 'FileCode',
    projectsUsed: ['CodeAtlas', 'Reva Movie House', 'Portfolio'],
  },
  {
    name: 'CSS3 / Tailwind',
    level: 92,
    tagline: 'Responsive design, glassmorphism, flexbox & cyber aesthetics',
    category: 'Web',
    icon: 'Palette',
    projectsUsed: ['Portfolio', 'CodeAtlas', 'Reva Movie House'],
  },

  // Database
  {
    name: 'Supabase',
    level: 88,
    tagline: 'BaaS, Postgres RLS, real-time subscriptions & edge auth',
    category: 'Database',
    icon: 'DatabaseZap',
    projectsUsed: ['Blood Bank System', 'IPL Booking', 'Tasty Bites'],
  },
  {
    name: 'SQL',
    level: 86,
    tagline: 'Complex joins, indexing, normalization & aggregate queries',
    category: 'Database',
    icon: 'Database',
    projectsUsed: ['Digital Wallet', 'Blood Bank System', 'DBMS Labs'],
  },
  {
    name: 'MySQL',
    level: 84,
    tagline: 'Relational data modeling, ACID transactions & stored procedures',
    category: 'Database',
    icon: 'Server',
    projectsUsed: ['DBMS Projects', 'Academic Database Design'],
  },

  // Tools
  {
    name: 'Git',
    level: 90,
    tagline: 'Version control, atomic commits, branching & merges',
    category: 'Tools',
    icon: 'GitBranch',
    projectsUsed: ['All Repositories', 'SIH Sprint Collaboration'],
  },
  {
    name: 'GitHub',
    level: 92,
    tagline: 'Remote repos, pull requests, actions CI/CD & pages deployment',
    category: 'Tools',
    icon: 'Github',
    projectsUsed: ['Portfolio Showcase', 'Team Code Reviews'],
  },
  {
    name: 'VS Code',
    level: 95,
    tagline: 'Productivity extensions, debuggers, linting & dev workspaces',
    category: 'Tools',
    icon: 'Laptop',
    projectsUsed: ['Daily Development Environment'],
  },
];
