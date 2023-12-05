import RecentStories from "@/components/RecentStories";
import TwitterBox from "@/components/TwitterBox";
import ExtremeWeather from "@/components/feed/ExtremeWeather";
import WeatherFeed from "@/components/feed/WeatherFeed";

const title = "Weater 10 Days - Get Live Weather Forecasting ";
const description =
  "Quick and reliable source for 10-day weather forecasts. Stay informed on temperature, precipitation, and wind speed to plan your week effortlessly.";
const keywords =
  "weather 10 days, weather 10-day, weather in delhi 10 days,weather 10 day, aaj ka mausam, 10 दिनों का मौसम, कल मौसम कैसा रहेगा, weather in manali 10 days, weather in ludhiana 10 days  ";
const url = "https://weather10days.com/";

export const metadata = {
  title: title,
  description: description,
  keywords: keywords,
  openGraph: {
    title: title,
    description: description,
    keywords: keywords,
    siteName: "Weather 10 days",
    url: url,
    type: "website",
    images: ["./weather-10-days.jpg"],
  },
};

const fetchBlogs = async () => {
  const res = await fetch(
    "https://sever.weather10days.com/wp-json/wp/v2/posts",
    { cache: "no-store" }
  );
  const data = await res.json();
  // const blogPosts = data.filter((post, idx) => {
  //   const tempCat = post.categories[0].toString();

  //   return tempCat === "1";
  // });

  const twitterPosts = data.filter((post, idx) => {
    const tempCat = post.categories[0].toString();

    return tempCat === "13";
  });

  // const slug = data.slug;
  // const modifiedTime = data.modified;
  // const title = data.title.rendered;
  // const content = data.content.rendered;
  // const excerpt = data.excerpt.rendered;

  return {
    // blogPosts,
    twitterPosts,
  };
};

export default async function Home() {
  const posts = await fetchBlogs();

  // const blogs = posts.blogPosts;
  const twitterPosts = posts.twitterPosts;

  return (
    <main className="my-12 mx-auto max-w-6xl px-2 space-y-3">
      <ExtremeWeather />
      <WeatherFeed />
      <TwitterBox posts={twitterPosts} />
      {/* <RecentStories blogs={blogs} /> */}
    </main>
  );
}
