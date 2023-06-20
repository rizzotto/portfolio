export default function Loading() {
  return (
    <>
      <div className="mt-10 grid grid-cols-2 max-[768px]:grid-cols-1">
        <div className="w-auto m-3 bg-white h-72 dark:bg-neutral-800 animate-pulse rounded-3xl"></div>
        <div className="w-auto m-3 bg-white h-72 dark:bg-neutral-800 animate-pulse rounded-3xl"></div>
      </div>
      <div className="grid gap-3 p-3 mt-16 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
        {[...Array(13).keys()].map((i) => (
          <div
            key={i}
            className="w-[210px] h-[56px] bg-white dark:bg-neutral-800 animate-pulse rounded-xl"
          />
        ))}
      </div>
    </>
  );
}
