const base = "https://brilliant-angel-cbo.vercel.app";

const galleryImages = [
  { file: "students.jpg", title: "Brilliant Angels Academy students in class" },
  { file: "graduation-ceremony.jpg", title: "Brilliant Angels Academy graduation ceremony" },
  { file: "tree-planting.jpg", title: "Tree planting at Brilliant Angels Academy" },
  { file: "Tree planting children.jpg", title: "Children planting trees at Brilliant Angels Academy" },
  { file: "schoolchildren-crowd-2.jpg", title: "Brilliant Angels Academy school community" },
  { file: "schoolchildren-group-crowd.png", title: "Brilliant Angels Academy students together" },
  { file: "free-camp-banner-graphic.jpg", title: "Free education camp at Brilliant Angels Academy" },
  { file: "fire Disaster.jpg", title: "Brilliant Angels Academy disaster response" },
  { file: "flooded-settlement.jpg", title: "Community challenges in Githogoro" },
];

const fbImages = Array.from({ length: 80 }, (_, i) => ({
  file: `fb-${String(i + 1).padStart(3, "0")}.jpg`,
  title: `Brilliant Angels Academy photo ${i + 1}`,
}));

const allImages = [...galleryImages, ...fbImages];

export async function GET() {
  const urlEntries = allImages
    .map(
      (img) => `
  <url>
    <loc>${base}/gallery</loc>
    <image:image>
      <image:loc>${base}/facebook-photos/${img.file}</image:loc>
      <image:title>${img.title}</image:title>
    </image:image>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
