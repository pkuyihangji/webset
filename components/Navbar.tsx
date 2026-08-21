"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Strategy", href: "#strategy" },
  { label: "Performance", href: "#performance" },
  { label: "Edge", href: "#edge" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const updateScrollState = () => {
      setScrolled(window.scrollY > 20);
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(window.scrollY / available, 1) : 0);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateScrollState);
    };
    updateScrollState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const observer = new ResizeObserver(onScroll);
    observer.observe(document.documentElement);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? "border-black/10 bg-[#f3f5f2]/95 backdrop-blur" : "border-black/10 bg-[#f3f5f2]"}`}>
      <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#overview" className="flex items-center gap-3 text-black" aria-label="Positive Research home">
          <span className="mono grid h-8 w-8 place-items-center bg-black text-[10px] font-bold text-[#d7ff43]">PR</span>
          <span className="text-xs font-bold uppercase">Positive Research</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="mono text-[10px] font-bold uppercase text-[#59615d] transition-colors hover:text-black">
              {link.label}
            </a>
          ))}
          <a href="#growth" className="bg-black px-4 py-2.5 text-[10px] font-bold uppercase text-white transition-colors hover:bg-[#315efb]">
            Growth
          </a>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-black/20 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className="h-px w-full bg-black" />
            <span className="h-px w-full bg-black" />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-black/10 bg-[#f3f5f2] px-5 pb-6 md:hidden">
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="mono flex items-center justify-between border-b border-black/10 py-4 text-xs font-bold uppercase text-black">
              <span>{link.label}</span><span className="text-[#7a827e]">0{index + 1}</span>
            </a>
          ))}
          <a href="#growth" onClick={() => setOpen(false)} className="mt-5 block bg-black px-4 py-3 text-center text-xs font-bold uppercase text-white">
            Growth
          </a>
        </div>
      )}
      <div className="absolute bottom-[-1px] left-0 h-0.5 bg-[#315efb]" style={{ width: `${progress * 100}%` }} aria-hidden="true" />
    </nav>
  );
}
