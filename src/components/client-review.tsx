"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-cards";
import { cn } from "~/lib/utils";

export default function ClientReview() {
  return (
    <div>
      <p className="text-6xl font-bold text-center font-cabinet">
        What my clients <br />
        are saying.
      </p>
      <div className="mt-20">
        <div className="max-w-md mx-auto">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="rounded-2xl"
          >
            {reviews.map((review, i) => (
              <SwiperSlide
                key={i}
                className="bg-white bg-opacity-100 shadow-xl rounded-2xl"
              >
                {({ isVisible }) => (
                  <div
                    className={cn("pt-12 pb-4", {
                      "bg-white bg-opacity-100": !isVisible,
                    })}
                  >
                    {/* eslint-disable-next-line */}
                    <img
                      src={review.image}
                      width={80}
                      height={80}
                      className="ml-12 rounded-lg"
                      alt=""
                    />
                    <p className="mt-10 ml-12 mr-4 text-2xl font-medium">
                      {review.review}
                    </p>
                    <div className="flex items-center justify-between px-12 mt-20">
                      <div className="flex flex-col text-xl">
                        <p className="font-semibold">{review.name}</p>
                        <p className="">{review.role}</p>
                      </div>
                      <div>
                        <Image
                          src={review.companyImage}
                          height={24}
                          width={100}
                          className="w-auto h-5"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export const reviews = [
  {
    name: "Tiffany Chang",
    image: "/images/review/1.webp",
    role: "Founder",
    companyImage: "/images/review/aero.png",
    review:
      "Expertly transformed my vision into a stunning WordPress site. Faughster is the go-to developer for top-notch websites.",
  },
  {
    name: "Marri Martin",
    image: "/images/review/17.jpg",
    role: "Product Manager",
    companyImage: "/images/review/architecture.png",
    review:
      "Faughster delivered beyond expectations, crafting a captivating WordPress site that reflects my brand perfectly. Swift problem-solving and on-time delivery.",
  },
  {
    name: "Welf Wu",
    image: "/images/review/29.jpg",
    role: "Co-Worker",
    companyImage: "/images/review/cooper-carry.png",
    review:
      "User-friendly WordPress site, thanks to Faughster's collaboration and creative insights. An enjoyable journey from concept to launch.",
  },
  {
    name: "Lee Abyss",
    image: "/images/review/36.jpg",
    role: "Manager",
    companyImage: "/images/review/kpmg.png",
    review:
      "Impressive WordPress skills; Faughster optimized my site for performance and aesthetics. Professional, dedicated, and technically proficient.",
  },
  {
    name: "Kelly Macy",
    image: "/images/review/40.jpg",
    role: "Leader",
    companyImage: "/images/review/paraloco.png",
    review:
      "Exceeded expectations with a WordPress site beyond my imagination. Faughster's commitment and friendly approach made the experience fantastic.",
  },
];
