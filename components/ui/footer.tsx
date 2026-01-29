import Logo from "./logo";
import logo from "@/public/images/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Maps & Contact Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">

            {/* Map */}
            <div className="md:w-1/2">
              <div className="h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5121.073102555834!2d116.0739845760864!3d-8.613407987510888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbff0abf65451%3A0xd3a22200333d2b6c!2sGOR%20TENIS%20MEJA%20BINTANG%20LOMBOK!5e1!3m2!1sid!2sid!4v1769557550638!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '450px' } as React.CSSProperties}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-xl"
                ></iframe>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:w-1/2">
              <div className="space-y-8">
                {/* Alamat Operasional */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-black">Alamat Operasional</h3>
                  <div className="space-y-2 text-md text-gray-700">
                    <p>Jl Telabah Reban Jl. Krakatau, Midang</p>
                    <p>Kec. Gunungsari</p>
                    <p>Kabupaten Lombok Barat, Nusa Tenggara Barat 83351</p>
                  </div>
                </div>

                {/* Alamat Resmi */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">Alamat Resmi</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p>Jl. Gunung Tambora No. 1</p>
                    <p>Dasan Agung Baru, Selaparang</p>
                    <p>Mataram City, West Nusa Tenggara</p>
                  </div>
                </div>

                {/* Kontak */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-black">Hubungi Kami</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="text-gray-500">Email</p>
                      <a href="mailto:abhinayaindogroup@gmail.com" className="hover:text-cyan-700 transition text-black font-medium">
                        abhinayaindogroup@gmail.com
                      </a>
                    </div>
                    <div>
                      <p className="text-gray-500">Telepon</p>
                      <a href="tel:+6285646603602" className="hover:text-cyan-700 transition text-black font-medium">
                        +62 856-4660-3602
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <footer className="text-white custom-footer-gradient">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
            {/* 1st block */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Company Profile
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            {/* 2nd block */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white">Business</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </div>
            {/* 3rd block */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white">Get In Touch</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="mailto:abhinayaindogroup@gmail.com"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="https://wa.me/6285646603602"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* 4th block */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white">
                Our Divisions
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Abhinaya Techno
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Abhinaya Creative
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Abhinaya Publisher
                  </a>
                </li>
              </ul>
            </div>
            {/* 5th block */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
              <div className="mb-3 flex items-center gap-2">
                <Image src={logo} alt="Abhinaya Logo" width={32} height={32} className="rounded bg-white p-0.5 shadow" />
                <span className="font-bold text-white">ABHINAYA INDO GROUP</span>
              </div>
              <div className="text-sm">
                <p className="mb-3 text-gray-300">
                  © 2026 ABHINAYA INDO GROUP
                  <span className="text-gray-500"> · </span>
                  <a
                    className="text-gray-300 transition hover:text-white"
                    href="#0"
                  >
                    Privacy Policy
                  </a>
                </p>
                <ul className="inline-flex gap-1">
                  <li>
                    <a
                      className="flex items-center justify-center text-white transition hover:text-gray-300"
                      href="https://facebook.com"
                      aria-label="Facebook"
                    >
                      <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 8c-4.4 0-8 3.6-8 8 0 3.9 2.9 7.1 6.7 7.9V15h-2v-2.5h2v-1.9c0-2 1.2-3.1 3-3.1.9 0 1.6.1 1.8.1v2.1h-1.2c-1 0-1.2.5-1.2 1.2v1.5h2.4l-.3 2.5h-2.1v8.7c3.9-.8 6.8-4.1 6.8-8v-.2c0-4.4-3.6-8-8-8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center text-white transition hover:text-gray-300"
                      href="https://twitter.com"
                      aria-label="Twitter"
                    >
                      <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center justify-center text-white transition hover:text-gray-300"
                      href="https://instagram.com"
                      aria-label="Instagram"
                    >
                      <svg
                        className="h-8 w-8 fill-current"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 10c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                        <path d="M23 10.5c0-.8-.7-1.5-1.5-1.5S20 9.7 20 10.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5zM23 3H9c-3.3 0-6 2.7-6 6v14c0 3.3 2.7 6 6 6h14c3.3 0 6-2.7 6-6V9c0-3.3-2.7-6-6-6zm4 20c0 2.2-1.8 4-4 4H9c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v14z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
