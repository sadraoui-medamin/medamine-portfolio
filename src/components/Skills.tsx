
import React from 'react';
import { Code, Database, Smartphone, Globe, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'GraphQL', level: 75 },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'Prisma', level: 85 },
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 75 },
        { name: 'Expo', level: 85 },
        { name: 'PWA', level: 90 },
      ]
    },
    {
      title: 'DevOps',
      icon: Globe,
      color: 'from-teal-400 to-blue-400',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'GitHub Actions', level: 85 },
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      color: 'from-pink-400 to-purple-400',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI/UX', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: 'Framer Motion', level: 88 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 relative bg-gray-800/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git', 'Linux', 'VS Code', 'Postman', 'Jest', 'Cypress', 
              'Webpack', 'Vite', 'Sass', 'Firebase', 'Supabase', 'Stripe'
            ].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 border border-gray-700/50 hover:border-blue-500/50 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
