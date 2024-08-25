import React from 'react';
import TgIcon from "../icons/socials/TgIcon.tsx";
import ButtonSecondary from "../sharedComponents/ButtonSecondary.tsx";
//import ButtonSuccess from "../sharedComponents/ButtonSuccess.tsx";

const TaskItem = () => {
	return (
		<div className={"flex gap-4 items-center"}>
			<div>
				<TgIcon height={"35"} width={"35"} />
			</div>

			<div className={"flex justify-between w-full items-center"}>
				<div className={"flex flex-col gap-1"}>
					<p className={"text-white font-medium"}>Subscribe to DOGS channel</p>

					<p className={"text-textSecondary font-medium"}>+100 DOGS</p>
				</div>

				<ButtonSecondary>Start</ButtonSecondary>
			</div>
		</div>
	);
};

export default TaskItem;