"use client";

import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white transition-all duration-1000">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 w-full">
        {/* Hero content */}
        <div className="py-12 md:py-32">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Left Column: Video */}
            <div className="mb-8 md:w-1/2 md:mb-0">
              <ModalVideo
                thumb={VideoThumb}
                thumbWidth={512}
                thumbHeight={384}
                thumbAlt="Modal video thumbnail"
                video="/videos/video.mp4"
                videoWidth={1920}
                videoHeight={1080}
              />
            </div>

            {/* Right Column: Text */}
            <div className="md:w-1/2 md:pl-10">
              <div className="text-center md:text-left">
                <h1
                  className="pb-5 font-nacelle text-4xl font-semibold text-white drop-shadow-lg md:text-5xl"
                  data-aos="fade-up"
                >
                  Elevate your ideas with us
                </h1>
                <div className="mx-auto max-w-3xl">
                  <p
                    className="mb-8 text-xl text-white drop-shadow-md"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    Abhinaya Indo Group offers the best solutions for your
                    needs. Abhinaya Techno drives digital transformation,
                    Abhinaya Creative enhances branding and marketing, and
                    Abhinaya Publisher facilitates high-quality journal
                    publications.
                  </p>
                  <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center md:justify-start">
                    <div data-aos="fade-up" data-aos-delay={400}>
                      <a
                        className="btn group mb-4 w-full bg-gradient-to-t from-yellow-500 to-yellow-400 bg-[length:100%_100%] bg-[bottom] text-blue-900 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto font-semibold"
                        href="https://wa.me/6285646603602"
                      >
                        <span className="relative inline-flex items-center">
                          Get Started
                          <span className="ml-1 tracking-normal text-blue-900 transition-transform group-hover:translate-x-0.5">
                            -&gt;
                          </span>
                        </span>
                      </a>
                    </div>
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

