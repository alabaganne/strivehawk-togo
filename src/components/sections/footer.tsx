import { footerLinks } from "@/utils/constant";
import { Container } from "../container";
import { Logo } from "../icon/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-b border-transparent-border bg-black">
      <Container className="flex flex-col lg:flex-row justify-between gap-12 py-20">
        <div className="max-w-sm space-y-4">
          <Logo />
          <p className="text-secondary-text text-sm leading-relaxed">
            Strivehawk Togo conçoit des solutions IT, cloud et cybersécurité pour
            accompagner les entreprises ouest-africaines dans une croissance
            durable et humaine.
          </p>
        </div>

        <div className="flex flex-wrap gap-12">
          {footerLinks.map((column) => (
            <div key={column.title} className="min-w-[12rem] space-y-3">
              <h3 className="text-md">{column.title}</h3>

              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item.label} className="text-sm text-secondary-text">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="hover:text-offWhite transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <Container className="py-10 border-t border-transparent-border">
        <p className="text-secondary-text text-sm">
          © {new Date().getFullYear()} Strivehawk Togo. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
};
