import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Checkbox from '@mui/material/Checkbox';
const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

const Register = () =>{
  return(
   <section className="w-full fixed top-0 right-0 bottom-0 left-0 bg-white z-100">
    <div className="w-full fixed top-0 left-0 py-3">
     <div className="w-[90%] m-auto flex items-center justify-between">
       <img src={"/logo.png"} alt="logo" />

       <div className="flex items-center gap-3">
        <Link href={"/login"}>
          <Button className=" px-5! py-2! rounded-full! border! border-[rgba(0,0,0,0.1)]! 
          text-gray-900! font-medium!"> Sign In </Button></Link>
        <Link href={"/register"}><Button className="bg-gray-100! px-5! py-2! rounded-full! border! border-[rgba(0,0,0,0.1)]! 
          text-gray-900! font-medium!"> Sign Up </Button></Link>
       </div> 
     </div>
    </div>
   
   <div className="absolute top-0 left-[20%] z-100 w-[60%] h-fit py-[100]">
       <h1 className="text-center text-[40px] font-extrabold max-w-[700] m-auto leading-12">Join us today! Get special benefits and stay up-to-date.</h1>
       <div className="flex items-center justify-center py-2 mt-4">
        <Button className="bg-gray-100! px-5! py-2! rounded-full! border! border-[rgba(0,0,0,0.1)]! capitalize!
          text-gray-900! font-bold! gap-2!"> Sign In With Google <FcGoogle size={30} /> </Button>
       </div>
       <div className="w-full flex items-center justify-center gap-3 py-5">
          <span className="flex items-center w-[100] h-[1] bg-[rgba(0,0,0,0.2)]"> </span>
          <span className="text-[13px] lg:text[14px] font-medium">Or, Sign up with your email</span>
          <span className="flex items-center w-[100] h-[1] bg-[rgba(0,0,0,0.2)]"> </span>
       </div> 
       <form className="max-w-[500] w-full m-auto mt-6">
        <div className="form-group mb-3 flex flex-col gap-1">
          <span className="text-[15px] text-gray-800">Full Name</span>
          <input type="text" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
           focus:border-[rgba(0,0,0,0.4)] px-3" />   
        </div>
        <div className="form-group mb-3 flex flex-col gap-1">
          <span className="text-[15px] text-gray-800">Email</span>
          <input type="text" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
           focus:border-[rgba(0,0,0,0.4)] px-3" />   
        </div>
        <div className="form-group mb-3 flex flex-col gap-1">
          <span className="text-[15px] text-gray-800">Password</span>
          <input type="text" className="w-full h-[40] border border-[rgba(0,0,0,0.2)] outline-none rounded-sm 
           focus:border-[rgba(0,0,0,0.4)] px-3" />   
        </div>        
        <div className="flex items-center justify-between my-3">
          <span className="text-[15px] text-gray-800">Already have an account?</span>
          <Link href={"/login"} className="text-primary font-bold text-[13px] hover:text-gray-800">
          Sign In</Link>           
        </div>
        <Button className="btn-g px-7! w-full!">Sign Up</Button>
      </form>
   </div>
   </section> 
  )  
}

export default Register;