import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-blue-900/80 via-cyan-900/60 to-blue-900/80 py-12 md:py-20 rounded-2xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="pb-8 font-nacelle text-3xl font-semibold text-white md:text-4xl"
              data-aos="fade-up"
            >
              Would you like to start a project with us?
            </h2>
            <div className="mx-auto max-w-3xl pb-4 text-center md:pb-8">
              <p
                className="mb-8 text-lg text-cyan-100"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Let's collaborate and bring your vision to life. Through our three main divisions—Abhinaya Techno, Abhinaya Creative, and Abhinaya Publisher—we are ready to create something great together!
              </p>
            </div>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-gradient-to-t from-yellow-500 to-yellow-400 bg-[length:100%_100%] bg-[bottom] text-blue-900 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto font-semibold"
                  href="https://wa.me/6285646603602"
                >
                  <span className="relative inline-flex items-center">
                    <svg
                      className="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 13.176c.002.039.01.077.016.116l-1.796 6.561 6.733-1.977c1.94 1.06 4.158 1.621 6.394 1.637 5.396 0 9.747-4.342 9.747-9.746 0-2.605-.994-5.053-2.792-6.882a9.71 9.71 0 00-6.954-2.885z" />
                    </svg>
                    Contact Us on WhatsApp
                    <span className="ml-1 tracking-normal text-gray-700 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
