import { HashRouter, Routes, Route } from "react-router-dom";

import { Hero } from "./components/Hero";
import { WhatIDo } from "./components/WhatIDo";
import { PersonalInfo } from "./components/PersonalInfo";
import { FreeDemo } from "./components/FreeDemo";
import { CaseStudies } from "./components/CaseStudies";
import { HowIWork } from "./components/HowIWork";
import { BookDemo } from "./components/BookDemo";
import { Footer } from "./components/Footer";
import { Navigation } from "./components/Navigation";
import { CaseStudyDetail } from "./components/CaseStudyDetails";


export default function App() {
  return (
    <HashRouter>
      <div className="bg-neutral-950 text-neutral-100 min-h-screen relative overflow-hidden">
        {/* Ambient background gradients */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <Navigation />

          {/* ROUTED CONTENT ONLY */}
          <main>
            <Routes>
              {/* HOME PAGE */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <WhatIDo />
                    <PersonalInfo />
                    <FreeDemo />
                    <CaseStudies />
                    <HowIWork />
                    <BookDemo />
                  </>
                }
              />

              {/* CASE STUDY DETAIL */}
              <Route
                path="/case-study/:slug"
                element={<CaseStudyDetail />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}
