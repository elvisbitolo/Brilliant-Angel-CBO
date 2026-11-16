"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const initialImages = [
  { src: "/students.jpg", alt: "Brilliant Angels students in class", caption: "Our Students" },
  { src: "/graduation-ceremony.jpg", alt: "Graduation ceremony", caption: "Graduation Day" },
  { src: "/tree-planting.jpg", alt: "Tree planting initiative", caption: "Tree Planting" },
  { src: "/Tree planting children.jpg", alt: "Children planting trees", caption: "Community Tree Planting" },
  { src: "/schoolchildren-crowd-2.jpg", alt: "School community gathering", caption: "School Community" },
  { src: "/schoolchildren-group-crowd.png", alt: "Students together", caption: "Together We Learn" },
  { src: "/free-camp-banner-graphic.jpg", alt: "Free education camp", caption: "Free Education Camp" },
  { src: "/fire Disaster.jpg", alt: "Community disaster response", caption: "Crisis Response" },
  { src: "/flooded-settlement.jpg", alt: "Flooded settlement", caption: "Facing Challenges Together" },
];

const fbImages = [
  { src: "/facebook-photos/fb-001.jpg", alt: "Students learning at Brilliant Angels Academy", caption: "Students Learning" },
  { src: "/facebook-photos/fb-002.jpg", alt: "Brilliant Angels Academy community", caption: "Our Community" },
  { src: "/facebook-photos/fb-003.jpg", alt: "Brilliant Angels Academy students", caption: "Students in Action" },
  { src: "/facebook-photos/fb-004.jpg", alt: "Community members together", caption: "Community Together" },
  { src: "/facebook-photos/fb-005.jpg", alt: "Brilliant Angels Academy gathering", caption: "School Gathering" },
  { src: "/facebook-photos/fb-006.jpg", alt: "Students at Brilliant Angels Academy", caption: "Our Students" },
  { src: "/facebook-photos/fb-007.jpg", alt: "Global exploration and sustainability", caption: "Global Goals" },
  { src: "/facebook-photos/fb-008.jpg", alt: "Dancing and celebration", caption: "Dancing Celebration" },
  { src: "/facebook-photos/fb-009.jpg", alt: "Student at Brilliant Angels Academy", caption: "Student Spotlight" },
  { src: "/facebook-photos/fb-010.jpg", alt: "Popolipo Foundation partnership", caption: "Popolipo Foundation" },
  { src: "/facebook-photos/fb-011.jpg", alt: "Brilliant Angels Academy family", caption: "Our Family" },
  { src: "/facebook-photos/fb-012.jpg", alt: "Happy students at Brilliant Angels Academy", caption: "Happy Students" },
  { src: "/facebook-photos/fb-013.jpg", alt: "Popolipo Foundation visit", caption: "Foundation Partnership" },
  { src: "/facebook-photos/fb-014.jpg", alt: "Brilliant Angels Academy event", caption: "School Event" },
  { src: "/facebook-photos/fb-015.jpg", alt: "Students and teachers", caption: "Students & Teachers" },
  { src: "/facebook-photos/fb-016.jpg", alt: "Brilliant Angels Academy activities", caption: "Activities" },
  { src: "/facebook-photos/fb-017.jpg", alt: "Basketball at Brilliant Angels Academy", caption: "Sports - Basketball" },
  { src: "/facebook-photos/fb-018.jpg", alt: "Happy Father's Day from Brilliant Angels Academy", caption: "Happy Father's Day" },
  { src: "/facebook-photos/fb-019.jpg", alt: "Nature at Brilliant Angels Academy", caption: "Nature" },
  { src: "/facebook-photos/fb-020.jpg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/facebook-photos/fb-021.jpg", alt: "Brilliant Angels Academy outdoors", caption: "Outdoors" },
  { src: "/facebook-photos/fb-022.jpg", alt: "Community gathering", caption: "Community" },
  { src: "/facebook-photos/fb-023.jpg", alt: "Brilliant Angels Academy learning", caption: "Learning" },
  { src: "/facebook-photos/fb-024.jpg", alt: "Tree planting at Brilliant Angels Academy", caption: "Tree Planting" },
  { src: "/facebook-photos/fb-025.jpg", alt: "Students planting trees", caption: "Students Planting" },
  { src: "/facebook-photos/fb-026.jpg", alt: "Trees and nature", caption: "Green Environment" },
  { src: "/facebook-photos/fb-027.jpg", alt: "Child with tree", caption: "Growing Together" },
  { src: "/facebook-photos/fb-028.jpg", alt: "Trees at Brilliant Angels Academy", caption: "Our Trees" },
  { src: "/facebook-photos/fb-029.jpg", alt: "Nature and greenery", caption: "Nature" },
  { src: "/facebook-photos/fb-030.jpg", alt: "Tree planting drive", caption: "Tree Planting Drive" },
  { src: "/facebook-photos/fb-031.jpg", alt: "Students and trees", caption: "Students & Trees" },
  { src: "/facebook-photos/fb-032.jpg", alt: "Chandaria Tree Nursery Alliance", caption: "Chandaria Tree Nursery" },
  { src: "/facebook-photos/fb-033.jpg", alt: "Global Goals sustainability", caption: "Sustainability" },
  { src: "/facebook-photos/fb-034.jpg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/facebook-photos/fb-035.jpg", alt: "Community gathering at Brilliant Angels Academy", caption: "Community Gathering" },
  { src: "/facebook-photos/fb-036.jpg", alt: "Students celebrating", caption: "Celebration" },
  { src: "/facebook-photos/fb-037.jpg", alt: "Brilliant Angels Academy crowd", caption: "Our Crowd" },
  { src: "/facebook-photos/fb-038.jpg", alt: "Students together", caption: "Together" },
  { src: "/facebook-photos/fb-039.jpg", alt: "Brilliant Angels Academy event", caption: "School Event" },
  { src: "/facebook-photos/fb-040.jpg", alt: "Community at Brilliant Angels Academy", caption: "Our Community" },
  { src: "/facebook-photos/fb-041.jpg", alt: "Brilliant Angels Academy text", caption: "Our Story" },
  { src: "/facebook-photos/fb-042.jpg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/facebook-photos/fb-043.jpg", alt: "Brilliant Angels Academy update", caption: "Updates" },
  { src: "/facebook-photos/fb-044.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-045.jpg", alt: "Brilliant Angels Academy news", caption: "News" },
  { src: "/facebook-photos/fb-046.jpg", alt: "Students learning", caption: "Learning" },
  { src: "/facebook-photos/fb-047.jpg", alt: "Brilliant Angels Academy highlights", caption: "Highlights" },
  { src: "/facebook-photos/fb-048.jpg", alt: "Students at Brilliant Angels Academy", caption: "Our Students" },
  { src: "/facebook-photos/fb-049.jpg", alt: "Brilliant Angels Academy community event", caption: "Community Event" },
  { src: "/facebook-photos/fb-050.jpg", alt: "Students participating in activities", caption: "Activities" },
  { src: "/facebook-photos/fb-051.jpg", alt: "Brilliant Angels Academy", caption: "Brilliant Angels Academy" },
  { src: "/facebook-photos/fb-052.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-053.jpg", alt: "Brilliant Angels Academy day", caption: "School Day" },
  { src: "/facebook-photos/fb-054.jpg", alt: "Students and staff", caption: "Students & Staff" },
  { src: "/facebook-photos/fb-055.jpg", alt: "Brilliant Angels Academy activities", caption: "Activities" },
  { src: "/facebook-photos/fb-056.jpg", alt: "Community at Brilliant Angels", caption: "Community" },
  { src: "/facebook-photos/fb-057.jpg", alt: "Students learning together", caption: "Learning Together" },
  { src: "/facebook-photos/fb-058.jpg", alt: "Brilliant Angels Academy team", caption: "Our Team" },
  { src: "/facebook-photos/fb-059.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-060.jpg", alt: "Brilliant Angels Academy", caption: "Brilliant Angels Academy" },
  { src: "/facebook-photos/fb-061.jpg", alt: "Students together", caption: "Students" },
  { src: "/facebook-photos/fb-062.jpg", alt: "Brilliant Angels Academy gathering", caption: "Gathering" },
  { src: "/facebook-photos/fb-063.jpg", alt: "Students at Brilliant Angels Academy", caption: "Our Students" },
  { src: "/facebook-photos/fb-064.jpg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/facebook-photos/fb-065.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-066.jpg", alt: "Brilliant Angels Academy", caption: "Brilliant Angels Academy" },
  { src: "/facebook-photos/fb-067.jpg", alt: "Students and community", caption: "Students & Community" },
  { src: "/facebook-photos/fb-068.jpg", alt: "Brilliant Angels Academy", caption: "Brilliant Angels Academy" },
  { src: "/facebook-photos/fb-069.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-070.jpg", alt: "Brilliant Angels Academy activities", caption: "Activities" },
  { src: "/facebook-photos/fb-071.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-072.jpg", alt: "Brilliant Angels Academy", caption: "Brilliant Angels Academy" },
  { src: "/facebook-photos/fb-073.jpg", alt: "Students together", caption: "Students" },
  { src: "/facebook-photos/fb-074.jpg", alt: "Brilliant Angels Academy", caption: "Brilliant Angels Academy" },
  { src: "/facebook-photos/fb-075.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-076.jpg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/facebook-photos/fb-077.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-078.jpg", alt: "Brilliant Angels Academy", caption: "Brilliant Angels Academy" },
  { src: "/facebook-photos/fb-079.jpg", alt: "Students at Brilliant Angels Academy", caption: "Students" },
  { src: "/facebook-photos/fb-080.jpg", alt: "Brilliant Angels Academy", caption: "Brilliant Angels Academy" },
];

