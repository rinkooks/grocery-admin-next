import { Button } from "@mui/material";
import React from "react";

const Header = () =>{
   return(
    <header className="w-full h-[60] bg-white shadow-md flex items-center justify-end px-5 sticky top-0 z-50">
       <Button className="w-[50]! h-[50]! min-w-[50]! rounded-full! p-0!"><img src="/profile.jpg" alt="profile image" /></Button>
    </header>
   ) 
}

export default Header;