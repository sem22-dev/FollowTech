import Image from "next/image";
import { Rocket, DollarSign, PieChart, Loader } from "lucide-react"; // Import appropriate icons


export default function AboutUs(){
    return(
        <main id="about" className=" min-h-screen flex justify-center py-24 border-b rounded-b-2xl border-[#3e3e3e] rounded-e-lg">
           <div className="flex flex-col items-center gap-12">
                <div className ="Btn "></div>
                <h1 className="text-center text-4xl text-white leading-relaxed">
                    Welcome To FOLLOTECH ($FOL) <br />
                    Twitter's Follower-Powered Coin <br />
                </h1>


            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="cards">
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

                
           </div>
        </main>
    )
}