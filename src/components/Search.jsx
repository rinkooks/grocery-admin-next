import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search =(props)=>{
   return(
    <>
    <div className="searh bg-[#e6e6e6] w-full max-w-[500] h-[50] rounded-md px-4 relative border border-[rgba(0,0,0,0.1)] hover:border-[rgba(0,0,0,0.3)]">
      <input type="text" className="w-full h-full outline-none border-0" placeholder={props.placeholder} />
      <button className="w-10 h-10 rounded-full absolute top-1 right-2 z-10 flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <IoSearchOutline size={25} /></button>
    </div>
    </>
   )  
}

export default Search;