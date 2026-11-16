export default function sitemap() {
  const base = "https://brilliant-angel-cbo.vercel.app";
  const routes = [
    "",
    "/about",
    "/programs",
    "/programs/education",
    "/programs/environment",
    "/programs/sports-arts",
    "/programs/youth-women",
    "/programs/health",
    "/programs/disaster",
    "/gallery",
    "/news",
    "/partners",
    "/volunteer",
    "/donate",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
