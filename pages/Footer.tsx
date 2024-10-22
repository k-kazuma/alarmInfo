import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="absolute bottom-0 p-3 text-slate-400 max-w-80 mx-auto">
      <Link href={"/privacypolicy"} type="submit" className="text-slate-400">
        プライバシーポリシー
      </Link>
      <p className="text-center">&copy;KazumaKumagai.2024</p>
    </div>
  );
}

export default Footer;
