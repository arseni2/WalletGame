import React from 'react';
import Title from "../sharedComponents/Title.tsx";
import WheelFortune, {WheelSector} from "../components/WheelFortune.tsx";

const ShopPage = () => {
	const sectors: WheelSector[] = [
		{ color: '#f82', label: 'Stack' },
		{ color: '#0bf', label: '10' },
		{ color: '#fb0', label: '200' },
		{ color: '#0fb', label: '50' },
		{ color: '#b0f', label: '100' },
		{ color: '#f0b', label: '5' },
		{ color: '#bf0', label: '500' }
	];
	return (
		<div className={"text-green-500"}>
			<Title>Present</Title>

			<div className={"mt-8"}>
				<p className={"text-white"}>Wheel fortune</p>

				<WheelFortune sectors={sectors} />
			</div>
		</div>
	);
};

export default ShopPage;