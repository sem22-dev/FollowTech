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
            
                      <Link href="/">
                        {/* <h1 className="cursor-pointer">FOLLOTECH</h1> */}
                        <Image src={"/images/group2.png"} alt={""} width={130} height={200}/>
                      </Link>
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
                            <Link href="https://dexscreener.com/" className=" hover:text-green-500 transition-all duration-200">Dexscreener</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex gap-8">
                    <div className=""><Image src={"/images/twitterIcon.svg"} alt={"icons"} width={50} height={50} className="w-8" /></div>
                    <div><Image src={"/images/telegramIcon.svg"} alt={"icons"} width={50} height={50} className="w-8" /></div>
                </div>
            </div>
            {/* smaller screens */}
      <nav
        style={{ backdropFilter: 'blur(6.7px)' }}
        className={` bg-transparent ${scrolled ? 'bg-opacity-30' : ''} z-50 flex w-full lg:hidden justify-between items-center sticky top-0 py-3 px-4`}
      >
                <h1>FOLLOTECH</h1>
                <div onClick={() => setShowMenu(true)} className="bg-black text-white p-1 rounded-full" >
                    <AlignRight size={20}/>
                </div>
      </nav>

        {showMenu && (
          <div className="fixed  top-0 left-0 right-0 bottom-0 z-50 flex ">
            <div style={{ backdropFilter: 'blur(5.7px)' }} className=" bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
              <button
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 rounded-full p-1 bg-white duration-300 text-black hover:bg-[#bebcbc]"
              >
                <X size={23}/>
              </button>
            <div className="bg-white rounded-lg p-4 text-black text-[20px]  w-full mx-4 mt-14 z-10 h-fit">
              <Link className="block py-4 border-b" onClick={() => setShowMenu(false)} href={'/'}>
                About
              </Link>
              <Link className="block py-4 border-b" onClick={() => setShowMenu(false)} href={'/'}>
                How to Buy
              </Link>
              <Link className="block py-4 border-b" onClick={() => setShowMenu(false)} href={'https://dexscreener.com/'}>
                Dexscreener
              </Link>
            </div>
          </div>
        )}
        </nav>
    )
}