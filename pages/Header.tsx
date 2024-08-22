import React from "react";
import Link from "next/link";

function Header() {
  return (
    <>
      <div className="header p-2">
        <Link href={"/"}>
          <h2 className="text-center">AlarmSchedurer</h2>
        </Link>
      </div>
    </>
  );
}

export default Header;
