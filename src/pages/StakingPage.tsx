import React from 'react';
import Title from "../sharedComponents/Title.tsx";
import BlockWrapper from "../layouts/BlockWrapper.tsx";
import ButtonSuccess from "../sharedComponents/ButtonSuccess.tsx";
import ButtonSecondary from "../sharedComponents/ButtonSecondary.tsx";

const StakingPage = () => {
	return (
		<div>
			<Title>Farming</Title>

			<div className={"mt-8"}>
				<BlockWrapper className={"flex flex-col"}>
					<div className={"text-right "}>
						<span className="text-white text-xs font-bold me-2 px-2.5 py-0.5 w-fit">APR 40%</span>
					</div>

					<p className={"text-center text-white font-semibold text-xl "}>0.13 Points</p>
					<p className={"text-center text-white font-semibold text-xl "}>1000 Points in farming</p>

					<div className={"flex gap-2 mt-6"}>
						<ButtonSecondary className={"w-full"}>Enter points</ButtonSecondary>
						<ButtonSuccess className={"w-full"}>Claim rewards</ButtonSuccess>
					</div>
				</BlockWrapper>
			</div>
		</div>
	);
};

export default StakingPage;