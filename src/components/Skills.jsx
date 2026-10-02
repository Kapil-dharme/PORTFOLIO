import React from 'react';

const skillCategories = [
  {
    title: 'Frontend Development',
    description: 'Creating performant, component-driven user interfaces with modern web standards.',
    skills: ['React.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend & APIs',
    description: 'Architecting scalable server-side systems, secure authentication, and data pipelines.',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT & Session Auth', 'Socket.io', ],
  },
  {
    title: 'Databases & Cloud',
    description: 'Modeling schema structures, aggregation pipelines, and deploying reliable storage.',
    skills: ['SQL', 'MongoDB', 'Redis','Cloudinary', 'Vercel'],
  },
  {
    title: 'Core CS & Engineering Tools',
    description: 'Foundation in software engineering principles, algorithms, and collaborative tooling.',
    skills: ['DSA(C++)', 'OOPs', 'DBMS', 'OS','Git & GitHub', 'Postman','Vite & npm' ,'VS Code'],
  },
];

export default function Skills() {
  return (
    <section className="py-12 md:py-16 border-t border-outline-variant/60" id="skills">
      <div className="max-w-2xl mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Skills &amp; Technologies<span className="text-secondary/50">.</span>
        </h2>
        <p className="mt-3 text-secondary text-base md:text-lg">
          Practical experience across full-stack engineering, from intuitive UI components to robust database schemas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-2xl border border-outline-variant bg-surface-container-high/30 hover:border-primary/40 transition-all duration-200"
          >
            <h3 className="text-xl font-bold text-primary mb-2">{category.title}</h3>
            <p className="text-sm text-secondary mb-6 leading-relaxed">{category.description}</p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-background border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary/60 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
