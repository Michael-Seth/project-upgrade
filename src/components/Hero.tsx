//import extw1 from "../assets/projects/Export-to-wealth.png";
import extw2 from "../assets/projects/Etw.png";
import gomora1 from "../assets/projects/Gomora 1.png";
import gomora2 from "../assets/projects/gomora2.png";
import zonely1 from "../assets/projects/Zonely.png";
//import zonely2 from "../assets/projects/Zonely2.png";
import stn1 from "../assets/projects/Ship2Naija.png";
import compressor1 from "../assets/projects/compressor.png";
//import mainImg from "../assets/Bitselahcover.png";
import mainImg from "../assets/profileIcon.png";
import TypingAnimation from "../external/components/magicui/typing-animation";

function Hero() {
  return (
    <section className="dark:bg-gray-950 mt-16">
      <div className="relative items-center w-full px-5 h-[90vh] md:h-[90vh] py-12 md:py-24 mx-auto overflow-hidden md:px-12 lg:px-16 max-w-7xl">
        {/* <div className="grid items-start grid-cols-1 gap-12 md:grid-cols-2"> */}
        <div className="overflow-hidden mx-auto w-64 md:hidden">
          <img
            alt="thumbnail"
            className="object-cover rounded-lg"
            src={mainImg}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <div>
            <div className="max-w-xl mx-auto lg:p-10">
              <div className="text-center mt-10 md:mt-0 md:text-start">
                <TypingAnimation className="text-2xl font-medium tracking-tight text-black dark:text-white sm:text-4xl"
                  text = "I am a Full stack software engineer"
                />
                <p className="max-w-xl mt-10 text-center sm:text-justify text-base tracking-tight text-gray-600 dark:text-slate-300">
                  Less talk, more code <br /> Getting the job done is my priority.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start">
                  <a
                    href="https://drive.google.com/file/d/15xNxf7_FBKKQ8Q0xRQHCqNinxxhinpvs/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg"
                  >
                    Preview CV
                  </a>
                <a
                  href="https://www.linkedin.com/in/michael-osas"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center text-sm font-semibold text-black dark:text-white duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600 dark:focus-visible:outline-white"
                >
                  LinkedIn &nbsp; →
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block lg:mt-0 lg:ml-auto">
            <div className="absolute transform lg:-translate-y-1/2 lg:left-1/2 lg:top-1/2 lg:translate-x-8 sm:left-1/2 sm:top-0 sm:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="hidden lg:block h-full overflow-hidden w-44 lg:opacity-100 sm:opacity-0">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={extw2}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="hidden lg:block h-full overflow-hidden w-44">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={gomora1}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="hidden lg:block h-full overflow-hidden w-52">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={stn1}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="md:w-full md:my-16 lg:my-0 lg:h-full lg:overflow-hidden lg:w-52">
                    <img
                      alt="thumbnail"
                      className="object-cover h-[350px] rounded-lg"
                      src={mainImg}
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div className="hidden lg:block h-full overflow-hidden w-52">
                    <img
                      alt="thumbnail"
                      className="object-cover border rounded-lg"
                      src={gomora2}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="hidden lg:block h-full overflow-hidden w-44">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={zonely1}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                  <div className="hidden lg:block h-full overflow-hidden w-44">
                    <img
                      alt="thumbnail"
                      className="object-cover rounded-lg"
                      src={compressor1}
                      decoding="async"
                      height="926"
                      loading="lazy"
                      width="428"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
