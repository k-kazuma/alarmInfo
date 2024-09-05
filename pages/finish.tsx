import React from "react";
import Header from "./Header";
import Link from "next/link";

function finish() {
  return (
    <>
      <div className="p-1 w-screen h-screen overflow-hidden">
        <Header />
        <h2 className="mt-10 text-center">問合せありがとうございます。</h2>
        <div className="p-2 h-4/5 flex justify-center items-center">
          <div>
            <p>送信いただいた内容を踏まえてサービス改善に努めます。</p>
            <p>また何かお気づきの事があれば是非問い合わせください。</p>
            <div className="flex justify-center items-center">
              <Link
                href={{
                  pathname: `/`,
                }}
                content="aaa"
                type="submit"
                className="w-10/12 mt-20 mb-2 button items-center py-2.5 px-4 text-xs font-medium text-center rounded-lg"
              >
                Topへ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default finish;