const whatsappImages = [
  { src: "/whatsapp-photos/wa-001.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-002.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-003.jpeg", alt: "Brilliant Angels Academy activity", caption: "Activity" },
  { src: "/whatsapp-photos/wa-004.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-005.jpeg", alt: "Brilliant Angels Academy gathering", caption: "Gathering" },
  { src: "/whatsapp-photos/wa-006.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-007.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-008.jpeg", alt: "Brilliant Angels Academy learning", caption: "Learning" },
  { src: "/whatsapp-photos/wa-009.jpeg", alt: "Brilliant Angels Academy activities", caption: "Activities" },
  { src: "/whatsapp-photos/wa-010.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-011.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-012.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-013.jpeg", alt: "Brilliant Angels Academy gathering", caption: "Gathering" },
  { src: "/whatsapp-photos/wa-014.jpeg", alt: "Brilliant Angels Academy activity", caption: "Activity" },
  { src: "/whatsapp-photos/wa-015.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-016.jpeg", alt: "Brilliant Angels Academy learning", caption: "Learning" },
  { src: "/whatsapp-photos/wa-017.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-018.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-019.jpeg", alt: "Brilliant Angels Academy activities", caption: "Activities" },
  { src: "/whatsapp-photos/wa-020.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-021.jpeg", alt: "Brilliant Angels Academy gathering", caption: "Gathering" },
  { src: "/whatsapp-photos/wa-022.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-023.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-024.jpeg", alt: "Brilliant Angels Academy learning", caption: "Learning" },
  { src: "/whatsapp-photos/wa-025.jpeg", alt: "Brilliant Angels Academy activity", caption: "Activity" },
  { src: "/whatsapp-photos/wa-026.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-027.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-028.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-029.jpeg", alt: "Brilliant Angels Academy gathering", caption: "Gathering" },
  { src: "/whatsapp-photos/wa-030.jpeg", alt: "Brilliant Angels Academy activities", caption: "Activities" },
  { src: "/whatsapp-photos/wa-031.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-032.jpeg", alt: "Brilliant Angels Academy learning", caption: "Learning" },
  { src: "/whatsapp-photos/wa-033.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-034.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-035.jpeg", alt: "Brilliant Angels Academy activities", caption: "Activities" },
  { src: "/whatsapp-photos/wa-036.jpeg", alt: "Brilliant Angels Academy gathering", caption: "Gathering" },
  { src: "/whatsapp-photos/wa-037.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-038.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-039.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-040.jpeg", alt: "Brilliant Angels Academy learning", caption: "Learning" },
  { src: "/whatsapp-photos/wa-041.jpeg", alt: "Brilliant Angels Academy activity", caption: "Activity" },
  { src: "/whatsapp-photos/wa-042.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-043.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-044.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-045.jpeg", alt: "Brilliant Angels Academy gathering", caption: "Gathering" },
  { src: "/whatsapp-photos/wa-046.jpeg", alt: "Brilliant Angels Academy activities", caption: "Activities" },
  { src: "/whatsapp-photos/wa-047.jpeg", alt: "Brilliant Angels Academy event", caption: "Event" },
  { src: "/whatsapp-photos/wa-048.jpeg", alt: "Brilliant Angels Academy community", caption: "Community" },
  { src: "/whatsapp-photos/wa-049.jpeg", alt: "Brilliant Angels Academy students", caption: "Students" },
  { src: "/whatsapp-photos/wa-050.jpeg", alt: "Brilliant Angels Academy learning", caption: "Learning" },
];

const allImages = [...initialImages, ...fbImages, ...whatsappImages];
const BATCH = 12;

export default function Gallery() {
  const [visible, setVisible] = useState(BATCH);

  const showMore = () => setVisible((v) => Math.min(v + BATCH, allImages.length));

  return (
    <>
      <div className={styles.grid}>
        {allImages.slice(0, visible).map((img) => (
          <div key={img.src} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
      {visible < allImages.length && (
        <div className={styles.loadMoreWrap}>
          <button className={styles.loadMore} onClick={showMore}>
            Load More ({visible} of {allImages.length})
          </button>
        </div>
      )}
    </>
  );
}
