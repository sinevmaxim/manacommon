import React, {ForwardedRef, forwardRef} from 'react';

type Props = {
	startDate?: Date,
	endDate?: Date,
};

const SingleEventMain = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
	return (
			<div style={{display: 'flex', flexDirection: 'column', width: '100%', height: 522}}>
				<img style={{height: 384, width: '100%', objectFit: 'cover', borderRadius:' 20px 20px 0 0'}} src="https://fastly.picsum.photos/id/1075/800/800.jpg?hmac=J_avgTc6FXhxlGTx2WadhiMxOzXwrM5ZIKi-0gnTrZw" alt="" loading={'lazy'}/>
				<div style={{display: 'flex', width: '100%', height: 138, gap: 52, padding: '15px 31px 22px 20px', backgroundColor: '#000', borderRadius:' 0 0 20px 20px'}}>
					<div style={{display: 'flex', flexDirection: 'column'}}>
						<h3 style={{fontSize: 24, fontFamily: 'Neue Haas Grotesk Display Pro', fontWeight: 700}}>Event name</h3>
						<p style={{fontSize: 18, fontFamily: 'Neue Haas Grotesk Display Pro', fontWeight: 700}}>Starts at #:##pm</p>
						<p style={{fontSize: 12, fontWeight: 400}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
					</div>


				</div>
			</div>
	);
});
export default SingleEventMain;
