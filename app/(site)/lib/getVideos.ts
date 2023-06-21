import { Videos } from "@/types/Videos";

export default async function getVideos(): Promise<Videos> {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UCr2AyBagW7Pf9QYQRoBF_DA&key=${process.env.YT_KEY}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    console.log("error");
  }

  return res.json();
}
