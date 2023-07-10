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
    role: "Product Manager",
    companyImage: "/images/review/sanity.png",
    review:
      "Moritz exceeded our expectations on implementation and collaboration. His detail orientation and deep implementation expertise elevated our designs. Moritz truly owns his craft.",
  },
  {
    name: "Marri Martin",
    image: "/images/review/2.webp",
    role: "Product Manager",
    companyImage: "/images/review/contentful.png",
    review:
      "Moritz exceeded our expectations on implementation and collaboration. His detail orientation and deep implementation expertise elevated our designs. Moritz truly owns his craft.",
  },
  {
    name: "Welf Wu",
    image: "/images/review/3.webp",
    role: "Product Manager",
    companyImage: "/images/review/deepmind.png",
    review:
      "Moritz exceeded our expectations on implementation and collaboration. His detail orientation and deep implementation expertise elevated our designs. Moritz truly owns his craft.",
  },
  {
    name: "Lee Abyss",
    image: "/images/review/4.webp",
    role: "Product Manager",
    companyImage: "/images/review/disney.png",
    review:
      "Moritz exceeded our expectations on implementation and collaboration. His detail orientation and deep implementation expertise elevated our designs. Moritz truly owns his craft.",
  },
  {
    name: "Kelly Macy",
    image: "/images/review/5.webp",
    role: "Product Manager",
    companyImage: "/images/review/openai.png",
    review:
      "Moritz exceeded our expectations on implementation and collaboration. His detail orientation and deep implementation expertise elevated our designs. Moritz truly owns his craft.",
  },
  {
    name: "Jim Welson",
    image: "/images/review/6.webp",
    role: "Product Manager",
    companyImage: "/images/review/workos.png",
    review:
      "Moritz exceeded our expectations on implementation and collaboration. His detail orientation and deep implementation expertise elevated our designs. Moritz truly owns his craft.",
  },
];
