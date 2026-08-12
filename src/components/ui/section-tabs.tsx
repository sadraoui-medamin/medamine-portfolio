import { useEffect, useState } from 'react';

export type SectionTab = { id: string; label: string };

interface SectionTabsProps {
  sections: SectionTab[];
}

const SectionTabs = ({ sections }: SectionTabsProps) => {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const goTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav aria-label="Section navigation" className="lg:sticky lg:top-24">
      {/* Mobile: horizontal scroll */}
      <div className="lg:hidden -mx-4 px-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-2 w-max pb-1">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => goTo(s.id)}
              className={`whitespace-nowrap px-3 py-2 rounded-lg text-xs font-medium border transition-colors ${
                active === s.id
                  ? 'bg-primary/15 border-primary/50 text-primary'
                  : 'bg-card/40 border-border/50 text-muted-foreground'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: vertical tabs */}
      <ul className="hidden lg:flex flex-col gap-1 border-l border-border/60">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onClick={() => goTo(s.id)}
              className={`w-full text-left pl-4 pr-3 py-2 text-sm rounded-r-lg border-l-2 -ml-px transition-all ${
                active === s.id
                  ? 'border-primary text-primary bg-primary/10 font-semibold'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-card/40'
              }`}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionTabs;
