import HeaderNavMenu from "./HeaderNavMenu";
import GradientBar from "./GradientBar";
import NotificationBar from "./NotificationBar";

type Props = {};

const Header = (props: Props) => {
	return (
		<header style={{position: 'sticky', top: 0, zIndex: 100}}>
			<HeaderNavMenu />
			<GradientBar />
			<NotificationBar />
		</header>
	);
};
export default Header;
