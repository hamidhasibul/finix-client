import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { galleryImages } from "@/lib/data";

export default function EventGallery() {
  const remainingImages = Math.max(0, galleryImages.length - 2);
  return (
    <section className="container mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* carousel */}
        <div className="md:col-span-2">
          <Swiper
            spaceBetween={20}
            pagination={true}
            modules={[Pagination]}
            className="mySwiper rounded-lg"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <img src={image.href} alt={image.name} className="rounded-lg" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* images */}
        <div className="space-y-4">
          {galleryImages.slice(0, 2).map((image, index) => (
            <div key={image.id} className="w-full relative">
              <img
                src={image.href}
                alt={image.name || `Gallery image ${image.id}`}
                className="rounded-lg object-cover w-full h-full"
              />

              {index === 1 && remainingImages > 0 && (
                <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center cursor-pointer">
                  <p className="text-white font-medium text-lg">
                    +{remainingImages} photos
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
