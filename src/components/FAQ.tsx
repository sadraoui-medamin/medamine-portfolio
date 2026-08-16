import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FaqJsonLd, { type FaqItem } from '@/lib/faqSchema';

const faqs: FaqItem[] = [
  {
    question: 'Who is Mohamed Amine Sadraoui?',
    answer:
      'Mohamed Amine Sadraoui is a Full Stack Developer based in Ariana, Tunisia, building modern web and mobile applications with React, Node.js, Spring Boot and cloud technologies.',
  },
  {
    question: 'What services do you offer as a Full Stack Developer?',
    answer:
      'I design and build end-to-end web applications, RESTful APIs, mobile apps, and database-driven platforms — from UI/UX implementation to backend architecture and deployment.',
  },
  {
    question: 'Which technologies and frameworks do you work with?',
    answer:
      'My core stack includes React, TypeScript, Next.js, Node.js, Spring Boot, PostgreSQL, MongoDB, Tailwind CSS, and cloud platforms such as Supabase and Vercel.',
  },
  {
    question: 'Are you available for freelance or full-time opportunities?',
    answer:
      'Yes, I am open to freelance projects, contract work and full-time roles. You can reach me through the contact form on this site or by email at medaminsadraou111i@gmail.com.',
  },
];

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="py-20 relative overflow-hidden"
    >
      <FaqJsonLd faqs={faqs} />


      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`bg-gray-800/50 backdrop-blur-sm border rounded-xl transition-all duration-500 ${
                  isOpen ? 'border-blue-500/50' : 'border-gray-700/50'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full flex items-center justify-between text-left px-5 py-4"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-blue-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
