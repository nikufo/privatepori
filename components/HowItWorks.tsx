"use client";

import { motion } from "framer-motion";
import { BadgeCheck, CalendarDays, ClipboardList, FileText, Search, Send, UserRound, Wallet } from "lucide-react";
import { useState } from "react";
import { GUARDIAN_STEPS, TEACHER_STEPS } from "@/lib/constants";

const iconMap = { FileText, Search, CalendarDays, BadgeCheck, UserRound, ClipboardList, Send, Wallet };

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<"guardian" | "teacher">("guardian");
  const steps = activeTab === "guardian" ? GUARDIAN_STEPS : TEACHER_STEPS;

  return (
    <section id="how-it-works" className="section-shell">
      <div className="container-width">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">How TeachLink Works</p>
          <h2 className="section-heading mt-4">কিভাবে কাজ করে?</h2>
          <p className="section-copy mx-auto">
            অভিভাবক হোন বা শিক্ষক, TeachLink আপনার জন্য discovery থেকে hiring পর্যন্ত journey-টাকে সহজ করে।
          </p>
        </div>

        <div className="mx-auto mt-10 flex w-full max-w-md rounded-full border border-border bg-surface p-1 shadow-sm">
          <button type="button" onClick={() => setActiveTab("guardian")} className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold transition ${activeTab === "guardian" ? "bg-primary text-white shadow-sm" : "text-text-muted hover:text-primary"}`}>
            আমি অভিভাবক
          </button>
          <button type="button" onClick={() => setActiveTab("teacher")} className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold transition ${activeTab === "teacher" ? "bg-primary text-white shadow-sm" : "text-text-muted hover:text-primary"}`}>
            আমি শিক্ষক
          </button>
        </div>

        <motion.div key={activeTab} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="mt-10 grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];

            return (
              <motion.div key={step.number} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="card-hover relative rounded-[1.75rem] border border-border bg-surface p-6 shadow-card">
                <span className="absolute right-5 top-5 font-heading text-xs font-bold tracking-[0.25em] text-primary/40">{step.number}</span>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-muted">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
