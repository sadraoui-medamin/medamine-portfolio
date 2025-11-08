import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { skillDetails } from '@/data/skillsData';

const SkillDetails = () => {
  const { nameOfSkill } = useParams<{ nameOfSkill: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [nameOfSkill]);

  const skill = nameOfSkill ? skillDetails[nameOfSkill.toLowerCase()] : null;

  const handleBackToSkills = () => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (!skill) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Skill Not Found</h1>
          <p className="text-muted-foreground mb-8">The skill you're looking for doesn't exist.</p>
          <Button onClick={handleBackToSkills}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Skills
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
            onClick={handleBackToSkills}
            className="group hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Skills
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
                  onClick={handleBackToSkills}
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