import React from "react";  
import { TbUsers } from "react-icons/tb";
import Box from "./box";
import { GoGift } from "react-icons/go";
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineCategory } from "react-icons/md";

const DashboardBoxes = () =>{
  return(
   <div className="grid grid-cols-4 gap-6">
      <Box title="Total Users" 
       count="4345" 
       icon={<TbUsers size={35} className="text-white ml-auto" />} 
       bg="bg-[#10b981]" 
       hoverBg="bg-[#0ea875]" 
       link="/users"
       />

       <Box title="Total Orders" 
       count="345" 
       icon={<GoGift size={35} className="text-white ml-auto" />} 
       bg="bg-[#3872fa]" 
       link="/orders"
       />

       <Box title="Total Products" 
       count="4345" 
       icon={<LiaProductHunt size={35} className="text-white ml-auto" />} 
       bg="bg-[#4f49e4]" 
       link="/products"
       />

       <Box title="Total Category" 
       count="18" 
       icon={<MdOutlineCategory size={35} className="text-white ml-auto" />} 
       bg="bg-[#f22c61]" 
       link="/category"
       />
   </div> 
  )  
}

export default DashboardBoxes