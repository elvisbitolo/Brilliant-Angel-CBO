import styles from "./page.module.css";

const news = [
  {
    date: "2024",
    title: "Brilliant Angels CBO Officially Registered",
    excerpt:
      "After years of community service, Brilliant Angels CBO was officially registered in 2024, marking a new chapter in our mission to serve Githogoro.",
    category: "Milestone",
  },
  {
    date: "2024",
    title: "Sulwe Mentorship and Scholarship Programme Launches",
    excerpt:
      "Our flagship Sulwe Mentorship and Scholarship programme was launched to identify and support top-performing students from Githogoro schools with exposure visits to Makini School.",
    category: "Programme",
  },
  {
    date: "2023",
    title: "Community Tree Planting Drive",
    excerpt:
      "Brilliant Angels organised a major tree planting exercise in Githogoro as part of our environmental stewardship programme, planting over 200 trees.",
    category: "Environment",
  },
  {
    date: "2023",
    title: "Medical Camp for Githogoro Residents",
    excerpt:
      "A free medical camp was held in the community providing health screenings, HIV testing, and reproductive health education to hundreds of residents.",
    category: "Health",
  },
  {
    date: "2022",
    title: "Youth Empowerment Training Graduates",
    excerpt:
      "Over 30 young women completed tailoring, soap making, and entrepreneurship training through our youth and women empowerment programme.",
    category: "Empowerment",
  },
  {
    date: "2018",
    title: "Brilliant Angels Community School Opens",
    excerpt:
      "Brilliant Angels Community School was established to provide quality education to vulnerable children in Githogoro Slums.",
    category: "Education",
  },
];

export default function News() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>News &amp; Updates</span>
          <h1>Latest from Brilliant Angels</h1>
          <p>
            Stay informed about our programmes, milestones, and the impact we
            are making in Githogoro.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            {news.map((item, i) => (
              <article key={i} className={styles.card}>
                <div className={styles.meta}>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.date}>{item.date}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
