'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cta-content', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-4 md:px-6 bg-background relative overflow-hidden">
            {/* Unique background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-purple-500/5 to-transparent blur-3xl"></div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="relative glass rounded-[3rem] p-12 md:p-20 lg:p-32 text-center overflow-hidden isolate border border-glass-border">
                    {/* Animated Gradient Background */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] -z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 via-purple-500/5 to-transparent -z-10 opacity-50" />
                    
                    {/* Unique decorative elements */}
                    <div className="absolute top-4 right-4 w-32 h-32 border border-primary/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 border border-purple-500/10 rounded-full blur-xl"></div>

                    <div className="cta-content relative z-10 flex flex-col items-center">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-tight font-bold text-foreground mb-6 md:mb-8 tracking-tight">
                            Prêt à <span className="gradient-text relative">
                                transformer
                                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-30"></span>
                            </span> votre infrastructure ?
                        </h2>

                        <p className="text-lg md:text-xl lg:text-2xl text-muted max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed font-light">
                            Discutons de votre projet et découvrez comment nos solutions peuvent créer un impact mesurable pour votre entreprise.
                        </p>

                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center gap-2 px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-white bg-primary rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                        >
                            <span className="relative z-10">Discutons de votre projet</span>
                            <svg
                                className="w-4 h-4 md:w-5 md:h-5 relative z-10 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-purple-500/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
