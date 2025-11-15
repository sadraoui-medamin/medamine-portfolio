import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Building2, Code, Smartphone, Globe, Database, Zap, Star, Sparkles, Server, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import techstoreimg from '../assets/techstore.png'
import dhashbordIMG from '../assets/dhashbordpj.png'

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 'hotel-booking',
      title: 'Hotel Booking Platform',
      description: 'A production-ready hotel booking platform built with microservices architecture featuring 10 microservices with independent databases, event-driven architecture using Redis, full-text search with Elasticsearch, and payment processing with Stripe & PayPal.',
      fullDescription: 'A production-ready hotel booking platform built with modern microservices architecture. This platform showcases enterprise-level design patterns and scalability features including 10 independent microservices, each with its own database following the database-per-service pattern. The system uses event-driven architecture with Redis for inter-service communication, Elasticsearch for full-text search capabilities, and integrates multiple payment providers (Stripe & PayPal) for flexible payment processing. Built with NestJS and TypeScript for type-safety and maintainability, containerized with Docker, and orchestrated with Kubernetes for production deployment.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker', 'Kubernetes', 'Stripe', 'PayPal', 'BullMQ', 'Cloudinary', 'JWT', 'Passport.js', 'Tailwind CSS'],
      category: 'Web Application',
      icon: Building2,
      github: '#',
      live: '#',
      color: 'from-indigo-500 to-purple-600',
      period: 'In Work',
      status: 'in-work',
      features: [
        '10 Microservices with independent PostgreSQL databases',
        'Event-driven architecture using Redis Pub/Sub',
        'Full-text search with Elasticsearch 8.x',
        'Dual payment gateway integration (Stripe + PayPal)',
        'Image processing and storage with Cloudinary',
        'Real-time analytics and monitoring dashboard',
        'JWT-based authentication with Passport.js',
        'Message queue processing with BullMQ',
        'Docker containerization for all services',
        'Kubernetes-ready deployment configuration',
        'CI/CD pipeline with GitHub Actions',
        'API Gateway for service orchestration'
      ],
      microservices: [
        { name: 'Auth Service', description: 'User authentication and authorization with JWT tokens', tech: ['NestJS', 'PostgreSQL', 'JWT', 'Passport'] },
        { name: 'User Service', description: 'User profile management and preferences', tech: ['NestJS', 'PostgreSQL', 'Redis'] },
        { name: 'Hotel Service', description: 'Hotel listings, details, and availability', tech: ['NestJS', 'PostgreSQL', 'Elasticsearch'] },
        { name: 'Booking Service', description: 'Reservation management and booking logic', tech: ['NestJS', 'PostgreSQL', 'Redis'] },
        { name: 'Payment Service', description: 'Payment processing with Stripe and PayPal', tech: ['NestJS', 'PostgreSQL', 'Stripe', 'PayPal'] },
        { name: 'Search Service', description: 'Full-text search with Elasticsearch', tech: ['NestJS', 'Elasticsearch', 'Redis'] },
        { name: 'Notification Service', description: 'Email and push notifications', tech: ['NestJS', 'BullMQ', 'Redis'] },
        { name: 'Review Service', description: 'User reviews and ratings management', tech: ['NestJS', 'PostgreSQL'] },
        { name: 'Media Service', description: 'Image upload and processing', tech: ['NestJS', 'Cloudinary', 'BullMQ'] },
        { name: 'Analytics Service', description: 'Real-time analytics and reporting', tech: ['NestJS', 'PostgreSQL', 'Redis'] }
      ],
      challenges: [
        'Designing scalable microservices architecture with proper service boundaries',
        'Implementing event-driven communication between services',
        'Managing distributed transactions across multiple databases',
        'Integrating multiple payment providers with fallback mechanisms',
        'Optimizing Elasticsearch queries for fast search results',
        'Setting up Kubernetes cluster with proper resource allocation',
        'Implementing comprehensive monitoring and logging'
      ],
      outcomes: [
        'Highly scalable architecture supporting thousands of concurrent users',
        'Sub-second search response times with Elasticsearch',
        'Zero-downtime deployments with Kubernetes',
        '99.9% payment processing success rate',
        'Reduced infrastructure costs through efficient containerization',
        'Improved developer productivity with microservices isolation'
      ]
    },
    {
      id: 'debt-recovery',
      title: 'Debt Recovery Management System',
      description: 'A comprehensive web application designed to digitalize debt recovery processes for SBA Company. Features responsive design and secure backend implementation.',
      fullDescription: 'This enterprise-level web application was developed during my final year internship at SBA Company, Tunisia. The system digitalized and automated the entire debt recovery process, improving efficiency and reducing manual errors. The application features a modern, responsive interface built with React.js and Bootstrap, ensuring seamless user experience across all devices. The backend was developed using Spring Boot, implementing RESTful APIs with secure authentication and authorization mechanisms. MySQL database was used to ensure data integrity and optimal performance.',
      image: dhashbordIMG,
      technologies: ['React.js', 'Spring Boot', 'MySQL', 'AntDesign', 'REST API','cloudinary'],
      category: 'Web Application',
      icon: Globe,
      github: '#',
      live: '#',
      color: 'from-blue-500 to-cyan-500',
      period: '3-4 months internship',
      company: 'SBA Company, Tunisia',
      features: [
        'Responsive user interface with Bootstrap components',
        'Secure authentication and authorization system',
        'RESTful API architecture with Spring Boot',
        'Real-time data synchronization',
        'Advanced reporting and analytics',
        'Role-based access control'
      ],
      challenges: [
        'Implementing complex business logic for debt recovery workflows',
        'Ensuring data security and privacy compliance',
        'Optimizing database queries for large datasets',
        'Creating an intuitive UI for non-technical users'
      ],
      outcomes: [
        'Reduced manual processing time by 60%',
        'Improved data accuracy and consistency',
        'Enhanced team collaboration and workflow efficiency',
        'Positive feedback from stakeholders and end-users'
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Platform',
      description: 'A modern, secure e-commerce website with integrated Stripe payment system, responsive design, and comprehensive product management.',
      fullDescription: 'A full-stack e-commerce platform built from scratch using the MERN stack. This project showcases modern web development practices including secure payment processing, real-time inventory management, and responsive design. The platform features a React.js frontend with a focus on user experience, Node.js/Express backend for API services, and MongoDB for flexible data storage. Integrated Stripe payment gateway ensures secure transaction processing.',
      image: techstoreimg ,
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'tawilwindcss','REST API','JWT', 'Stripe API'],
      category: 'Web Application',
      icon: Globe,
      github: '#',
      live: '#',
      color: 'from-green-500 to-emerald-500',
      period: 'Personal Project',
      features: [
        'Secure Stripe payment integration',
        'Product catalog with search and filtering',
        'Shopping cart and checkout system',
        'User authentication and profile management',
        'Order tracking and history',
        'Admin dashboard for product management'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Managing complex state across multiple components',
        'Optimizing performance for large product catalogs',
        'Ensuring mobile responsiveness'
      ],
      outcomes: [
        'Successfully processed test transactions',
        'Achieved 95+ PageSpeed score',
        'Implemented comprehensive error handling',
        'Created scalable architecture for future expansion'
      ]
    },
    {
      id: 'leave-management',
      title: 'Employee Leave Management',
      description: 'Android application for managing employee leave requests with intuitive interface, real-time tracking, and approval workflows.',
      fullDescription: 'A native Android application developed using Java and Android Studio to streamline employee leave request processes. The app provides an intuitive interface for employees to submit leave requests, track their status, and view leave balances. Managers can review, approve, or reject requests directly from the app. Built with SQLite for local data storage and XML for UI design, ensuring smooth performance and offline capability.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Android Studio', 'Java', 'SQLite', 'XML'],
      category: 'Mobile App',
      icon: Smartphone,
      github: '#',
      live: '#',
      color: 'from-purple-500 to-pink-500',
      period: 'Academic Project',
      features: [
        'Leave request submission and tracking',
        'Approval workflow for managers',
        'Leave balance calculation',
        'Calendar integration',
        'Notification system',
        'Offline data storage with SQLite'
      ],
      challenges: [
        'Implementing complex approval workflows',
        'Managing local database synchronization',
        'Creating intuitive mobile UI/UX',
        'Handling different user roles and permissions'
      ],
      outcomes: [
        'Successfully deployed for testing',
        'Positive user feedback on interface design',
        'Demonstrated proficiency in mobile development',
        'Learned Android best practices and patterns'
      ]
    },
    {
      id: 'product-management',
      title: 'Product Management Desktop App',
      description: 'JavaFX desktop application for inventory management with stock tracking, order management, and user-friendly interface.',
      fullDescription: 'A comprehensive desktop application built with JavaFX for managing product inventory and orders. The application features a modern UI designed with FXML and CSS, providing an intuitive experience for users. MySQL database integration ensures reliable data storage and retrieval. The system includes features for tracking stock levels, managing orders, generating reports, and handling multiple user accounts with different permission levels.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      technologies: ['JavaFX', 'MySQL', 'FXML', 'CSS'],
      category: 'Desktop App',
      icon: Code,
      github: '#',
      live: '#',
      color: 'from-orange-500 to-red-500',
      period: 'Academic Project',
      features: [
        'Product catalog management',
        'Stock level tracking and alerts',
        'Order processing system',
        'User authentication and authorization',
        'Report generation',
        'Data export functionality'
      ],
      challenges: [
        'Designing user-friendly desktop interface',
        'Implementing real-time stock updates',
        'Creating efficient database queries',
        'Managing application state'
      ],
      outcomes: [
        'Successfully completed academic requirements',
        'Gained experience with JavaFX framework',
        'Implemented MVC architecture pattern',
        'Created reusable UI components'
      ]
    }
  ];

  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')} className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <Button variant="ghost" onClick={() => navigate('/')} className="group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Project Image */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 rounded-xl`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 rounded-xl"></div>
            </div>

            {/* Project Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color}`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <span className="px-3 py-1 bg-primary/20 rounded-full text-sm text-primary border border-primary/30">
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 px-4 py-2 bg-card/40 backdrop-blur-md rounded-lg border border-border/50">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{project.period}</span>
                </div>
                {project.company && (
                  <div className="flex items-center space-x-2 px-4 py-2 bg-card/40 backdrop-blur-md rounded-lg border border-border/50">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">{project.company}</span>
                  </div>
                )}
              </div>

              <div className="flex space-x-4">
                <Button asChild className="group">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                    View Code
                  </a>
                </Button>
                <Button asChild variant="outline" className="group">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Zap className="mr-3 h-6 w-6 text-primary" />
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card/40 backdrop-blur-md rounded-lg text-foreground border border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-lg"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-2xl font-bold text-foreground mb-6">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.fullDescription}
          </p>
        </div>

        {/* Microservices Architecture - Only show for hotel-booking project */}
        {project.microservices && (
          <div className={`mb-12 transition-all duration-1000 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Server className="mr-3 h-6 w-6 text-primary" />
              Microservices Architecture
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.microservices.map((service, index) => (
                <div
                  key={service.name}
                  className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  style={{ transitionDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600">
                      <Layers className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground flex-1">{service.name}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 rounded text-xs text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features, Challenges, Outcomes Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Features */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 h-full hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Star className="mr-2 h-5 w-5 text-primary" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Challenges */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 h-full hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-primary" />
                Challenges
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Outcomes */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 h-full hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                Outcomes
              </h3>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Interested in this project?</h3>
            <p className="text-muted-foreground mb-6">Check out the code or see it in action</p>
            <div className="flex justify-center space-x-4">
              <Button asChild size="lg" className="group">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View on GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="group">
                <Link to="/#contact">
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
