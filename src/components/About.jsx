import React from 'react';

export default function About() {
    const coursework = ['DSA', 'OS', 'CN', 'DBMS'];

    return (
        <section className="py-12 md:py-16 border-t border-outline-variant/60" id="about">
            <div className="max-w-2xl mb-8 md:mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
                    About<span className="text-secondary/50">.</span>
                </h2>
                <p className="mt-3 text-secondary text-base md:text-lg">
                    Highlights of my engineering career, from writing clean code to shipping production-ready apps.
                </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl border border-outline-variant bg-surface-container-high/20">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                    <div className="flex-1 space-y-5">
                        <div className="space-y-1">
                            <p className="text-lg sm:text-xl font-semibold text-primary leading-snug">
                                Hi, I'm Kapil Dharme
                            </p>
                            <p className="text-sm sm:text-base text-on-surface-variant font-normal leading-loose">
                                3rd year CSE undergrad and MERN stack developer. I build production-grade backend systems
                                while consistently refining my skills in {' '}
                                <span className="text-primary font-medium  decoration-secondary/30 underline-offset-4">
                                    Data Structures & Algorithms (C++)
                                </span>
                                ,{' '}
                                <span className="text-primary font-medium  decoration-secondary/30 underline-offset-4">
                                    competitive programming
                                </span>
                                , and{' '}
                                <span className="text-primary font-medium  decoration-secondary/30 underline-offset-4">
                                    database systems
                                </span>
                                .
                            </p>
                        </div>

                        <hr className="border-none h-px bg-outline-variant/40 my-1" />
                        <p className="text-sm sm:text-base text-on-surface-variant leading-loose">
                            Built systems like <span className="font-medium text-primary">Natter</span> and <span className="font-medium text-primary">PyqHub</span> used by live users. Solved <span className="font-medium text-primary">700+ DSA problems</span> across various platforms like
                            LeetCode, GeeksForGeeks, CodeChef, and HackerRank — with a focus on writing clean, optimized code
                            under constraints.
                        </p>

                    </div>

                    <div className="hidden lg:block w-px self-stretch bg-outline-variant/60" />
                    <div className="block lg:hidden h-px w-full bg-outline-variant/60" />

                    <div className="lg:w-64 xl:w-72 shrink-0">
                        <div className="flex items-center justify-between gap-2 mb-5">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-on-primary">
                                <span className="material-symbols-outlined text-[15px]">school</span>
                                Education
                            </span>
                            <span className="text-xs font-medium text-secondary">
                                2024 - 2028
                            </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">
                            B.Tech Computer Science
                        </h3>
                        <p className="text-sm font-medium text-secondary mb-5 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-secondary/70">location_on</span>
                            Government College of Engineering Amravati (Maharashtra) .
                        </p>

                    </div>

                </div>
            </div>
        </section >
    );
}