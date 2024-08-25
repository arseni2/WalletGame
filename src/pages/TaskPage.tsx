import React from 'react';
import TaskItem from "../components/TaskItem.tsx";
import Title from '../sharedComponents/Title.tsx';

const TaskPage = () => {
	return (
		<div>
			<Title>Tasks</Title>

			<div className={"mt-8"}>
				<TaskItem />
			</div>
		</div>
	);
};

export default TaskPage;