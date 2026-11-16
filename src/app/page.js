import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import styles from "./page.module.css";

const stats = [
  { value: "6", suffix: "+", label: "Core Programs" },
  { value: "2018", label: "Year Established" },
  { value: "2", label: "Sulwe Scholars Yearly" },
  { value: "100", suffix: "+", label: "Lives Impacted" },
];

const programs = [
  {
    icon: "📖",
    title: "Education",
    desc: "Operating Brilliant Angels Community School with scholarships, meals, uniforms, and supplies for vulnerable children.",
    href: "/programs/education",
  },
  {
    icon: "🌱",
    title: "Environment",
    desc: "Waste management, tree planting, recycling, community cleanups, and climate awareness campaigns.",
    href: "/programs/environment",
  },
  {
    icon: "⚽",
    title: "Sports & Arts",
    desc: "Community football team, rugby team, and dance crew — developing talent and keeping youth engaged.",
    href: "/programs/sports-arts",
  },
  {
    icon: "💪",
    title: "Youth & Women",
    desc: "Tailoring, soap making, hairdressing, entrepreneurship training, and life skills education.",
    href: "/programs/youth-women",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    desc: "Medical camps, HIV awareness, mental health support, counseling, and clean water initiatives.",
    href: "/programs/health",
  },
  {
    icon: "🛡️",
    title: "Disaster Management",
    desc: "Disaster preparedness training, emergency response skills, and community safety programmes.",
    href: "/programs/disaster",
  },
  {
    icon: "👧",
    title: "Adopt a Child",
    desc: "When a family enrolls 3 children, we fully sponsor one — covering fees, meals, and books on their behalf.",
    href: "/programs/education#adopt",
  },
];

