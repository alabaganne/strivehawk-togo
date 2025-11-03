import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/container";

const values = [
  {
    title: "Résilience",
    description: "Nous anticipons, adaptons et assurons la continuité.",
  },
  {
    title: "Innovation",
    description: "Chaque projet est une opportunité d’innover.",
  },
  {
    title: "Fiabilité",
    description: "Nous bâtissons des relations durables basées sur la confiance.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-navigation-height">
        <section className="py-20">
          <Container className="space-y-10">
            <div className="space-y-6 max-w-4xl">
              <p className="text-sm uppercase tracking-[0.3em] text-green">Qui nous sommes</p>
              <h1 className="text-3xl md:text-5xl font-semibold">
                Une équipe de passionnés, dédiée à votre réussite.
              </h1>
              <p className="text-secondary-text text-lg leading-relaxed">
                Strivehawk Afrique est une filiale du groupe Strivehawk, née de la
                volonté d’offrir aux entreprises africaines des solutions
                technologiques de niveau international, tout en respectant leurs
                spécificités locales. Nous unissons l’expertise américaine et la
                connaissance du terrain africain pour concevoir des solutions
                concrètes, humaines et durables.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div className="rounded-3xl border border-transparent-border bg-black/40 p-8 shadow-lg shadow-emerald-500/10 space-y-4">
                <h2 className="text-2xl font-semibold">Vision</h2>
                <p className="text-secondary-text leading-relaxed">
                  Bâtir un écosystème numérique africain solide, collaboratif et
                  inclusif, où la technologie soutient le potentiel humain.
                </p>
              </div>
              <div className="rounded-3xl border border-transparent-border bg-black/40 p-8 shadow-lg shadow-emerald-500/10 space-y-4">
                <h2 className="text-2xl font-semibold">Mission</h2>
                <p className="text-secondary-text leading-relaxed">
                  Accompagner les entreprises d’Afrique de l’Ouest dans leur
                  transformation digitale grâce à des solutions fiables, accessibles
                  et centrées sur les personnes.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Nos trois piliers fondamentaux.
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-2xl border border-transparent-border bg-black/40 p-6 shadow-lg shadow-emerald-500/10"
                  >
                    <h3 className="text-xl font-semibold text-offWhite">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-secondary-text leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-secondary-text text-lg leading-relaxed">
                Chez Strivehawk, chaque solution commence par une écoute. Parce
                qu’avant les ordinateurs, il y a des personnes.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Une force mondiale au service de vos ambitions.
              </h2>
              <p className="text-secondary-text text-lg leading-relaxed max-w-4xl">
                Portée par l’expertise internationale de Strivehawk et ses
                partenaires technologiques, notre équipe locale met à votre
                disposition des solutions reconnues pour leur fiabilité et leur
                performance.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
