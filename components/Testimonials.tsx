import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell">
      <div className="container-width">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Testimonials</p>
          <h2 className="section-heading mt-4">অভিভাবকরা কী বলছেন?</h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <article key={item.author} className="card-hover rounded-[2rem] border border-border bg-surface p-6 shadow-card">
              <div className="mb-4 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-base leading-8 text-text-primary">&quot;{item.quote}&quot;</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-heading text-lg font-bold text-text-primary">{item.author}</p>
                <p className="mt-1 text-sm text-text-muted">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
