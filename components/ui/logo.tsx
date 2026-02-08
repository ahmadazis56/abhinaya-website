import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 items-center gap-2 pl-0" aria-label="Abhinaya Indo Group">
      {/* Logo Perusahaan */}
      <div className="flex items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Abhinaya Indo Group Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-sm font-bold text-white">ABHINAYA INDO GROUP</span>
      </div>
    </Link>
  );
}
