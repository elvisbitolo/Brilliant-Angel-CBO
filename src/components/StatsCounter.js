"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./StatsCounter.module.css";

export default function StatsCounter({ stats }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.grid}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.card}>
          <span className={styles.number}>
            {visible ? stat.value : "0"}
            {stat.suffix || ""}
          </span>
          <span className={styles.label}>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
