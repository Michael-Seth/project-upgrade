import { Swiper, SwiperSlide } from "swiper/react";
import extw1 from "../assets/projects/Export-to-wealth.png";
import extw2 from "../assets/projects/Etw.png";
import gomora1 from "../assets/projects/Gomora 1.png";
import gomora2 from "../assets/projects/gomora2.png";
import zonely1 from "../assets/projects/Zonely.png";
import zonely2 from "../assets/projects/Zonely2.png";
import bitselah from "../assets/Bitselahcover.png";
import compressor1 from "../assets/projects/compressor.png";
import eth from "../assets/projects/eth.webp";
import eth2 from "../assets/projects/eth.webp";
import eth3 from "../assets/projects/eth.webp";
import motherboard_1 from "../assets/projects/Motherboard_1.jpeg";
import PropTypes from "prop-types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ProjectSlide.css";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import {
  SiAwslambda,
  SiExpress,
  SiFlutter,
  SiGraphql,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const slides = [
  {
    id: 1,
    title: "Export To Wealth",
    subTitle: "Online marketplaces for selling and shipping goods.",
    description:
      "Export to Wealth is an innovative Shipping and Logistics Management Software designed to streamline the shipping process for users. It also empowers users to calculate and estimate their profits across various e-commerce platforms, while ensuring Food and Drug Administration compliance.",
    mainImg: [extw2, extw1],
    packages: [SiNodedotjs, SiExpress, SiMysql, SiReact],
  },
  {
    id: 2,
    title: "Gomora",
    subTitle: "Ecommerce store for fashoin wears and accessories",
    description:
      "Gomora is an e-commerce store that specializes in selling men's clothing. Built using Nodejs, Express, Mongodb and React, it offers a modern, user-friendly shopping experience for customers. With a focus on providing high-quality men's clothing, Gomora utilizes cutting-edge technology to provide a seamless and efficient way for customers to shop for the latest styles and trends in men's fashion",
    mainImg: [gomora2, gomora1],
    packages: [SiNodedotjs, SiTypescript, SiMongodb, SiReact],
  },
  {
    id: 3,
    title: "Bitselah",
    subTitle: "Streamlining Crypto and Gift Card Transactions",
    description:
      "Bitselah moves transactions from social media to a dedicated app, offering a secure and efficient platform for exchanging cryptocurrencies and gift cards for Naira. It features quick trades, dispute resolution, and a referral system, enhancing user experience with a robust tech stack including Vite, React, and Flutter.",
    mainImg: [bitselah],
    packages: [SiNodedotjs, SiGraphql, SiPostgresql, SiNestjs, SiReact],
  },
  {
    id: 4,
    title: "Try-Zonely",
    subTitle: "Appointment scheduling application",
    description:
      "This type of software allows users to schedule, manage, and coordinate appointments, meetings, and events with others, often integrating with calendars and providing features like automated reminders, time zone conversions, and the ability to book appointments based on availability",
    mainImg: [zonely2, zonely1],
    packages: [SiNodedotjs, SiNestjs, SiMysql, SiReact],
  },
  {
    id: 5,
    title: "Sentry Compact",
    subTitle: "Image compression application",
    description:
      "Sentry Compact is an image processing web application built with JavaScript and Tailwind CSS. It allows users to easily compress images to any desired file size, making it a powerful tool for optimizing and managing images. With a simple and intuitive interface, Sentry Compact makes it easy for users to compress images efficiently, saving them time and storage space.",
    mainImg: [compressor1],
    packages: [SiNodedotjs, SiReact],
  },
  {
    id: 6,
    title: "Motherboard",
    subTitle: "Employee Benefit CRM",
    description:
      "Motherboard is a platform where employers can provide a wide range of benefits to their employees, from health insurance to fueling solutions and food benefits. Backed by a passionate team, dozens of merchants, and a powerful platform, Motherboard is set to help employers retain top talent without sacrificing their bottomline.",
    mainImg: [motherboard_1],
    packages: [SiNodedotjs, SiMysql, SiReact, SiTypescript, SiAwslambda],
  },
  {
    id: 7,
    title: "E-tuition Hub",
    subtitle: "Revolutionizing Education in Africa",
    description:
      "E-tuition addresses the challenges of rising education costs and inaccessibility in Africa by connecting students with top educators through a mobile app and website. The platform features interactive tools like a whiteboard, live chat, and real-time feedback, ensuring quality education is accessible to all. Built with a modern tech stack, Bitselah is a step forward in making learning more inclusive and effective.",
    mainImg: [eth, eth2, eth3],
    packages: [
      SiReact,
      SiNodedotjs,
      SiTypescript,
      SiMysql,
      SiAwslambda,
      SiFlutter,
    ],
  },
];

// NestedSwiper component that receives slides as props
function NestedSwiper({ slideImgs }: any) {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      effect={"fade"}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      {slideImgs.map((img: any, index: any) => (
        <SwiperSlide key={index}>
          <img
            className="object-contain object-center mx-auto sm:h-[28rem] rounded-lg"
            src={img}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function ProjectsOverview() {
  return (
    <section className="dark:bg-gray-950 border-t border-gray-900">
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
              <div className="text-left">
                <div className="items-center mx-auto">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                    <div className="lg:justify-start">
                      <p className="text-2xl font-medium tracking-tight text-black dark:text-white sm:text-4xl">
                        Featured Products
                      </p>
                    </div>
                    <div className="lg:justify-end">
                      <p className="mt-4 text-xl tracking-tight text-gray-600 dark:text-gray-200 lg:mt-0">
                        {slide.title}
                      </p>
                      <p className="mt-4 text-base text-gray-600 dark:text-gray-400 lg:mt-0">
                        {slide.subTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative items-center w-full mx-auto mt-12 rounded-lg">
                <NestedSwiper slideImgs={slide.mainImg} />
              </div>

              <div>
                <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="mx-auto">
                    <div className="grid grid-cols-4 gap-0.5 gap-y-4 md:grid-cols-6 justify-center items-center mx-auto">
                      {slide.packages.map((Icon, index) => (
                        <div key={index}>
                          <Icon className="w-10 h-10" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto lg:max-w-7xl">
                  <dl className="mx-auto">
                    <div>
                      <div>
                        <p className="text-2xl tracking-wide font-medium leading-6 text-black dark:text-gray-200">
                          Overview
                        </p>
                      </div>
                      <div className="mt-3 text-base text-justify text-gray-500 dark:text-gray-400">
                        {slide.description}
                      </div>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

NestedSwiper.propTypes = {
  slides: PropTypes.array,
  slideImgs: PropTypes.array.isRequired,
};
export default ProjectsOverview;
