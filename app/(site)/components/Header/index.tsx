import Link from "next/link";
import Toggle from "../Toggle";

export default function Header() {
  return (
    <header className="animate-slide-in-down">
      <div className="bg-[#FEFEFE] rounded-3xl dark:bg-neutral-700 navbar shadow-md">
        <div className="navbar-start">
          <Link
            href="/"
            className="ml-2 text-xl normal-case text-neutral-700 btn btn-ghost dark:text-white"
          >
            Rizzotto
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
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 bg-[#FEFEFE] shadow dark:bg-neutral-700 menu menu-sm dropdown-content rounded-box w-52"
            >
              <li>
                <Link
                  className="text-neutral-700 dark:text-white dark:hover:text-white hover:text-neutral-700"
                  href={`/experiences`}
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-700 dark:text-white dark:hover:text-white hover:text-neutral-700"
                  href={`/about`}
                >
                  About
                </Link>
                <Link
                  className="text-neutral-700 dark:text-white dark:hover:text-white hover:text-neutral-700"
                  href={`/videos`}
                >
                  Videos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
