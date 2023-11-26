"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Footer() {

  const pathname = usePathname()

  return (
        <footer className={`${pathname === '/authentication' || pathname === '/authentication/login' ? 'hidden' : 'block'}  py-12 sm:py-16 lg:py-24   border-t border-[#404040] rounded-t-3xl`}>
  <div className="mx-auto px-6 lg:px-8 text-white">
    <div className="flex md:justify-center ">
      <Link href={'/'} className=" text-center">
        <h1 className="text-2xl">FOLLOTECH</h1>
      </Link>
    </div>
    <nav className="columns-2 -mb-6 mt-8 sm:flex justify-center gap-16" aria-label="Footer">
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 footer-underline py-2" href="/pricing">About</Link>
      </div>
      <div className="pb-6">
        <Link href="/blog" className=" font-medium leading-6 transition-all duration-150 footer-underline py-2">How To Buy</Link>
      </div>
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 footer-underline py-2" href="/contact-us">Dexscreener</Link>
      </div>
    </nav>
      <div className="flex gap-8 justify-center text-center mt-8">
          <Link href={'/'} className=""><Image src={"/images/twitterIcon.svg"} alt={"icons"} width={50} height={50} className="w-8" /></Link>
          <Link href={'/'}><Image src={"/images/telegramIcon.svg"} alt={"icons"} width={50} height={50} className="w-8" /></Link>
      </div>
      </div>
</footer>

    );
}
