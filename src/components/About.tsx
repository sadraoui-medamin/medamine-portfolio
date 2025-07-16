
import React from 'react';
import { Code, Coffee, Gamepad2, Music } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code, label: 'Coding', color: 'text-blue-400' },
    { icon: Coffee, label: 'Coffee', color: 'text-amber-400' },
    { icon: Gamepad2, label: 'Gaming', color: 'text-green-400' },
    { icon: Music, label: 'Music', color: 'text-purple-400' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience in creating 
                digital solutions that make a difference. I love turning complex problems into 
                simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good gaming session. I believe in continuous 
                learning and staying up-to-date with the latest industry trends.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300">50+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                  <div className="text-3xl font-bold text-purple-400 group-hover:scale-110 transition-transform duration-300">3+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">What I Love</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={interest.label}
                    className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-2 rounded-lg bg-gray-700/50 group-hover:bg-gray-600/50 transition-colors duration-300`}>
                      <interest.icon className={`h-6 w-6 ${interest.color}`} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {interest.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/50 backdrop-blur-sm">
                <blockquote className="text-gray-300 italic text-center">
                  "Code is like humor. When you have to explain it, it's bad."
                </blockquote>
                <cite className="block text-right text-blue-400 mt-2">- Cory House</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
