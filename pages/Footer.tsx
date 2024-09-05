import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <Link href={"/privacypolicy"} type="submit" className="text-slate-400">
      プライバシーポリシー
    </Link>
  );
}

export default Footer;
