
// HowItWorks.js

import React from 'react';

export default function HowItWorks() {
  return (
    <main id='HowTo' className=" text-white px-4 md:px-6 xl:px-28 2xl:px-64 py-24 border-t border-[#313131] rounded-t-xl h-screen">
        <div className=' mb-12 text-center w-full mx-auto'>
            <h1 className='bg-[#1a1a1a] inline-block px-8 py-4 text-lg font-bold border border-[#292929] rounded-lg '>HOW TO BUY</h1>
        </div>
            <div>
                <div className="cardHow p-6 flex flex-col text-left bg-white rounded-md shadow-md my-12">
                    <h2 className="text-xl font-bold mb-4">
                        1. Create Solana Wallet
                    </h2>
                    <p className="text-gray-400 font-light">
                        Create a Phantom or Solflare Wallet using either a desktop computer or an iOS/Android mobile device. 
                        That will allow you to buy, sell, send, and receive $FOL.
                    </p>
                </div>

                <div className="cardHow p-6 flex flex-col text-left bg-white rounded-md shadow-md my-12">
                    <h2 className="text-xl font-bold mb-4">
                        2. Send SOL to your wallet
                    </h2>
                    <p className="text-gray-400 font-light">
                    You can buy SOLANA (SOL) or transfer it from exchanges like Coinbase, Binance, etc.
                    </p>
                </div>

                <div className="cardHow p-6 flex flex-col text-left bg-white rounded-md shadow-md my-12">
                    <h2 className="text-xl font-bold mb-4">
                        3. Connect & Swap
                    </h2>
                    <p className="text-gray-400 font-light">
                    Go to Jupiter (jup.ag) and connect your wallet by clicking ‘Connect wallet’ and selecting MetaMask. Press ‘Select a token’ and enter the token contract address to find FOL and start your swap from SOL to FOL. Buy on Jupiter

                    </p>
                </div>
            </div>

    </main>
  );
}
