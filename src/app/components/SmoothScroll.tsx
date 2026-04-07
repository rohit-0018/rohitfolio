import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Mounts Lenis once at app root for buttery-smooth scrolling.
 * Also patches window.scrollTo + Element.scrollIntoView so existing
 * smooth-scroll calls (Navigation, Hero CTAs) flow through Lenis.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
      // Allow native touch on mobile but still smooth via wheel/inertia
      syncTouch: false,
    });

    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Patch scrollIntoView so section navigation still works
    const origScrollIntoView = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (arg?: boolean | ScrollIntoViewOptions) {
      if (arg && typeof arg === "object" && arg.behavior === "smooth") {
        const rect = (this as HTMLElement).getBoundingClientRect();
        const offset = window.scrollY + rect.top - 80; // account for fixed nav
        lenis.scrollTo(offset, { duration: 1.2 });
        return;
      }
      return origScrollIntoView.call(this, arg as any);
    };

    // Patch window.scrollTo for "back to top" and similar
    const origScrollTo = window.scrollTo.bind(window);
    (window as any).scrollTo = (...args: any[]) => {
      const opts = args[0];
      if (typeof opts === "object" && opts && opts.behavior === "smooth") {
        lenis.scrollTo(opts.top ?? 0, { duration: 1.2 });
        return;
      }
      return origScrollTo(...(args as [any, any?]));
    };

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      Element.prototype.scrollIntoView = origScrollIntoView;
      (window as any).scrollTo = origScrollTo;
    };
  }, []);

  return null;
}
