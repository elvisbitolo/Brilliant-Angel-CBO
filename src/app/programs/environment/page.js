import styles from "./page.module.css";

const activities = [
  {
    icon: "♻️",
    title: "Recycling & Reusing",
    desc: "Promoting recycling practices and creative reuse of materials to minimise waste sent to landfills.",
  },
  {
    icon: "🗑️",
    title: "Waste Management",
    desc: "Establishing proper waste collection and disposal systems within the community to keep our environment clean.",
  },
  {
    icon: "📉",
    title: "Reducing Waste",
    desc: "Educating households and businesses on ways to reduce their daily waste footprint through mindful consumption.",
  },
  {
    icon: "🧹",
    title: "Community Cleanups",
    desc: "Organising regular community clean-up drives that bring residents together to reclaim and beautify shared spaces.",
  },
  {
    icon: "🌳",
    title: "Tree Planting",
    desc: "Leading tree planting campaigns to increase green cover, improve air quality, and combat climate change locally.",
  },
  {
    icon: "🌍",
    title: "Climate Awareness",
    desc: "Running awareness campaigns on climate change, sustainability, and the role each individual can play in protecting the planet.",
  },
];

export default function Environment() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Environment Programme</span>
          <h1>Protecting Our Planet, Locally</h1>
          <p>
            Through waste management, recycling, community cleanups, tree
            planting, and climate awareness campaigns, we are building a
            cleaner, greener future for Githogoro and beyond.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            {activities.map((item) => (
              <div key={item.title} className={styles.card}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className={styles.textContent}>
            <h2>Building a Sustainable Community</h2>
            <p>
              Our environment programme tackles the pressing waste and
              pollution challenges facing Githogoro. By empowering residents
              with knowledge and practical tools, we are transforming how the
              community interacts with its surroundings.
            </p>
            <p>
              From the youngest schoolchildren learning to sort recyclables to
              neighbourhood groups organising clean-up drives, environmental
              stewardship is becoming a way of life. Our tree planting
              initiatives are restoring green spaces and providing shade,
              fruit, and habitat for local wildlife.
            </p>
            <p>
              We believe that environmental sustainability and community
              well-being go hand in hand. A clean environment means better
              health, greater pride, and a more resilient community for
              generations to come.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
