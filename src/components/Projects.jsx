import React from 'react';

const projects = [
  {
    title: 'Natter',
    tagline: 'Real-time chat platform with horizontal scaling, media sharing, and End-to-End Encryption .',
    tags: ['MERN Stack', 'Socket.io', 'E2EE', 'Redis', 'Cloudinary', 'PWA', 'JWT Auth', 'Vercel', 'Render'],
    features: [
      '35+ Reistered users and Tracked 10+ concurrent users with real-time presence.',
      'Implemented End-to-End Encryption on 1 to 1 messages using ECDH key exchange and AES-GCM encryption,',
      'Built 1:1 and group chats with replies, deletes, blocking, file/image sharing,read receipts, offline queues & notifications.',
      'Scaled Socket.io across 2+ server instances using Redis pub/sub adapter, cutting cross-instance message latency by 2x .',
      'Secured 5+ routes with JWT rotation (15m access/7d refresh),optimized fetches across 3k paginated records with MongoDB indexes.',
    ],
    githubUrl: 'https://github.com/Kapil-dharme/Natter',
    liveUrl: 'https://natter-lake.vercel.app/',
  },
  {
    title: 'PYQ-HUB',
    tagline: 'End-to-end exam preparation platform with topic-wise segregated past papers and verified answers.',
    tags: ['EJS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT-Auth', 'Tailwind'],
    features: [
      'Scaled to 400+ users with 35+ concurrent active users during peak semester exam seasons .',
      'Categorized papers by subject, year, branch and in 2 types ( CT, END-SEM) for structured student access .',
      'Reduced paper retrieval time to under 2s for users via MongoDB indexing on subjects.',
      'Integrated Cloudinary API for fast PDF upload, storage, and cross-device delivery .',
    ],
    githubUrl: 'https://github.com/Kapil-dharme/NEW-PYQ-HUB',
    liveUrl: 'https://pyq-hub-alpha.vercel.app/',
  },
  {
    title: 'Krushi-Mitra',
    tagline: 'Krushimitra is an Agritech platform combining AI crop diagnostics and market intelligence for ROI.',
    tags: ['EJS', 'Node.js', 'Express', 'MongoDB', 'OpenRouter', 'REST-API', 'Tailwind'],
    features: [
      'Engineered 86% accurate crop diagnostics in under 5 seconds using Google Gemini Flash model for 12+ plant diseases .',
      'Aggregated free agronomic data via open-source AI and government APIs to render real-time market charts across 250+ districts',
      'Optimized farm scheduling by 40% by streaming hyper-local weather API forecasts directly to the dashboard .',
      'Secured user dashboard access and workflows by implementing robust JWT authentication tokens .',
    ],

    githubUrl: 'https://github.com/Kapil-dharme/KRUSHI-MITRA',
    liveUrl: 'https://krushi-mitra-green.vercel.app/',
  },
];

export default function Projects() {
  return (
    <section className="py-12 md:py-16 border-t border-outline-variant/60" id="projects">
      <div className="max-w-2xl mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Projects<span className="text-secondary/50">.</span>
        </h2>
        <p className="mt-3 text-secondary text-base md:text-lg">
          Production-grade applications handling live users with resilient full-stack architecture and product-level scalability.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 md:p-10 rounded-3xl border border-outline-variant bg-surface-container-high/20 hover:border-primary/40 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 text-primary border border-outline-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                {project.title}
              </h3>
              <p className="text-secondary text-base mb-6 leading-relaxed">
                {project.tagline}
              </p>

              <ul className="space-y-2 mb-8">
                {project.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2.5 text-sm sm:text-base text-on-surface-variant">
                    <span className="text-primary shrink-0">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-outline-variant/60">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">code</span>
                Source Code
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_outward</span>
                Live
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
