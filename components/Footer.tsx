import Link from "next/link";
import { Facebook, GraduationCap, Mail, MapPin, Phone, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="mt-10 border-t border-border bg-surface">
      <div className="container-width grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-xl font-extrabold text-primary">TeachLink</p>
              <p className="text-sm text-text-muted">সঠিক শিক্ষক, সঠিক সময়</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-text-muted">
            Bangladesh-এর families আর trusted tutors-দের এক platform-এ connected রাখে TeachLink।
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[Facebook, Youtube].map((Icon, index) => (
              <Link key={index} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </Link>
            ))}
            <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition hover:border-primary hover:text-primary">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06.02C5.5.02.16 5.36.16 11.92c0 2.1.55 4.14 1.6 5.95L0 24l6.3-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.45Zm-8.46 18.32h-.01a9.92 9.92 0 0 1-5.05-1.39l-.36-.21-3.74.98 1-3.65-.24-.38a9.88 9.88 0 0 1-1.52-5.23c0-5.48 4.45-9.93 9.93-9.93 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.91 7.03c0 5.48-4.46 9.93-9.92 9.93Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold text-text-primary">For Guardians</h3>
          <div className="mt-5 grid gap-3 text-sm text-text-muted">
            <Link href="/search" className="transition hover:text-primary">শিক্ষক খুঁজুন</Link>
            <Link href="/post-tuition" className="transition hover:text-primary">টিউশন পোস্ট করুন</Link>
            <Link href="#how-it-works" className="transition hover:text-primary">কিভাবে কাজ করে</Link>
            <Link href="/payments" className="transition hover:text-primary">পেমেন্ট পদ্ধতি</Link>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold text-text-primary">For Teachers</h3>
          <div className="mt-5 grid gap-3 text-sm text-text-muted">
            <Link href="/become-a-tutor" className="transition hover:text-primary">শিক্ষক হিসেবে যোগ দিন</Link>
            <Link href="/jobs" className="transition hover:text-primary">টিউশন জব বোর্ড</Link>
            <Link href="/premium" className="transition hover:text-primary">প্রিমিয়াম প্ল্যান</Link>
            <Link href="/dashboard" className="transition hover:text-primary">Teacher Dashboard</Link>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg font-bold text-text-primary">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <span>09649-XXXXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <span>support@teachlink.com.bd</span>
            </div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-primary" aria-hidden="true">
                <path d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.26 10.26 0 0 0 12 1.75Zm.75 5.5v5.19l3.22 1.92-.75 1.24L10.75 13V7.25Z" />
              </svg>
              <span>সকাল ৯টা — রাত ৯টা</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Dinajpur, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <div className="container-width flex flex-col gap-3 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 TeachLink. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="transition hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="transition hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
