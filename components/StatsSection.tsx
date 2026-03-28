"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Star, WalletCards } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const display = useTransform(springValue, (latest) => Math.round(latest));
  const [renderValue, setRenderValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = display.on("change", (latest) => {
      setRenderValue(latest);
    });

    return () => unsubscribe();
  }, [display]);

  return (
    <motion.span ref={ref}>
      {renderValue}
      {suffix}
    </motion.span>
  );
}

const trustItems = [
  { title: "Verified Teachers Only", icon: ShieldCheck },
  { title: "Real Reviews from Real Parents", icon: Star },
  { title: "Secure Payment via bKash & Nagad", icon: WalletCards }
];

export function StatsSection() {
  return (
    <section id="stats" className="section-shell bg-primary">
      <div className="container-width">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.4, delay: index * 0.08 }} className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 text-white backdrop-blur-sm">
              <p className="font-heading text-4xl font-extrabold">
                <CountUp value={stat.numericValue} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-4 rounded-[1.5rem] border border-white/15 bg-white/10 px-5 py-4 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-medium">{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
