import Link from "next/link";
import { Button } from "../button";
import { Container } from "../container";
import { Hero, HerosubTitle, HeroTitle } from "../home-pageHero";

export const HeroSection = () => {
  return (
    <div>
      <Container className="py-[10rem]">
        <Hero className="pt-[2rem] space-y-6">
          <HeroTitle className="tracking-normal">
            La technologie au service de l’humain et de la performance.
          </HeroTitle>

          <HerosubTitle className="my-3 lg:mb-0 max-w-3xl mx-auto text-secondary-text">
            Strivehawk accompagne les entreprises d’Afrique de l’Ouest dans leur
            croissance digitale grâce à des solutions IT, Cloud et de
            cybersécurité fiables, accessibles et centrées sur l’humain.
          </HerosubTitle>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <Button size="medium" asChild>
              <Link href="/services">Découvrir nos services</Link>
            </Button>
            <Button size="medium" variant="secondary" asChild>
              <Link href="/contact">Démarrer votre projet</Link>
            </Button>
          </div>
        </Hero>
      </Container>
    </div>
  );
};
