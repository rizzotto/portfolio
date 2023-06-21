import getVideos from "../lib/getVideos";

export default async function Videos() {
  const data = await getVideos();

  return (
    <div>
      <h2 className="mt-4 mb-8 text-3xl font-bold text-neutral-700 dark:text-white">
        My Videos
      </h2>
      {data.items.map((video) => (
        <iframe
          key={video.id}
          width={450}
          height={280}
          src={`https://youtube.com/embed/videoseries?list=${video.id}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="rounded-3xl"
        />
      ))}
    </div>
  );
}
