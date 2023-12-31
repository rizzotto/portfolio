import getVideos from "../lib/getVideos";

export default async function Videos() {
  const data = await getVideos();

  return (
    <div>
      <h2 className="mt-4 mb-8 text-3xl font-bold text-neutral-700 dark:text-white">
        My Videos
      </h2>
      <div className="max-[955px]:flex max-[955px]:justify-center max-[955px]:items-center">
        <div className="grid grid-cols-2 max-[955px]:grid-cols-1 place-items-center gap-6">
          {data?.items.map((video) => (
            <iframe
              key={video.snippet.thumbnails.default.url}
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="rounded-3xl m-4 max-[955px]:mb-4 max-[955px]:m-0 w-[450px] h-[280px] max-[470px]:w-[350px] max-[470px]:h-[240px] max-[370px]:w-[300px] max-[370px]:h-[200px] max-[320px]:w-[250px] max-[320px]:h-[250px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
