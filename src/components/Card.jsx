import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
function Card() {
  return (
    <div>
      <div className="relative w-60 h-72 bg-sky-200 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam
          obcaecati explicabo! Nobis dolore totam.
        </p>
        <div className="footer absolute bottom-0 w-full left-0 ">
          <div className="flex items-center justify-between px-8 py-3 mb-3">
            <h5>0.4MB</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              <LuDownload size=".7em" color="#fff" />
            </span>
          </div>
          <div className="w-full py-4 bg-green-500 flex items-center justify-center">
            <h3 className="text-sm font-semibold">Download Now</h3>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
