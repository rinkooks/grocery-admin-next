"use client"
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaRegImages } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { PiImageSquare } from "react-icons/pi";
import { IoBagCheckOutline } from "react-icons/io5";
import { TbBrandProducthunt, TbUser } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { Button } from "@mui/material";
import { TfiAngleDown } from "react-icons/tfi";
import Link from "next/link";
import {Collapse} from 'react-collapse';

const Sidebar = () =>{
  const [isOpenTab, setIsOpenTab] = useState(null);  

  const sidebarTabs = [
      {
         name: "Dashboard",
         icon: <RxDashboard size={20} className="group-hover:text-primary" />,
         href: "/"
      },
      {
         name: "Home Slide",
         icon: <FaRegImages size={20} className="group-hover:text-primary" />,
         href: null,
         children:[
            {
             name: "Home Slide List",
             href: "/home-slides"  
            },
             {
             name: "Add Home Slide",
             href: "/home-slides/add-home-slide"  
            }
         ]
      },
      {
         name: "Category",
         icon: <MdOutlineCategory size={20} className="group-hover:text-primary" />,
         href: null,
         children:[
            {
             name: "Category",
             href: "/category"  
            },
             {
             name: "Add New Category",
             href: "/category/add-category"  
            }
         ]
      },
      {
         name: "Products",
         icon: <TbBrandProducthunt size={20} className="group-hover:text-primary" />,
         href: null,
         children:[
            {
             name: "Products List",
             href: "/products-list"  
            },
             {
             name: "Add New Product",
             href: "/products-list/add-product"  
            }
         ]
      },
      {
         name: "Users",
         icon: <TbUser size={20} className="group-hover:text-primary" />,
         href: "/users"
      },
      ,
      {
         name: "Orders",
         icon: <IoBagCheckOutline size={20} className="group-hover:text-primary" />,
         href: "/orders"
      },
      {
         name: "Banners",
         icon: <PiImageSquare size={20} className="group-hover:text-primary" />,        
         href: null,
         children:[
            {
             name: "Banners List",
             href: "/banners"  
            },
             {
             name: "Add New Banner",
             href: "/banners/add-banner"  
            }
         ]
      },
      {
         name: "Logout",
         icon: <IoIosLogOut size={20} className="group-hover:text-primary" />,
         href: null
      }
  ]

   return(
    <aside className="full px-2 sticky top-0 z-50">
      <div className="p-4"> 
        <Link href={"/"}><img src="/logo.png" alt="" className="w-[200]" /></Link>       
      </div>

      <div className="scrolling">
         {
            sidebarTabs && sidebarTabs?.map((item,index)=>{
            return(
               <>
               {
                item?.href !== null ?
               <Link href={item.href} key={index}> 
               <Button className="w-full! px-4! text-left! justify-start! capitalize! text-gray-800! 
               text-[16px]! hover:bg-gray-200 py-2! gap-3!  group">
                {item?.icon}  {item?.name}
                {
                 item?.children && <TfiAngleDown size={15} className="ml-auto" />
                }
               </Button></Link>
               :
               <Button className="w-full! px-4! text-left! justify-start! capitalize! text-gray-800! 
               text-[16px]! hover:bg-gray-200 py-2! gap-3 group" key={index} 
               onClick={()=>setIsOpenTab(isOpenTab === index ? null : index)}>
                {item?.icon}  {item?.name}
                {
                 item?.children && <TfiAngleDown size={15} 
                 className={`ml-auto transition-all ${isOpenTab === index && 'rotate-180'}`} />
                }
               </Button>
                }
                {
                item?.children && 
                <Collapse isOpened={isOpenTab === index ? true : false}>
                 <div className="dropdown w-full flex flex-col gap-3 pl-12 py-1">
                  {
                  item?.children?.map((tab,index_)=>{
                   return(
                     <Link href={tab?.href} key={index_} 
                      className="text-[14px] flex items-center gap-3 hover:text-primary">
                      {tab?.name}</Link>  
                   )
                  })
                 }
               </div> 
               </Collapse>
                }               
               </>  
            )
            }) 
         }
      </div>
    </aside>
   ) 
}

export default Sidebar;