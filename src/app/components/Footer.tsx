import { Github, Linkedin, Mail } from "lucide-react";
import { EMAIL, GITHUB, LINKEDIN, LOCATION, NAME } from "../constants/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-800/50 py-12 px-6 lg:px-8 bg-neutral-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
              {NAME}
            </h3>
            <p className="text-neutral-300 mb-2">Working with founders globally</p>
            <p className="text-neutral-500">Paid engagements only • Based in {LOCATION}</p>
          </div>

          <div className="flex items-start md:justify-end gap-6">
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-purple-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="size-5" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="text-neutral-500 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800/50">
          <p className="text-neutral-600 text-sm">
            © {currentYear} {NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}