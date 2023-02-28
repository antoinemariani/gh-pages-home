import resume from "./resume.pdf";

export default function Navbar() {
  return (
    <header aria-label="Site Header" className="border-b border-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button type="button" className="p-2 lg:hidden">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* <a href="#" className="flex">
            <span className="sr-only">Logo</span>
            <span className="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
          </a> */}
          <span className="font  text-xl">Antoine Mariani</span>
        </div>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
          >
            <a
              href={resume}
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Resume
            </a>

            <a
              href="#projects"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Projects
            </a>

            <a
              href="/landing"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              About
            </a>

            <a
              href="mailto:hello@amariani.dev"
              className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center">
            <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
              <span>
                <a
                  href="https://www.linkedin.com/in/antoinemariani"
                  target="_blank"
                  className="block border-b-4 border-transparent p-6 hover:border-red-700"
                >
                  <i className="fa-brands fa-linkedin"></i>
                  <span className="sr-only"> LinkedIn </span>
                </a>
              </span>

              <span>
                <a
                  href="https://www.github.com/antoinemariani"
                  target="_blank"
                  className="block border-b-4 border-transparent p-6 hover:border-red-700"
                >
                  <i className="fa-brands fa-github"></i>
                  <span className="sr-only"> GitHub </span>
                </a>
              </span>

              <span>
                <a
                  href="mailto:hello@amariani.dev"
                  target="_blank"
                  className="block border-b-4 border-transparent p-6 hover:border-red-700"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span className="sr-only"> Mail </span>
                </a>
              </span>

              {/* <span className="hidden sm:block">
                <a
                  href="/search"
                  className="block border-b-4 border-transparent p-6 hover:border-red-700"
                >
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <span className="sr-only"> Search </span>
                </a>
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
