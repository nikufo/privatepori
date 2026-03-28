import Link from "next/link";
import { BriefcaseBusiness, Search } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta" className="section-shell pt-8">
      <div className="container-width grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-primary/10 p-8 shadow-card">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="mt-6 font-heading text-3xl font-bold text-text-primary">সেরা শিক্ষক খুঁজুন</h3>
          <p className="mt-3 max-w-md text-base leading-7 text-text-muted">আপনার সন্তানের জন্য সঠিক শিক্ষক এখনই খুঁজুন</p>
          <Link href="/search" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark">
            শিক্ষক খুঁজুন
          </Link>
        </div>

        <div className="rounded-[2rem] bg-accent p-8 shadow-card">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-text-primary text-white">
            <BriefcaseBusiness className="h-6 w-6" />
          </div>
          <h3 className="mt-6 font-heading text-3xl font-bold text-text-primary">শিক্ষক হিসেবে যোগ দিন</h3>
          <p className="mt-3 max-w-md text-base leading-7 text-text-primary/80">আপনার এলাকায় টিউশন পান। ফ্রিতে প্রোফাইল বানান।</p>
          <Link href="/become-a-tutor" className="mt-6 inline-flex rounded-full bg-text-primary px-6 py-3 font-semibold text-white transition hover:bg-slate-800">
            এখনই রেজিস্ট্রেশন করুন
          </Link>
        </div>
      </div>
    </section>
  );
}
