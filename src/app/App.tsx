import { HashRouter, Routes, Route } from "react-router-dom";

import { ThemeProvider } from "./theme/ThemeProvider";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { SmoothScroll } from "./components/SmoothScroll";
import { Hero } from "./components/Hero";
import { WhatIDo } from "./components/WhatIDo";
import { PersonalInfo } from "./components/PersonalInfo";
import { AILab } from "./components/AILab";
import { FreeDemo } from "./components/FreeDemo";
import { CaseStudies } from "./components/CaseStudies";
import { PlayZone } from "./components/PlayZone";
import { HowIWork } from "./components/HowIWork";
import { BookDemo } from "./components/BookDemo";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { CaseStudyDetail } from "./components/CaseStudyDetails";

export default function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <SmoothScroll />
        <div className="bg-[#050505] text-neutral-100 min-h-screen relative overflow-x-hidden">
          <AnimatedBackground />

          <div className="relative z-10">
            <Navigation />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Hero />
                      <WhatIDo />
                      <PersonalInfo />
                      <AILab />
                      <CaseStudies />
                      <PlayZone />
                      <HowIWork />
                      <FreeDemo />
                      <BookDemo />
                    </>
                  }
                />
                <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}
