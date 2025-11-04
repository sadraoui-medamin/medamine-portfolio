import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiReact, SiJavascript, SiTypescript, SiNodedotjs, SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiTailwindcss, SiBootstrap, SiGit, SiDocker, SiAndroid, SiHtml5, SiCss3, SiPhp, SiPython, SiAngular } from 'react-icons/si';
import { FaChartBar, FaJava } from 'react-icons/fa';

const skillDetails: Record<string, {
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
  'html': {
    name: 'HTML5',
    belongsTo: 'Frontend Development',
    definition: 'The standard markup language for creating web pages. HTML5 is the latest evolution of the standard and includes new elements, attributes, and behaviors.',
    keyLearnings: [
      'Semantic HTML elements',
      'Forms and input validation',
      'Canvas and SVG for graphics',
      'Audio and video embedding',
      'Accessibility best practices',
      'SEO optimization'
    ],
    icon: <SiHtml5 className="h-16 w-16" />,
    color: 'from-orange-600 to-red-600',
    website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    documentation: 'https://html.spec.whatwg.org/'
  },
  'css': {
    name: 'CSS3',
    belongsTo: 'Frontend Development',
    definition: 'A style sheet language used for describing the presentation of a document written in HTML. CSS3 brings new features like animations, gradients, and responsive design capabilities.',
    keyLearnings: [
      'Flexbox and Grid layouts',
      'Responsive design with media queries',
      'CSS animations and transitions',
      'CSS variables and custom properties',
      'Pseudo-classes and pseudo-elements',
      'Modern CSS methodologies (BEM, CSS Modules)'
    ],
    icon: <SiCss3 className="h-16 w-16" />,
    color: 'from-blue-500 to-blue-700',
    website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    documentation: 'https://www.w3.org/Style/CSS/'
  },
  'tailwindcss': {
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
  'bootstrap': {
    name: 'Bootstrap',
    belongsTo: 'Frontend Development',
    definition: 'A popular CSS framework for building responsive and mobile-first websites. Bootstrap provides pre-built components and a flexible grid system.',
    keyLearnings: [
      'Grid system for responsive layouts',
      'Pre-built UI components',
      'Utility classes for rapid development',
      'JavaScript plugins for interactivity',
      'Customization with Sass variables',
      'Cross-browser compatibility'
    ],
    icon: <SiBootstrap className="h-16 w-16" />,
    color: 'from-purple-600 to-purple-400',
    website: 'https://getbootstrap.com/',
    documentation: 'https://getbootstrap.com/docs/'
  },
  'git': {
    name: 'Git',
    belongsTo: 'Development Tools',
    definition: 'A distributed version control system for tracking changes in source code during software development. Git enables collaboration and maintains a complete history of project changes.',
    keyLearnings: [
      'Version control fundamentals',
      'Branching and merging strategies',
      'Conflict resolution',
      'Collaborative workflows (Git Flow, GitHub Flow)',
      'Remote repository management',
      'Git commands and best practices'
    ],
    icon: <SiGit className="h-16 w-16" />,
    color: 'from-orange-600 to-red-600',
    website: 'https://git-scm.com/',
    documentation: 'https://git-scm.com/doc'
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
  'android': {
    name: 'Android Development',
    belongsTo: 'Mobile Development',
    definition: 'The process of creating applications for devices running the Android operating system. Android development uses Java or Kotlin and Android Studio IDE.',
    keyLearnings: [
      'Android SDK and Android Studio',
      'Activities, Fragments, and Intents',
      'Material Design principles',
      'SQLite database integration',
      'Networking and API integration',
      'App deployment to Google Play Store'
    ],
    icon: <SiAndroid className="h-16 w-16" />,
    color: 'from-green-500 to-green-700',
    website: 'https://developer.android.com/',
    documentation: 'https://developer.android.com/docs'
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
  'angular': {
    name: 'Angular',
    belongsTo: 'Frontend Development',
    definition: 'A TypeScript-based open-source web application framework led by Google. Angular provides a comprehensive solution for building dynamic single-page applications.',
    keyLearnings: [
      'Component-based architecture',
      'Two-way data binding',
      'Dependency injection',
      'RxJS for reactive programming',
      'Angular CLI for project scaffolding',
      'Routing and navigation'
    ],
    icon: <SiAngular className="h-16 w-16" />,
    color: 'from-red-600 to-red-400',
    website: 'https://angular.io/',
    documentation: 'https://angular.io/docs'
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
  }
};

const SkillDetails = () => {
  const { nameOfSkill } = useParams<{ nameOfSkill: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [nameOfSkill]);

  const skill = nameOfSkill ? skillDetails[nameOfSkill.toLowerCase()] : null;

  if (!skill) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Skill Not Found</h1>
          <p className="text-muted-foreground mb-8">The skill you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5`}></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="cyber-grid w-full h-full"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-64 h-64 rounded-full bg-gradient-to-br ${skill.color} opacity-10 blur-3xl animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="group hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Skill Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group">
              {/* Icon/Logo */}
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${skill.color} mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                {skill.icon ? (
                  <div className="text-white filter drop-shadow-lg">
                    {skill.icon}
                  </div>
                ) : (
                  <div className="h-24 w-24 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">{skill.name.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Skill Name */}
              <h1 className="text-3xl font-bold text-foreground mb-2 text-center">{skill.name}</h1>
              
              {/* Belongs To */}
              <p className="text-sm text-muted-foreground text-center mb-6 pb-6 border-b border-border/50">
                {skill.belongsTo}
              </p>

              {/* External Links */}
              <div className="space-y-3">
                {skill.website && (
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group/btn hover:scale-105 transition-all"
                  >
                    <a href={skill.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Official Website
                    </a>
                  </Button>
                )}
                {skill.documentation && (
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group/btn hover:scale-105 transition-all"
                  >
                    <a href={skill.documentation} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Documentation
                    </a>
                  </Button>
                )}
                {skill.companyWebsite && (
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group/btn hover:scale-105 transition-all"
                  >
                    <a href={skill.companyWebsite} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Company Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Definition Section */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <div className={`w-1 h-8 bg-gradient-to-b ${skill.color} rounded-full mr-3`}></div>
                What is {skill.name}?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {skill.definition}
              </p>
            </div>

            {/* Key Learnings Section */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <div className={`w-1 h-8 bg-gradient-to-b ${skill.color} rounded-full mr-3`}></div>
                Key Learnings
              </h2>
              <ul className="space-y-4">
                {skill.keyLearnings.map((learning, index) => (
                  <li 
                    key={index}
                    className="flex items-start space-x-4 group/item animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${skill.color} flex-shrink-0 group-hover/item:scale-150 transition-transform`}></div>
                    <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                      {learning}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className={`bg-gradient-to-br ${skill.color} rounded-2xl p-8 text-white relative overflow-hidden group/cta`}>
              <div className="absolute inset-0 bg-black/20 group-hover/cta:bg-black/10 transition-colors"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Want to explore more skills?</h3>
                <p className="mb-6 opacity-90">
                  Check out other technologies and tools I work with in my portfolio.
                </p>
                <Button 
                  onClick={() => navigate('/#skills')}
                  variant="secondary"
                  className="group/btn hover:scale-105 transition-all"
                >
                  View All Skills
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkillDetails;