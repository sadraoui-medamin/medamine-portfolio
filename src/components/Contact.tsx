
import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Zap, Star, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 relative bg-gray-800/20 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles with different shapes */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float ${
                i % 3 === 0 ? 'w-2 h-2 bg-blue-400 rounded-full' :
                i % 3 === 1 ? 'w-1 h-1 bg-purple-400 rounded-full' :
                'w-1.5 h-1.5 bg-pink-400 rounded-sm rotate-45'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        
        {/* Dynamic grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="cyber-grid"></div>
        </div>
        
        {/* Pulsing radial gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        
        {/* Moving light beams */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slide-right" style={{ top: '30%', animationDuration: '12s' }}></div>
          <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-slide-left" style={{ top: '70%', animationDuration: '15s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer">
                Get In Touch
              </span>
              
              {/* Floating decorative elements */}
              <Heart className="absolute -top-6 -left-6 w-4 h-4 text-pink-400 animate-bounce opacity-70" style={{ animationDelay: '0.5s' }} />
              <Star className="absolute -top-8 -right-4 w-5 h-5 text-yellow-400 animate-spin opacity-60" style={{ animationDuration: '8s' }} />
              <Zap className="absolute -bottom-2 right-1/4 w-3 h-3 text-blue-400 animate-pulse opacity-70" />
            </h2>
            
            {/* Enhanced underline with moving element */}
            <div className="relative">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
              <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full blur-sm animate-pulse"></div>
              <div className="absolute inset-0 w-6 h-1 bg-white mx-auto rounded-full animate-slide-right opacity-80"></div>
            </div>
          </div>
          
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 relative">
                  <span className="relative z-10">Let's Talk</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg animate-glow"></div>
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                  I'm always open to discussing new opportunities, creative projects, 
                  or partnerships. Drop me a message and let's start a conversation.
                </p>
              </div>

              {/* Enhanced Contact Details */}
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'john.doe@example.com', href: 'mailto:john.doe@example.com', color: 'from-blue-500 to-cyan-500' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567', color: 'from-green-500 to-emerald-500' },
                  { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#', color: 'from-purple-500 to-pink-500' },
                ].map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className={`group flex items-center space-x-4 p-4 bg-gray-800/30 backdrop-blur-lg rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 cursor-pointer transform-gpu animate-slide-in-left`}
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                    onMouseMove={handleMouseMove}
                  >
                    {/* Mouse follow glow */}
                    <div 
                      className="absolute pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 w-32 h-32 bg-gradient-radial from-blue-400/30 to-transparent rounded-full blur-xl"
                      style={{
                        left: mousePosition.x - 64,
                        top: mousePosition.y - 64,
                      }}
                    />
                    
                    <div className={`relative p-3 bg-gradient-to-r ${contact.color} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <contact.icon className="h-6 w-6 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="relative z-10">
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{contact.label}</p>
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                        {contact.value}
                      </p>
                    </div>
                    
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100">
                      <div className="absolute inset-0 rounded-lg border-2 border-blue-400/50 animate-ping"></div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div className={`animate-fade-in-up`} style={{ animationDelay: '1.2s' }}>
                <h4 className="text-lg font-semibold text-white mb-4 relative">
                  <span className="relative z-10">Follow Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-lg animate-glow"></div>
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
                    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
                  ].map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`group relative p-3 bg-gray-800/30 backdrop-blur-lg rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.color} overflow-hidden`}
                      style={{ animationDelay: `${1.3 + index * 0.1}s` }}
                    >
                      <social.icon className="h-5 w-5 text-gray-400 group-hover:text-current transition-colors duration-300 relative z-10" />
                      <span className="sr-only">{social.label}</span>
                      
                      {/* Hover background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Ripple effect on hover */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100">
                        <div className="absolute inset-0 rounded-lg border border-blue-400/50 animate-ping"></div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className={`bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-8 relative overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Form background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                <span className="relative">
                  Send Message
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-lg animate-glow"></div>
                </span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-gray-400 mb-2 group-focus-within:text-blue-400 transition-colors duration-300">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 focus:bg-gray-700/50"
                        placeholder="Your Name"
                        required
                      />
                      {focusedField === 'name' && (
                        <div className="absolute inset-0 rounded-lg border border-blue-400/50 animate-pulse pointer-events-none"></div>
                      )}
                    </div>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-gray-400 mb-2 group-focus-within:text-blue-400 transition-colors duration-300">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 focus:bg-gray-700/50"
                        placeholder="your.email@example.com"
                        required
                      />
                      {focusedField === 'email' && (
                        <div className="absolute inset-0 rounded-lg border border-blue-400/50 animate-pulse pointer-events-none"></div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="subject" className="block text-gray-400 mb-2 group-focus-within:text-blue-400 transition-colors duration-300">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 focus:bg-gray-700/50"
                      placeholder="Project Inquiry"
                      required
                    />
                    {focusedField === 'subject' && (
                      <div className="absolute inset-0 rounded-lg border border-blue-400/50 animate-pulse pointer-events-none"></div>
                    )}
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-gray-400 mb-2 group-focus-within:text-blue-400 transition-colors duration-300">Message</label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 text-white resize-none placeholder-gray-400 focus:bg-gray-700/50"
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                    {focusedField === 'message' && (
                      <div className="absolute inset-0 rounded-lg border border-blue-400/50 animate-pulse pointer-events-none"></div>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {/* Button background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <Send className={`h-5 w-5 relative z-10 transition-transform duration-300 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-full group-hover:translate-x-full animate-shimmer"></div>
                  
                  {/* Loading particles */}
                  {isSubmitting && (
                    <div className="absolute inset-0">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${30 + Math.random() * 40}%`,
                            animationDelay: `${i * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
