import { Videos } from "@/types/Videos";

export default async function getVideos(): Promise<Videos> {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2C%20contentDetails&channelId=UCr2AyBagW7Pf9QYQRoBF_DA&key=${process.env.YT_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Videos");
  }

  return res.json();
}
