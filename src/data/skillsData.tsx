import React from 'react';
import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap, SiGit, SiDocker, SiAndroid, SiHtml5, SiCss3, SiPhp, SiPython, SiAngular, SiAntdesign, SiMui, SiExpress, SiLaravel, SiDotnet, SiOracle, SiSqlite, SiPostman, SiAndroidstudio, SiEclipseide, SiIntellijidea, SiFigma } from 'react-icons/si';
import { FaChartBar, FaJava, FaCode, FaGitAlt } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export const skillDetails: Record<string, {
  name: string;
  belongsTo: string;
  definition: string;
  keyLearnings: string[];
  icon?: React.ReactNode;
  color: string;
  website?: string;
  documentation?: string;
  companyWebsite?: string;
}> = {
  'react': {
    name: 'React.js',
    belongsTo: 'Frontend Development',
    definition: 'A JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage application state efficiently.',
    keyLearnings: [
      'Component-based architecture and reusability',
      'State management with hooks (useState, useEffect, useContext)',
      'Virtual DOM for optimized rendering',
      'JSX syntax for declarative UI',
      'React Router for navigation',
      'Integration with APIs and backend services'
    ],
    icon: <SiReact className="h-16 w-16" />,
    color: 'from-cyan-500 to-blue-500',
    website: 'https://react.dev/',
    documentation: 'https://react.dev/learn'
  },
  'javascript': {
    name: 'JavaScript',
    belongsTo: 'Programming Languages',
    definition: 'A high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript is dynamic, weakly typed, and is essential for creating interactive web applications.',
    keyLearnings: [
      'ES6+ features (arrow functions, destructuring, spread operator)',
      'Asynchronous programming (Promises, async/await)',
      'DOM manipulation and event handling',
      'Closures and scope management',
      'Functional programming concepts',
      'Modern JavaScript frameworks integration'
    ],
    icon: <SiJavascript className="h-16 w-16" />,
    color: 'from-yellow-500 to-orange-500',
    website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'
  },
  'typescript': {
    name: 'TypeScript',
    belongsTo: 'Programming Languages',
    definition: 'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds optional static typing to JavaScript.',
    keyLearnings: [
      'Static type checking and type inference',
      'Interfaces and type aliases',
      'Generics for reusable components',
      'Advanced types (union, intersection, mapped types)',
      'Integration with React and Node.js',
      'Better IDE support and code completion'
    ],
    icon: <SiTypescript className="h-16 w-16" />,
    color: 'from-blue-600 to-blue-400',
    website: 'https://www.typescriptlang.org/',
    documentation: 'https://www.typescriptlang.org/docs/'
  },
  'java': {
    name: 'Java',
    belongsTo: 'Programming Languages',
    definition: 'A high-level, class-based, object-oriented programming language. Java is designed to have as few implementation dependencies as possible and is widely used for building enterprise applications.',
    keyLearnings: [
      'Object-oriented programming principles',
      'Collections framework and data structures',
      'Exception handling and debugging',
      'Multithreading and concurrency',
      'JDBC for database connectivity',
      'JavaFX for desktop applications'
    ],
    icon: <FaJava className="h-16 w-16" />,
    color: 'from-red-600 to-orange-600',
    website: 'https://www.oracle.com/java/',
    documentation: 'https://docs.oracle.com/en/java/'
  },
  'python': {
    name: 'Python',
    belongsTo: 'Programming Languages',
    definition: 'A high-level, interpreted programming language known for its simplicity and readability. Python is versatile and used in web development, data science, automation, and more.',
    keyLearnings: [
      'Python syntax and data structures',
      'Object-oriented programming',
      'Libraries and package management (pip)',
      'Web frameworks (Django, Flask)',
      'Data analysis with pandas and NumPy',
      'Automation and scripting'
    ],
    icon: <SiPython className="h-16 w-16" />,
    color: 'from-blue-500 to-yellow-500',
    website: 'https://www.python.org/',
    documentation: 'https://docs.python.org/'
  },
  'c-c': {
    name: 'C/C#',
    belongsTo: 'Programming Languages',
    definition: 'C is a general-purpose programming language for system programming, while C# is a modern, object-oriented language developed by Microsoft for building Windows applications and games.',
    keyLearnings: [
      'Memory management and pointers (C)',
      'Object-oriented programming (C#)',
      '.NET Framework and ecosystem',
      'Performance optimization',
      'Windows application development',
      'Game development with Unity (C#)'
    ],
    icon: <FaCode className="h-16 w-16" />,
    color: 'from-purple-600 to-blue-600',
    website: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    documentation: 'https://learn.microsoft.com/en-us/dotnet/'
  },
  'php': {
    name: 'PHP',
    belongsTo: 'Backend Development',
    definition: 'A popular general-purpose scripting language especially suited for web development. PHP is used to create dynamic and interactive web pages.',
    keyLearnings: [
      'Server-side scripting fundamentals',
      'Form handling and validation',
      'Database connectivity with PDO/MySQLi',
      'Session and cookie management',
      'File handling and uploads',
      'Modern PHP frameworks (Laravel, Symfony)'
    ],
    icon: <SiPhp className="h-16 w-16" />,
    color: 'from-indigo-600 to-purple-600',
    website: 'https://www.php.net/',
    documentation: 'https://www.php.net/docs.php'
  },
  'nodejs': {
    name: 'Node.js',
    belongsTo: 'Backend Development',
    definition: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js allows developers to use JavaScript for server-side scripting and building scalable network applications.',
    keyLearnings: [
      'Event-driven, non-blocking I/O model',
      'NPM package management',
      'Express.js for building APIs',
      'Asynchronous programming patterns',
      'File system operations',
      'Building RESTful services'
    ],
    icon: <SiNodedotjs className="h-16 w-16" />,
    color: 'from-green-600 to-green-400',
    website: 'https://nodejs.org/',
    documentation: 'https://nodejs.org/docs/latest/api/'
  },
  'expressjs': {
    name: 'Express.js',
    belongsTo: 'Backend Development',
    definition: 'A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
    keyLearnings: [
      'Routing and middleware',
      'RESTful API development',
      'Error handling and debugging',
      'Template engines integration',
      'Database integration',
      'Authentication and authorization'
    ],
    icon: <SiExpress className="h-16 w-16" />,
    color: 'from-gray-600 to-gray-400',
    website: 'https://expressjs.com/',
    documentation: 'https://expressjs.com/en/guide/routing.html'
  },
  'springboot': {
    name: 'Spring Boot',
    belongsTo: 'Backend Development',
    definition: 'An extension of the Spring framework that simplifies the development of production-ready applications. Spring Boot provides auto-configuration and embedded servers.',
    keyLearnings: [
      'Dependency injection and IoC container',
      'RESTful API development',
      'Spring Data JPA for database operations',
      'Security with Spring Security',
      'Microservices architecture',
      'Testing with JUnit and Mockito'
    ],
    icon: <SiSpringboot className="h-16 w-16" />,
    color: 'from-green-500 to-emerald-500',
    website: 'https://spring.io/projects/spring-boot',
    documentation: 'https://docs.spring.io/spring-boot/docs/current/reference/html/'
  },

  'restful-apis': {
    name: 'RESTful APIs',
    belongsTo: 'Backend Development',
    definition: 'Representational State Transfer (REST) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations.',
    keyLearnings: [
      'HTTP methods (GET, POST, PUT, DELETE)',
      'REST principles and constraints',
      'API endpoint design',
      'Status codes and error handling',
      'Authentication and authorization',
      'API documentation and testing'
    ],
    icon: <FaGitAlt className="h-16 w-16" />,
    color: 'from-green-500 to-teal-500',
    website: 'https://restfulapi.net/',
    documentation: 'https://www.restapitutorial.com/'
  },
  'html5-css3': {
    name: 'HTML5/CSS3',
    belongsTo: 'Frontend Development',
    definition: 'HTML5 is the standard markup language for creating web pages, and CSS3 is the latest evolution of CSS for styling web content with advanced features like animations and transitions.',
    keyLearnings: [
      'Semantic HTML elements',
      'Flexbox and Grid layouts',
      'Responsive design with media queries',
      'CSS animations and transitions',
      'Forms and input validation',
      'Accessibility best practices'
    ],
    icon: <SiHtml5 className="h-16 w-16" />,
    color: 'from-orange-600 to-red-600',
    website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  'tailwind-css': {
    name: 'Tailwind CSS',
    belongsTo: 'Frontend Development',
    definition: 'A utility-first CSS framework that provides low-level utility classes to build custom designs. Tailwind CSS enables rapid UI development with consistent design systems.',
    keyLearnings: [
      'Utility-first CSS approach',
      'Responsive design utilities',
      'Custom theme configuration',
      'Component composition patterns',
      'Dark mode implementation',
      'Performance optimization with PurgeCSS'
    ],
    icon: <SiTailwindcss className="h-16 w-16" />,
    color: 'from-cyan-400 to-blue-500',
    website: 'https://tailwindcss.com/',
    documentation: 'https://tailwindcss.com/docs'
  },
  'ant-design': {
    name: 'Ant Design',
    belongsTo: 'Frontend Development',
    definition: 'An enterprise-class UI design system for React applications. Ant Design provides a set of high-quality React components out of the box with customizable themes.',
    keyLearnings: [
      'Enterprise UI component library',
      'Design system principles',
      'Form handling and validation',
      'Internationalization support',
      'Theme customization',
      'Responsive component patterns'
    ],
    icon: <SiAntdesign className="h-16 w-16" />,
    color: 'from-blue-500 to-cyan-500',
    website: 'https://ant.design/',
    documentation: 'https://ant.design/docs/react/introduce'
  },
  'material-ui': {
    name: 'Material-UI',
    belongsTo: 'Frontend Development',
    definition: 'A popular React UI framework that implements Google\'s Material Design. It provides a comprehensive collection of prebuilt components ready for production use.',
    keyLearnings: [
      'Material Design principles',
      'Component customization with theming',
      'Styling solutions (CSS-in-JS)',
      'Responsive layouts with Grid',
      'Accessibility features',
      'Icon library integration'
    ],
    icon: <SiMui className="h-16 w-16" />,
    color: 'from-blue-600 to-indigo-600',
    website: 'https://mui.com/',
    documentation: 'https://mui.com/material-ui/getting-started/'
  },
  'android-java': {
    name: 'Android (Java)',
    belongsTo: 'Mobile Development',
    definition: 'Native Android application development using Java programming language. Build robust mobile apps with access to all Android platform features and APIs.',
    keyLearnings: [
      'Android SDK and lifecycle',
      'Activities, Fragments, and Intents',
      'Material Design for Android',
      'Local storage with SQLite',
      'Networking and API integration',
      'Publishing apps to Google Play Store'
    ],
    icon: <SiAndroid className="h-16 w-16" />,
    color: 'from-green-500 to-green-700',
    website: 'https://developer.android.com/',
    documentation: 'https://developer.android.com/docs'
  },
  'android-studio': {
    name: 'Android Studio',
    belongsTo: 'Development Tools',
    definition: 'The official Integrated Development Environment (IDE) for Android app development. Built on JetBrains\' IntelliJ IDEA software, it provides tools for building apps on every type of Android device.',
    keyLearnings: [
      'IDE features and shortcuts',
      'Layout editor and UI design',
      'Debugging and profiling tools',
      'Gradle build system',
      'Emulator and device testing',
      'Version control integration'
    ],
    icon: <SiAndroidstudio className="h-16 w-16" />,
    color: 'from-green-600 to-blue-600',
    website: 'https://developer.android.com/studio',
    documentation: 'https://developer.android.com/studio/intro'
  },
  'mobile-ui-ux': {
    name: 'Mobile UI/UX',
    belongsTo: 'Mobile Development',
    definition: 'Design principles and practices for creating intuitive, engaging mobile user interfaces and experiences. Focuses on mobile-specific interaction patterns and usability.',
    keyLearnings: [
      'Mobile-first design principles',
      'Touch gesture patterns',
      'Responsive layout strategies',
      'Performance optimization',
      'Accessibility on mobile devices',
      'Platform-specific design guidelines (iOS, Android)'
    ],
    icon: <FaCode className="h-16 w-16" />,
    color: 'from-pink-500 to-purple-500',
    website: 'https://developer.apple.com/design/',
    documentation: 'https://material.io/design'
  },
  'mysql': {
    name: 'MySQL',
    belongsTo: 'Databases',
    definition: 'An open-source relational database management system. MySQL is widely used for web applications and is a central component of the LAMP/MERN stack.',
    keyLearnings: [
      'SQL query writing and optimization',
      'Database design and normalization',
      'CRUD operations and transactions',
      'Joins and complex queries',
      'Indexing for performance',
      'Stored procedures and triggers'
    ],
    icon: <SiMysql className="h-16 w-16" />,
    color: 'from-blue-500 to-cyan-600',
    website: 'https://www.mysql.com/',
    documentation: 'https://dev.mysql.com/doc/'
  },
  'mongodb': {
    name: 'MongoDB',
    belongsTo: 'Databases',
    definition: 'A NoSQL document database that stores data in flexible, JSON-like documents. MongoDB is designed for scalability and flexibility in handling unstructured data.',
    keyLearnings: [
      'Document-based data modeling',
      'CRUD operations with MongoDB queries',
      'Aggregation framework for data processing',
      'Indexing strategies for performance',
      'Mongoose ODM for Node.js integration',
      'Replica sets and sharding for scalability'
    ],
    icon: <SiMongodb className="h-16 w-16" />,
    color: 'from-green-500 to-green-700',
    website: 'https://www.mongodb.com/',
    documentation: 'https://docs.mongodb.com/'
  },
  'oracle': {
    name: 'Oracle',
    belongsTo: 'Databases',
    definition: 'A multi-model database management system produced by Oracle Corporation. It\'s a robust enterprise-grade database widely used in large organizations.',
    keyLearnings: [
      'PL/SQL programming',
      'Advanced SQL features',
      'Database administration and tuning',
      'Backup and recovery strategies',
      'Security and user management',
      'Performance optimization'
    ],
    icon: <SiOracle className="h-16 w-16" />,
    color: 'from-red-600 to-orange-600',
    website: 'https://www.oracle.com/database/',
    documentation: 'https://docs.oracle.com/en/database/'
  },
  'sqlite': {
    name: 'SQLite',
    belongsTo: 'Databases',
    definition: 'A C-language library that implements a small, fast, self-contained, high-reliability, full-featured SQL database engine. SQLite is the most used database in the world.',
    keyLearnings: [
      'Embedded database concepts',
      'Local data persistence',
      'SQL query fundamentals',
      'Mobile app data storage',
      'Database file management',
      'Performance optimization for embedded systems'
    ],
    icon: <SiSqlite className="h-16 w-16" />,
    color: 'from-blue-400 to-cyan-400',
    website: 'https://www.sqlite.org/',
    documentation: 'https://www.sqlite.org/docs.html'
  },
  'postgresql': {
    name: 'PostgreSQL',
    belongsTo: 'Databases',
    definition: 'A powerful, open-source object-relational database system. PostgreSQL uses and extends the SQL language with many features for storing and scaling complicated data workloads.',
    keyLearnings: [
      'Advanced SQL queries and window functions',
      'JSONB for document-style queries',
      'Full-text search capabilities',
      'Transactions and ACID compliance',
      'Extensions and custom functions',
      'Performance tuning and optimization'
    ],
    icon: <SiPostgresql className="h-16 w-16" />,
    color: 'from-blue-600 to-indigo-600',
    website: 'https://www.postgresql.org/',
    documentation: 'https://www.postgresql.org/docs/'
  },
  'git-github': {
    name: 'Git/GitHub',
    belongsTo: 'Development Tools',
    definition: 'Git is a distributed version control system, and GitHub is a web-based platform for version control and collaboration. Together they enable effective code management and teamwork.',
    keyLearnings: [
      'Version control fundamentals',
      'Branching and merging strategies',
      'Conflict resolution',
      'Collaborative workflows (Git Flow, GitHub Flow)',
      'Pull requests and code reviews',
      'CI/CD integration'
    ],
    icon: <SiGit className="h-16 w-16" />,
    color: 'from-orange-600 to-red-600',
    website: 'https://git-scm.com/',
    documentation: 'https://git-scm.com/doc'
  },
  'agile-scrum': {
    name: 'Agile/Scrum',
    belongsTo: 'Tools & Methodologies',
    definition: 'An iterative approach to project management and software development that helps teams deliver value faster with fewer headaches. Focuses on continuous improvement and team collaboration.',
    keyLearnings: [
      'Agile principles and manifesto',
      'Scrum framework and ceremonies',
      'Sprint planning and execution',
      'User stories and backlog management',
      'Daily standups and retrospectives',
      'Team collaboration practices'
    ],
    icon: <FaCode className="h-16 w-16" />,
    color: 'from-blue-500 to-purple-500',
    website: 'https://www.scrum.org/',
    documentation: 'https://www.scrumguides.org/'
  },
  'powerbi': {
    name: 'Power BI',
    belongsTo: 'Data Analytics',
    definition: 'A business analytics service by Microsoft that provides interactive visualizations and business intelligence capabilities. Power BI enables users to create reports and dashboards.',
    keyLearnings: [
      'Data modeling and transformation',
      'DAX formulas for calculations',
      'Interactive dashboard creation',
      'Data source connectivity',
      'Report publishing and sharing',
      'Performance optimization'
    ],
    icon: <FaChartBar className="h-16 w-16" />,
    color: 'from-yellow-500 to-orange-500',
    website: 'https://powerbi.microsoft.com/',
    documentation: 'https://docs.microsoft.com/en-us/power-bi/'
  },
  'postman': {
    name: 'Postman',
    belongsTo: 'Development Tools',
    definition: 'An API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.',
    keyLearnings: [
      'API request testing',
      'Collection organization',
      'Environment variables',
      'Automated testing scripts',
      'Mock servers',
      'API documentation generation'
    ],
    icon: <SiPostman className="h-16 w-16" />,
    color: 'from-orange-500 to-red-500',
    website: 'https://www.postman.com/',
    documentation: 'https://learning.postman.com/docs/'
  },
  'docker': {
    name: 'Docker',
    belongsTo: 'Development Tools',
    definition: 'A platform for developing, shipping, and running applications in containers. Docker enables consistent environments across development, testing, and production.',
    keyLearnings: [
      'Container concepts and architecture',
      'Dockerfile creation and optimization',
      'Docker Compose for multi-container apps',
      'Image management and registry usage',
      'Container networking and volumes',
      'Deployment and orchestration basics'
    ],
    icon: <SiDocker className="h-16 w-16" />,
    color: 'from-blue-500 to-cyan-500',
    website: 'https://www.docker.com/',
    documentation: 'https://docs.docker.com/'
  },
  'visual-studio-code': {
    name: 'Visual Studio Code',
    belongsTo: 'Development Tools',
    definition: 'A lightweight but powerful source code editor developed by Microsoft. VS Code supports debugging, Git integration, syntax highlighting, intelligent code completion, and more.',
    keyLearnings: [
      'Editor features and shortcuts',
      'Extension ecosystem',
      'Debugging tools',
      'Git integration',
      'Multi-cursor editing',
      'Custom configurations and themes'
    ],
    icon: <VscCode className="h-16 w-16" />,
    color: 'from-blue-500 to-cyan-500',
    website: 'https://code.visualstudio.com/',
    documentation: 'https://code.visualstudio.com/docs'
  },
  'eclipse': {
    name: 'Eclipse',
    belongsTo: 'Development Tools',
    definition: 'An integrated development environment (IDE) used primarily for Java development. Eclipse supports multiple programming languages through plugins.',
    keyLearnings: [
      'Java development environment',
      'Plugin architecture',
      'Debugging and profiling',
      'Build automation',
      'Code refactoring tools',
      'Team collaboration features'
    ],
    icon: <SiEclipseide className="h-16 w-16" />,
    color: 'from-purple-600 to-indigo-600',
    website: 'https://www.eclipse.org/',
    documentation: 'https://help.eclipse.org/'
  },
  'intellij-idea': {
    name: 'IntelliJ IDEA',
    belongsTo: 'Development Tools',
    definition: 'A Java integrated development environment (IDE) for developing computer software. It\'s developed by JetBrains and is available as commercial and community editions.',
    keyLearnings: [
      'Advanced code completion',
      'Intelligent refactoring',
      'Framework-specific assistance',
      'Database tools',
      'Version control integration',
      'Testing and debugging tools'
    ],
    icon: <SiIntellijidea className="h-16 w-16" />,
    color: 'from-pink-600 to-purple-600',
    website: 'https://www.jetbrains.com/idea/',
    documentation: 'https://www.jetbrains.com/help/idea/'
  }
};
