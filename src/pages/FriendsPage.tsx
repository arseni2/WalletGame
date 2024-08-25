import React from 'react';
import Title from "../sharedComponents/Title.tsx";
import BlockWrapper from "../layouts/BlockWrapper.tsx";
import ButtonSuccess from "../sharedComponents/ButtonSuccess.tsx";

const FriendsPage = () => {
	return (
		<div>
			<Title>Friends</Title>

			<BlockWrapper className={"mt-8 flex flex-col gap-4"}>
				<p className={"text-white font-medium text-center text-xl"}>0 Points</p>
				<div className={"flex gap-2"}>
					<ButtonSuccess className={"w-full"}>Claim</ButtonSuccess>
				</div>
			</BlockWrapper>

			<div className={"mt-16 flex flex-col gap-8"}>
				<Title>Your referrals</Title>

				<div className={"flex gap-4 items-center"}>
					<img className={"w-10 h-10 rounded-full"} src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>

					<div className={"flex flex-col gap-1"}>
						<p className={"text-white font-semibold"}>username</p>
						<p className={"text-textSecondary font-medium text-sm"}>1 531 Points</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FriendsPage;