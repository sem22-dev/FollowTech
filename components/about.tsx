"use client"

import Image from "next/image";
import { Rocket, DollarSign, PieChart, Loader } from "lucide-react"; // Import appropriate icons
import { useState } from "react";

export default function AboutUs(){

    const officialAddress = '0x57841dCD3d3B1668A8085E748B3648C81C86f777';
    const [isCopied, setIsCopied] = useState(false);
  
    const copyToClipboard = () => {
      // Create a textarea element and set its value to the official address
      const textarea = document.createElement('textarea');
      textarea.value = officialAddress;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
  
      // Select and copy the text inside the textarea
      textarea.select();
      document.execCommand('copy');
  
      // Remove the temporary textarea
      document.body.removeChild(textarea);
  
      // Set the copied state to true and reset after a short delay
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 5000);
    };

    return(
        <main id="about" className=" min-h-screen flex justify-center py-24 border-b rounded-b-2xl border-[#3e3e3e] rounded-e-lg px-4   ">
           <div className="flex flex-col items-center gap-12">
                <div className ="Btn "></div>
                <h1 className="text-center text-4xl text-white leading-relaxed">
                    Welcome To FOLLOTECH (<span className="text-[#4BDE80]">$FOL</span>) <br />
                    Twitter's Follower-Powered Coin <br />
                </h1>


            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 ">
                <div className="cards w-[370px] md:w-[500px]">
                        <figure className="card">
                            <figcaption className="card_title flex items-center gap-4">
                            <Rocket color="white" size={50} />
                                <div className="">
                                    <h1 className="text-3xl py-2">Burnt LP</h1>
                                    <p className="text-gray-500">100% Burnt Liquidity Pool</p>
                                </div>
                            </figcaption>
                        </figure>
                </div>

                <div className="cards">
                        <figure className="card">
                            <figcaption className="card_title flex items-center gap-4">
                            <DollarSign color="white" size={50} />
                                <div>
                                    <h1 className="text-3xl py-2">Total Tax</h1>
                                    <p className="text-gray-500">0% Buy and Sell Tax</p>
                                </div>
                            </figcaption>
                        </figure>
                </div>

                <div className="cards">
                        <figure className="card">
                            <figcaption className="card_title flex items-center gap-4">
                            <PieChart color="white" size={50} />
                                <div>
                                    <h1 className="text-3xl py-2">Total Supply</h1>
                                    <p className="text-gray-500">10,000,000,000</p>
                                </div>
                            </figcaption>
                        </figure>
                </div>

                <div className="cards">
                        <figure className="card">
                            <figcaption className="card_title flex items-center gap-4">
                            <Loader color="white" size={50} />
                                <div>
                                    <h1 className="text-3xl py-2">LOADING...</h1>
                                    <p className="text-gray-500">   </p>
                                </div>
                            </figcaption>
                        </figure>
                </div>


                
            </div>

            {/* <div className='bg-[#1a1a1a] text-white px-8 py-4 text-lg font-bold border border-[#292929] rounded-lg'>
            <h1 className="font-smooch italic text-3xl">
                        <span className="text-[#4BDE80]">$FOL</span> Official Address
                    </h1>
              <div className=" flex flex-col md:flex-row gap-12 py-6">
                    <p className="border border-[#454545] rounded-xl px-4 py-4">{officialAddress}</p>
                    <button onClick={copyToClipboard} className="bg-[#4BDE80] font-light px-6 rounded-xl  text-black">
                        {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div> */}
                
           </div>
        </main>
    )
}