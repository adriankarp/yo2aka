import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed z-50 h-24 inset-0 bg-[#fdfdfb] flex items-center">
      <div className="container py-6 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/icon-yo2aka.png"
              alt="YO2AKA Logo"
              width={100}
              height={100}
              className="rounded-full h-20 sm:h-24 w-auto"
              priority
            />
          </Link>

          <nav className="">
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-tight font-normal"
            >
              <li>
                <Link href="/resources" className="">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
