"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-full grid place-items-center px-6 sm:py:32 lg:px-8">
      <div className="text-center dark:text-white text-neutral-700">
        <p className="text-base font-semibold ">There was a problem</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight ">
          {error.message || "Something went error"}
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            className="mt-3 p-4 py-3 flex items-center justify-center font-semibold dark:bg-zinc-200 bg-zinc-800 rounded-2xl min-w-[20%] hover:bg-zinc-700 dark:hover:bg-zinc-50 transition text-white dark:text-neutral-700"
            onClick={reset}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
