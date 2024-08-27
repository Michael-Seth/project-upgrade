import { IconzCloud } from "./IconsCloud";

function Stacks() {
  return (
    <section className="dark:bg-gray-950 border-t border-gray-900">
      <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-20">
        <div className="gap-12 lg:grid-cols-2 lg:grid">
          <div className="mb-16 sm:mb-0">
            <div className="max-w-xl">
              <div>
                <p className="text-2xl font-medium tracking-tight pb-3 text-black dark:text-white sm:text-4xl">
                  Technology Stack & Expertise
                  <br />
                </p>
                <span className=" md:text-xl text-lg font-normal dark:text-slate-400 tracking-normal">
                A detailed look into the various technologies, frameworks, and libraries I'm skilled in using.
                </span>
              </div>
            </div>
            <div className="mx-auto mt-4 sm:mt-12 lg:max-w-7xl">
              <ul
                role="list"
                className="grid sm:grid-cols-2 grid-rows-2 gap-4 list-none lg:gap-6"
              >
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black dark:text-white">
                      Backend Technologies
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                  I work with tools like Node.js, Express, Nest, TypeScript, MySQL, PostgreSQL, and MongoDB. My approach emphasizes writing clean, modular code, and optimizing database queries to improve performance. Additionally, I utilize CI/CD pipelines to ensure smooth deployments and create backends that are both reliable and easy to maintain.
                  </div>
                </li>
                <li>
                  <div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black dark:text-white">
                      Frontend Development
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                  I focus on frontend development using technologies like React, TypeScript, Tailwind CSS, and Next.js. My goal is to create intuitive, responsive user interfaces that deliver a seamless experience across devices. I prioritize clean, maintainable code and optimize performance. I ensure the frontend is not only visually appealing but also efficient and scalable.
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-16 sm:pb-0">
            <div className="max-w-xl mx-auto text-left lg:max-w-7xl">
              <h2 className="sr-only">Features.</h2>
              <IconzCloud />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stacks;
