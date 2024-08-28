import { LuExternalLink } from "react-icons/lu";

function ScrollProfile() {
  return (
    <section
      id="feature-five"
      className="overflow-y-auto custom-scrollbar-container bg-white border-t border-gray-900 dark:bg-gray-950 lg:h-screen"
    >
      <div className="px-8 sm:py-24 py-8  mx-auto lg:px-16 max-w-7xl md:px-12 xl:px-36 lg:flex">
        <div className="lg:w-1/2">
          <div className="top-0 pt-8 pb-16 lg:sticky">
            <div>
              <div className="lg:pr-24 md:pr-12">
                <div>
                  <p className="text-2xl font-medium tracking-tight text-black dark:text-white sm:text-4xl">
                    Professional Work Experience
                  </p>
                  <p className="max-w-xl mt-4 text-lg tracking-tight text-gray-600 dark:text-gray-400">
                    Proven Track Record of Delivering High-Impact Solutions in
                    Enterprise Software Development.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <a
                    href="https://drive.google.com/file/d/15xNxf7_FBKKQ8Q0xRQHCqNinxxhinpvs/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="items-center justify-center w-full px-6 py-2.5  text-center text-white dark:text-black duration-200 bg-black dark:bg-gray-100 border-2 border-black dark:border-gray-100 rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-black dark:hover:border-gray-100 dark:hover:text-gray-100 dark:hover:bg-transparent focus:outline-none lg:w-auto focus-visible:outline-black dark:focus-visible:outline-gray-100 text-sm focus-visible:ring-black dark:focus-visible:ring-gray-100"
                  >
                    Preview my resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex-shrink-0">
            <div>
              <ul
                className="grid grid-cols-1 gap-6 mt-6 list-none lg:mt-0 lg:gap-8"
                role="list"
              >
                <li>
                  <div>
                    <a
                      href="https://buildclaw.com"
                      className="mt-5 text-lg font-medium leading-6 text-black dark:text-gray-50"
                    >
                      <span className="flex flex-row items-center gap-3">
                        ❖ Co Founder & Technical Lead - Buildclaw
                        <LuExternalLink className="inline" />
                      </span>
                      <span className="dark:text-slate-400 mt-2 text-xs">
                        Jan 2023 - Present
                      </span>
                    </a>
                    <div className="w-full h-1 mt-2 mb-6 bg-slate-800 dark:bg-white"></div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    <span className="dark:text-white">◦ </span>
                    Spearheaded the development of Buildclaw, focusing on
                    delivering top-notch web and mobile solutions for clients in
                    various industries.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Led the team in
                    designing and implementing scalable backend architectures
                    using modern technologies and best practices.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Played a key role
                    in integrating complex APIs and third-party services,
                    enhancing the functionality and user experience of client
                    applications.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Managed client
                    relationships and projects, ensuring that deliverables met
                    high standards of quality and were completed on time.
                  </div>
                </li>

                <li>
                  <div>
                    <a
                      href="https://www.nerdbug.io/"
                      className="mt-5 text-lg font-medium leading-6 text-black dark:text-gray-50"
                    >
                      <span className="flex flex-row items-center gap-3">
                        ❖ Backend Engineer - Nerdbug
                        <LuExternalLink className="inline" />
                      </span>
                      <span className="dark:text-slate-400 mt-2 text-xs">
                        Jan 2023 - Present
                      </span>
                    </a>
                    <div className="w-full h-1 mt-2 mb-6 bg-slate-800 dark:bg-white"></div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    <span className="dark:text-white">◦ </span>
                    Led my team members in developement of REST and Graphql APIs
                    using Node.js backend frameworks and services.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Implemented
                    Sequelize ORM as request by the scrum master for efficient
                    database management using microservice design architecture
                    and improved data querying.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Collaborated with
                    the backend team to integrate external services such as
                    Stripe, Paystack, Google APIs, Microsoft Graph and others.
                    Integrated input validations into the backend for extra
                    security, resulting in a seamless user experience.
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href="https://www.usemotherboard.com/"
                      className="mt-5 text-lg font-medium leading-6 text-black dark:text-gray-50"
                    >
                      <span className="flex flex-row items-center gap-3">
                        ❖ Full Stack Software Engineer - Motherboard
                        <LuExternalLink className="inline" />
                      </span>
                      <span className="dark:text-slate-400 mt-2 text-xs">
                        Jan 2024 - April 2024
                      </span>
                    </a>
                    <div className="w-full h-1 mt-2 mb-6 bg-slate-800 dark:bg-white"></div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    <span className="dark:text-white">◦ </span>
                    Develop and maintain highly scalable backend services to
                    handle high volumes of traffic, using Nest.js.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Utilize
                    open-source technologies such as Kafka and Docker to
                    optimize performance and scalability, reducing latencies and
                    improving overall service quality.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Collaborate with
                    cross-functional team to architect and build the USSD
                    payment systems ensuring users are able to access their
                    benefits without internet connection.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Identify and
                    resolve bugs, vulnerabilities, and performance bottlenecks
                    in existing systems, improving overall system efficiency and
                    reliability.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Create robust,
                    maintainable, and reusable code and tools for configuration
                    management, deployment automation, monitoring, and alerting
                    in various environments.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Collaborate with
                    frontend team to complete the employee dashboard sprint to
                    help admin users(employer) manage employees by group.
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href="https://netpro.africa/"
                      className="mt-5 text-lg font-medium leading-6 text-black dark:text-gray-50"
                    >
                      <span className="flex flex-row items-center gap-3">
                        ❖ Frontend Developer - Netpro
                        <LuExternalLink className="inline" />
                      </span>
                      <span className="dark:text-slate-400 mt-2 text-xs">
                        April 2021 - Nov 2022
                      </span>
                    </a>
                    <div className="w-full h-1 mt-2 mb-6 bg-slate-800 dark:bg-white"></div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    <span className="dark:text-white">◦</span> Designed and
                    implemented authentication and authorization mechanisms
                    using Passport and Bcrypt for enhanced security.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Collaborated with
                    the DevOps team to deploy applications on AWS, ensuring high
                    availability and scalability.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Actively
                    participated in code reviews, identifying potential
                    vulnerabilities and ensuring code quality.
                  </div>
                </li>
                <li>
                  <div>
                    <a
                      href="https://www.cybersecuritychallenge.com.ng/"
                      className="mt-5 text-lg font-medium leading-6 text-black dark:text-gray-50"
                    >
                      <span className="flex flex-row items-center gap-3">
                        ❖ Full Stack Developer - CYSEC NG
                        <LuExternalLink className="inline" />
                      </span>
                      <span className="dark:text-slate-400 mt-2 text-xs">
                        Mar 2019 - Jan 2021
                      </span>
                    </a>
                    <div className="w-full h-1 mt-2 mb-6 bg-slate-800 dark:bg-white"></div>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    <span className="dark:text-white">◦</span> I successfully
                    led the design and development of the company&apos;s labs
                    application know as cysec -labs.
                    <br />
                    <br />
                    <span className="dark:text-white">◦</span> Collaborated with
                    the frontend team to build web applications based clients
                    requirements.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollProfile;
