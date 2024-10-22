import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center gap-6 mt-72">
      <div className="h-10 w-10 animate-spin border-[5px] border-orange-400 rounded-full  border-t-transparent"></div>
      <p className="text-[30px] font-weight">Loading</p>
    </div>
  );
}

export default Loading;
