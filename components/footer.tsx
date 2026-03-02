import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/mavscan logo.jpg"
                alt="MAVSCAN"
                width={40}
                height={40}
                className="rounded-lg object-cover"
              />
              <span className="font-bold text-xl text-gray-900">MAVSCAN</span>
            </div>
            <p className="text-gray-600">Authenticate. Verify. Protect.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#features" className="hover:text-[#008AFF] transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#" className="hover:text-[#008AFF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#008AFF] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#008AFF] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#" className="hover:text-[#008AFF] transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#008AFF] transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#008AFF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2025 MAVSCAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
