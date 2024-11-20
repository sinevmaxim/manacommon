import {PropsWithChildren} from "react";

const FullHeightContainer = ({children}: PropsWithChildren) => {
	return (
		<div style={{height: 'calc(100vh - 77px)', width: '100vw', position: 'relative'}}>{children}</div>
	);
};
export default FullHeightContainer;
