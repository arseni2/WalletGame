import React from 'react';

const ButtonSecondary = (props: any) => {
	const {className, ...otherProps} = props
	return (
		<div className={`text-center text-white bg-buttonSecondaryBg font-medium rounded-lg text-sm px-5 py-2.5 h-fit ${className}`} {...otherProps}>
			{props.children}
		</div>
	);
};

export default ButtonSecondary;