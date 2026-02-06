'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    id: 'accessibilite',
    title: "D\u00e9claration d\u2019Accessibilit\u00e9",
    content: (
      <>
        <p>
          Chez Strivehawk, nous nous engageons \u00e0 rendre nos services accessibles \u00e0 tous.
        </p>
        <p>
          Si vous avez des questions ou rencontrez des difficult\u00e9s d\u2019accessibilit\u00e9 lors de l\u2019utilisation de notre site web, veuillez nous contacter \u00e0 l\u2019adresse suivante&nbsp;: <a href="mailto:contact@strivehawk.com" className="text-primary hover:underline">contact@strivehawk.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 'confidentialite',
    title: "D\u00e9claration de Confidentialit\u00e9",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entr\u00e9e en vigueur&nbsp;: 7 D\u00e9cembre 2024</p>
        <p>
          La protection de votre vie priv\u00e9e est une priorit\u00e9 pour nous.
          Cette politique explique de mani\u00e8re transparente comment nous collectons, utilisons et prot\u00e9geons vos informations personnelles.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Informations que nous collectons</h3>
        <p><strong>Informations personnelles&nbsp;:</strong> Nom, adresse email, num\u00e9ro de t\u00e9l\u00e9phone, informations de paiement (le cas \u00e9ch\u00e9ant).</p>
        <p><strong>Donn\u00e9es techniques&nbsp;:</strong> Adresse IP, type de navigateur, informations li\u00e9es aux cookies et \u00e0 la navigation sur notre site.</p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Utilisation de vos donn\u00e9es</h3>
        <p>Nous utilisons vos informations afin de&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Fournir, g\u00e9rer et am\u00e9liorer continuellement nos services</li>
          <li>Communiquer avec vous concernant des mises \u00e0 jour, offres ou informations pertinentes (avec votre consentement)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">S\u00e9curit\u00e9 des donn\u00e9es</h3>
        <p>
          Nous mettons en place des mesures de s\u00e9curit\u00e9 renforc\u00e9es, incluant le chiffrement et des serveurs s\u00e9curis\u00e9s, afin de prot\u00e9ger vos informations contre tout acc\u00e8s non autoris\u00e9.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Vos droits</h3>
        <p>Vous disposez du droit&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>d&apos;acc\u00e9der \u00e0 vos donn\u00e9es personnelles,</li>
          <li>de les modifier,</li>
          <li>ou de demander leur suppression.</li>
        </ul>
        <p className="mt-2">
          Pour exercer ces droits, contactez-nous \u00e0 <a href="mailto:contact@strivehawk.com" className="text-primary hover:underline">contact@strivehawk.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 'cgv',
    title: "Conditions G\u00e9n\u00e9rales de Vente",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entr\u00e9e en vigueur&nbsp;: 7 d\u00e9cembre 2024</p>
        <p>
          En achetant un produit ou un service aupr\u00e8s de Strivehawk, vous acceptez les conditions suivantes&nbsp;:
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Conditions de paiement</h3>
        <p>
          Tous les paiements sont exigibles \u00e0 r\u00e9ception de la facture, sauf accord \u00e9crit contraire.
          Des frais de retard de 30&nbsp;% peuvent \u00eatre appliqu\u00e9s aux soldes impay\u00e9s apr\u00e8s la p\u00e9riode de gr\u00e2ce convenue.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Politique de remboursement</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Les remboursements sont accord\u00e9s uniquement pour les services non fournis ou les produits d\u00e9fectueux.</li>
          <li>Les services par abonnement ne sont pas remboursables une fois activ\u00e9s.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Limitation de responsabilit\u00e9</h3>
        <p>
          Strivehawk ne pourra \u00eatre tenue responsable des dommages indirects, accessoires ou cons\u00e9cutifs r\u00e9sultant de l&apos;utilisation de ses services.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Garanties produits et services</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Les garanties mat\u00e9rielles sont assur\u00e9es par les fabricants concern\u00e9s.</li>
          <li>Pour les services, Strivehawk s&apos;engage \u00e0 respecter les livrables d\u00e9finis et valid\u00e9s contractuellement.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'conditions-utilisation',
    title: "Conditions d\u2019Utilisation",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entr\u00e9e en vigueur&nbsp;: 7 d\u00e9cembre 2024</p>
        <p>
          En acc\u00e9dant au site web de Strivehawk, vous acceptez les conditions suivantes&nbsp;:
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Licence d&apos;utilisation du site</h3>
        <p>
          Une licence limit\u00e9e, non exclusive et non transf\u00e9rable vous est accord\u00e9e pour consulter et utiliser le contenu du site \u00e0 des fins personnelles ou professionnelles.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Restrictions</h3>
        <p>Il est strictement interdit de&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>introduire des virus ou tout code malveillant,</li>
          <li>copier, modifier ou exploiter le contenu sans autorisation \u00e9crite,</li>
          <li>tenter d&apos;analyser ou de reproduire la structure technique du site.</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Exclusion de garanties</h3>
        <p>
          Le site et les services sont fournis &quot;en l&apos;\u00e9tat&quot;, sans garantie d&apos;absence d&apos;erreurs, d&apos;interruptions ou de disponibilit\u00e9 permanente.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. Droit applicable</h3>
        <p>
          Ces conditions sont r\u00e9gies par les lois de l&apos;\u00c9tat de Washington, \u00c9tats-Unis.
        </p>
      </>
    ),
  },
  {
    id: 'ne-pas-vendre',
    title: "Ne pas vendre ou partager mes informations",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entr\u00e9e en vigueur&nbsp;: 7 d\u00e9cembre 2024</p>
        <p>
          Strivehawk respecte votre vie priv\u00e9e et ne vend ni ne partage vos donn\u00e9es personnelles \u00e0 des fins marketing avec des tiers.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Exceptions</h3>
        <p>Le partage de donn\u00e9es peut avoir lieu uniquement dans les cas suivants&nbsp;:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>avec des partenaires technologiques (ex.&nbsp;: Pax8, Zoho) strictement n\u00e9cessaires \u00e0 la fourniture des services achet\u00e9s,</li>
          <li>lorsque la loi l&apos;exige (demande l\u00e9gale, autorit\u00e9s judiciaires ou forces de l&apos;ordre).</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">Opposition (Opt-out)</h3>
        <p>
          Pour vous opposer au partage de vos donn\u00e9es, veuillez nous \u00e9crire \u00e0 <a href="mailto:contact@strivehawk.com" className="text-primary hover:underline">contact@strivehawk.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: "Gestion des Cookies",
    content: (
      <>
        <p className="text-sm text-muted mb-4">Date d&apos;entr\u00e9e en vigueur&nbsp;: 7 d\u00e9cembre 2024</p>
        <p>
          Strivehawk utilise des cookies afin d&apos;am\u00e9liorer votre exp\u00e9rience de navigation et d&apos;analyser l&apos;utilisation du site.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">1. Types de cookies utilis\u00e9s</h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li><strong>Cookies essentiels&nbsp;:</strong> n\u00e9cessaires au bon fonctionnement du site</li>
          <li><strong>Cookies de performance&nbsp;:</strong> permettent d&apos;analyser le comportement des utilisateurs pour am\u00e9liorer le site</li>
          <li><strong>Cookies marketing&nbsp;:</strong> utilis\u00e9s pour proposer des contenus ou publicit\u00e9s cibl\u00e9s</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">2. Gestion des cookies</h3>
        <p>
          Vous pouvez g\u00e9rer vos pr\u00e9f\u00e9rences de cookies ou refuser les cookies non essentiels via notre outil de gestion des cookies.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">3. Cookies tiers</h3>
        <p>
          Nous utilisons des services tiers (ex.&nbsp;: Google Analytics) pour analyser et am\u00e9liorer les performances du site.
        </p>

        <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">4. D\u00e9sactivation des cookies</h3>
        <p>
          Vous pouvez d\u00e9sactiver les cookies via les param\u00e8tres de votre navigateur.
          Veuillez noter que certaines fonctionnalit\u00e9s du site peuvent \u00eatre limit\u00e9es si les cookies sont d\u00e9sactiv\u00e9s.
        </p>
      </>
    ),
  },
];

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Politique de <span className="gradient-text">Confidentialit\u00e9</span>
          </h1>
          <p className="text-lg text-muted mb-12">
            Informations l\u00e9gales, conditions d&apos;utilisation et politique de confidentialit\u00e9 de Strivehawk.
          </p>

          {/* Table of contents */}
          <nav className="bg-surface border border-border rounded-2xl p-6 mb-12">
            <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Sommaire</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                  {section.title}
                </h2>
                <div className="prose-legal text-muted leading-relaxed space-y-4">
                  {section.content}
                </div>
              </section>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link
              href="/"
              className="text-primary hover:underline text-sm"
            >
              &larr; Retour \u00e0 l&apos;accueil
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
