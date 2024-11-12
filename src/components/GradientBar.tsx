type Props = {
	height?: number;
};

const GradientBar = ({height = 4}: Props) => {
	return (
		<div
			style={{
				background: 'linear-gradient(90deg, rgba(248,195,83,1) 0%, rgba(242,145,76,1) 20%, rgba(244,85,129,1) 40%, rgba(154,55,172,1) 60%, rgba(76,157,236,1) 80%, rgba(51,168,103,1) 100%)',
				height: height,
				width: '100%',
			}}
		/>
	);
};
export default GradientBar;
