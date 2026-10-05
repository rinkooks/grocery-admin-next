"use client"
import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from "@/components/UploadBox";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";

const AddProduct = () =>{
 const [categoryVal, setCategoryVal] = useState('');
 const handleChangeCategory = (event) => {
    setCategoryVal(event.target.value);
  };   
 const [isFeaturedVal, setIsFeaturedVal] = useState('');
 const handleChangeFeaturedVal = (event) => {
    setIsFeaturedVal(event.target.value);
  };
  
const [value, setValue] = useState(1);  
   return(
    <div className="px-5 py-4">
      <div className="bg-white p-5 shadow-md rounded-md">
        <h2 className="text-[20px] text-gray-700 font-semibold">Add Product</h2>
         
         <form className="mt-5">
          <div className="form-group mb-4 flex flex-col gap-1">
            <span className="text-[15px] text-gray-800">Product Name</span>
            <input type="text" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
            focus:border-[rgba(0,0,0,0.4)] px-3" />   
          </div>

          <div className="form-group mb-4 flex flex-col gap-1">
            <span className="text-[15px] text-gray-800">Product Description</span>
            <textarea type="text" className="w-full h-[100] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
            focus:border-[rgba(0,0,0,0.4)] px-3 py-2" />   
          </div> 

          <div className="grid grid-cols-4 gap-4">
            <div className="col1 flex flex-col gap-1">
             <span className="text-[15px] text-gray-800">Product Category</span>   
             <Select value={setCategoryVal} onChange={handleChangeCategory}
                displayEmpty size="small">
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div className="form-group mb-4 flex flex-col gap-1">
            <span className="text-[15px] text-gray-800">Product Price</span>
            <input type="number" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
            focus:border-[rgba(0,0,0,0.4)] px-3 text-[14px]" />   
           </div>
            <div className="form-group mb-4 flex flex-col gap-1">
            <span className="text-[15px] text-gray-800">Product Old Price</span>
            <input type="number" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
            focus:border-[rgba(0,0,0,0.4)] px-3 text-[14px]" />   
           </div>
            <div className="col1 flex flex-col gap-1">
             <span className="text-[15px] text-gray-800">Is Featured</span>   
             <Select value={setIsFeaturedVal} onChange={handleChangeFeaturedVal}
                displayEmpty size="small">               
                <MenuItem value={10}>True</MenuItem>
                <MenuItem value={20}>False</MenuItem>                
             </Select>
            </div>
            <div className="form-group mb-4 flex flex-col gap-1">
            <span className="text-[15px] text-gray-800">Product Stock</span>
            <input type="number" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
            focus:border-[rgba(0,0,0,0.4)] px-3 text-[14px]" />   
           </div>
           <div className="form-group mb-4 flex flex-col gap-1">
            <span className="text-[15px] text-gray-800">Product Brand</span>
            <input type="text" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
            focus:border-[rgba(0,0,0,0.4)] px-3 text-[14px]" />   
           </div>
           <div className="form-group mb-4 flex flex-col gap-1">
            <span className="text-[15px] text-gray-800">Product Discount</span>
            <input type="number" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
            focus:border-[rgba(0,0,0,0.4)] px-3 text-[14px]" />   
           </div>
           <div className="form-group mb-4 flex flex-col gap-1">
            <span className="text-[15px] text-gray-800">Product Rating</span>
             <Rating name="simple-controlled" value={value} onChange={(event, newValue)=> {setValue(newValue); }} /> 
           </div>

          </div>

          <div className="flex flex-col gap-1 mt-5">
            <h3 className="text-[16px] text-gray-700 font-semibold">Media & Images</h3>
            <div className="flex items-center gap-4 mt-1">            

             <div className="w-[150] h-[120] flex items-center flex-col justify-center border border-[rgba(0,0,0,0.3)]
             bg-gray-100 rounded-md gap-2 relative">
                <img src={"/product1.png"} className="max-w-full max-h-full object-cover" />
                <span className="flex items-center justify-center bg-red-700 text-white absolute top-[-5] right-[-8]
                rounded-full cursor-pointer"><IoMdClose size={20} className="text-white" /> </span>
             </div>

             <UploadBox />
            </div>
          </div>

         <div className="mt-5">
            <Button className="btn-g px-7 py-1">Publish & View</Button>   
         </div>  
         </form>  
      </div>
    </div>
   ) 
}

export default AddProduct;