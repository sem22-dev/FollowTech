'use client'

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { AlignRight } from 'lucide-react';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"
import { X } from 'lucide-react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


export default function Navbar() {

        const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState(false)
    const [scrolled, setScrolled] = useState(false);


        useEffect(() => {
        if(showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setRotate(false)
        }
    },[showMenu])

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    

    const pathname = usePathname()

    return(
        <nav style={{ backdropFilter: 'blur(6.7px)' }} className={` ${scrolled ? 'bg-opacity-60' : ''} border-b border-[#343333] bg-black  px-4 md:px-6 xl:px-28 2xl:px-64 py-4 sticky  z-50 top-0 left-0 right-0  text-white`}>
            {/* larger screens */}
            <div className="hidden lg:flex justify-between items-center">
            
                      <ScrollLink to="home" smooth={true} duration={500}>
                        <h1 className="cursor-pointer">FOLLOTECH</h1>
                      </ScrollLink>
                <div className="hidden lg:block">
                    <ul className="flex lg:space-x-20 xl:space-x-24 text-base font-medium items-center ">
                        {/* <li>
                            <Link href="/" className={`${pathname === '/' ? 'text-[#fff]' : ''} transition-all duration-200`}>Home</Link>
                        </li> */}
                        <li className=" cursor-pointer hover:text-green-500 transition-all duration-200">
                            <ScrollLink 
                              to="about"
                              smooth={true}
                              duration={500}
                              spy={true}
                              offset={-50} // Adjust the offset based on your layout
                              activeClass="active-link"
                            >
                                About
                            </ScrollLink>
                        </li>
                        <li className=" cursor-pointer hover:text-green-500 transition-all duration-200">
                            <ScrollLink 
                                 to="HowTo"
                                 smooth={true}
                                 duration={500}
                                 spy={true}
                                 offset={-80} // Adjust the offset based on your layout
                                 activeClass="active-link"
                            >
                                How To Buy
                            </ScrollLink>
                        </li>
                        <li>
                            <Link href="/support" className=" hover:text-green-500 transition-all duration-200">Dexscreener</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-8">
                    <div className=""><Image src={"/images/twitterIcon.svg"} alt={"icons"} width={50} height={50} className="w-8" /></div>
                    <div><Image src={"/images/telegramIcon.svg"} alt={"icons"} width={50} height={50} className="w-8" /></div>
                </div>
            </div>
            {/* smaller screens */}
            <div className="lg:hidden flex  justify-between  items-center">
                    <Link href="/">
                      LOGO
                    </Link>
                <div >
                    {showMenu ? 
                    <button onClick={() => setShowMenu(!showMenu)}><X /></button>
                    :
                    <AlignRight onClick={() => setShowMenu(true)} />

                }
                </div>
               
                <div className={` text-lg fixed top-14  min-h-screen w-full`}>
                    <div  className={`${showMenu ? "right-0 " : "-right-[100%]"} flex flex-col items-center text-black bg-white py-20 transition-all duration-500 min-h-screen max-h-screen ease-in-out px-10 w-full gap-8 fixed top-14 z-50 overflow-y-auto overflow-x-hidden `}>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>Home</Link>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>How to Buy</Link>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>Dex screener</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}