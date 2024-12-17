import React, { memo } from 'react';

import Banner from "../assets/components/Banner";
import Navbar from "../assets/components/Navbar";
import { Outlet, Link } from "react-router-dom";

export default memo(function Layout(){
    return(
        <>
            <Banner/>
            <Navbar/>   
            <Outlet/>
        
        </>
    )
})