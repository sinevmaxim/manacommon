type Props = {};

const NotificationBar = (props: Props) => {
	return (
		<div
			style={{
				background: 'linear-gradient(90deg, rgba(228,195,247,1) 0%, rgba(187,117,227,1) 100%)',
				width: '100%',
				display: "flex",
				alignItems: 'center',
				height: 28,
			}}
		>
			<span style={{
				textAlign: 'center',
				color: '#FFF',
				flex: 1
			}}>
				JOIN US THIS NOVEMBER AT MANA WYNWOOD FOR THE MANA FASHION POP-UP! READ MORE&gt;&gt;
			</span>
			<span style={{flexShrink: 0, marginRight: 22}}>X</span>
		</div>
	);
};
export default NotificationBar;
