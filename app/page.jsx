import RecentStories from "@/components/RecentStories";

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

export default function Home() {
  return (
    <main className="my-12 mx-auto max-w-6xl px-2">
      <RecentStories />
    </main>
  );
}
