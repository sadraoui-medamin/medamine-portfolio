import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Skill details data structure
const skillDetails: Record<string, {
  name: string;
  belongsTo: string;
  whatLearned: string;
  logo: string;
  color: string;
}> = {
  'javascript': {
    name: 'JavaScript',
    belongsTo: 'Ecma International',
    whatLearned: 'Mastered dynamic programming, event-driven architecture, and asynchronous patterns. Built interactive web applications with modern ES6+ features.',
    logo: '☕',
    color: 'from-yellow-400 to-orange-400'
  },
  'typescript': {
    name: 'TypeScript',
    belongsTo: 'Microsoft',
    whatLearned: 'Learned type-safe development practices, interface design, and advanced type system features. Improved code quality and maintainability in large projects.',
    logo: '🔷',
    color: 'from-blue-400 to-blue-600'
  },
  'java': {
    name: 'Java',
    belongsTo: 'Oracle Corporation',
    whatLearned: 'Developed expertise in object-oriented programming, design patterns, and enterprise application development with Spring framework.',
    logo: '☕',
    color: 'from-red-500 to-orange-500'
  },
  'python': {
    name: 'Python',
    belongsTo: 'Python Software Foundation',
    whatLearned: 'Gained proficiency in data structures, algorithms, and backend development. Built automation scripts and web applications with Django/Flask.',
    logo: '🐍',
    color: 'from-blue-400 to-yellow-400'
  },
  'c-c#': {
    name: 'C/C#',
    belongsTo: 'Microsoft',
    whatLearned: 'Learned low-level programming concepts, memory management, and high-performance application development with .NET framework.',
    logo: '🔧',
    color: 'from-purple-400 to-blue-500'
  },
  'php': {
    name: 'PHP',
    belongsTo: 'The PHP Group',
    whatLearned: 'Built dynamic server-side applications, managed databases, and developed RESTful APIs with Laravel framework.',
    logo: '🐘',
    color: 'from-purple-500 to-blue-500'
  },
  'react.js': {
    name: 'React.js',
    belongsTo: 'Meta (Facebook)',
    whatLearned: 'Mastered component-based architecture, state management with hooks, and building responsive single-page applications with modern React patterns.',
    logo: '⚛️',
    color: 'from-cyan-400 to-blue-500'
  },
  'html5-css3': {
    name: 'HTML5/CSS3',
    belongsTo: 'W3C (World Wide Web Consortium)',
    whatLearned: 'Learned semantic markup, responsive design principles, CSS animations, and modern layout techniques like Flexbox and Grid.',
    logo: '🌐',
    color: 'from-orange-500 to-blue-500'
  },
  'tailwind-css': {
    name: 'Tailwind CSS',
    belongsTo: 'Tailwind Labs',
    whatLearned: 'Adopted utility-first CSS approach, rapid UI development, and custom design system creation with consistent styling.',
    logo: '💨',
    color: 'from-cyan-400 to-blue-500'
  },
  'ant-design': {
    name: 'Ant Design',
    belongsTo: 'Ant Group',
    whatLearned: 'Built enterprise-level applications with pre-built components, learned design system principles and component customization.',
    logo: '🐜',
    color: 'from-blue-500 to-cyan-500'
  },
  'material-ui': {
    name: 'Material-UI',
    belongsTo: 'Google',
    whatLearned: 'Implemented Material Design principles, created consistent user interfaces, and customized theme configurations.',
    logo: '📦',
    color: 'from-blue-500 to-purple-500'
  },
  'bootstrap': {
    name: 'Bootstrap',
    belongsTo: 'Twitter (X)',
    whatLearned: 'Developed responsive websites quickly using pre-built components and grid system, learned mobile-first design approach.',
    logo: '🅱️',
    color: 'from-purple-500 to-pink-500'
  },
  'node.js': {
    name: 'Node.js',
    belongsTo: 'OpenJS Foundation',
    whatLearned: 'Built scalable server-side applications, RESTful APIs, and real-time systems using JavaScript runtime environment.',
    logo: '🟢',
    color: 'from-green-500 to-emerald-500'
  },
  'express.js': {
    name: 'Express.js',
    belongsTo: 'OpenJS Foundation',
    whatLearned: 'Created robust web servers, implemented middleware patterns, and developed RESTful API architectures.',
    logo: '🚂',
    color: 'from-gray-500 to-green-500'
  },
  'spring-boot': {
    name: 'Spring Boot',
    belongsTo: 'VMware (Spring)',
    whatLearned: 'Built enterprise Java applications, implemented dependency injection, and created microservices architectures.',
    logo: '🍃',
    color: 'from-green-500 to-emerald-600'
  },
  'laravel': {
    name: 'Laravel',
    belongsTo: 'Taylor Otwell',
    whatLearned: 'Developed elegant web applications with MVC architecture, learned Eloquent ORM, and implemented authentication systems.',
    logo: '🔴',
    color: 'from-red-500 to-orange-500'
  },
  'asp.net-core': {
    name: 'ASP.NET Core',
    belongsTo: 'Microsoft',
    whatLearned: 'Built cross-platform web applications, implemented MVC patterns, and developed cloud-ready enterprise solutions.',
    logo: '💜',
    color: 'from-purple-500 to-blue-500'
  },
  'restful-apis': {
    name: 'RESTful APIs',
    belongsTo: 'Industry Standard',
    whatLearned: 'Designed scalable API architectures, implemented HTTP methods, and ensured proper status codes and authentication.',
    logo: '🔌',
    color: 'from-blue-400 to-cyan-400'
  },
  'android-(java)': {
    name: 'Android (Java)',
    belongsTo: 'Google',
    whatLearned: 'Developed native Android applications, learned activity lifecycle, and implemented material design principles.',
    logo: '🤖',
    color: 'from-green-500 to-lime-500'
  },
  'android-studio': {
    name: 'Android Studio',
    belongsTo: 'Google',
    whatLearned: 'Mastered Android development IDE, debugging tools, emulator usage, and Gradle build system.',
    logo: '📱',
    color: 'from-green-400 to-blue-500'
  },
  'mobile-ui-ux': {
    name: 'Mobile UI/UX',
    belongsTo: 'Industry Best Practices',
    whatLearned: 'Designed intuitive mobile interfaces, learned gesture navigation, and optimized for touch interactions.',
    logo: '📱',
    color: 'from-pink-400 to-purple-500'
  },
  'sqlite': {
    name: 'SQLite',
    belongsTo: 'D. Richard Hipp',
    whatLearned: 'Implemented local database storage, managed data persistence, and optimized query performance for mobile apps.',
    logo: '💾',
    color: 'from-blue-500 to-cyan-500'
  },
  'mongodb': {
    name: 'MongoDB',
    belongsTo: 'MongoDB Inc.',
    whatLearned: 'Worked with NoSQL databases, document-oriented data modeling, and aggregation pipelines for complex queries.',
    logo: '🍃',
    color: 'from-green-500 to-emerald-500'
  },
  'mysql': {
    name: 'MySQL',
    belongsTo: 'Oracle Corporation',
    whatLearned: 'Designed relational database schemas, optimized queries, and implemented indexes for better performance.',
    logo: '🐬',
    color: 'from-blue-500 to-orange-500'
  },
  'oracle': {
    name: 'Oracle',
    belongsTo: 'Oracle Corporation',
    whatLearned: 'Managed enterprise-level databases, learned PL/SQL programming, and implemented complex stored procedures.',
    logo: '🔴',
    color: 'from-red-500 to-orange-500'
  },
  'postgresql': {
    name: 'PostgreSQL',
    belongsTo: 'PostgreSQL Global Development Group',
    whatLearned: 'Used advanced database features, learned complex queries, and implemented JSONB for flexible data storage.',
    logo: '🐘',
    color: 'from-blue-500 to-cyan-500'
  },
  'git-github': {
    name: 'Git/GitHub',
    belongsTo: 'GitHub (Microsoft)',
    whatLearned: 'Mastered version control workflows, branching strategies, code reviews, and collaborative development practices.',
    logo: '🔱',
    color: 'from-orange-500 to-red-500'
  },
  'agile-scrum': {
    name: 'Agile/Scrum',
    belongsTo: 'Agile Alliance',
    whatLearned: 'Applied iterative development, daily standups, sprint planning, and continuous improvement methodologies.',
    logo: '🔄',
    color: 'from-blue-400 to-purple-500'
  },
  'powerbi': {
    name: 'PowerBI',
    belongsTo: 'Microsoft',
    whatLearned: 'Created interactive dashboards, data visualizations, and business intelligence reports for data-driven decisions.',
    logo: '📊',
    color: 'from-yellow-500 to-orange-500'
  },
  'postman': {
    name: 'Postman',
    belongsTo: 'Postman Inc.',
    whatLearned: 'Tested and documented APIs, automated testing workflows, and collaborated on API development.',
    logo: '📮',
    color: 'from-orange-500 to-red-500'
  },
  'docker': {
    name: 'Docker',
    belongsTo: 'Docker Inc.',
    whatLearned: 'Containerized applications, learned Docker Compose, and ensured consistent development environments.',
    logo: '🐳',
    color: 'from-blue-500 to-cyan-500'
  },
};

