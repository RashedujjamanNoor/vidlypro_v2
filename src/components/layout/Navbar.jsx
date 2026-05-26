import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Container from "../common/Container";
import MobileMenu from "./MobileMenu";
import MagneticButton from "../common/MagneticButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Services",
      path: "#services",
    },
    {
      name: "Portfolio",
      path: "#portfolio",
    },
    {
      name: "Results",
      path: "#results",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide text-white">
            VIDLYPRO
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-lime-400 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticButton>
              <a
                href="#contact"
                className="bg-lime-400 text-black px-5 py-3 rounded-full text-sm font-semibold hover:scale-105 transition"
              >
                Book A Call
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Menu */}
          <MobileMenu navLinks={navLinks} />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
