import Gallery from "@/components/Gallery";
import styles from "./gallery.module.css";

export default function GalleryPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.label}>Gallery</span>
          <h1>Moments from Our Community</h1>
          <p>
            The faces, events, and stories that make Brilliant Angels real —
            from classroom learning and tree planting to graduation ceremonies and community celebrations.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <Gallery />
        </div>
      </section>
    </>
  );
}
