"use client"
import { Button } from "@mui/material";
import React, { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Image from "next/image";
const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };
import { RiEdit2Line } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import Link from "next/link";

const columns = [ 
  { id: 'IMAGES', label: 'IMAGES', minWidth: 300 }, 
  { id: 'CATEGORYNAME', label: 'CATEGORY NAME', minWidth: 300 },   
  { id: 'ACTIONS', label: 'ACTIONS', minWidth: 200 },
]  

const Category = () =>{
   const [selectCategory, setSelectCategory] = useState('');

  const handleChangeCategory = (event) => {
    setSelectCategory(event.target.value);
  };
  return(
    <section className="px-5 py-5">
      <div className="flex items-center justify-between">
       <h2 className="text-[20px] text-gray-800 font-semibold">Category</h2> 
       <Link href={"/category/add-category"}> 
        <Button className="btn-g" size="small">Add Category</Button></Link>
      </div>

      <div className="w-full p-4 rounded-md shadow-md bg-white mt-3">
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
             <TableCell className="p-0! py-2!">
              <div className="flex items-center gap-3">  
              <div className="img p-1 bg-white rounded-md">
                <Image src={"/image-6.png"} alt="" width={66} height={66} className="object-cover max-w-[350] max-h-[134]" /></div>                 
             </div> 
             </TableCell>
             <TableCell>Fruits & Vegetables</TableCell>
             <TableCell>
               <div className="flex items-center gap-2">
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><RiEdit2Line size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><IoEyeOutline size={20} /></Button>
                 <Button className="w-[40]! h-[40]! min-w-[40]! rounded-full! text-gray-700!"><FaRegTrashAlt size={16} /></Button>
               </div>
             </TableCell>
           </TableRow> 
           <TableRow>           
             <TableCell className="p-0!">
              <div className="flex items-center gap-3">  
              <div className="img p-1 bg-white rounded-md">
                <Image src={"/image-7.png"} alt="" width={66} height={66} className="object-cover max-w-[350] max-h-[134]" /></div>                 
             </div> 
             </TableCell>
             <TableCell>Fruits & Vegetables</TableCell>
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

export default Category;