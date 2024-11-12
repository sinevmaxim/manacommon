import Carousel from "../components/Carousel";
import SingleEventMain from "../components/SingleEventMain";
import HorizontalEvent from "../components/HorizontalEvent";
import VerticalEvent from "../components/VerticalEvent";
import React from "react";

type Props = {};

const UpcomingEvents = (props: Props) => {
	return (
		<div style={{height: 924, backgroundImage: `url(${process.env.PUBLIC_URL}/Events-BG.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backdropFilter: 'blur(8px)'}}>
			<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px 0 30px 0'}}>
				<h1 style={{fontFamily: 'Neue Haas Grotesk Display Pro', fontSize: 54, fontWeight: 700, margin: 0}}>Upcoming
					Events</h1>
				<p style={{fontSize: 18, margin: 0}}>Check out the events coming to our neighborhoods</p>

			</div>

			<div style={{display: 'flex', gap: 22, alignItems: 'center', flexDirection: 'column'}}>
				<Carousel padding={'0 50px'} alignItems={'start'}>
					<div style={{display: 'flex', flexDirection: 'column', width: 556, gap: 16}}>
						<div style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'start'}}>
							<h2 style={{fontSize: 54, fontFamily: 'Neue Haas Grotesk Display Pro'}}>{`Mon ##-##`}</h2>
							<p style={{fontSize: 18}}>(Arrow down) Day</p>
						</div>
						<SingleEventMain/>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', width: 350, height: '100%', gap: 16}}>
						<div style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'start'}}>
							<h2 style={{fontSize: 54, fontFamily: 'Neue Haas Grotesk Display Pro'}}>{`Mon ##-##`}</h2>
							<p style={{fontSize: 18}}>(Arrow down) Day</p>
						</div>
						<div style={{
							display: 'grid', gridTemplateColumns: '50% 50%',
							rowGap: 16, columnGap: 16
						}}>
							<VerticalEvent/>
							<VerticalEvent/>
							<HorizontalEvent/>
						</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', width: 350, height: '100%', gap: 16}}>
						<div style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'start'}}>
							<h2 style={{fontSize: 54, fontFamily: 'Neue Haas Grotesk Display Pro'}}>{`Mon ##-##`}</h2>
							<p style={{fontSize: 18}}>(Arrow down) Day</p>
						</div>
						<div style={{
							display: 'grid', gridTemplateColumns: '50% 50%',
							rowGap: 16, columnGap: 16
						}}>
							<VerticalEvent/>
							<VerticalEvent/>
						</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', width: 350, height: '100%', gap: 16}}>
						<div style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'start'}}>
							<h2 style={{fontSize: 54, fontFamily: 'Neue Haas Grotesk Display Pro'}}>{`Mon ##-##`}</h2>
							<p style={{fontSize: 18}}>(Arrow down) Day</p>
						</div>
						<div style={{
							display: 'grid', gridTemplateColumns: '50% 50%',
							rowGap: 16, columnGap: 16
						}}>
							<HorizontalEvent/>
						</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', width: 350, height: '100%', gap: 16}}>
						<div style={{display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'start'}}>
							<h2 style={{fontSize: 54, fontFamily: 'Neue Haas Grotesk Display Pro'}}>{`Mon ##-##`}</h2>
							<p style={{fontSize: 18}}>(Arrow down) Day</p>
						</div>
						<div style={{
							display: 'grid', gridTemplateColumns: '50% 50%',
							rowGap: 16, columnGap: 16
						}}>
							<VerticalEvent/>
							<VerticalEvent/>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
};
export default UpcomingEvents;
