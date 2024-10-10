import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-h-screen overflow-hidden">
      <div className="h-screen">
        <Header />
        <div className="flex">
          <Image src="/image.png" width={100} height={100} alt="appIcon" />
          <div>
            <h1>AlarmScheduler</h1>
            <button className="rounded-sm	bg-b">
              <Link href="https://apps.apple.com/us/app/alarmscheduler/id6708228546">
                ダウンロード
              </Link>
            </button>
          </div>
        </div>
        <div className="mt-5">
          <Link
            href="/inquiry"
            className="w-5/6 block mx-auto button ml-auto py-2.5 px-4 text-xs font-medium text-center rounded-lg mb-2"
          >
            問合せフォーム
          </Link>
          <Link
            href="mailto:alarm.scheduler@gmail.com"
            className="w-5/6 block mx-auto button ml-auto py-2.5 px-4 text-xs font-medium text-center rounded-lg"
          >
            メールで問合せ
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
}

//adfafaf
