import React from 'react';
import BottomNavigation from "../components/BottomNavigation.tsx";
import {Outlet} from "react-router-dom";

const LayoutWithBottomNavigation: React.FC<any> = (props) => {
	return (
		<div className={"flex flex-col justify-between  h-[100vh]"}>
			<div className={"p-4"}>
				<Outlet />
			</div>
			<BottomNavigation />
		</div>
	);
};

export default LayoutWithBottomNavigation;