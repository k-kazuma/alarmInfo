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
        <div className="flex justify-around mt-10">
          <Image src="/image.png" width={100} height={100} alt="appIcon" />
          <div>
            <h1 className="mt-2">AlarmScheduler</h1>
            <button className=" block mx-auto button ml-auto py-2.5 px-4 text-xs font-medium text-center rounded-lg my-2">
              <Link href="https://apps.apple.com/us/app/alarmscheduler/id6708228546">
                ダウンロード
              </Link>
            </button>
          </div>
        </div>
        <div className="my-8 p-2">
          <p className="p-1">
            アラームの日時管理に特化した軽量アラームアプリです。
          </p>
          <p className="p-1">
            繰り返し設定中アラームのスキップ機能や、カレンダーUIでのアラーム設置が可能です。
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/inquiry"
            className="w-5/6 backbutton block mx-auto ml-auto py-3 px-4 text-xs font-medium text-center rounded-lg mb-4"
          >
            問合せフォーム
          </Link>
          <Link
            href="mailto:alarm.scheduler@gmail.com"
            className="w-5/6 backbutton block mx-auto ml-auto py-3 px-4 text-xs font-medium text-center rounded-lg"
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
