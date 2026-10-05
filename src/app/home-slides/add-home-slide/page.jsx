import UploadBox from "@/components/UploadBox";
import React from "react";
import { IoMdClose } from "react-icons/io";

const AddHomeSlide = () =>{
  return(
   <section className="px-5 py-4">
     <div className="bg-white p-5 shadow-md rounded-md">
     <h2 className="text-[20px] text-gray-700 font-semibold">Add Product</h2>

     <form className="mt-2 border-t border-[rgba(0,0,0,0.1)]">
     <div className="flex flex-col gap-1 mt-3">
        <h3 className="text-[16px] text-gray-700 font-semibold">Media & Images</h3>
        <div className="flex items-center gap-4 mt-2 ">

        <div className="w-[150] h-[120] flex items-center flex-col justify-center border border-[rgba(0,0,0,0.3)]
        bg-gray-100 rounded-md gap-2 relative">
        <img src={"/product1.png"} className="max-w-full max-h-full object-cover" />
        <span className="flex items-center justify-center bg-red-700 text-white absolute top-[-5] right-[-8]
        rounded-full cursor-pointer"><IoMdClose size={20} className="text-white" /> </span>
        </div>

          <UploadBox />
       </div>
      </div>

     </form>
     </div>
   </section> 
  )  
}

export default AddHomeSlide;