import React from 'react';

const TicketIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20.000000" height="20.000000" viewBox="0 0 40 40" fill="none">
			<defs>
				<pattern id="pattern_12_10" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
					<use xlinkHref="#image12_1_0" transform="matrix(0.001953,0,0,0.001953,0,0)"/>
				</pattern>
				<image id="image12_1_0" width="512.000000" height="512.000000"
					   xlinkHref="data:image/png;base64,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"/>
			</defs>
			<rect id="ticket" width="40.000000" height="40.000000" fill="url(#pattern_12_10)" fill-opacity="1.000000"/>
		</svg>
	);
};

export default TicketIcon;