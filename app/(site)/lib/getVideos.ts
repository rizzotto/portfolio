import { Videos } from "@/types/Videos";

export default async function getVideos(): Promise<Videos | undefined> {
  const playlistUrl = `https://www.googleapis.com/youtube/v3/playlists?part=id&channelId=UCr2AyBagW7Pf9QYQRoBF_DA&maxResults=1&key=${process.env.YT_KEY}`;
  const playlistResponse = await fetch(playlistUrl);
  const playlistData = await playlistResponse.json();

  if (!playlistData.items || playlistData.items.length === 0) {
    // No playlist found for the channel
    return;
  }

  const playlistId = playlistData.items[0].id;

  // Fetch videos from the playlist
  const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${process.env.YT_KEY}`;
  const videosResponse = await fetch(videosUrl);
  const videosData = await videosResponse.json();

  if (!videosData.items || videosData.items.length === 0) {
    // No videos found in the playlist
    return;
  }

  if (!playlistResponse.ok) {
    throw new Error("Failed to fetch Videos");
  }

  return videosData;
}
