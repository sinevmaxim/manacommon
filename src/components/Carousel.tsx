import React, {createRef, PropsWithChildren, useEffect, useRef} from 'react';

import {exists} from "../tools/Null";

interface Props extends PropsWithChildren {
	alignItems?: React.CSSProperties['alignItems'];
	padding?: string;
	gap?: number;
	withGuidingDots?: boolean;
}

const Carousel = (props: Props) => {
	const refs = exists(props.children) ?
		!Array.isArray(props.children) ?
			Array(1).fill(0).map(() => React.createRef<HTMLDivElement>())
			: Array(props.children.length).fill(0).map(() => React.createRef<HTMLDivElement>())
		: [];

	return (
		<>
			<div
				style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'row',
					overflowX: 'auto',
					overscrollBehaviorInline: 'contain',
					gap: props.gap ?? 30,
					alignItems: props.alignItems ?? 'center',
					msOverflowStyle: 'none',
					scrollbarWidth: 'none',
					padding: props.padding ?? 0
				}}
			>
				{exists(props.children) && Array.isArray(props.children) && props.children.map((child, index) => <div ref={refs[index]}>{child}</div>)}
			</div>
			{props.withGuidingDots && <div
				style={{margin: '48 auto 0 auto', padding: '2px 60px', backgroundColor: '#0C0B10', borderRadius: 20, display: 'flex', gap: 2, justifyContent: 'center'}}>
				{refs.map((ref) => {
					return (
						<div style={{width: 21, height: 20, display: 'flex', alignItems: 'center'}}>
							<div onClick={() =>
								ref.current?.scrollIntoView?.({inline: 'start', behavior: 'smooth', block: 'nearest'})
							}
								 style={{height: 10, width: 10, borderRadius: '50%', backgroundColor: '#37373c'}}/>
						</div>
					);
				})}
			</div>}
		</>


	);
};
export default Carousel;
