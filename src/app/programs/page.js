import Link from "next/link";
import styles from "./page.module.css";

const programs = [
  {
    icon: "📖",
    title: "Education",
    desc: "Operating Brilliant Angels Community School — providing scholarships, school uniforms, meals, educational supplies, and support for vulnerable children.",
    href: "/programs/education",
    color: "#0B6E4F",
  },
  {
    icon: "🌱",
    title: "Environment",
    desc: "Waste management, recycling, reusing, reducing waste, community cleanups, tree planting, and climate awareness campaigns.",
    href: "/programs/environment",
    color: "#2A9D8F",
  },
  {
    icon: "⚽",
    title: "Sports & Arts",
    desc: "Community football team, rugby team, and dance crew — developing talent while keeping youth away from drugs and crime.",
    href: "/programs/sports-arts",
    color: "#F4A261",
  },
  {
    icon: "💪",
    title: "Youth & Women Empowerment",
    desc: "Training women in tailoring, soap making, hairdressing, and entrepreneurship. Educating youth about drugs, leadership, and life skills.",
    href: "/programs/youth-women",
    color: "#E76F51",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    desc: "Medical camps, HIV awareness, mental health support, counseling, reproductive health, sanitation projects, and clean water initiatives.",
    href: "/programs/health",
    color: "#264653",
  },
  {
    icon: "🛡️",
    title: "Disaster & Crisis Management",
    desc: "Disaster preparedness training, emergency response skills, and community safety programmes.",
    href: "/programs/disaster",
    color: "#9B2226",
  },
  {
    icon: "👧",
    title: "Adopt a Child",
    desc: "When a family enrolls 3 children, we fully sponsor one — covering fees, meals, and books on their behalf.",
    href: "/programs/education#adopt",
    color: "#0B6E4F",
  },
];

export default function Programs() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Our Programmes</span>
          <h1>Six Programmes. One Mission.</h1>
          <p>
            Addressing the most critical needs in Githogoro — from education
            to disaster response — through targeted, community-driven programmes.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.programGrid}>
            {programs.map((p) => (
              <Link key={p.title} href={p.href} className={styles.programCard}>
                <span className={styles.icon} style={{ background: `${p.color}15` }}>
                  {p.icon}
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className={styles.link}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
