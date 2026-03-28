import Link from "next/link";
import { SUBJECTS } from "@/lib/constants";

export function SubjectCategories() {
  return (
    <section id="subjects" className="section-shell pt-6">
      <div className="container-width">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Categories</p>
          <h2 className="section-heading mt-4">যেকোনো বিষয়ে শিক্ষক খুঁজুন</h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {SUBJECTS.map((subject) => {
            const Icon = subject.icon;
            return (
              <Link key={subject.name} href={`/search?subject=${encodeURIComponent(subject.name)}`} className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-text-primary shadow-sm transition hover:border-primary hover:bg-primary hover:text-white">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-white/15 group-hover:text-white">
                  <Icon className="h-4 w-4" />
                </span>
                {subject.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
