import Link from "next/link";
import Toggle from "../Toggle";

export default function Header() {
  return (
    <header className="shadow-md animate-slide-in-down rounded-3xl bg-[#FEFEFE]  dark:bg-neutral-700">
      <div className="bg-[#FEFEFE]  dark:bg-neutral-700 navbar rounded-3xl">
        <div className="navbar-start">
          <Link
            href="/"
            className="p-2 ml-2 text-xl normal-case text-neutral-700 btn btn-ghost dark:text-white"
          >
            🍚
          </Link>
        </div>
        <div className="navbar-center">
          <Link
            className="max-[770px]:hidden font-semibold p-2 text-neutral-700 hover:bg-[#edeff1] dark:text-white m-2 rounded-lg transition dark:hover:bg-[#545658]"
            href={`/experiences`}
          >
            Experiences
          </Link>
          <Link
            className="max-[770px]:hidden font-semibold p-2 text-neutral-700 hover:bg-[#edeff1] dark:text-white m-2 rounded-lg transition dark:hover:bg-[#545658]"
            href={`/about`}
          >
            About
          </Link>
          <Link
            className="max-[770px]:hidden font-semibold p-2 text-neutral-700 hover:bg-[#edeff1] dark:text-white m-2 rounded-lg transition dark:hover:bg-[#545658]"
            href={`/videos`}
          >
            Videos
          </Link>
        </div>
        <div className="navbar-end">
          <div className="mr-2">
            <Toggle />
          </div>
          {/* Mobile dropdown menu */}
        </div>
      </div>
      <div className="md:hidden bg-[#FEFEFE]  dark:bg-neutral-700 rounded-3xl">
        <ul className="flex p-3 justify-evenly rounded-box max-[320px]:flex-col max-[320px]:items-center max-[320px]:gap-2">
          <li>
            <Link
              className="font-semibold text-neutral-700 dark:text-white dark:hover:text-white hover:text-neutral-700"
              href={`/experiences`}
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-neutral-700 dark:text-white dark:hover:text-white hover:text-neutral-700"
              href={`/about`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-neutral-700 dark:text-white dark:hover:text-white hover:text-neutral-700"
              href={`/videos`}
            >
              Videos
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
