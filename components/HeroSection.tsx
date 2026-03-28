"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { HeartHandshake, MapPinned, Search, Star, Users } from "lucide-react";
import { HERO_STATS, SEARCH_LEVELS, SEARCH_SUBJECTS } from "@/lib/constants";

const iconMap = { Users, HeartHandshake, MapPinned };

export function HeroSection() {
  const router = useRouter();
  const [subject, setSubject] = useState<string>(SEARCH_SUBJECTS[0]);
  const [level, setLevel] = useState<string>(SEARCH_LEVELS[1]);
  const [location, setLocation] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams({ subject, class: level, location });
    router.push(`/search?${params.toString()}`);
  };

  return (
    <section id="home" className="relative overflow-hidden pb-10 pt-10 sm:pb-16 sm:pt-14">
      <div className="absolute inset-0 -z-20 bg-background" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:28px_28px] opacity-60" />
      <div className="absolute left-[-8rem] top-10 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-[-4rem] -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-width grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="max-w-3xl">
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <span>🇧🇩</span>
            <span>Bangladesh&apos;s #1 Teacher Marketplace</span>
          </motion.div>

          <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-6 font-heading text-4xl font-extrabold leading-tight text-text-primary sm:text-5xl lg:text-6xl">
            সঠিক শিক্ষক খুঁজুন,
            <br />
            সঠিক সময়ে।
          </motion.h1>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-4 text-lg font-medium text-primary-dark">
            Find verified tutors near you — instantly.
          </motion.p>

          <motion.p variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-5 max-w-2xl text-base leading-8 text-text-muted sm:text-lg">
            বাংলাদেশের সেরা শিক্ষকদের সাথে সংযুক্ত হন। যেকোনো বিষয়, যেকোনো ক্লাস, আপনার কাছেই।
          </motion.p>

          <motion.form variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} onSubmit={handleSubmit} className="mt-8 rounded-[2rem] border border-border bg-surface p-3 shadow-soft">
            <div className="grid gap-3 lg:grid-cols-[1fr_1fr_1.1fr_auto]">
              <label className="rounded-2xl border border-border bg-background px-4 py-3">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Subject</span>
                <select value={subject} onChange={(event) => setSubject(event.target.value)} className="w-full border-none bg-transparent text-sm font-medium text-text-primary outline-none">
                  {SEARCH_SUBJECTS.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>

              <label className="rounded-2xl border border-border bg-background px-4 py-3">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Class / Level</span>
                <select value={level} onChange={(event) => setLevel(event.target.value)} className="w-full border-none bg-transparent text-sm font-medium text-text-primary outline-none">
                  {SEARCH_LEVELS.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>

              <label className="rounded-2xl border border-border bg-background px-4 py-3">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Area / Location</span>
                <input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Dinajpur, Rangpur, Bogura..." className="w-full border-none bg-transparent text-sm font-medium text-text-primary outline-none placeholder:text-text-muted" />
              </label>

              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-6 py-4 font-semibold text-text-primary transition hover:brightness-95 active:scale-[0.98]">
                <Search className="h-5 w-5" />
                শিক্ষক খুঁজুন
              </button>
            </div>
          </motion.form>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-7 grid gap-4 sm:grid-cols-3">
            {HERO_STATS.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <div key={item.label} className="rounded-3xl border border-border bg-surface/80 p-4 shadow-sm backdrop-blur-sm">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-text-primary">{item.value}</p>
                  <p className="mt-1 text-sm text-text-muted">{item.label}</p>
                </div>
              );
            })}
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#featured-teachers" className="rounded-full bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark">
              Verified Teachers দেখুন
            </Link>
            <Link href="#how-it-works" className="rounded-full border border-border px-6 py-3 font-semibold text-text-primary transition hover:border-primary hover:text-primary">
              How it Works
            </Link>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative mx-auto w-full max-w-xl">
          <div className="absolute -left-5 top-10 h-24 w-24 rounded-full bg-accent/15 blur-2xl" />
          <div className="absolute right-6 top-0 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative rounded-[2rem] border border-border bg-surface p-6 shadow-card floating">
            <Image src="/images/hero-teacher.svg" alt="Illustration of a verified TeachLink teacher profile" width={620} height={560} className="h-auto w-full" priority />
          </div>
          <div className="floating-delayed absolute -left-3 bottom-10 rounded-3xl border border-border bg-surface px-4 py-3 shadow-card">
            <p className="text-sm font-semibold text-text-primary">⭐ 4.9</p>
            <p className="mt-1 text-sm text-text-muted">&quot;অনেক ভালো পড়ান&quot;</p>
          </div>
          <div className="floating absolute -right-2 top-8 rounded-3xl border border-border bg-surface px-4 py-3 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Instant Match</p>
            <div className="mt-2 flex items-center gap-2 text-sm text-text-muted">
              <Star className="h-4 w-4 fill-accent text-accent" />
              Verified, reviewed, nearby tutors
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