const testimonials = [
  {
    quote: "Brilliant Angels gave my children hope when we had nothing. They are educated, fed, and loved.",
    name: "Community Parent",
    role: "Githogoro Resident",
  },
  {
    quote: "The Sulwe Mentorship and Scholarship programme opened doors I never imagined for my daughter. She now dreams of becoming a doctor.",
    name: "Mother of Sulwe Scholar",
    role: "Githogoro Parent",
  },
  {
    quote: "Through the youth programme, I learned tailoring and now I can support my family independently.",
    name: "Programme Graduate",
    role: "Youth Empowerment Beneficiary",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Statistics */}
      <section className={styles.statsSection}>
        <div className="container">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <Image
                src="/schoolchildren-group-crowd.png"
                alt="Brilliant Angels students together"
                width={560}
                height={380}
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
              />
            </div>
            <div className={styles.aboutText}>
              <span className={styles.sectionLabel}>Who We Are</span>
              <h2>A Community Built on Hope and Action</h2>
              <p>
                Brilliant Angels Community-Based Organisation was formed in 2018
                and registered in 2024 in Githogoro Slums, Nairobi. We exist to
                create sustainable opportunities that transform lives through
                education, empowerment, and community development.
              </p>
              <p>
                The community faces poverty, unemployment, crime, drug abuse,
                gender-based violence, and environmental degradation. We are here
                to change that — one child, one family, one programme at a time.
              </p>
              <Link href="/about" className="btn btnPrimary">
                Read Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🎯</span>
              <h3>Our Mission</h3>
              <p>
                To empower and uplift the Githogoro community by providing
                education, fostering environmental stewardship, promoting arts
                and sports, empowering youths and women, managing crises, and
                enhancing health and wellness.
              </p>
            </div>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>🔭</span>
              <h3>Our Vision</h3>
              <p>
                Building a thriving, resilient community where every individual
                has the opportunity to reach their full potential, live in
                harmony with the environment, and enjoy a healthy and fulfilling
                life.
              </p>
            </div>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>⭐</span>
              <h3>Our Motto</h3>
              <p>
                Empowering Change, Inspiring Hope — the foundation of everything
                we do at Brilliant Angels CBO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <h2 className="sectionTitle">Our Core Programs</h2>
          <p className="sectionSubtitle">
            Six programmes addressing the most critical needs in Githogoro —
            from education to disaster response.
          </p>
          <div className={styles.programGrid}>
            {programs.map((p) => (
              <Link key={p.title} href={p.href} className={styles.programCard}>
                <span className={styles.programIcon}>{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className={styles.programLink}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sulwe Mentorship & Scholarship */}
      <section className={styles.sulweSection}>
        <div className="container">
          <div className={styles.sulweGrid}>
            <div className={styles.sulweContent}>
              <span className={styles.sulweBadge}>Sulwe Mentorship &amp; Scholarship</span>
              <h2>Recognising Excellence Across Githogoro</h2>
              <p>
                <strong>Sulwe</strong> — meaning <em>&ldquo;Stars&rdquo;</em> — is our flagship
                programme that identifies the top performing students from schools
                across Githogoro. Each year, we select a boy and a girl who
                demonstrate exceptional academic performance and character.
              </p>
              <p>
                These young stars are given the opportunity to visit and learn at
                Makini School and other international schools in Nairobi — gaining
                exposure to new environments, teaching methods, and possibilities.
                For some, this opens doors to full sponsorships.
              </p>
              <Link href="/about" className="btn btnPrimary">
                Learn About Sulwe
              </Link>
            </div>
            <div className={styles.sulweImage}>
              <Image
                src="/graduation-ceremony.jpg"
                alt="Brilliant Angels students at graduation ceremony"
                width={520}
                height={360}
                style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adopt a Child */}
      <section className={styles.adoptSection}>
        <div className="container">
          <div className={styles.adoptGrid}>
            <div className={styles.adoptContent}>
              <span className={styles.adoptBadge}>Adopt a Child Programme</span>
              <h2>One Family. Three Children. We Cover One.</h2>
              <p>
                We believe every child deserves to be in school. When a family
                brings <strong>three children</strong> to Brilliant Angels
                Community School, we <strong>fully sponsor one child</strong> —
                covering their school fees, meals, and books on behalf of the
                parents.
              </p>
              <p>
                This removes the financial barrier that keeps families from
                enrolling all their children. No child should be left behind
                because a sibling couldn&apos;t be afforded.
              </p>
              <Link href="/programs/education#adopt" className="btn btnPrimary">
                Learn More
              </Link>
            </div>
            <div className={styles.adoptVisual}>
              <div className={styles.adoptCard}>
                <div className={styles.adoptRow}>
                  <span className={styles.childIcon}>👧</span>
                  <span className={styles.childIcon}>👦</span>
                  <span className={styles.childIcon}>👧</span>
                </div>
                <div className={styles.adoptArrow}>↓</div>
                <div className={styles.adoptResult}>
                  <span className={styles.freeTag}>1 Child Sponsored</span>
                  <p>Fees, meals &amp; books covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <h2 className="sectionTitle">Success Stories</h2>
          <p className="sectionSubtitle">
            Real voices from the community we serve.
          </p>
          <div className={styles.testimonialGrid}>
            {testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.author}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <h2 className="sectionTitle">Frequently Asked Questions</h2>
          <p className="sectionSubtitle">
            Quick answers to common questions about Brilliant Angels CBO.
          </p>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>What does Brilliant Angels do?</h4>
              <p>
                We run 6 core programmes: Education, Environment, Sports &amp; Arts,
                Youth &amp; Women Empowerment, Health &amp; Wellness, and Disaster
                Management — all focused on transforming lives in Githogoro.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>How can I donate?</h4>
              <p>
                Send via M-Pesa to +254 796 595 995, or email
                brilliantangels2024@gmail.com for bank transfer details.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>What is the Sulwe Mentorship and Scholarship programme?</h4>
              <p>
                Sulwe means &ldquo;Stars&rdquo;. We pick the top boy and girl from
                Githogoro schools and take them to Makini School for exposure and
                potential sponsorship.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>What is the Adopt a Child programme?</h4>
              <p>
                When a family brings 3 children to our school, we fully sponsor
                one — covering their fees, meals, and books on behalf of the
                parents.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>How can I volunteer?</h4>
              <p>
                Visit our Volunteer page or WhatsApp us at +254 796 595 995.
                We need teachers, mentors, coaches, and environmental volunteers.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>When was the organisation formed?</h4>
              <p>
                Brilliant Angels CBO was formed in 2018 and officially registered
                in 2024.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h4>Where is Brilliant Angels located?</h4>
              <p>
                Githogoro Slums, Runda Estate, Karura Ward, Westlands, Nairobi
                County, Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaGrid}>
            <div className={styles.ctaVolunteer}>
              <h2>Make a Difference — Volunteer</h2>
              <p>
                Join our team of dedicated volunteers and help transform lives
                in Githogoro. Whether you teach, mentor, or support — your time
                matters.
              </p>
              <Link href="/volunteer" className="btn btnPrimary">
                Become a Volunteer
              </Link>
            </div>
            <div className={styles.ctaDonate}>
              <h2>Support Our Work</h2>
              <p>
                Every donation helps us keep children in school, provide meals,
                and open doors through programmes like Sulwe Mentorship and Scholarship.
              </p>
              <Link href="/donate" className="btn btnAccent">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
