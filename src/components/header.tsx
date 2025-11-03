"use client";

import Link from "next/link";
import { Container } from "./container";
import { Logo } from "./icon/logo";
import { navLinks } from "@/utils/constant";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isNavbarOpen = () => {
    setIsOpen(!isOpen);
  };

  const parentVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <header className="fixed top-0 backdrop-blur-md z-50 w-full border-b border-transparent-border bg-background/60">
      <Container className="h-navigation-height flex items-center justify-between w-full">
        <div className="flex space-x-2 items-center justify-between lg:justify-start w-full">
          <Logo />

          {/* desktop */}
          <nav className="lg:flex space-x-6 pl-8 hidden">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm hover:text-green transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* mobile */}
          <div className="transition-transform lg:hidden">
            <div className="flex items-center gap-x-2">
              {isOpen ? (
                <X className="absolute z-40 top-5 right-4" onClick={isNavbarOpen} />
              ) : (
                <Menu onClick={isNavbarOpen} />
              )}
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="fixed top-0 right-0 h-screen w-full bg-background/95 backdrop-blur-2xl z-30 overflow-y-auto no-scrollbar"
                >
                  <motion.div
                    className="py-16"
                    variants={parentVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {navLinks.map((link) => (
                      <motion.div
                        variants={childVariants}
                        className="text-left px-5"
                        key={link.title}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-left py-3 text-lg font-medium hover:text-green transition-colors"
                        >
                          {link.title}
                        </Link>
                      </motion.div>
                    ))}

                    <div className="flex flex-col px-5 space-y-2">
                      <Button size="small" asChild>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                          Nous contacter
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="lg:flex items-center gap-x-3 hidden w-full lg:justify-end">
          <Button variant="secondary" size="small" asChild>
            <Link href="/services">Découvrir nos services</Link>
          </Button>
          <Button size="small" asChild>
            <Link href="/contact">Commencer maintenant</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
};
