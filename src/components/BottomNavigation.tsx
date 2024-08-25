import React from 'react';
import BlockWrapper from "../layouts/BlockWrapper.tsx";
import GiftIcon from "../icons/GiftIcon.tsx";
import FriendsIcon from "../icons/FriendsIcon.tsx";
import HomeIcon from "../icons/HomeIcon.tsx";
import TaskIcon from "../icons/TaskIcon.tsx";
import StakingIcon from "../icons/StakingIcon.tsx";
import {NavLink} from "react-router-dom";

const BottomNavigation = () => {
	return (
		<BlockWrapper isWithoutBg className={"bg-[#000] flex justify-between items-center w-full gap-6 !p-1"}>
			<NavLink to={"shop"} className={"flex flex-col gap-1 justify-center items-center p-2 min-w-[55px]"}>
				{({isActive, isPending, isTransitioning}) => (
					<>
						<GiftIcon active={isActive}/>
						<p className={`${isActive ? "text-white" : "text-zinc-600"} text-xs font-medium mt-1`}>Gift</p>
					</>
				)}
			</NavLink>

			<NavLink to={"task"} className={"mt-[0.25rem] flex flex-col gap-1 justify-center items-center p-2 min-w-[55px]"}>
				{({isActive, isPending, isTransitioning}) => (
					<>
						<TaskIcon active={isActive}/>
						<p className={`${isActive ? "text-white" : "text-zinc-600"} text-xs font-medium mt-1`}>Tasks</p>
					</>
				)}
			</NavLink>

			<NavLink to={"/"} className={"flex flex-col gap-1 justify-center items-center p-2 rounded-md min-w-[55px]"}>
				{({isActive, isPending, isTransitioning}) => (
					<>
						<HomeIcon active={isActive}/>
						<p className={`${isActive ? "text-white" : "text-zinc-600"} text-xs font-medium`}>Home</p>
					</>
				)}
			</NavLink>

			<NavLink to={"stacking"} className={"flex flex-col gap-1 justify-center items-center p-2 min-w-[55px]"}>
				{({isActive, isPending, isTransitioning}) => (
					<>
						<StakingIcon active={isActive}/>
						<p className={`${isActive ? "text-white" : "text-zinc-600"} text-xs font-medium`}>Farming</p>
					</>
				)}
			</NavLink>

			<NavLink to={"friends"} className={"flex flex-col gap-1 justify-center items-center p-2 min-w-[55px]"}>
				{({isActive, isPending, isTransitioning}) => (
					<>
						<FriendsIcon active={isActive}/>
						<p className={`${isActive ? "text-white" : "text-zinc-600"} text-xs font-medium`}>Friends</p>
					</>
				)}
			</NavLink>

		</BlockWrapper>
	);
};

export default BottomNavigation;