"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Volunteer() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Get Involved</span>
          <h1>Become a Volunteer</h1>
          <p>
            Join our team of dedicated volunteers and help transform lives in
            Githogoro. Whether you teach, mentor, or support — your time matters.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.textCol}>
              <h2>Why Volunteer With Us?</h2>
              <p>
                Brilliant Angels CBO runs on the energy and dedication of
                volunteers. By giving your time, you directly impact the lives of
                children and families in Githogoro Slums.
              </p>
              <p>
                Whether you are a teacher, student, professional, or someone who
                simply cares — there is a place for you in our mission.
              </p>

              <div className={styles.roles}>
                <div className={styles.role}>
                  <span>📚</span>
                  <div>
                    <strong>Teaching &amp; Tutoring</strong>
                    <p>Help students with academics at Brilliant Angels Community School.</p>
                  </div>
                </div>
                <div className={styles.role}>
                  <span>🤝</span>
                  <div>
                    <strong>Mentorship</strong>
                    <p>Guide and inspire young people through personal mentorship.</p>
                  </div>
                </div>
                <div className={styles.role}>
                  <span>🌱</span>
                  <div>
                    <strong>Environmental Projects</strong>
                    <p>Join tree planting drives and community cleanups.</p>
                  </div>
                </div>
                <div className={styles.role}>
                  <span>🎨</span>
                  <div>
                    <strong>Arts &amp; Sports</strong>
                    <p>Coach football, lead dance sessions, or run art workshops.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formCol}>
              <h2>Volunteer Application</h2>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="vName">Full Name</label>
                    <input type="text" id="vName" placeholder="Your name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="vEmail">Email</label>
                    <input type="email" id="vEmail" placeholder="Your email" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="vPhone">Phone</label>
                  <input type="tel" id="vPhone" placeholder="+254..." />
                </div>
                <div className={styles.field}>
                  <label htmlFor="vArea">Area of Interest</label>
                  <select id="vArea">
                    <option value="">Select an area</option>
                    <option>Teaching &amp; Tutoring</option>
                    <option>Mentorship</option>
                    <option>Environmental Projects</option>
                    <option>Arts &amp; Sports</option>
                    <option>Youth Empowerment</option>
                    <option>Health &amp; Wellness</option>
                    <option>Any / Open to all</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="vMessage">Why do you want to volunteer?</label>
                  <textarea id="vMessage" rows="4" placeholder="Tell us about yourself..." />
                </div>
                <button type="submit" className="btn btnPrimary" style={{ width: "100%" }}>
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
