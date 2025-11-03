import { Betashares } from "@/components/icon/betashares-icon";
import { ChatBaseIcon } from "@/components/icon/chatbase-icon";
import { GithubIcon } from "@/components/icon/github-icon";
import { HumataIcon } from "@/components/icon/humata-icon";
import { KreaIcon } from "@/components/icon/krea-icon";
import { LoopIcon } from "@/components/icon/loop-icon";
import { MobbinIcon } from "@/components/icon/mobbin-icon";
import { OnePassword } from "@/components/icon/onepassword-icon";
import { Pika } from "@/components/icon/pika-icon";
import { PwcIcon } from "@/components/icon/pwc-icon";
import { ResendIcon } from "@/components/icon/resend-icon";
import { UdioIcon } from "@/components/icon/udio-icon";
import { MozillaIcon } from "@/components/icon/mozilla-icon";
import { ReactIcon } from "@/components/icon/react-icon";
import { NextJsIcon } from "@/components/icon/nextjs-icon";
import { AnyFrameworkIcon } from "@/components/icon/any-framework-icon";
import { FlutterIcon } from "@/components/icon/flutter-icon";
import { KotlinIcon } from "@/components/icon/kotlin-icon";
import { SvelteIcon } from "@/components/icon/svelte-icon";
import { SolidJs } from "@/components/icon/solidjs-icon";
import { VueIcon } from "@/components/icon/vue-icons";
import { NuxtIcon } from "@/components/icon/nuxt-icon";
import { RefineIcon } from "@/components/icon/refine-icon";
import { Stripe } from "@/components/icon/stripe";
import { Triangle } from "@/components/icon/triangle";
import { ChatGpt } from "@/components/icon/chat-gpt";
import { LangChain } from "@/components/icon/langchain";
import { Expo } from "@/components/icon/expo";

interface NavLink {
  title: string;
  href: string;
}

interface FooterLinkItem {
  label: string;
  href?: string;
}

interface FooterColumn {
  title: string;
  items: FooterLinkItem[];
}

export const navLinks: NavLink[] = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "/a-propos" },
  { title: "Services", href: "/services" },
  { title: "Partenaires", href: "/#partenaires" },
  { title: "Contact", href: "/contact" },
];

