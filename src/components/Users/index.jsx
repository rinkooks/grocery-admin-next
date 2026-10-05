"use client"
import { Button } from "@mui/material";
import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select  from '@mui/material/Select';
import Search from "../Search";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Image from "next/image";
const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
import Rating from '@mui/material/Rating';
import { RiEdit2Line } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineDateRange, MdOutlineMail, MdOutlinePhone } from "react-icons/md";


const columns = [
  { id: 'ID', label: 'ID', minWidth: 40 },
  { id: 'USER', label: 'USER', minWidth: 180 },
  { id: 'PHONE NO.', label: 'PHONE NO.', minWidth: 100 },
  { id: 'CREATED AT', label: 'CREATED AT', minWidth: 100 }, 
  { id: 'ACTIONS', label: 'ACTIONS', minWidth: 200 },
]  

const UsersComponents = () =>{
   const [selectCategory, setSelectCategory] = useState('');

  const handleChangeCategory = (event) => {
    setSelectCategory(event.target.value);
  };
  return(
    <section className="w-full"> 

      <div className="w-full p-4 rounded-md shadow-md bg-white mt-3">
        <div className="flex items-center justify-between mb-3">
          <div className="col1">
            <h6 className="text-[16px] mb-1 font-semibold">Users</h6>
          </div>
          <div className="col2">
             <Search placeholder="Search user..." />
          </div>
        </div>

        <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
           </TableRow>
          </TableHead>
          <TableBody>
           <TableRow>
            <TableCell><Checkbox {...label} size="small" /> </TableCell>
             <TableCell>
              <div className="flex items-center gap-3">  
              <div className="img p-1 bg-white rounded-md">
                <Image src={"/product1.png"} alt="" width={60} height={80} className="object-cover" /></div>
              <div className="info">
                 <h3 className="text-[14px] text-gray-800 font-semibold">Rinkoo Sharma</h3>
                 <span className="text-gray-700 text-[14px] flex items-center gap-1">
                   <MdOutlineMail size={20} /> uideveloper1786@gmail.com</span>  
              </div>    
             </div> 
             </TableCell>            
             <TableCell>
              <div className="flex items-center gap-2">
                <MdOutlinePhone size={16} />
                 <span className="text-gray-700 text-[14px]"> +91-9876543210</span>
              </div>
             </TableCell>
             <TableCell>
              <div className="flex items-center gap-2">
                <MdOutlineDateRange size={16} />
                 <span className="text-gray-700 text-[14px]"> 2025-05-18</span>
              </div>
             </TableCell>            
             <TableCell>
               <div className="flex items-center gap-2">
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><RiEdit2Line size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><IoEyeOutline size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><FaRegTrashAlt size={16} /></Button>
               </div>
             </TableCell>
           </TableRow>

           <TableRow>
            <TableCell><Checkbox {...label} size="small" /> </TableCell>
             <TableCell>
              <div className="flex items-center gap-3">  
              <div className="img p-1 bg-white rounded-md">
                <Image src={"/product1.png"} alt="" width={60} height={80} className="object-cover" /></div>
              <div className="info">
                 <h3 className="text-[14px] text-gray-800 font-semibold">Rinkoo Sharma</h3>
                 <span className="text-gray-700 text-[14px] flex items-center gap-1">
                   <MdOutlineMail size={20} /> uideveloper1786@gmail.com</span>  
              </div>    
             </div> 
             </TableCell>            
             <TableCell>
              <div className="flex items-center gap-2">
                <MdOutlinePhone size={16} />
                 <span className="text-gray-700 text-[14px]"> +91-9876543210</span>
              </div>
             </TableCell>
             <TableCell>
              <div className="flex items-center gap-2">
                <MdOutlineDateRange size={16} />
                 <span className="text-gray-700 text-[14px]"> 2025-05-18</span>
              </div>
             </TableCell>            
             <TableCell>
               <div className="flex items-center gap-2">
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><RiEdit2Line size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><IoEyeOutline size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><FaRegTrashAlt size={16} /></Button>
               </div>
             </TableCell>
           </TableRow>
           <TableRow>
            <TableCell><Checkbox {...label} size="small" /> </TableCell>
             <TableCell>
              <div className="flex items-center gap-3">  
              <div className="img p-1 bg-white rounded-md">
                <Image src={"/product1.png"} alt="" width={60} height={80} className="object-cover" /></div>
              <div className="info">
                 <h3 className="text-[14px] text-gray-800 font-semibold">Rinkoo Sharma</h3>
                 <span className="text-gray-700 text-[14px] flex items-center gap-1">
                   <MdOutlineMail size={20} /> uideveloper1786@gmail.com</span>  
              </div>    
             </div> 
             </TableCell>            
             <TableCell>
              <div className="flex items-center gap-2">
                <MdOutlinePhone size={16} />
                 <span className="text-gray-700 text-[14px]"> +91-9876543210</span>
              </div>
             </TableCell>
             <TableCell>
              <div className="flex items-center gap-2">
                <MdOutlineDateRange size={16} />
                 <span className="text-gray-700 text-[14px]"> 2025-05-18</span>
              </div>
             </TableCell>            
             <TableCell>
               <div className="flex items-center gap-2">
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><RiEdit2Line size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><IoEyeOutline size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><FaRegTrashAlt size={16} /></Button>
               </div>
             </TableCell>
           </TableRow>
           <TableRow>
            <TableCell><Checkbox {...label} size="small" /> </TableCell>
             <TableCell>
              <div className="flex items-center gap-3">  
              <div className="img p-1 bg-white rounded-md">
                <Image src={"/product1.png"} alt="" width={60} height={80} className="object-cover" /></div>
              <div className="info">
                 <h3 className="text-[14px] text-gray-800 font-semibold">Rinkoo Sharma</h3>
                 <span className="text-gray-700 text-[14px] flex items-center gap-1">
                   <MdOutlineMail size={20} /> uideveloper1786@gmail.com</span>  
              </div>    
             </div> 
             </TableCell>            
             <TableCell>
              <div className="flex items-center gap-2">
                <MdOutlinePhone size={16} />
                 <span className="text-gray-700 text-[14px]"> +91-9876543210</span>
              </div>
             </TableCell>
             <TableCell>
              <div className="flex items-center gap-2">
                <MdOutlineDateRange size={16} />
                 <span className="text-gray-700 text-[14px]"> 2025-05-18</span>
              </div>
             </TableCell>            
             <TableCell>
               <div className="flex items-center gap-2">
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><RiEdit2Line size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><IoEyeOutline size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><FaRegTrashAlt size={16} /></Button>
               </div>
             </TableCell>
           </TableRow>
          
         
          </TableBody>
        </Table>
      </TableContainer>
   
      </div>
    </section>
  )  
}

export default UsersComponents;