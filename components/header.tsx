import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-gray-900">
            <Image
              src="/mavscan logo.jpg"
              alt="MAVSCAN"
              width={40}
              height={40}
              className="rounded-lg object-cover"
            />
            MAVSCAN
          </Link>
          <a
            href="#waitlist-form"
            className="px-6 py-2.5 bg-[#008AFF] text-white rounded-lg font-semibold hover:bg-[#0077e6] transition-all hover:scale-[1.02]"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}