export const footerLinks: FooterColumn[] = [
  {
    title: "Liens rapides",
    items: [
      { label: "Accueil", href: "/" },
      { label: "À propos", href: "/a-propos" },
      { label: "Services", href: "/services" },
      { label: "Partenaires", href: "/#partenaires" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact",
    items: [
      { label: "Email : lome@strivehawk.com", href: "mailto:lome@strivehawk.com" },
      { label: "Téléphone : +228 70 75 88 04", href: "tel:+22870758804" },
      { label: "Adresse : Lomé, Togo — Afrique de l’Ouest" },
    ],
  },
  {
    title: "Liens légaux",
    items: [
      { label: "Mentions légales" },
      { label: "Politique de confidentialité" },
      { label: "Conditions générales" },
    ],
  },
];

export const icons = [
  { component: Betashares, id: 1 },
  { component: ChatBaseIcon, id: 2 },
  { component: GithubIcon, id: 3 },
  { component: HumataIcon, id: 4 },
  { component: KreaIcon, id: 5 },
  // { component: LangChain, id: 6 },
  { component: LoopIcon, id: 7 },
  { component: MobbinIcon, id: 8 },
  { component: OnePassword, id: 9 },
  { component: Pika, id: 10 },
  { component: PwcIcon, id: 11 },
  { component: ResendIcon, id: 12 },
  { component: UdioIcon, id: 13 },
  { component: MozillaIcon, id: 14 },
];

export const frameworkIcons = [
  { component: ReactIcon, id: 1, title: "React" },
  { component: NextJsIcon, id: 2, title: "Next.js" },
  { component: AnyFrameworkIcon, id: 3, title: "RedwoodJS" },
  { component: FlutterIcon, id: 4, title: "Flutter" },
  { component: KotlinIcon, id: 5, title: "Kotlin" },
  { component: SvelteIcon, id: 6, title: "Svelte" },
  { component: SolidJs, id: 7, title: "SolidJS" },
  { component: VueIcon, id: 8, title: "Vue" },
  { component: NuxtIcon, id: 9, title: "Nuxt" },
  { component: RefineIcon, id: 10, title: "Refine" },
];

export const starterKit = [
  {
    title: "Stripe Subscriptions Starter",
    description:
      "The all-in-one subscription starter kit for high-performance SaaS applications, powered by Stripe, Supabase, and Vercel.",
    image: [NextJsIcon, Stripe, Triangle],
    link: "View Template",
  },
  {
    title: "Next.js Starter",
    description:
      "A Next.js App Router template configured with cookie-based auth using Supabase, TypeScript, and Tailwind CSS.",
    image: [NextJsIcon, Triangle],
    link: "View Template",
  },
  {
    title: "AI Chatbot",
    description:
      "An open-source AI chatbot app template built with Next.js, the Vercel AI SDK, OpenAI, and Supabase.",
    image: [NextJsIcon, ChatGpt, Triangle],
    link: "View Template",
  },
  {
    title: "LangChain + Next.js Starter",
    description:
      "Starter template and example use-cases for LangChain projects in Next.js, including chat, agents, and retrieval.",
    image: [LangChain, NextJsIcon],
    link: "View Template",
  },
  {
    title: "Flutter User Management",
    description:
      "Get started with Supabase and Flutter by building a user management app with auth, file storage, and database.",
    image: [FlutterIcon],
    link: "View Template",
  },
  {
    title: "Expo React Native Starter",
    description:
      "An extended version of create-t3-turbo implementing authentication on both the web and mobile applications.",
    image: [Expo],
    link: "View Template",
  },
];

export const testimonials = [
  {
    id: "1",
    displayName: "Aïcha K.",
    initials: "AK",
    role: "Directrice IT — Banque régionale",
    content:
      "Strivehawk a modernisé notre infrastructure sans interrompre nos services. Leur équipe locale comprend vraiment nos contraintes et répond avec une grande réactivité.",
    likes: 124,
    shares: 36,
  },
  {
    id: "2",
    displayName: "Mawuli A.",
    initials: "MA",
    role: "Fondateur — Startup logistique",
    content:
      "Nous avons gagné plusieurs heures par semaine grâce aux automatisations mises en place. Le suivi du projet a été clair, humain et très professionnel.",
    likes: 98,
    shares: 22,
  },
  {
    id: "3",
    displayName: "Clarisse D.",
    initials: "CD",
    role: "Responsable RH — Groupe industriel",
    content:
      "Les solutions cloud déployées par Strivehawk ont sécurisé nos accès distants et facilité l’onboarding de nos équipes. Un partenaire de confiance !",
    likes: 142,
    shares: 31,
  },
  {
    id: "4",
    displayName: "Souleymane T.",
    initials: "ST",
    role: "CEO — Cabinet de conseil",
    content:
      "Leur expertise cybersécurité nous a permis d’obtenir nos certifications plus rapidement. Ils ont su vulgariser les enjeux pour toutes nos équipes.",
    likes: 167,
    shares: 44,
  },
];

export const customerStories = [
  {
    main: {
      img: ChatBaseIcon,
      text: "Maergo's Express Delivery: How Supabase Helped Achieve Scalability, Speed, and Cost Saving",
    },

    side: {
      image1: Betashares,
      image2: LoopIcon,
    },
  },
  {
    main: {
      img: Expo,
      text: "Scaling securely: one million users in 7 months protected with Supabase Auth",
    },

    side: {
      image1: LoopIcon,
      image2: MozillaIcon,
    },
  },
  {
    main: {
      img: KreaIcon,
      text: "Bootstrapped founder builds an AI app with Supabase and scales to $1M in 5 months.",
    },

    side: {
      image1: ChatGpt,
      image2: PwcIcon,
    },
  },
];
