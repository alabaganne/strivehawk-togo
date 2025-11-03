import { icons } from "@/utils/constant";
import { Container } from "../container";

export const Partnerships = () => {
  return (
    <section id="partenaires" className="py-20 border-t border-transparent-border bg-background/60">
      <Container className="space-y-8">
        <div className="max-w-4xl space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold">
            En tant que filiale de Strivehawk US, nous nous appuyons sur ses
            partenaires internationaux pour offrir des solutions robustes aux
            entreprises africaines.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {icons.map((icon) => (
            <div
              key={icon.id}
              className="flex items-center justify-center rounded-2xl border border-transparent-border bg-black/40 p-6"
            >
              <icon.component className="h-10 w-auto" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
