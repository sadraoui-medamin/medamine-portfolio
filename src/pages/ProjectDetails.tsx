import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Github, ExternalLink, Calendar, Building2, Code, Smartphone, Globe, Database, Zap, Star, Sparkles, Server, Layers, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BreadcrumbJsonLd from '@/lib/breadcrumbSchema';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import techstoreimg from '../assets/techstore.png'
import dhashbordIMG from '../assets/dhashbordpj.png'
import clothesstoreimg from '../assets/clothes-store-tn.jpg'
import csHero from '../assets/clothes-store/hero-banner.png.asset.json'
import csShopMen from '../assets/clothes-store/shop-men.png.asset.json'
import csProduct from '../assets/clothes-store/product.png.asset.json'
import csSignIn from '../assets/clothes-store/sign-in.png.asset.json'
import csInventory from '../assets/clothes-store/inventory.png.asset.json'
import csBanners from '../assets/clothes-store/banners.png.asset.json'
import csNewsletter from '../assets/clothes-store/newsletter.png.asset.json'
import csContact from '../assets/clothes-store/contact.png.asset.json'
import hbHome from '../assets/hotel-booking/home-hero.png.asset.json'
import hbFeatured from '../assets/hotel-booking/featured-hotels.png.asset.json'
import hbAllHotels from '../assets/hotel-booking/all-hotels.png.asset.json'
import hbPartner from '../assets/hotel-booking/partner-listing.png.asset.json'
import hbMyBookings from '../assets/hotel-booking/my-bookings.png.asset.json'
import hbHotelDashboard from '../assets/hotel-booking/hotel-dashboard.png.asset.json'
import hbHotelBookings from '../assets/hotel-booking/hotel-bookings.png.asset.json'
import hbHotelProperties from '../assets/hotel-booking/hotel-properties.png.asset.json'
import hbStaffOverview from '../assets/hotel-booking/staff-overview.png.asset.json'
import hbSupport from '../assets/hotel-booking/support-disputes.png.asset.json'
import hbCover from '../assets/hotel-booking-cover.jpg'
import ThumbnailCarousel from '@/components/ui/thumbnail-carousel'



