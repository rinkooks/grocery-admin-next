import UploadBox from "@/components/UploadBox";
import React from "react";
import { IoMdClose } from "react-icons/io";

const AddHomeSlide = () =>{
  return(
   <section className="px-5 py-4">
     <div className="bg-white p-5 shadow-md rounded-md">
     <h2 className="text-[20px] text-gray-700 font-semibold pb-2">Add Category</h2>

     <form className="pt-5 border-t border-[rgba(0,0,0,0.1)]">
      <div className="form-group mb-4 flex flex-col gap-1">
        <span className="text-[15px] text-gray-800">Category Name</span>
        <input type="text" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
          focus:border-[rgba(0,0,0,0.4)] px-3" />   
       </div>
     <div className="flex flex-col gap-1 mt-3">
        <h3 className="text-[16px] text-gray-700 font-semibold">Media & Images</h3> 
        <div className="flex items-center gap-4 mt-2 ">
        <div className="w-[150] h-[120] flex items-center flex-col justify-center border border-[rgba(0,0,0,0.3)]
        bg-gray-100 rounded-md gap-2 relative">
        <img src={"/image-6.png"} className="max-w-full max-h-full object-cover" />
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