const SkillDetails = () => {
  const { nameOfSkill } = useParams<{ nameOfSkill: string }>();
  const navigate = useNavigate();

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
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid w-full h-full"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r ${skill.color} rounded-full animate-float opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8 hover:bg-card/40"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Skills
        </Button>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 animate-fade-in">
            {/* Logo */}
            <div className={`inline-block text-8xl mb-6 p-8 rounded-3xl bg-gradient-to-br ${skill.color} bg-opacity-10 backdrop-blur-md border border-border/50`}>
              {skill.logo}
            </div>

            {/* Skill Name */}
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
              {skill.name}
            </h1>

            {/* Decorative line */}
            <div className="relative">
              <div className={`w-32 h-1 bg-gradient-to-r ${skill.color} mx-auto rounded-full`}></div>
              <div className={`absolute inset-0 w-32 h-1 bg-gradient-to-r ${skill.color} mx-auto rounded-full blur-md animate-pulse`}></div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Belongs To Card */}
            <div className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                    <Building2 className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Belongs To</h2>
                </div>
                <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {skill.belongsTo}
                </p>
              </div>
            </div>

            {/* What I Learned Card */}
            <div className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-8 hover:bg-card/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in md:col-span-2" style={{ animationDelay: '0.3s' }}>
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${skill.color} bg-opacity-20`}>
                    <Lightbulb className="w-6 h-6 text-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">What I Learned</h2>
                </div>
                <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  {skill.whatLearned}
                </p>
              </div>
            </div>
          </div>

          {/* Return Button */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg"
              onClick={() => navigate('/')}
              className={`bg-gradient-to-r ${skill.color} hover:opacity-90 transition-opacity duration-300`}
            >
              Explore More Skills
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;
