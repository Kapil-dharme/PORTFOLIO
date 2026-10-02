import React from 'react';

const achievements = [
  {
    icon: 'terminal',
    category: 'Competitive Programming',
    title: '700+ DSA Problems Solved',
    organization: 'LeetCode, GeeksforGeeks, HackerRank & CodeChef',
    period: '',
    description:
      'Mastered core algorithmic patterns including Dynamic Programming, Graph Traversals, Trees, and Binary Search with a strong command of C++.',
    highlight: '',
    photo: '/platform.png',

    links: [
      {
        name: 'LeetCode',
        url: 'https://leetcode.com/u/Kapil_Dharme/',
      },
      {
        name: 'GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/profile/kapildhacc8v?tab=activity',
      },
      {
        name: 'HackerRank',
        url: 'https://www.hackerrank.com/profile/kapildharme676',
      },
      {
        name: 'CodeChef',
        url: 'https://www.codechef.com/users/kapildharme',
      },
    ],
  },
  {
    icon: 'code',
    category: 'Coding Competition',
    title: 'Code Clash',
    organization: 'College Coding Competition',
    period: '2026',
    description:
      'Participated in code clash event and debugged the buggy codes & solved algorithmic problems using C++, focusing on data structures, algorithms, and problem-solving.',
    highlight: '2nd Runner-up among participating contestants.',
    photo: '/codeclash.png',

    links: [],
  },
  {
    icon: 'military_tech',
    category: 'Hackathons',
    title: 'Esperenza',
    organization: 'Inter College Level Hackathon',
    period: '2026',
    description:
      'Led a 4-member developer team to build an Agritech platform combining AI crop diagnostics and market intelligence for ROI using the MERN stack with market analytics.',
    highlight: 'Selected among top 5 teams out of 200+ applicants.',
    photo: '/esperenza.png',

    links: [
      {
        name: 'Project',
        url: 'https://krushi-mitra-green.vercel.app/',
      },
    ],
  },
];

export default function Achievements() {
  return (
    <section
      className="py-12 md:py-16 border-t border-outline-variant/60"
      id="achievements"
    >
      <div className="max-w-2xl mb-10 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Achievements &amp; Honors
          <span className="text-secondary/50">.</span>
        </h2>

        <p className="mt-3 text-secondary text-base md:text-lg">
          Key milestones demonstrating algorithmic problem solving,
          competitive hackathons, coding competitions &amp; leadership skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-3xl border border-outline-variant bg-surface-container-high/20 hover:border-primary/40 transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row gap-6">

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-on-primary">
                    <span className="material-symbols-outlined text-[15px]">
                      {item.icon}
                    </span>
                    {item.category}
                  </span>

                  <span className="text-xs font-medium text-secondary">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-secondary mb-3">
                  {item.organization}
                </p>

                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="w-full sm:w-32 md:w-36 lg:w-40 shrink-0">
                <img
                  src={item.photo}
                  alt={item.title}
                  className="w-full h-32 sm:h-36 md:h-40 object-cover rounded-2xl border border-outline-variant"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/60">
              <div className="flex flex-col gap-4">

                {item.highlight && (
                  <div className="flex items-start gap-2 text-xs sm:text-sm font-medium text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span>{item.highlight}</span>
                  </div>
                )}

                {item.links?.length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {item.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary underline decoration-secondary/30 underline-offset-4 hover:decoration-primary transition-colors"
                      >
                        {link.name}
                        <span className="material-symbols-outlined text-[13px]">
                          open_in_new
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

