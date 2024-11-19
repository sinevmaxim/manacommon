import Carousel from "../..//components/Carousel";
import React from "react";

type Props = {};

const OurNeighborhoods = (props: Props) => {
	return (
		<Carousel gap={0}>
			<div
				style={{height: 'calc(100vh - 77px)', width: '100vw', overflow: 'hidden', position: 'relative'}}
			>
				<video style={{height: '100%', width: '100%', objectFit: 'cover', overflow: 'hidden'}} autoPlay muted
					   loop>
					<source src={`${process.env.PUBLIC_URL}/Flagler-BG-Video.mov`} type="video/mp4"/>
				</video>
				<div
					style={{position: 'absolute', top: 0, left: 0, display: 'grid', height: '100%', width: '100%', gridTemplateRows: '1fr 1fr 1fr', justifyContent: 'center', alignItems: 'center', padding: '60px 0'}}
				>
					<h1 style={{textAlign: 'center', alignSelf: 'start', fontFamily: 'Neue Haas Grotesk Display Pro', fontSize: 54, fontWeight: 700, margin: 0}}>Our
						Neighborhoods</h1>
					<div
						style={{display: 'flex', flexDirection: 'column', gap: 20, justifyContent: 'center', alignItems: 'center', height: '100%'}}>
						<h2 style={{fontFamily: 'Neue Haas Grotesk Display Pro', fontSize: 37}}>The Flagler</h2>
						<div
							style={{padding: '30px 40px', backgroundColor: 'rgba(0,0,0,.75', borderRadius: 16, width: 490, textAlign: 'justify'}}>The
							Flagler District of Downtown Miami is the setting of multiple revitalization efforts that
							are converging at once. Both the City of Miami and Miami-Dade County have committed nearly
							$25 million to renovate Flagler Street. Mana Common’s critical mass of 60+ properties in the
							Flagler District, valued at over $1 billion, will serve as the setting of a
							multi-disciplinary live/work/play neighborhood for Miami’s new creative class.
						</div>
					</div>
					<div/>
				</div>
			</div>
			<div
				style={{height: 'calc(100vh - 77px)', width: '100vw', overflow: 'hidden', position: 'relative'}}
			>
				<video style={{height: '100%', width: '100%', objectFit: 'cover'}} autoPlay muted
					   loop>
					<source src={`${process.env.PUBLIC_URL}/Lucas_Content_Tour.mp4`} type="video/mp4"/>
				</video>
				<div
					style={{position: 'absolute', justifySelf: 'center', alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', top: 0, left: 0, padding: '60px 0'}}>
					<h2 style={{fontFamily: 'Neue Haas Grotesk Display Pro', fontSize: 37}}>Wynwood</h2>
					<div
						style={{padding: '30px 40px', backgroundColor: 'rgba(0,0,0,.75', borderRadius: 16, width: 490, textAlign: 'justify'}}>Mana Common has acquired the largest collection of property ownership in the area, all within a contiguous 40 acre space. With such a unique and vast collection of land in one place, Mana Common aims to develop Wynwood into a world-class Asian-Latin American trade hub.
					</div>
				</div>
			</div>
			<div
				style={{height: 'calc(100vh - 77px)', width: '100vw', overflow: 'hidden', position: 'relative'}}
			>
				<img style={{height: '100%', width: '100%', objectFit: 'cover'}} src={`${process.env.PUBLIC_URL}/Mana_Contemporary_Jersey-City.jpg`} />
				<div
					style={{position: 'absolute', justifySelf: 'center', alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', top: 0, left: 0, padding: '60px 0'}}>
					<h2 style={{fontFamily: 'Neue Haas Grotesk Display Pro', fontSize: 37}}>Jersey City</h2>
					<div
						style={{padding: '30px 40px', backgroundColor: 'rgba(0,0,0,.75', borderRadius: 16, width: 490, textAlign: 'justify'}}>
						A forward-thinking environment fostering experimentation, collaboration and creativity while building a profound approach to contemporary art.
					</div>
				</div>
			</div>
		</Carousel>

	);
};
export default OurNeighborhoods;
