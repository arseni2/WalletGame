import React from 'react';

type propsType = {
	className?: string
	children: React.ReactNode
	isWithoutBg?: boolean
}
const BlockWrapper: React.FC<propsType> = (props) => {
	return (
		<div className={`p-4 ${props.isWithoutBg ? "bg-[#000]" : "bg-[#1c1c1e]"}  rounded-md ${props.className || ""}`}>
			{props.children}
		</div>
	);
};

export default BlockWrapper;