const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      id: 'hotel-booking',
      title: 'Hotel Booking Platform',
      description: 'StayVista — a two-sided hotel booking platform: travelers search, book and manage reservations, while subscribed hotels submit their properties and run their own staff team (general manager, revenue manager, front office, guest relations, housekeeping, maintenance, kitchen, accounting and security). Built on a microservices architecture.',
      fullDescription: 'StayVista is a production-ready, two-sided hotel booking platform. On the traveler side, simple users can explore and search thousands of listings, filter by price, star and guest rating, property type and amenities, book a room, pay online and manage their trips, refunds and invoices from a personal dashboard. On the partner side, hotels subscribe to a plan (Pro / Enterprise) and postulate their property for review; once approved they get a full hotel console to manage properties, rooms, availability, pricing, bookings, revenue reports and — most importantly — their own staff team with granular role-based permissions (general manager, revenue manager, front office, guest relations, housekeeping supervisor, room attendant/cleaner, maintenance technician, kitchen manager, accountant, security officer). A platform super-admin staff console sits on top for moderation, payouts, support and disputes. Technically the platform is built with modern microservices architecture: 10 independent services with database-per-service, Redis event-driven communication, Elasticsearch full-text search, Stripe & PayPal payments, Docker and Kubernetes.',
      image: hbCover,
      technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker', 'Kubernetes', 'Stripe', 'PayPal', 'BullMQ', 'Cloudinary', 'JWT', 'Passport.js', 'Tailwind CSS'],
      category: 'Web Application',
      icon: Building2,
      github: '#',
      live: '#',
      color: 'from-indigo-500 to-purple-600',
      period: 'In Work',
      status: 'in-work',
      gallery: [
        { url: hbHome.url, caption: 'Traveler home — hero search with destination, dates and guests' },
        { url: hbFeatured.url, caption: 'Featured hotels from Pro-tier partner properties' },
        { url: hbAllHotels.url, caption: 'Explore all hotels with price, star, rating, type and amenity filters' },
        { url: hbPartner.url, caption: 'Partner subscription landing — list your property and grow your business' },
        { url: hbMyBookings.url, caption: 'Traveler account — bookings, trips, refunds and PDF invoices' },
        { url: hbHotelDashboard.url, caption: 'Hotel dashboard — bookings, revenue, page views and ratings' },
        { url: hbHotelBookings.url, caption: 'Hotel bookings — reservations, guest tracking and approvals' },
        { url: hbHotelProperties.url, caption: 'Hotel properties — rooms, occupancy, activation and moderation state' },
        { url: hbStaffOverview.url, caption: 'Platform staff console — users, partners, revenue and activity logs' },
        { url: hbSupport.url, caption: 'Support & disputes — ticketing with escalation and resolution' }
      ],
      adminModules: [
        { name: 'Traveler Booking', description: 'Search, compare and book rooms, manage trips, cancellations, refunds and PDF invoices from a personal account.' },
        { name: 'Hotel Subscription', description: 'Hotels subscribe to a Pro or Enterprise plan, postulate their property and get verified badges plus featured placement.' },
        { name: 'Property Onboarding', description: 'Submit properties for moderation: photos, rooms, amenities, policies and location, with pending / active / inactive states.' },
        { name: 'Team & Staff Roles', description: 'Hotels invite and manage their own team with scoped permissions: general manager, revenue manager, front office, guest relations, housekeeping supervisor, room attendant, maintenance technician, kitchen manager, accountant and security officer.' },
        { name: 'Reservations Management', description: 'Confirm, reject, check-in and check-out guests, track pending bookings and export reservation reports.' },
        { name: 'Revenue & Pricing', description: 'Dynamic pricing, seasonal rates, occupancy tracking and revenue analytics per property.' },
        { name: 'Finance & Payouts', description: 'Partner payouts, commissions, refunds and payment reconciliation via Stripe and PayPal.' },
        { name: 'Housekeeping & Maintenance', description: 'Room status boards, cleaning assignments for attendants and maintenance work orders for technicians.' },
        { name: 'Guest Relations & Reviews', description: 'Guest messaging, special requests, room services and review/rating moderation.' },
        { name: 'Support & Disputes', description: 'Ticketing for clients and partners with priority, escalation, assignment and resolution workflows.' },
        { name: 'Reports & Logs', description: 'Platform and hotel-level reporting plus immutable activity logs of every staff action.' },
        { name: 'Notifications & Settings', description: 'Real-time notification centre, role switching, theme control and global platform settings.' }
      ],
      teamRoles: [
        { name: 'General Manager', description: 'Full access to the hotel workspace: team, properties, bookings, pricing and reports.' },
        { name: 'Revenue Manager', description: 'Owns rates, seasonal pricing, occupancy targets and revenue analytics.' },
        { name: 'Front Office', description: 'Handles check-in / check-out, walk-ins, room assignment and daily reservations.' },
        { name: 'Guest Relations', description: 'Answers guest messages, special requests, complaints and review follow-up.' },
        { name: 'Housekeeping Supervisor', description: 'Plans cleaning rounds, inspects rooms and validates room-ready status.' },
        { name: 'Room Attendant / Cleaner', description: 'Receives cleaning assignments and updates room status from a simplified view.' },
        { name: 'Maintenance Technician', description: 'Receives and closes work orders for equipment, plumbing and technical incidents.' },
        { name: 'Kitchen Manager', description: 'Manages restaurant and room-service orders, menus and stock for the kitchen.' },
        { name: 'Accountant', description: 'Access to invoices, payouts, commissions and financial exports only.' },
        { name: 'Security Officer', description: 'Access logs, incident reports and safety checks across the property.' }
      ],

      features: [
        'Travelers: search, filter, book, pay and manage reservations and refunds',
        'Hotels: subscription plans (Pro / Enterprise) to postulate and list properties',
        'Property moderation workflow before a hotel goes live',
        'Hotel team management with 10 scoped staff roles and permissions',
        'Super-admin staff console for users, partners, payouts and disputes',
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
      id: 'project-flow',
      title: 'SaaS Project Management System',
      description: 'ProjectFlow is a comprehensive SaaS project management platform with microservices architecture, real-time collaboration, agile sprint management, and powerful integrations.',
      fullDescription: 'ProjectFlow is a comprehensive, open-source SaaS project management platform designed to help teams collaborate effectively and deliver projects on time. Built with a modern microservices architecture, it offers real-time collaboration, agile sprint management, time tracking, and powerful integrations. Unlike traditional tools, ProjectFlow provides self-hosted options, developer-friendly APIs, and customizable workflows.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['React 18', 'TypeScript', 'Vite', 'Zustand', 'TanStack Query', 'Node.js', 'Fastify', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Docker', 'Kubernetes', 'Tailwind CSS'],
      category: 'Web Application',
      icon: Globe,
      github: '#',
      live: '#',
      color: 'from-emerald-500 to-teal-600',
      period: 'In Work',
      status: 'in-work',
      features: [
        'Microservices architecture with independent databases',
        'Real-time collaboration with Socket.io',
        'Agile sprint management and Kanban boards',
        'Time tracking and reporting',
        'Multi-tenant architecture with granular permissions',
        'Plugin architecture and REST API for integrations',
        'Self-hosted deployment option',
        'Comprehensive analytics with ClickHouse'
      ],
      microservices: [
        { name: 'API Gateway', description: 'Rate limiting, JWT validation, routing', tech: ['Node.js', 'Express', 'TypeScript'] },
        { name: 'Auth Service', description: 'Authentication with bcrypt, JWT, passport', tech: ['Node.js', 'PostgreSQL', 'Redis'] },
        { name: 'Project & Task Service', description: 'Project management with search', tech: ['Fastify', 'PostgreSQL', 'Elasticsearch'] },
        { name: 'Real-Time Service', description: 'Live updates and collaboration', tech: ['Socket.io', 'Redis'] },
        { name: 'Notification Service', description: 'Email via SendGrid/AWS SES', tech: ['Node.js', 'RabbitMQ', 'MongoDB'] },
        { name: 'File Storage Service', description: 'AWS S3/MinIO with Sharp processing', tech: ['Node.js', 'S3', 'PostgreSQL'] },
        { name: 'Analytics Service', description: 'Visualization with Plotly', tech: ['Python', 'FastAPI', 'ClickHouse'] }
      ],
      challenges: [
        'Designing scalable multi-tenant architecture',
        'Implementing real-time collaboration features',
        'Managing distributed services with Kubernetes',
        'Building comprehensive monitoring with Prometheus/Grafana'
      ],
      outcomes: [
        'Highly scalable architecture for thousands of users',
        'Sub-second real-time updates',
        'Complete self-hosted deployment option',
        'Extensible plugin architecture'
      ]
    },
    {
      id: 'clothes-store-tn',
      title: 'Clothes Store TN',
      description: 'A modern e-commerce platform for shopping clothes for men, women, kids, and accessories. Fully built with Lovable.ai — frontend, backend, and everything in between.',
      fullDescription: 'Clothes Store TN is a full-featured e-commerce platform tailored for the Tunisian market, offering a curated shopping experience for men, women, kids, and accessories. The entire project — frontend, backend, database, and authentication — was built end-to-end using Lovable.ai, showcasing the power of AI-assisted full-stack development. The platform features category browsing, product details, shopping cart, secure checkout, and user account management, all wrapped in a modern, responsive UI.',
      image: clothesstoreimg,
      technologies: ['Lovable.ai', 'React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lovable Cloud', 'Supabase', 'PostgreSQL', 'shadcn/ui'],
      category: 'Web Application',
      icon: Globe,
      github: 'https://github.com/sadraoui-medamin/stylesphere-platform',
      live: 'https://clothes-store-tn.lovable.app/',
      color: 'from-pink-500 to-rose-600',
      period: 'Personal Project',
      gallery: [
        { url: csHero.url, caption: 'Home page hero carousel with editable banners' },
        { url: csShopMen.url, caption: 'Shop page with gender, category and price filters' },
        { url: csProduct.url, caption: 'Product page: sizes, colors, wishlist and cart' },
        { url: csSignIn.url, caption: 'Authentication: email/password, Google and demo access' },
        { url: csInventory.url, caption: 'Admin — Inventory: stock levels, low-stock alerts, bulk updates' },
        { url: csBanners.url, caption: 'Admin — Banners & popular products with views/clicks/CTR' },
        { url: csNewsletter.url, caption: 'Admin — Newsletter: subscribers, campaigns and reports' },
        { url: csContact.url, caption: 'Multilingual storefront (EN/FR/AR with RTL) contact page' }
      ],
      adminModules: [
        { name: 'Notifications', description: 'Real-time staff notification centre with unread badge for new orders, tickets and stock alerts.' },
        { name: 'Products & Categories', description: 'Full CRUD for products, variants, sizes, colors, pricing, discounts, slugs and category tree.' },
        { name: 'Inventory', description: 'Per-warehouse stock tracking, configurable low-stock threshold, restock alerts and bulk stock updates.' },
        { name: 'Orders', description: 'Order lifecycle management, status transitions, order details, refunds and customer history.' },
        { name: 'Payments', description: 'Payment tracking including cash on delivery, with reconciliation per order.' },
        { name: 'Delivery & Shipping', description: 'Delivery assignment, courier tracking across Tunisia, shipping zones and delivery status updates.' },
        { name: 'Reports & Analytics', description: 'Sales, subscriber and banner performance reports with views, clicks, CTR and open rate metrics.' },
        { name: 'Users & Roles', description: 'Granular RBAC: Master, Admin, Product Manager, Order Manager, Support, Warehouse and Delivery roles.' },
        { name: 'Support Inbox & Tickets', description: 'Contact-form tickets routed to a shared support inbox with statuses and replies.' },
        { name: 'Newsletter', description: 'Subscriber list with source and language, segmentation, campaigns, unsubscribe and reporting.' },
        { name: 'Home Banners & Highlights', description: 'Curate the home hero rotation, reorder, show/hide banners and pick featured products.' },
        { name: 'Landing Page Heroes & Site Settings', description: 'Control landing page hero content, storefront copy, theme and global site settings.' }
      ],
      features: [
        'Multi-category shopping: Men, Women, Kids, Accessories',
        'Product catalog with variants, sizes, colors and discounts',
        'Wishlist, cart and cash-on-delivery checkout',
        'Multilingual storefront (EN / FR / AR with RTL) and dark mode',
        'Authentication with email, Google and role-based staff access',
        'Complete staff console covering catalog, orders, delivery and marketing',
        'Newsletter, support inbox and banner analytics built in',
        'Built entirely with Lovable.ai (frontend + backend)'
      ],
      challenges: [
        'Designing a granular role system so each staff role only sees its own scope',
        'Keeping inventory, orders and delivery states consistent across the console',
        'Supporting three languages including full right-to-left layout',
        'Optimizing product images and page performance'
      ],
      outcomes: [
        'Full-stack e-commerce platform delivered rapidly with Lovable.ai',
        'Staff console managing catalog, stock, orders, delivery and marketing end to end',
        'Scalable backend powered by Lovable Cloud',
        'Demonstrates the power of AI-assisted development'
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

  const pageTitle = `${project.title} — Mohamed Amine Sadraoui`;
  const pageDescription = (project.description || '').slice(0, 155);
  const canonicalPath = `/project/${project.id}`;
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: typeof project.image === 'string' ? project.image : undefined,
    author: { "@type": "Person", name: "Mohamed Amine Sadraoui" },
    url: canonicalPath,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalPath} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalPath} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">{JSON.stringify(projectSchema)}</script>
      </Helmet>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/#projects' },
          { name: project.title, path: canonicalPath },
        ]}
      />
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
                {project.id === 'ecommerce' ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="group">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Live Demo
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <a href="https://ecommerce-project-frontend-2yf3lq6vw.vercel.app/" target="_blank" rel="noopener noreferrer">
                          Landing Page
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <a href="https://ecommerce-project-admin-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
                          Admin Console
                        </a>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button asChild variant="outline" className="group">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                )}
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

        {/* Admin Console Modules */}
        {project.adminModules && (
          <div className={`mb-12 transition-all duration-1000 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Layers className="mr-3 h-6 w-6 text-primary" />
              Admin Console — What It Manages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.adminModules.map((mod) => (
                <div
                  key={mod.name}
                  className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{mod.name}</h3>
                  <p className="text-muted-foreground text-sm">{mod.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hotel Team Roles */}
        {project.teamRoles && (
          <div className={`mb-12 transition-all duration-1000 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Layers className="mr-3 h-6 w-6 text-primary" />
              Hotel Team — Staff Roles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.teamRoles.map((role) => (
                <div
                  key={role.name}
                  className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{role.name}</h3>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* Screenshots Gallery */}
        {project.gallery && (
          <div className={`mb-12 transition-all duration-1000 delay-350 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-2xl font-bold text-foreground mb-6">Screenshots</h2>
            <ThumbnailCarousel
              slides={project.gallery.map((shot) => ({
                url: shot.url,
                caption: shot.caption,
              }))}
            />
          </div>
        )}




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
