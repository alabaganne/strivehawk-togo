'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiRefresh, HiLightBulb, HiShieldCheck } from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    id: 'resilience',
    title: 'Résilience',
    subtitle: "S'adapter, Évoluer et Réussir.",
    description: "Nous faisons face à vos défis avec souplesse et créativité, en adaptant nos solutions à vos besoins spécifiques et en évoluant avec votre entreprise.",
    icon: HiRefresh,
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    subtitle: 'Toujours progresser, Toujours innover.',
    description: "Nous recherchons constamment des approches nouvelles, plus efficaces et optimisées, pour vous offrir des services à la pointe.",
    icon: HiLightBulb,
    gradient: 'from-amber-500 to-yellow-400',
  },
  {
    id: 'fiabilite',
    title: 'Fiabilité',
    subtitle: 'Un partenariat durable, un service de confiance.',
    description: "Nos engagements sont sérieux : nous proposons des solutions robustes, fiables et un accompagnement constant pour que vous puissiez compter sur nous.",
    icon: HiShieldCheck,
    gradient: 'from-emerald-500 to-green-400',
  },
];

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.value-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Nos Valeurs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-text">Nos valeurs</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Les principes qui guident chaque décision pour servir votre entreprise avec sérieux.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value) => {
            const ValueIcon = value.icon;
            return (
              <div
                key={value.id}
                className="value-card group bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <ValueIcon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-primary font-semibold text-sm mb-4">
                  {value.subtitle}
                </p>
                <p className="text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
