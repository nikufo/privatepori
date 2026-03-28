"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, MapPin, Star, Users } from "lucide-react";
import { FEATURED_TEACHERS } from "@/lib/constants";

export function FeaturedTeachers() {
  return (
    <section id="featured-teachers" className="section-shell">
      <div className="container-width">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Verified Teachers</p>
            <h2 className="section-heading mt-4">আমাদের যাচাইকৃত শিক্ষকরা</h2>
            <p className="section-copy">হাজারো অভিজ্ঞ শিক্ষক আপনার সন্তানের জন্য প্রস্তুত।</p>
          </div>
          <Link href="/teachers" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark">
            সব শিক্ষক দেখুন →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {FEATURED_TEACHERS.map((teacher, index) => (
            <motion.article
              key={teacher.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="card-hover rounded-[2rem] border border-border bg-surface p-6 shadow-card hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border bg-background">
                  <Image src={teacher.image} alt={`${teacher.name} profile photo`} fill sizes="80px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-xl font-bold text-text-primary">{teacher.name}</h3>
                    {teacher.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teacher.subjects.map((subject) => (
                      <span key={subject} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-text-muted">
                <p className="font-medium text-text-primary">{teacher.classes}</p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  {teacher.location}
                </p>
                <p className="flex items-center gap-2">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  {teacher.rating.toFixed(1)} ({teacher.reviews} reviews)
                </p>
                <p className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  {teacher.hireCount} জন নিয়েছেন
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-background px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">মাসিক ফি</p>
                  <p className="font-heading text-2xl font-bold text-text-primary">৳ {teacher.fee.toLocaleString("en-US")}/মাস</p>
                </div>
                <Link href={`/teachers/${teacher.id}`} className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark">
                  প্রোফাইল দেখুন
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
