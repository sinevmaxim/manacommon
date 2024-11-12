import React from 'react';

type Props = {};

const HorizontalEvent = (props: Props) => {
	return (
		<div style={{width: 350, height: 156, display: 'flex'}}>
			<img width={150} height={'100%'} src={'https://fastly.picsum.photos/id/550/800/800.jpg?hmac=JztgFBS-v3saySEukgZyhTrgOOfZgw7ui_Kv6d-Fpvo'} style={{objectFit: 'cover', borderRadius: '20px 0 0 20px'}}/>
			<div style={{width: 200, height: '100%', display: 'flex', flexDirection: 'column', gap: 2, backgroundColor: '#000', padding: '10px 10px 15px 10px', borderRadius: '0 20px 20px 0'}}>
				<h3 style={{fontSize: 20, fontFamily: 'Neue Haas Grotesk Display Pro'}}>Event name in two lines</h3>
				<p style={{fontSize: 12, fontFamily: 'Neue Haas Grotesk Display Pro'}}>Starts at ##:##pm</p>
				<p style={{fontSize: 12, color: '#9b9b9b'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
				<div style={{display: 'flex', gap: 4, alignItems: 'center', justifyContent: 'center'}}></div>
			</div>
		</div>
	);
};
export default HorizontalEvent;
