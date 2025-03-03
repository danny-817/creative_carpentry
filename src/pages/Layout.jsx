import React, { memo } from "react";

import Banner from "../assets/components/Banner";
import Navbar from "../assets/components/Navbar";
import Footer from "../assets/components/Footer";
import { Outlet, Link } from "react-router-dom";

export default memo(function Layout() {
	return (
		<>
			<Navbar />
			<Banner />
			<Outlet />
			<Footer />
		</>
	);
});
