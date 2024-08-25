import React from 'react';

const Title = (props: any) => {
	return (
		<h1 className={"text-white text-3xl font-bold"}>{props.children}</h1>
	);
};

export default Title;