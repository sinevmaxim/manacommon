import Carousel from "../../components/Carousel";
import GradientBar from "../../components/GradientBar";
import VideoCard from "../../components/VideoCard";
import NewsCard from "../../components/NewsCard";
import React from "react";

type Props = {};

const CommunityUpdates = (props: Props) => {
	return (
		<div style={{height: 'calc(100vh - 77px)'}}>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px 0 30px 0'}}>
				<h1 style={{fontFamily: 'Neue Haas Grotesk Display Pro', fontSize: 54, fontWeight: 700, margin: 0}}>Community Updates</h1>
				<p style={{fontSize: 18, margin: 0}}>Check out what we've been up</p>

			</div>

			<div style={{display: 'flex', gap: 22, alignItems: 'center', flexDirection: 'column'}}>
				<Carousel withGuidingDots padding={'0 30px'}>
					<VideoCard title={'Hello this is the first vide card'} imageUrl={'https://fastly.picsum.photos/id/563/1000/800.jpg?hmac=Te9y0ODF5K0noWRdEKcyFkTooyfInyHhqjVcUDCxjog'}/>
					<VideoCard title={'V - Voshititelniy, O - Oshelomitelniy'} imageUrl={'https://fastly.picsum.photos/id/563/1000/800.jpg?hmac=Te9y0ODF5K0noWRdEKcyFkTooyfInyHhqjVcUDCxjog'}/>
					<VideoCard title={'S - Seksualniy, K - CASHezavisimiy'} imageUrl={'https://fastly.picsum.photos/id/563/1000/800.jpg?hmac=Te9y0ODF5K0noWRdEKcyFkTooyfInyHhqjVcUDCxjog'}/>
					<NewsCard title={'News Card'} imageUrl={'https://fastly.picsum.photos/id/478/1800/1200.jpg?hmac=L3Mc0BG4ukmRV-q7LUGN7wYiQPPsjTiX_WU_zw-53_A'} />
					<NewsCard title={'News Card'} imageUrl={'https://fastly.picsum.photos/id/478/1800/1200.jpg?hmac=L3Mc0BG4ukmRV-q7LUGN7wYiQPPsjTiX_WU_zw-53_A'} />
					<NewsCard title={'News Card'} imageUrl={'https://fastly.picsum.photos/id/478/1800/1200.jpg?hmac=L3Mc0BG4ukmRV-q7LUGN7wYiQPPsjTiX_WU_zw-53_A'} />
					<NewsCard title={'News Card'} imageUrl={'https://fastly.picsum.photos/id/478/1800/1200.jpg?hmac=L3Mc0BG4ukmRV-q7LUGN7wYiQPPsjTiX_WU_zw-53_A'} />
					<VideoCard title={'R - Reshitelniy, E - Ebanuto dvigayus'} imageUrl={'https://fastly.picsum.photos/id/563/1000/800.jpg?hmac=Te9y0ODF5K0noWRdEKcyFkTooyfInyHhqjVcUDCxjog'}/>
				</Carousel>
				<svg
					width="24px"
					height="24px"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12 3a1 1 0 011 1v13.586l5.293-5.293a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 111.414-1.414L11 17.586V4a1 1 0 011-1z"
						fill="#c6c6c6"
					/>
				</svg>
			</div>
		</div>

	);
};
export default CommunityUpdates;
