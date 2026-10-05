"use Client"
import { FaRegCalendarAlt } from "react-icons/fa";
import { Button } from "@mui/material";
import { TfiAngleDown } from "react-icons/tfi";
import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const OrderRow = () =>{
 const [expendIndex, setExpendIndex] = useState(false);
 const [orderStatus, setOrderStatus] = useState('none');

 const handleChange = (event) => {
    setOrderStatus(event.target.value);
  };
    return(
     <>
     <tr class="hover:bg-gray-50">
        <td class="px-4 py-2 font-medium text-gray-700">
          <Button className="w-[40]! min-w-[40]! h-[40]! rounded-full! font-bold! bg-gray-100! text-gray-600!
           hover:bg-gray-300!" onClick={()=>setExpendIndex(!expendIndex)}>
            <TfiAngleDown size={20} className={`transition-all ${expendIndex === true ? 'rotate-180' : ''}`} />
          </Button>
         </td> 
        <td class="px-4 py-2 font-medium text-gray-700"> #3413 </td>
        <td class="px-4 py-2 text-gray-600"> 
          <div className="flex items-center gap-3 w-[230]">
            <div className="rounded-circle w-[40] h-[40]"><img src={"/profile.jpg"} alt="image" /></div>
            <div className="info flex flex-col gap-1">
              <span className="text-gray-800">Dr. Ernest Fritsch-shanahan</span>
              <span className="text-gray-500">info@gmail.com</span>  
            </div>
          </div>
         </td>
        <td class="px-4 py-2 text-gray-600 whitespace-nowrap"> pay_RLSUjirStvN9Zu </td>
        <td class="px-4 py-2 text-gray-600 whitespace-nowrap"> +91-9876543210 </td>
        <td class="px-4 py-2 text-gray-600"> 
          <div className="w-[250]">
            <span className="bg-gray-100 rounded-md px-2 py-1 border border-[rgba(0,0,0,0.1)]">Home</span>
            <p className="pt-2">H No 222 Street No 6 Adarsh Mohilla Delhi India 110053</p> 
          </div>
        </td>
        <td class="px-4 py-2 text-gray-600"> 110015 </td>
        <td class="px-4 py-2 text-gray-600"> $540 </td>
        <td class="px-4 py-2 text-primary font-bold whitespace-nowrap">67ced8a3d9ec6f3a176344cf</td>
        <td class="px-4 py-2 ">
         <Select value={orderStatus} label="Age" onChange={handleChange} size="small">
            <MenuItem value="none"><em>None</em></MenuItem>
            <MenuItem value={"Pending"}>Pending</MenuItem>
            <MenuItem value={"Confirm"}>Confirm</MenuItem>
            <MenuItem value={"Delivered"}>Delivered</MenuItem>
          </Select>
        </td>
        <td class="px-4 py-2 text-gray-600 whitespace-nowrap">
         <div className="flex items-center gap-1"><FaRegCalendarAlt size={20} />  2026-09-30 </div></td>
        <td class="whitespace-nowrap px-6 py-4 text-right">
          <button class="mr-3 font-medium text-blue-600 hover:text-blue-800"> Edit </button>
          <button class="font-medium text-red-600 hover:text-red-800"> Delete </button>
         </td>
       </tr>
       {
        expendIndex === true &&       
       <tr className="bg-gray-100">
        <td colSpan={3} className="p-4">
           <div className="flex items-center gap-2">
             <div className="img rounded-md overflow-hidden w-[80] h-[80]">
               <img src={"/profile.jpg"} alt="image" width={80} height={80} /> 
             </div>
             <div className="info">
                <h2 className="text-gray-800 text-[15px] font-medium">Tasty Metal Shirt</h2>
                <span className="text-gray-600 text-[14px]">Shoes</span>
                <span className="text-gray-600 text-[14px]">Unit Price: $410.00</span>
             </div>
           </div>
        </td>
        <td colSpan={1} className="p-4"> X2</td>
        <td colSpan={1} className="p-4"><span className="text-gray-800 font-medium"> $820 </span></td>
        <td className="p-4"> </td>
        <td className="p-4"> </td>
        <td className="p-4"> </td>  
        <td className="p-4"> </td>
        <td className="p-4"> </td>
        <td className="p-4"> </td>
        <td className="p-4"> </td>
       </tr>
       }
     </>   
    )
}


export default OrderRow;