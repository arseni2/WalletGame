import React from 'react';

type propsType = {
	size: '16px' | '12px' | '20px' | '24px'
	children: React.ReactNode
	font: 'medium' | 'bold' | 'extrabold'
}
const Typography: React.FC<any> = ({size = '16px', children, font = 'bold'}: propsType) => {
	return (
		<p className={`font-${font} text-white`} style={{
			// WebkitTextStroke: "0.5px black",
			fontSize: size
		}}>
			{children}
		</p>
	);
};

export default Typography;