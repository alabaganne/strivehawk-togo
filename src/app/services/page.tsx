import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/container";
import { TestimonialMarquee } from "@/components/testimonial-marquee";

const services = [
  {
    title: "Solution cloud avec accès à distance sécurisé",
    subtitle: "Flexibilité, mobilité, sécurité.",
    items: [
      "Microsoft 365 & Azure Virtual Desktop",
      "VPN & accès sécurisé",
      "Sauvegardes & reprise après sinistre",
      "Gestion des licences et stockage cloud",
    ],
  },
  {
    title: "Infrastructures & Support IT",
    subtitle: "Une assistance proactive, un système toujours disponible.",
    items: [
      "Supervision & help desk",
      "Gestion d’appareils, imprimantes et Wi-Fi",
      "Mises à jour & maintenance Windows",
      "Dépannage sur site et à distance",
    ],
  },
  {
    title: "Cybersécurité & Conformité",
    subtitle: "Prévenir les menaces. Protéger la confiance.",
    items: [
      "Firewalls, antivirus & sécurité endpoint",
      "Protection email & prévention phishing",
      "Conformité HIPAA, PCI-DSS, RGPD",
      "Audit & formation sécurité",
    ],
  },
  {
    title: "Digitalisation & Automatisation",
    subtitle: "Simplifiez vos processus et gagnez du temps.",
    items: [
      "Création de sites & identité de marque",
      "Automatisation CRM & email marketing",
      "Intégrations (Zoho, QuickBooks, Shopify...)",
      "Optimisation des workflows internes",
    ],
  },
  {
    title: "Développement Web, Mobile & IA",
    subtitle: "Des solutions intelligentes et évolutives.",
    items: [
      "Applications web & mobiles",
      "Landing pages & bases de données",
      "Intégration de chatbots IA",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-navigation-height">
        <section className="py-20">
          <Container className="space-y-12">
            <div className="space-y-6 max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-green">Services</p>
              <h1 className="text-3xl md:text-5xl font-semibold">
                Nos solutions technologiques, pensées pour vous.
              </h1>
              <p className="text-secondary-text text-lg leading-relaxed">
                Chaque entreprise a ses défis. Chez Strivehawk, nous concevons des
                solutions sur mesure pour simplifier, sécuriser et accélérer votre
                croissance.
              </p>
            </div>

            <div className="space-y-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-transparent-border bg-black/40 p-8 shadow-lg shadow-emerald-500/10"
                >
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-offWhite">
                      {service.title}
                    </h2>
                    <p className="text-secondary-text text-lg">
                      {service.subtitle}
                    </p>
                    <ul className="grid gap-3 md:grid-cols-2 text-secondary-text">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 h-2 w-2 rounded-full bg-green"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 border-t border-transparent-border bg-background/60">
          <Container className="space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Ce sont nos clients qui en parlent le mieux.
              </h2>
              <p className="text-secondary-text text-lg">
                Découvrez les retours d’expérience des organisations qui nous
                font confiance pour sécuriser et accélérer leur transformation
                digitale.
              </p>
            </div>
            <TestimonialMarquee />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
