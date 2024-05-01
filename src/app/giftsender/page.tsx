"use client";
import { NavigationArrow } from "@/shared/components/icons/navigation-arrow";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Giftsender() {
    const [count, setCount] = useState(5);
    return (
        <main className="px-4 py-4">
            <div className="flex justify-between items-center w-full pt-3 mb-[39px]">
                <Link href="/" className="flex items-center">
                    <NavigationArrow width="22" height="24" className="rotate-180" />
                    <span className="text-[16px] leading-[24px] tracking-[0.15px] text-[#16C03C]">Wallet</span>
                </Link>
                <div className="text-[16px] leading-[24px] tracking-[0.15px] font-bold">Giftsender</div>
                <Link href="/score" className="flex items-center">
                    <span className="text-[16px] leading-[24px] tracking-[0.15px] text-[#16C03C]">Score</span>
                    <NavigationArrow width="22" height="24" />
                </Link>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center mb-[73px]">
                <Image src="/giftsender-icon.png" width={112} height={115} alt="giftsender" />
                <div className="text-[60px] font-bold leading-[72px] tracking-[-0.5px]">{count} $ACTI</div>
                <div className="text-[16px] leading-[24px] tracking-[0.15px]">~ $0.02</div>
            </div>
            <div className="flex justify-between gap-[15px] mb-4">
                <button className="w-full max-w-[78px] border-2 border-black rounded-[20px] px-4 py-2 text-[14px] leading-[20px] font-medium tracking-[0.25px]" onClick={() => setCount(5)}>5</button>
                <button className="w-full max-w-[78px] border-2 border-black rounded-[20px] px-4 py-2 text-[14px] leading-[20px] font-medium tracking-[0.25px]" onClick={() => setCount(10)}>10</button>
                <button className="w-full max-w-[78px] border-2 border-black rounded-[20px] px-4 py-2 text-[14px] leading-[20px] font-medium tracking-[0.25px]" onClick={() => setCount(15)}>15</button>
                <button className="w-full max-w-[78px] border-2 border-black rounded-[20px] px-4 py-2 text-[14px] leading-[20px] font-medium tracking-[0.25px]" onClick={() => setCount(20)}>20</button>
            </div>
            <div className="text-center border-2 border-black shadow-card bg-[#EE77F9] rounded-[16px] py-4 px-4 text-[16px] leading-[24px] font-bold tracking-[0.15px]">DONATE 1 $ACTI 2 FRIEND and GET 5 $ACTI</div>
        </main>
    )
}