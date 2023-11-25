export function getTimeElapsed(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const elapsed = now - date;
  const elapsedSeconds = Math.floor(elapsed / 1000);
  const elapsedMinutes = Math.floor(elapsedSeconds / 60);
  const elapsedHours = Math.floor(elapsedMinutes / 60);
  const elapsedDays = Math.floor(elapsedHours / 24);
  const elapsedMonths = Math.floor(elapsedDays / 30);

  if (elapsedSeconds < 60) {
    return `${elapsedSeconds} seconds ago`;
  } else if (elapsedMinutes < 60) {
    return `${elapsedMinutes} minutes ago`;
  } else if (elapsedHours < 24) {
    return `${elapsedHours} hours ago`;
  } else if (elapsedDays <= 30) {
    return `${elapsedDays} days ago`;
  } else {
    return `${elapsedMonths} months ago`;
  }
}

export const fetchLocation = async () => {
  const res = await fetch("https://ipapi.co/json/");
  const data = await res.json();

  const { latitude, longitude } = data;

  return {
    latitude,
    longitude,
  };
};
