'use client'
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname()
  return (
    <header className="w-full h-[80px] bg-white text-black flex items-center justify-between px-8">

      {/* Logo */}
      <div className="font-bold text-2xl">
        Travel Guide
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className={pathname==="/" ? "text-blue-500":""}>Home</Link>
          </li>

          <li>
            <Link href="/destination" className={pathname==="/destination" ? "text-blue-500":""}  >Destinations</Link>
          </li>

          <li>
            <Link href="/contact" className={pathname==="/contact" ? "text-blue-500":""}>Contact</Link>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;