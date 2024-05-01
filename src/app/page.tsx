"use client";
import { createUsers } from "@/action";
import { ArrowGrowth } from "@/shared/components/icons/arrow-growth";
import { ArrowUpRight } from "@/shared/components/icons/arrow-up-right";
import { Trophy } from "@/shared/components/icons/trophy";
import { Users } from "@/shared/components/icons/users";
import { Wallet } from "@/shared/components/icons/wallet";
import useTelegramInitData from "@/shared/hooks/useTelegramInitData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TelegramWebApps } from 'telegram-webapps-types';

interface TelegramUser extends TelegramWebApps.WebAppInitData {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const telegramInitData = useTelegramInitData();

  //console.log('Home');
  // setIsLoading(false);

  useEffect(() => {
    if (telegramInitData.user && Object.keys(telegramInitData.user).length !== 0) {
      const {id, first_name, last_name, username} = telegramInitData.user as unknown as TelegramUser;
      if(id && username) {
        const create = async () => {
          await createUsers({
            id: id, 
            first_name: first_name ? first_name : "", 
            last_name: last_name ? last_name : "", 
            username: username
          });
        }
        create();
      } else {
        console.log('я тут епта');
        console.log(id, first_name, last_name, username);
      }
      setIsLoading(false);
    }
  }, [telegramInitData]);

  useEffect(() => {
    if (isLoading || Object.keys(telegramInitData).length === 0) {
      return;
    }
    
  }, [isLoading]);

  if(isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div>Loading App...</div>
      </div>
    )
  }

  return (
    <>
    <main className="flex flex-col px-4 pt-6">
      <div className="mb-1 text-base tracking-[0.15px]">Total balance ($ACTI)</div>
      <div className="flex justify-between items-end mb-[15px]">
        <span className="text-[48px] font-bold leading-[52px]">2 $ACTI</span>
        <span className="text-base pr-[19px] pb-1">~ $0.04</span>
      </div>
      <div className="flex items-center justify-between text-2xl font-bold py-4">
        <div>My tasks</div>
        <div className="text-[#00000061]">7</div>
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="w-full p-4 border-2 border-black rounded-lg bg-[#7FF098] shadow-card relative">
          <div className="flex flex-row items-center justify-between mb-5">
            <div className="flex gap-3 items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#FBE704] border-2 border-black flex items-center justify-center">
                <Image src="/task/referal.png" alt="Реферальная система" width={20} height={20} />
              </div>
              <span className="text-2xl font-bold">Send Gift</span>
            </div>
            <div>
              <ArrowUpRight width="12" height="12" />
            </div>
          </div>
          <div className="text-sm leading-[24px] text-subtitle mb-[">
            Send 1 $ACTI to friend and get 5...
          </div>
          <div className="text-[20px] leading-[28px] font-bold mb-2">+5 $ACTI</div>
          <div className="text-[32px] leading-[48px] font-medium tracking-[0.25px]">Bitcoin</div>
          <div className="absolute flex gap-1 rounded-[16px] bg-[#E4FCE9] px-2 py-1.5 right-4 bottom-[65px] items-center">
            <ArrowGrowth width="20" height="20" />
            <span className="text-[12px] font-medium leading-4 tracking-[0.4px]">+1 $ACTI</span>
          </div>
        </div>
        <div className="w-full p-4 border-2 border-black rounded-lg bg-[#3F97EF] shadow-card relative">
          <div className="flex flex-row items-center justify-between mb-5">
            <div className="flex gap-3 items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-[#FBE704] border-2 border-black flex items-center justify-center">
                <Image src="/task/telegram.png" alt="Реферальная система" width={20} height={20} />
              </div>
              <span className="text-2xl font-bold">Follow Telegram</span>
            </div>
            <div>
              <ArrowUpRight width="12" height="12" />
            </div>
          </div>
          <div className="text-sm leading-[24px] text-subtitle mb-[">
            Subscribe to @actiq_en and get
          </div>
          <div className="text-[20px] leading-[28px] font-bold mb-2">+5 $ACTI</div>
          <div className="text-[32px] leading-[48px] font-medium tracking-[0.25px]">Bitcoin</div>
          <div className="absolute flex gap-1 rounded-[16px] bg-[#E4FCE9] px-2 py-1.5 right-4 bottom-[65px] items-center">
            <ArrowGrowth width="20" height="20" />
            <span className="text-[12px] font-medium leading-4 tracking-[0.4px]">+1%</span>
          </div>
        </div>
      </div>
    </main>
    <div className="items-center flex justify-around rounded-[100px] border-2 border-black fixed bottom-8 left-0 right-0 m-auto bg-white w-full max-w-[271px] h-[80px]">
      <div>
          <Link href="/score">
              <Trophy width="22" height="22" />
          </Link>
      </div>
      <div>
          <Link href="/giftsender">
              <Users width="25" height="21" />
          </Link>
      </div>
      <div className="bg-[#F2F2F2] border-2 border-black rounded-[50px] py-2 px-3">
          <Link href="/" className="flex items-center gap-2">
              <Wallet width="20" height="18" />
              <span className="text-[12px] leading-[16px] tracking-[0.4px] font-bold">Wallet</span>
          </Link>
      </div>
    </div>
    </>
  );
}
