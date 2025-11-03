import { Container } from "../container";

const pillars = [
  {
    title: "Fiabilité",
    description: "Nous restons à vos côtés à chaque étape.",
  },
  {
    title: "Innovation",
    description: "Nous optimisons vos performances dans la durée.",
  },
  {
    title: "Résilience",
    description:
      "Vos systèmes et vos équipes restent solides, même face aux imprévus.",
  },
];

export const WhyStrivehawk = () => {
  return (
    <section className="py-20 border-t border-transparent-border bg-background/60">
      <Container className="space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            La technologie est puissante. Mais c’est l’humain qui fait la
            différence.
          </h2>
          <p className="text-secondary-text text-lg leading-relaxed">
            Chez Strivehawk, nous croyons que la technologie ne vaut que si elle
            améliore la vie, simplifie le travail et renforce les relations
            humaines. C’est pourquoi nous développons des solutions centrées sur
            vos équipes, vos défis et votre réalité, pas seulement sur les
            systèmes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-transparent-border bg-black/40 p-8 shadow-lg shadow-emerald-500/10"
            >
              <h3 className="text-xl font-semibold text-offWhite">
                {pillar.title}
              </h3>
              <p className="mt-3 text-secondary-text leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
