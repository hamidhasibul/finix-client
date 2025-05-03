import {
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Heart,
  MapPin,
} from "lucide-react";
import { Button } from "../ui/button";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type Swiper from "swiper";
import { EVENTS } from "@/lib/data";
import { Card, CardContent } from "../ui/card";
import difficultyAdvanced from "@/assets/difficulty-advanced-icon.svg";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default function OtherEvents() {
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  const handlePrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  return (
    <section className="container mx-auto py-10 px-4 space-y-4">
      {/* Heading */}

      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Other events you may like</h3>
        <div className="space-x-4">
          <Button
            variant={"secondary"}
            size={"icon"}
            className="rounded-full cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant={"secondary"}
            size={"icon"}
            className="rounded-full cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      {/* Event Carousel */}

      <SwiperComponent
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSwiper={setSwiper}
      >
        {EVENTS.map((event) => (
          <SwiperSlide key={event.id}>
            <Card className="pt-0 overflow-hidden">
              <div className="relative h-32">
                <img src={event.image} alt="" className="object-cover" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 rounded-full z-10"
                >
                  <Heart />
                </Button>
              </div>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-emerald-100 py-1.5 px-2 rounded-xl">
                      <p className="text-sm text-gray-600">{event.sportType}</p>
                    </div>
                    <div className="bg-purple-100 py-1.5 px-2 rounded-xl">
                      <p className="text-sm text-gray-600">{event.ageLimit}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src={difficultyAdvanced} alt="..." />
                    <p className="text-sm text-gray-600">{event.skillLevel}</p>
                  </div>
                </div>

                {/* Event Body */}

                <div className="">
                  <h4 className="text-start text-2xl text-[#34735f]">
                    {event.title}
                  </h4>

                  <div className="text-base text-start mb-1">
                    {event.date} • {event.time}
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-4 -ml-1 text-red-500 " />
                    <p className="text-base">{event.venue}</p>
                  </div>

                  <div className="flex justify-end mb-4">
                    <p className="text-base text-red-800">
                      {event.totalSpots - event.registeredPlayers} spots left
                    </p>
                  </div>

                  <div className="flex items-end justify-between">
                    <p className="text-sm">
                      {event.registeredPlayers}/{event.totalSpots} attending
                    </p>

                    <div className="flex items-center gap-2">
                      <CircleDollarSign className="h-6 w-6" />
                      <p className="text-2xl">
                        {event.fee}
                        <span className="text-gray-500">/person</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </section>
  );
}
