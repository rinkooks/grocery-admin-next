import React from "react";
import { FaRegImage } from "react-icons/fa";

const UploadBox = () =>{
  return(
    <div className="w-[150] h-[120] flex items-center flex-col justify-center border border-dashed border-[rgba(0,0,0,0.1)]
    p-5 bg-gray-100 rounded-md gap-2 relative">
       <FaRegImage size={40} className="text-gray-400" />
       <span className="text-gray-600 text-[13px]">Image Upload</span>
       <input type="file" className="absolute top-0 left-0 bottom-0 right-0 z-50 opacity-0" />
    </div>
  )  
}

export default UploadBox;