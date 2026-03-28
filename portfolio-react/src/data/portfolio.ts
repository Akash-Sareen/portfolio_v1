import type { Project, Skill, Experience, Education, StatItem } from '../types';

export const RESUME_URL =
  'https://drive.google.com/file/d/1oGKBARHxjl_H2ykxLwHeRisU-2zb_CdS/view?usp=sharing';

export const ABOUT_SHORT =
  "FullStack Software Developer with a Master's in Advanced Computer Science and 4+ years of industry experience building scalable applications.";

export const ABOUT_LONG =
  'Tech-savvy and passionate about staying current with emerging technologies, with a strong drive to continuously learn and adopt new technological advancements. I build systems that are robust, observable, and built to last — spanning frontend UIs to distributed data pipelines.';

export const STATS: StatItem[] = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 8, suffix: '+', label: 'Projects Shipped' },
  { value: 10, suffix: '+', label: 'Students Mentored' },
];

export const SKILLS: Skill[] = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'Go'] },
  { category: 'Backend', items: ['Spring Boot', 'Spring Security', 'Spring Integration', 'REST APIs'] },
  { category: 'Frontend', items: ['Angular', 'React', 'HTML/CSS', 'AngularJS'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'ElasticSearch', 'DB2', 'SingleStore', 'Snowflake'] },
  { category: 'DevOps', items: ['Docker', 'Git', 'Jenkins', 'AWS', 'OpenShift', 'CI/CD', 'Maven'] },
  { category: 'Integrations', items: ['Twilio', 'Slack API', 'SonarQube', 'Grafana', 'Kafka'] },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Enterprise Full Stack Application',
    desc: 'Spring Boot, Angular, and MongoDB base project with logging, authentication, granular role-based access control, GitHub Actions integration, SonarQube quality checks, multi-tenant support, and UI-backend proxy.',
    livedemo: '',
    githurl: 'https://github.com/Akash-Sareen/monster',
    mediumlink: '',
    imgUrl: 'assets/images/starterProject.jpg',
    tech: 'Spring Boot, Angular, MongoDB, GitHub Actions, SonarQube, Docker',
  },
  {
    id: 2,
    title: 'FOSSology',
    desc: 'Open source license compliance software and toolkit. Fixed critical bugs and improved application efficiency across the codebase.',
    livedemo: '',
    githurl: 'https://github.com/fossology/fossology',
    mediumlink: '',
    imgUrl: 'assets/images/fossology-hero.png',
    tech: 'HTML, Twig, RegExp, CSS',
  },
  {
    id: 3,
    title: 'Note',
    desc: 'Notes application for sharing notes between Unix users with full compliance to security permissions and POSIX file standards.',
    livedemo: '',
    githurl: 'https://github.com/Akash-Sareen/Notes',
    mediumlink: '',
    imgUrl: 'assets/images/note.png',
    tech: 'Go',
  },
  {
    id: 4,
    title: 'Game Review',
    desc: 'Angular webapp that pulls game data from a public API. Features search, sorting, and a clean responsive interface.',
    livedemo: '',
    githurl: 'https://github.com/Akash-Sareen/ng-video-game-db',
    mediumlink: '',
    imgUrl: 'assets/images/game.png',
    tech: 'Angular, HTML, CSS',
  },
  {
    id: 5,
    title: 'Snake Game',
    desc: 'Classic Snake game built in Python with a challenging implementation of snake body growth and food placement logic.',
    livedemo: '',
    githurl: 'https://github.com/Akash-Sareen/Py-Snake-Game',
    mediumlink: '',
    imgUrl: 'assets/images/snake.png',
    tech: 'Python',
  },
  {
    id: 6,
    title: 'Hand Sign Recognition',
    desc: 'Wearable device for the hearing-impaired that converts hand signs into audio output via flex sensors and EPROM memory.',
    livedemo: '',
    githurl: '',
    mediumlink: '',
    imgUrl: 'assets/images/handsign.jpeg',
    tech: 'Arduino, Flex Sensor, EPROM, Speaker',
  },
  {
    id: 7,
    title: 'S.A.M (Surprise Attendance Marker)',
    desc: 'Lightweight portable device with embedded biometric scanner. Designed circuit connections and programmed Arduino with database integration.',
    livedemo: '',
    githurl: '',
    mediumlink: '',
    imgUrl: 'assets/images/sam.jpg',
    tech: 'Arduino Uno, Fingerprint Sensor, LCD, Keypad',
  },
  {
    id: 8,
    title: 'Bus Route Display Board',
    desc: 'College bus schedule display board synchronizing two Arduino boards over BLE. Led team using Agile methodology.',
    livedemo: '',
    githurl: '',
    mediumlink: '',
    imgUrl: 'assets/images/bus.png',
    tech: 'Arduino, Dot Matrix, Raspberry Pi, BLE Sensor',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 4,
    company: 'Goldman Sachs',
    location: 'Birmingham, UK',
    timeline: 'Oct 2024 – Present',
    role: 'Software Developer',
    technologies: 'Data Lake, DB2, SingleStore, Spring Integration',
    work: [
      'Designed and delivered ATC reports across 5+ critical datasets, improving data reliability by 30% and enabling proactive issue detection.',
      'Eliminated 40+ hardcoded credentials by migrating secrets to a centralised Secret Manager.',
      'Led Java 8→21 upgrade and DB2→SingleStore migration, reducing query latency by 25%.',
      'Enabled end-to-end back-reporting for regulatory reports, clearing 100M outstanding reports and reducing manual intervention by 70%.',
    ],
  },
  {
    id: 3,
    company: 'Barclays',
    location: 'Northampton, UK',
    timeline: 'Aug 2023 – Oct 2024',
    role: 'Developer Analyst',
    technologies: 'Spring Boot, Git, Jenkins, OpenShift, AWS',
    work: [
      'Developed a Real-Time Dashboard automating stakeholder reporting, saving 15 minutes per day.',
      'Implemented client-side and server-side caching, significantly reducing database load.',
      'Enhanced fraud detection gateway, boosting code readability and overall performance.',
      'Amplified test coverage to over 85% across project modules.',
    ],
  },
  {
    id: 2,
    company: 'Kloudspot Inc.',
    location: 'Bangalore, India',
    timeline: 'Jul 2020 – Aug 2022',
    role: 'Senior Software Engineer',
    technologies: 'Spring Boot, Angular, Elasticsearch, Docker',
    work: [
      'Upgraded application from JDK 8 to 11 and converted from Spring MVC to Spring Boot.',
      'Integrated Twilio, TCL-MMX, Telestax, and Slack for alerts and notifications.',
      'Developed SMS and PDF report framework, meeting 95% of customer requirements.',
      'Applied Docker image minification, reducing build size by 40%.',
    ],
  },
  {
    id: 1,
    company: 'Nuclei',
    location: 'Bangalore, India',
    timeline: 'Jan 2020 – Apr 2020',
    role: 'SDE in Test – Intern',
    technologies: 'Java, Spring Boot, SQL, Grafana, Python',
    work: [
      'Built a Grafana Dashboard to monitor client latency and enable system alert triggering.',
      'Created new tables and reduced table count from 150 to 70 via a Python database migration script.',
      'Performed end-to-end testing of upcoming features using internal tooling.',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: '1',
    from_to_year: 'Sept 2022 – Sept 2023',
    education: "Master's Degree",
    stream: "Master's in Advanced Computer Science",
    info: "Completed Master's in Advanced Computer Science with 62.5% from the University of Birmingham.",
    institution: 'University of Birmingham, Birmingham',
  },
  {
    id: '2',
    from_to_year: 'April 2016 – Sept 2020',
    education: "Bachelor's Degree",
    stream: 'Bachelor of Engineering in Computer Science',
    info: 'Completed B.E. in Computer Science with 8.01 CGPA. Won the Star Excellence Award for 2016–2020 batch. Recognised as Best Final Year Project submission.',
    institution: 'Sathyabama Institute of Science and Technology, Chennai',
  },
];
