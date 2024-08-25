import React from 'react';
import {IconNavigationPropsType} from "../types.ts";

const StakingIcon = ({ active }: IconNavigationPropsType) => {
	return (
		<svg className={`w-9 h-9 ${active ? "fill-white" : "fill-zinc-800"}`} xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 20" fill="none">
			<path stroke="currentColor" strokeWidth={"0.1"} strokeLinecap="round" strokeLinejoin="round" d="M24.3333 6.5L12.3333 0.5L0.333313 6.5L12.3333 12.5L24.3333 6.5ZM12.3333 2.492L20.3508 6.5L12.3333 10.508L4.31581 6.5L12.3333 2.492ZM21.9303 9.7985L24.3333 11L12.3333 17L0.333313 11L2.73631 9.7985L12.3333 14.597L21.9303 9.7985ZM21.9303 14.2985L24.3333 15.5L12.3333 21.5L0.333313 15.5L2.73631 14.2985L12.3333 19.097L21.9303 14.2985Z"/>
		</svg>
	);
};

export default StakingIcon;