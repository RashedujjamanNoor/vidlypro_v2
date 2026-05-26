import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Results from "../components/sections/Results";
import Contact from "../components/sections/Contact";

import Loader from "../components/common/Loader";
import CustomCursor from "../components/common/CustomCursor";

import useLenis from "../hooks/useLenis";
import SEO from "../components/common/SEO";

const Home = () => {
  useLenis();

  // LOADER STATE
  const [loading, setLoading] = useState(true);

  // LOADER TIMER
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      <Loader loading={loading} />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Main Website */}
      {!loading && (
        <>
          <Navbar />

          <main>
            <Hero />

            <Services />

            <Portfolio />

            <Results />

            <Contact />
            <SEO
              title="VIDLYPRO — Video Editing Agency For Fitness Coaches"
              description="Premium short-form content agency helping fitness coaches grow with viral videos."
            />
          </main>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
