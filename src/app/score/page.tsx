import { NavigationArrow } from "@/shared/components/icons/navigation-arrow";
import Image from "next/image";
import Link from "next/link";

export default function Score() {
    return (
        <main className="px-4 py-4">
            <div className="flex justify-between items-center w-full pt-3 mb-[39px]">
                <Link href="/" className="flex items-center">
                    <NavigationArrow width="22" height="24" className="rotate-180" />
                    <span className="text-[16px] leading-[24px] tracking-[0.15px] text-[#16C03C]">Wallet</span>
                </Link>
                <div className="text-[16px] leading-[24px] tracking-[0.15px] font-bold">Score</div>
                <Link href="/giftsender" className="flex items-center">
                    <span className="text-[16px] leading-[24px] tracking-[0.15px] text-[#16C03C]">Giftsender</span>
                    <NavigationArrow width="22" height="24" />
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <div className="bg-[#7FF098] border-2 border-black rounded-[16px] p-4 w-full flex items-center justify-between">
                    <div className="flex gap-[12px]">
                        <div className="w-[40px] h-[40px] rounded-[60px] shadow-card">
                            <Image src="/score/photo1.png" width={40} height={40} alt="Score" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[16px] leading-[24px] font-bold tracking-[0.15px]">Sergey Popov</span>
                            <span className="text-[14px] leading-[20px] font-medium tracking-[0.25px]">@trubolaz</span>
                        </div>
                    </div>
                    <div className="text-[16px] leading-[24px] font-bold">$ACTI 5 288. <span className="font-light">00</span></div>
                </div>
                <div className="bg-[#EE77F9] border-2 border-black rounded-[16px] p-4 w-full flex items-center justify-between">
                    <div className="flex gap-[12px]">
                        <div className="w-[40px] h-[40px] rounded-[60px] shadow-card">
                            <Image src="/score/photo1.png" width={40} height={40} alt="Score" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[16px] leading-[24px] font-bold tracking-[0.15px]">Michael Aprossine</span>
                            <span className="text-[14px] leading-[20px] font-medium tracking-[0.25px]">@miguel_aprossine</span>
                        </div>
                    </div>
                    <div className="text-[16px] leading-[24px] font-bold">$ACTI 5 288. <span className="font-light">00</span></div>
                </div>
            </div>
        </main>
    )
}