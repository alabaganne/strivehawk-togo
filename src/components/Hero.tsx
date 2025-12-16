'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto w-full pt-40 px-6 text-center md:px-8
      min-h-[calc(100vh-40px)] overflow-hidden
      bg-[linear-gradient(to_bottom,#000,#0000_30%,#1a1a2e_78%,#3b82f6_99%_50%)]
      rounded-b-xl"
    >
      {/* Grid BG */}
      <div
        className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full
        bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]
        bg-[size:6rem_5rem]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial Accent */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)]
        h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%]
        -translate-x-1/2 rounded-[100%] border-t border-primary/30 bg-black
        bg-[radial-gradient(closest-side,#000_82%,#3b82f6)]
        animate-fade-up"
      />

      {/* Eyebrow */}
      <a href="#services" className="group inline-block">
        <span
          className="text-sm text-gray-400 font-mono mx-auto px-5 py-2
          bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent
          border-[2px] border-white/10
          rounded-3xl w-fit tracking-tight uppercase flex items-center justify-center
          hover:border-primary/30 transition-colors"
        >
          Votre Partenaire Digital
          <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </a>

      {/* Title */}
      <h1
        className="animate-fade-in -translate-y-4 text-balance
        bg-gradient-to-br from-white from-30% to-white/40
        bg-clip-text py-6 text-5xl font-bold leading-none tracking-tighter
        text-transparent opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Solutions qui
        <br />
        <span className="gradient-text">impactent</span>
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in mb-12 -translate-y-4 text-balance
        text-lg tracking-tight text-gray-400
        opacity-0 md:text-xl max-w-2xl mx-auto"
        style={{ animationDelay: '0.3s' }}
      >
        Infrastructure digitale sur-mesure, sécurisée et évolutive.
        Nous transformons vos idées en solutions performantes.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.45s' }}>
        <Button
          asChild
          className="z-20 font-mono tracking-tight text-center text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
        >
          <Link href="/contact">
            Discutons de votre projet
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          className="z-20 font-mono tracking-tight text-center text-lg px-8 py-6 rounded-full border-2 border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
        >
          <Link href="#portfolio">
            Voir nos réalisations
          </Link>
        </Button>
      </div>

      {/* Trust indicators */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Réponse sous 24h</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Consultation gratuite</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>50+ projets livrés</span>
        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="animate-fade-up relative mt-32 opacity-0 [perspective:2000px]
        after:absolute after:inset-0 after:z-50
        after:[background:linear-gradient(to_top,hsl(var(--background))_10%,transparent)]"
      />
    </section>
  );
}
