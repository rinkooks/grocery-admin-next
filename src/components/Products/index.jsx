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
import Link from "next/link";

const columns = [
  { id: 'ID', label: 'ID', minWidth: 40 },
  { id: 'PRODUCT', label: 'PRODUCT', minWidth: 180 },
  { id: 'CATEGORY', label: 'CATEGORY', minWidth: 100 },
  { id: 'PRICE', label: 'PRICE', minWidth: 100 },
  { id: 'STOCK', label: 'STOCK', minWidth: 100 },
  { id: 'RATING', label: 'RATING', minWidth: 100 },
  { id: 'ACTIONS', label: 'ACTIONS', minWidth: 200 },
]  

const ProductsComponents = () =>{
   const [selectCategory, setSelectCategory] = useState('');

  const handleChangeCategory = (event) => {
    setSelectCategory(event.target.value);
  };
  return(
    <section className="w-full py-4">
      <div className="flex items-center justify-between">
       <h2 className="text-[20px] text-gray-800 font-semibold">Products</h2> 
       <Link href={"/products-list/add-product"}> 
        <Button className="btn-g" size="small">Add Product</Button></Link>
      </div>

      <div className="w-full p-4 rounded-md shadow-md bg-white mt-3">
        <div className="flex items-center justify-between mb-3">
          <div className="col1">
            <h6 className="text-[16px] mb-1 font-semibold">Category By</h6>
             <Select value={selectCategory} displayEmpty onChange={handleChangeCategory}
                inputProps={{'aria-label': 'Without label'}}
                size="small" className="w-full">
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
          </div>
          <div className="col2">
             <Search placeholder="Search Product..." />
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
                 <h3 className="text-[14px] text-gray-800">Fortune Sunlite Refined Sunflower</h3>
                 <span className="text-gray-700 text-[13px]">Lays</span>  
              </div>    
             </div> 
             </TableCell>
             <TableCell>Grocery</TableCell>
             <TableCell>
              <div className="flex flex-col">
                 <span className="text-[#CB0000] text-[14px] font-semibold">$25.99</span>
                 <span className="text-[#A4A4A4] text-[14px] font-semibold line-through">$38.10</span>
              </div>
             </TableCell>
             <TableCell><span className="text-primary font-bold">4355 </span></TableCell>
             <TableCell><Rating name="read-only" value={4} readOnly size="small" /></TableCell>
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
                 <h3 className="text-[14px] text-gray-800">Fortune Sunlite Refined Sunflower</h3>
                 <span className="text-gray-700 text-[13px]">Lays</span>  
              </div>    
             </div> 
             </TableCell>
             <TableCell>Grocery</TableCell>
             <TableCell>
              <div className="flex flex-col">
                 <span className="text-[#CB0000] text-[14px] font-semibold">$25.99</span>
                 <span className="text-[#A4A4A4] text-[14px] font-semibold line-through">$38.10</span>
              </div>
             </TableCell>
             <TableCell><span className="text-primary font-bold">4355 </span></TableCell>
             <TableCell><Rating name="read-only" value={4} readOnly size="small" /></TableCell>
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
                 <h3 className="text-[14px] text-gray-800">Fortune Sunlite Refined Sunflower</h3>
                 <span className="text-gray-700 text-[13px]">Lays</span>  
              </div>    
             </div> 
             </TableCell>
             <TableCell>Grocery</TableCell>
             <TableCell>
              <div className="flex flex-col">
                 <span className="text-[#CB0000] text-[14px] font-semibold">$25.99</span>
                 <span className="text-[#A4A4A4] text-[14px] font-semibold line-through">$38.10</span>
              </div>
             </TableCell>
             <TableCell><span className="text-primary font-bold">4355 </span></TableCell>
             <TableCell><Rating name="read-only" value={4} readOnly size="small" /></TableCell>
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
                 <h3 className="text-[14px] text-gray-800">Fortune Sunlite Refined Sunflower</h3>
                 <span className="text-gray-700 text-[13px]">Lays</span>  
              </div>    
             </div> 
             </TableCell>
             <TableCell>Grocery</TableCell>
             <TableCell>
              <div className="flex flex-col">
                 <span className="text-[#CB0000] text-[14px] font-semibold">$25.99</span>
                 <span className="text-[#A4A4A4] text-[14px] font-semibold line-through">$38.10</span>
              </div>
             </TableCell>
             <TableCell><span className="text-primary font-bold">4355 </span></TableCell>
             <TableCell><Rating name="read-only" value={4} readOnly size="small" /></TableCell>
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

export default ProductsComponents;