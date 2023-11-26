export default async function sitemap() {
  const tempUrl = "https://weather10days.com";

  const staticPages = [
    {
      url: tempUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${tempUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${tempUrl}/terms-and-conditions`,
      lastModified: new Date(),
    },
  ];

  const allPages = staticPages;
  return allPages;
}
