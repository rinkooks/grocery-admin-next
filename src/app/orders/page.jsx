"use client"
import React from "react";
import OrderRow from "./orderRow";
import Pagination from '@mui/material/Pagination';
import Search from "@/components/Search";

const Orders = () =>{
return(
<section className="bg-gray-100 py-8">
<div className="flex gap-5">
<div className="wrapper w-full">
    <div className="bg-white shadow-md rounded-md mb-7">
    <div className="p-4 flex items-center justify-between border-b border-[rgba(0,0,0,0.1)]">
        <div className="info">
        <h4 className="text-xl font-semibold text-gray-800">My Orders</h4>
        <p className="text-gray-600">There is <span className="text-primary font-bold"> 5 </span> orders</p>
        </div>
        <div className="max-w-[400] w-full"><Search placeholder="Search Orders..." /></div>                
    </div>
    <div className="p-4">
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200 shadow-sm scroll">
    <table className="min-w-full divide-y divide-gray-200 text-left text-sm">
        <thead className="bg-gray-50">
        <tr>
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">&nbsp;</th>
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Order Id</th>
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Contact Details</th>
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Payment Id</th>
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Phone no.</th>           
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Address</th>
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Pincode</th>
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Total Amount</th>            
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">User Id</th>                   
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Order Status</th>
            <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Date</th>
            <th className="px-4 py-3 text-right font-semibold text-gray-700">Actions</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
          <OrderRow /> 
          <OrderRow /> 
          <OrderRow /> 
          <OrderRow /> 
          <OrderRow /> 
          <OrderRow />                 
      </tbody>
    </table>
    </div> 
    <div className="flex items-center justify-center mt-5 py-4"> 
        <Pagination count={10} showFirstButton showLastButton /></div>
    </div>            

    </div>           

</div>
</div> 
</section> 
)
}
export default Orders