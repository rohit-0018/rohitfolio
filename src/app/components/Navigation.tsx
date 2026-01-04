import { useState, useEffect } from "react";
import { NAME } from "../constants/personal";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 hover:from-purple-300 hover:to-cyan-300 transition-all"
          >
            <span className="tracking-tight">{NAME}</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("what-i-do")}
              className="text-neutral-400 hover:text-purple-400 transition-colors text-sm"
            >
              What I Do
            </button>
            <button
              onClick={() => scrollToSection("case-studies")}
              className="text-neutral-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Case Studies
            </button>
            <button
              onClick={() => scrollToSection("how-i-work")}
              className="text-neutral-400 hover:text-blue-400 transition-colors text-sm"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("book-demo")}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-5 py-2.5 rounded-md hover:from-purple-600 hover:to-cyan-600 transition-all text-sm shadow-lg shadow-purple-500/20"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}