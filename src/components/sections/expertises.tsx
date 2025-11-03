import Link from "next/link";
import { Button } from "../button";
import { Container } from "../container";

const expertises = [
  {
    title: "Cloud & accès sécurisé à distance",
    description: "La flexibilité sans compromis sur la sécurité.",
  },
  {
    title: "Cybersécurité & Conformité",
    description: "Une protection complète pour vos données.",
  },
  {
    title: "Digitalisation & Automatisation",
    description: "Des outils qui travaillent pour vous.",
  },
  {
    title: "Infrastructures & Support IT",
    description: "Une assistance proactive et complète.",
  },
  {
    title: "Développement Web, Mobile & IA",
    description: "Des solutions intelligentes, sur mesure.",
  },
];

export const Expertises = () => {
  return (
    <section className="py-20">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Des solutions conçues pour faire grandir votre entreprise.
          </h2>
          <p className="text-secondary-text text-lg leading-relaxed">
            De la gestion IT à la cybersécurité, du cloud à la transformation
            digitale, Strivehawk vous aide à évoluer sereinement, avec des
            solutions sur mesure et humaines.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {expertises.map((expertise) => (
            <div
              key={expertise.title}
              className="flex flex-col justify-between rounded-2xl border border-transparent-border bg-black/40 p-8 shadow-lg shadow-emerald-500/10"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-offWhite">
                  {expertise.title}
                </h3>
                <p className="text-secondary-text leading-relaxed">
                  {expertise.description}
                </p>
              </div>

              <Button
                variant="tertiary"
                size="small"
                className="mt-6 self-start"
                asChild
              >
                <Link href="/services">Découvrir le service</Link>
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
