import React from 'react';

type Props = {
	children: React.ReactNode;
};
const Page = ({children}: Props) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
			}}
		>
			{children}
		</div>
	);
};
export default Page;
