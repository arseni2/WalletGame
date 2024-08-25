import React from 'react';

type CustomizeIconProps = {
	width?: string
	height?: string
}
const TgIcon = ({width = "20", height = "20"}: CustomizeIconProps) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 20 20`} fill="none">
			<path fillRule="evenodd" clipRule="evenodd" d="M1.7899 9.84194C6.1627 7.93677 9.07859 6.68077 10.5376 6.07394C14.7032 4.3413 15.5688 4.04032 16.133 4.03038C16.2571 4.02819 16.5345 4.05895 16.7142 4.20477C16.866 4.32791 16.9077 4.49425 16.9277 4.61099C16.9477 4.72774 16.9726 4.99369 16.9528 5.20149C16.7271 7.57335 15.7503 13.3292 15.2534 15.9857C15.0431 17.1098 14.6291 17.4867 14.2283 17.5236C13.3572 17.6037 12.6957 16.9479 11.852 16.3949C10.5318 15.5295 9.78602 14.9907 8.50455 14.1463C7.02358 13.1703 7.98363 12.6339 8.82763 11.7573C9.04851 11.5279 12.8865 8.03697 12.9608 7.72028C12.9701 7.68068 12.9787 7.53304 12.891 7.45509C12.8033 7.37713 12.6738 7.40379 12.5804 7.42499C12.448 7.45504 10.339 8.84903 6.25333 11.607C5.65469 12.018 5.11246 12.2183 4.62664 12.2078C4.09106 12.1963 3.06083 11.905 2.29495 11.656C1.35558 11.3507 0.608978 11.1892 0.67399 10.6707C0.707853 10.4006 1.07982 10.1243 1.7899 9.84194Z" fill="white"></path>
		</svg>
	);
};

export default TgIcon;