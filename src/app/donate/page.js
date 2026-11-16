import Link from "next/link";
import styles from "./page.module.css";

export default function Donate() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Support Our Work</span>
          <h1>Donate to Brilliant Angels</h1>
          <p>
            Every contribution helps us keep children in school, provide meals,
            and open doors through programmes like Sulwe Mentorship and Scholarship.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.donateInfo}>
              <h2>Why Donate?</h2>
              <p>
                Your donation directly supports vulnerable children in Githogoro
                Slums. It helps us provide education, food, uniforms, and
                life-changing opportunities through our six core programmes.
              </p>

              <div className={styles.impactList}>
                <div className={styles.impactItem}>
                  <span>📖</span>
                  <div>
                    <strong>School Supplies</strong>
                    <p>Notebooks, pens, uniforms, and learning materials for students.</p>
                  </div>
                </div>
                <div className={styles.impactItem}>
                  <span>🍽️</span>
                  <div>
                    <strong>Meals</strong>
                    <p>Nutritious meals for children who would otherwise go hungry.</p>
                  </div>
                </div>
                <div className={styles.impactItem}>
                  <span>⭐</span>
                  <div>
                    <strong>Sulwe Mentorship &amp; Scholarship</strong>
                    <p>Sponsoring top students for exposure visits and scholarships.</p>
                  </div>
                </div>
                <div className={styles.impactItem}>
                  <span>👧</span>
                  <div>
                    <strong>Adopt a Child</strong>
                    <p>Fully sponsoring one child when a family enrolls three — covering fees, meals, and books.</p>
                  </div>
                </div>
                <div className={styles.impactItem}>
                  <span>🌱</span>
                  <div>
                    <strong>Environment</strong>
                    <p>Tree planting drives, cleanups, and climate awareness in the community.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.donateMethods}>
              <h2>How to Donate</h2>

              <div className={styles.methodCard}>
                <div className={styles.methodIcon}>📱</div>
                <h3>M-Pesa</h3>
                <ol className={styles.steps}>
                  <li>Go to M-Pesa on your phone</li>
                  <li>Select <strong>Lipa na M-Pesa</strong></li>
                  <li>Select <strong>Pay Bill</strong></li>
                  <li>Business Number: <strong>522533</strong></li>
                  <li>Account Number: <strong>7902003</strong></li>
                  <li>Enter the amount you wish to donate</li>
                  <li>Confirm with your M-Pesa PIN</li>
                </ol>
                <p className={styles.methodNote}>
                  Or send directly to our number: <strong>+254 796 595 995</strong>
                </p>
              </div>

              <div className={styles.methodCard}>
                <div className={styles.methodIcon}>🏦</div>
                <h3>Bank Transfer</h3>
                <div className={styles.bankDetails}>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>Bank</span>
                    <span className={styles.bankValue}>KCB Bank</span>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>Account Name</span>
                    <span className={styles.bankValue}>Brilliant Angels CBO</span>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>Account Number</span>
                    <span className={styles.bankValue}>1332279740</span>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankLabel}>Branch</span>
                    <span className={styles.bankValue}>Two Rivers</span>
                  </div>
                </div>
              </div>

              <div className={styles.note}>
                <strong>Important:</strong> Please include your full name as the
                reference when donating so we can acknowledge your contribution.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--primary)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="sectionTitle" style={{ color: "var(--white)" }}>
            Every Shilling Counts
          </h2>
          <p className="sectionSubtitle" style={{ color: "rgba(255,255,255,0.8)" }}>
            Whether it&apos;s KES 100 or KES 10,000 — your generosity puts a child
            in school, feeds a family, and builds a brighter Githogoro.
          </p>
          <Link href="/contact" className="btn btnAccent">
            Questions? Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
