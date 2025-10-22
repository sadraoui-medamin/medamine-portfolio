import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Skill details data structure
const skillDetails: Record<string, {
  name: string;
  belongsTo: string;
  definition: string;
  keyLearnings: string[];
  iconUrl: string;
  color: string;
  website?: string;
  documentation?: string;
  companyWebsite?: string;
}> = {
  'javascript': {
    name: 'JavaScript',
    belongsTo: 'Ecma International',
    definition: 'A versatile, high-level programming language that enables interactive web pages and is an essential part of web applications. It runs on both client-side and server-side environments.',
    keyLearnings: [
      'Mastered dynamic programming and event-driven architecture',
      'Built interactive web applications with modern ES6+ features',
      'Implemented asynchronous patterns with Promises and async/await',
      'Developed single-page applications with modern frameworks'
    ],
    iconUrl: 'https://techicons.dev/icons/javascript',
    color: 'from-yellow-400 to-orange-400',
    website: 'https://www.javascript.com/',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    companyWebsite: 'https://www.ecma-international.org/'
  },
  'typescript': {
    name: 'TypeScript',
    belongsTo: 'Microsoft',
    definition: 'A strongly typed superset of JavaScript that compiles to plain JavaScript, providing optional static typing, classes, and interfaces for building robust applications.',
    keyLearnings: [
      'Learned type-safe development practices',
      'Mastered interface design and advanced type system features',
      'Improved code quality and maintainability in large projects',
      'Implemented generic types and utility types effectively'
    ],
    iconUrl: 'https://techicons.dev/icons/typescript',
    color: 'from-blue-400 to-blue-600',
    website: 'https://www.typescriptlang.org/',
    documentation: 'https://www.typescriptlang.org/docs/',
    companyWebsite: 'https://www.microsoft.com/'
  },
  'react.js': {
    name: 'React.js',
    belongsTo: 'Meta (Facebook)',
    definition: 'A JavaScript library for building user interfaces with a component-based architecture. It enables developers to create reusable UI components and manage application state efficiently.',
    keyLearnings: [
      'Mastered component-based architecture',
      'Implemented state management with hooks',
      'Built responsive single-page applications',
      'Optimized performance with React best practices'
    ],
    iconUrl: 'https://techicons.dev/icons/react-dark',
    color: 'from-cyan-400 to-blue-500',
    website: 'https://react.dev/',
    documentation: 'https://react.dev/learn',
    companyWebsite: 'https://www.meta.com/'
  },
  'html5-css3': {
    name: 'HTML5/CSS3',
    belongsTo: 'W3C (World Wide Web Consortium)',
    definition: 'The latest evolution of web standards for structuring and presenting content on the web. HTML5 provides semantic markup while CSS3 enables sophisticated styling and animations.',
    keyLearnings: [
      'Learned semantic markup and accessibility best practices',
      'Mastered responsive design principles',
      'Implemented CSS animations and transitions',
      'Utilized modern layout techniques like Flexbox and Grid'
    ],
    iconUrl: 'https://techicons.dev/icons/html',
    color: 'from-orange-500 to-blue-500',
    website: 'https://html.spec.whatwg.org/',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web',
    companyWebsite: 'https://www.w3.org/'
  },
  'tailwind-css': {
    name: 'Tailwind CSS',
    belongsTo: 'Tailwind Labs',
    definition: 'A utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML.',
    keyLearnings: [
      'Adopted utility-first CSS approach',
      'Achieved rapid UI development',
      'Created custom design systems with consistent styling',
      'Mastered responsive design with Tailwind utilities'
    ],
    iconUrl: 'https://techicons.dev/icons/tailwindcss-dark',
    color: 'from-cyan-400 to-blue-500',
    website: 'https://tailwindcss.com/',
    documentation: 'https://tailwindcss.com/docs',
    companyWebsite: 'https://tailwindlabs.com/'
  },
  'node.js': {
    name: 'Node.js',
    belongsTo: 'OpenJS Foundation',
    definition: 'A JavaScript runtime built on Chrome\'s V8 engine that enables JavaScript to run on the server-side, allowing full-stack JavaScript development.',
    keyLearnings: [
      'Built scalable server-side applications',
      'Developed RESTful APIs and real-time systems',
      'Implemented event-driven architectures',
      'Managed asynchronous operations efficiently'
    ],
    iconUrl: 'https://techicons.dev/icons/nodejs-dark',
    color: 'from-green-500 to-emerald-500',
    website: 'https://nodejs.org/',
    documentation: 'https://nodejs.org/docs/',
    companyWebsite: 'https://openjsf.org/'
  },
  'mongodb': {
    name: 'MongoDB',
    belongsTo: 'MongoDB Inc.',
    definition: 'A NoSQL document-oriented database that stores data in flexible, JSON-like documents, enabling rapid development and horizontal scaling.',
    keyLearnings: [
      'Worked with NoSQL database concepts',
      'Implemented document-oriented data modeling',
      'Created aggregation pipelines for complex queries',
      'Optimized database performance and indexing'
    ],
    iconUrl: 'https://techicons.dev/icons/mongodb',
    color: 'from-green-500 to-emerald-500',
    website: 'https://www.mongodb.com/',
    documentation: 'https://www.mongodb.com/docs/',
    companyWebsite: 'https://www.mongodb.com/'
  },
  'docker': {
    name: 'Docker',
    belongsTo: 'Docker Inc.',
    definition: 'A platform for developing, shipping, and running applications in containers, providing consistent environments across development and production.',
    keyLearnings: [
      'Containerized applications for consistency',
      'Learned Docker Compose for multi-container apps',
      'Ensured reproducible development environments',
      'Implemented container orchestration basics'
    ],
    iconUrl: 'https://techicons.dev/icons/docker',
    color: 'from-blue-500 to-cyan-500',
    website: 'https://www.docker.com/',
    documentation: 'https://docs.docker.com/',
    companyWebsite: 'https://www.docker.com/'
  },
  'git-github': {
    name: 'Git/GitHub',
    belongsTo: 'GitHub (Microsoft)',
    definition: 'Git is a distributed version control system, and GitHub is a cloud-based platform for hosting and collaborating on Git repositories.',
    keyLearnings: [
      'Mastered version control workflows',
      'Implemented branching strategies',
      'Conducted code reviews and pull requests',
      'Applied collaborative development practices'
    ],
    iconUrl: 'https://techicons.dev/icons/git',
    color: 'from-orange-500 to-red-500',
    website: 'https://github.com/',
    documentation: 'https://docs.github.com/',
    companyWebsite: 'https://github.com/'
  },
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
        <div className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br ${skill.color} rounded-full blur-3xl opacity-10 animate-pulse`}></div>
        <div className={`absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl ${skill.color} rounded-full blur-3xl opacity-10 animate-pulse`} style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <div className="container mx-auto px-6 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="group hover:bg-card/40 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Button>
        </div>

        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Section 1: Icon & Technology Info */}
            <section className="grid md:grid-cols-2 gap-8 animate-fade-in">
              {/* Left: Icon */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} blur-3xl opacity-30 animate-pulse`}></div>
                  <div className={`relative w-64 h-64 rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 flex items-center justify-center shadow-2xl`}>
                    <img 
                      src={skill.iconUrl} 
                      alt={`${skill.name} logo`}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Technology Info */}
              <div className="flex flex-col justify-center space-y-4">
                <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.name}
                </h1>
                
                <div className="flex items-center gap-3">
                  <div className={`h-px w-16 bg-gradient-to-r ${skill.color}`}></div>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} animate-pulse`}></div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {skill.definition}
                </p>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-2">Maintained by</p>
                  <p className="text-xl font-semibold text-foreground">{skill.belongsTo}</p>
                </div>
              </div>
            </section>

            {/* Section 2: Key Learnings */}
            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className={`w-1 h-8 bg-gradient-to-b ${skill.color} rounded-full`}></div>
                  Key Learnings
                </h2>
                <ul className="space-y-3">
                  {skill.keyLearnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color} mt-2 flex-shrink-0`}></div>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 3: Resources & Company Contact */}
            <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className={`w-1 h-8 bg-gradient-to-b ${skill.color} rounded-full`}></div>
                  Resources & Links
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {skill.website && (
                    <a 
                      href={skill.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 p-6 bg-card/40 border border-border/50 rounded-xl hover:bg-card/60 transition-all duration-300 hover:scale-105"
                    >
                      <Globe className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Official Website</h3>
                        <p className="text-sm text-muted-foreground">Visit the main site</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                    </a>
                  )}

                  {skill.documentation && (
                    <a 
                      href={skill.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 p-6 bg-card/40 border border-border/50 rounded-xl hover:bg-card/60 transition-all duration-300 hover:scale-105"
                    >
                      <Globe className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Documentation</h3>
                        <p className="text-sm text-muted-foreground">Learn more</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                    </a>
                  )}

                  {skill.companyWebsite && (
                    <a 
                      href={skill.companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-3 p-6 bg-card/40 border border-border/50 rounded-xl hover:bg-card/60 transition-all duration-300 hover:scale-105"
                    >
                      <Globe className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Company</h3>
                        <p className="text-sm text-muted-foreground">{skill.belongsTo}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            </section>

            {/* CTA */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg"
                onClick={() => navigate('/')}
                className={`bg-gradient-to-r ${skill.color} hover:opacity-90 text-white hover:scale-105 transition-all duration-300 shadow-lg px-8 py-6 text-lg`}
              >
                Explore More Skills
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
