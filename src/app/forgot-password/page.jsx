"use client"
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const ForgotPassword = () => {

  return(
    <section className="w-full fixed top-0 right-0 bottom-0 left-0 bg-white z-100">
    <div className="w-full fixed top-0 left-0 py-3">
     <div className="w-[90%] m-auto flex items-center justify-between">
       <img src={"/logo.png"} alt="logo" />

       <div className="flex items-center gap-3">
        <Link href={"/login"}>
          <Button className="bg-gray-100! px-5! py-2! rounded-full! border! border-[rgba(0,0,0,0.1)]! 
          text-gray-900! font-medium!"> Sign In </Button></Link>
        <Link href={"/register"}><Button className="px-5! py-2! rounded-full! border! border-[rgba(0,0,0,0.1)]! 
          text-gray-900! font-medium!"> Sign Up </Button></Link>
       </div> 
     </div>
    </div>   
    <div className="absolute top-0 left-[20%] z-100 w-[60%] h-fit py-[100]">  
        <div className="bg-white p-6 rounded-lg border border-[rgba(0,0,0,0.1)] w-[500] m-auto">
          <div className="text-center"> 
           <img src={"/lock-icon.png"} alt="image" width={80} className="mb-3 m-auto" />
           <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
            Forgot Password?</h1></div>           
          <div className="py-3 w-full">
            <TextField id="emailField" label="Email" variant="outlined" className="w-full" type="email" />
          </div>     
         
          <div className="py-3 w-full">
            <Button className="w-full btn-g py-3! text-[16px]">Submit</Button>
          </div> 
          <div className="text-center mt-2">
            <Link href={"/login"} className="text-center text-primary hover:text-secondary font-semibold text-[15px]
            flex items-center justify-center gap-2">
            <FiArrowLeft size={20} /> Back to Login
          </Link>
          </div>  
          
         </div>
      </div>
    </section>
  )  
}

export default ForgotPassword;