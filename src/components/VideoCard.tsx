import React, {ForwardedRef, forwardRef} from 'react';

type Props = {
	title: string,
	imageUrl: string,
	videoUrl?: string,
};

const VideoCard = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div ref={ref} style={{
			minWidth: '810px',
			maxWidth: '810px',
			height: '510px',
			backgroundColor: 'red',
			borderRadius: 16,
			background: `linear-gradient(90deg, rgba(9,9,9,0.7987788865546218) 0%, rgba(0,0,0,0) 100%), url(${props.imageUrl})`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
		}}>
			<div style={{
				height: '100%',
				padding: '122px 35px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: 16
			}}
			>
				<h1 style={{fontFamily: 'Neue Haas Grotesk Display Pro', fontSize: 54, fontWeight: 700, margin: 0}}>{props.title}</h1>
				<button style={{width: 144, height: 32, backgroundColor: 'rgba(255,255,255,.15)', borderRadius: 20, color: '#fff', border: 'none'}}>Play Video</button>
			</div>
		</div>
	);
});
export default VideoCard;
