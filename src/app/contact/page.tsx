import { Header } from "@/components/header";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/container";

const fields = [
  { label: "Nom complet", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Téléphone", name: "phone", type: "tel" },
  { label: "Entreprise", name: "company", type: "text" },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-navigation-height">
        <section className="py-20">
          <Container className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div className="space-y-6 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-green">Contact</p>
              <h1 className="text-3xl md:text-5xl font-semibold">
                Parlez-nous de votre projet.
              </h1>
              <p className="text-secondary-text text-lg leading-relaxed">
                Notre équipe vous répond sous 24h pour définir la solution la plus
                adaptée à vos besoins.
              </p>

              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {fields.map((field) => (
                    <label key={field.name} className="space-y-2 text-sm">
                      <span className="block text-offWhite/80">{field.label}</span>
                      <input
                        type={field.type}
                        name={field.name}
                        className="w-full rounded-xl border border-transparent-border bg-black/40 px-4 py-3 text-offWhite focus:border-green focus:outline-none"
                        placeholder={field.label}
                      />
                    </label>
                  ))}
                </div>

                <label className="space-y-2 text-sm">
                  <span className="block text-offWhite/80">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-xl border border-transparent-border bg-black/40 px-4 py-3 text-offWhite focus:border-green focus:outline-none"
                    placeholder="Parlez-nous de vos objectifs"
                  />
                </label>

                <button
                  type="submit"
                  className="rounded-xl bg-green px-6 py-3 font-medium text-black transition-colors hover:bg-emerald-400"
                >
                  Envoyer ma demande
                </button>
              </form>
            </div>

            <aside className="space-y-6 rounded-3xl border border-transparent-border bg-black/40 p-8 shadow-lg shadow-emerald-500/10">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Autres moyens de nous joindre</h2>
                <p className="text-secondary-text">
                  Vous pouvez aussi nous contacter directement à
                  <br />
                  <a className="text-offWhite hover:text-green" href="mailto:lome@strivehawk.com">
                    lome@strivehawk.com
                  </a>
                  <br />
                  ou par téléphone au
                  <br />
                  <a className="text-offWhite hover:text-green" href="tel:+22870758804">
                    +228 70 75 88 04
                  </a>
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Bureau</h3>
                <p className="text-secondary-text leading-relaxed">
                  198 rue de l&apos;hôpital Tokoin hôpital<br />
                  Face entrée CHU-SO de Tokoin
                </p>
              </div>
            </aside>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
