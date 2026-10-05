"use client"
import { Button } from "@mui/material";
import React, { useState } from "react";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const SalesAndUserCharts = () =>{
   const [isActiveChart, setIsActiveChart] = useState(0);
   const usersData = [
        {name:'JAN',  users:250 },
        {name:'FEB',  users:643 },
        {name:'MAR',  users:6543 },
        {name:'APRIL', users:2323 },
        {name:'MAY', users:1256 },
        {name:'JUN', users:875 },
        {name:'JULY', users:542 },
        {name:'AUG',  users:987 },
        {name:'SEP', users:2343 },
        {name:'OCT', users:3423 },
        {name:'NOV', users:2134 },
        {name:'DEC', users:5434 },
    ]
    const salesData = [
        {name:'JAN',  sales:250 },
        {name:'FEB',  sales:1350 },
        {name:'MAR',  sales:1234 },
        {name:'APRIL', sales:654 },
        {name:'MAY', sales:785 },
        {name:'JUN', sales:875 },
        {name:'JULY', sales:456 },
        {name:'AUG',  sales:987 },
        {name:'SEP', sales:2343 },
        {name:'OCT', sales:3423 },
        {name:'NOV', sales:2134 },
        {name:'DEC', sales:5434 },
    ]
 
    return(
      <div className="bg-white p-5 rounded-md shadow-md mt-5">
       <div className="flex items-center justify-between">
          <h2 className="text-[18px] text-gray-700 font-semibold">Sales And User Charts</h2>
          <div className="flex items-center justify-between">
             <Button variant="text" className="text-primary! capitalize! font-bold!"
             onClick={()=>setIsActiveChart(0)}>Total Sales</Button>
             <Button variant="text" className="text-blue-800! capitalize! font-bold!"
             onClick={()=>setIsActiveChart(1)}>Total Users</Button>
          </div>
        </div> 
       {
        isActiveChart === 0 &&
       
        <AreaChart
        style={{width:'100%', maxHeight:'70vh', aspectRatio: 1.618}}
        responsive
        data={salesData}
        margin={{top:20,right:0,left:0,bottom:0}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize:12, fill:'#555', fontWeight:500 }} />
        <YAxis width="auto" tick={{ fontSize:12, fill:'#555', fontWeight:500 }} />
        <Tooltip />
        <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#5ff4d6" />

        </AreaChart>
       }
       {
        isActiveChart === 1 &&       
        <AreaChart
        style={{width:'100%', maxHeight:'70vh', aspectRatio: 1.618}}
        responsive
        data={usersData}
        margin={{top:20,right:0,left:0,bottom:0}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize:12, fill:'#555', fontWeight:500 }} />
        <YAxis width="auto" tick={{ fontSize:12, fill:'#555', fontWeight:500 }} />
        <Tooltip />
        <Area type="monotone" dataKey="users" stroke="#0263b2" fill="#37a1f7" />

        </AreaChart>
       }
      </div>  
    )
}

export default SalesAndUserCharts;