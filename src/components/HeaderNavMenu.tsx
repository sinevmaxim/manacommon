import GradientBar from "./GradientBar";
import ManaCommon from "./CompanyIcons/ManaCommon";
import styles from './HeaderNavMenu.module.css';
import MagnifyingGlass from "./Icons/MagnifyingGlass";
import {Link} from "react-router-dom";

type Props = {};

const HeaderNavMenu = (props: Props) => {
	return (
		<div
			style={{minHeight: 45, maxHeight: 45, display: 'flex', gap: 70, justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: '#37373c'}}
		>
			<Link to={'/'}><ManaCommon/></Link>
			<Link className={styles.link} to={'/about'}>About</Link>
			<a href="" className={styles.link}>Events</a>
			<a href="" className={styles.link}>News</a>
			<a href="" className={styles.link}>Contact</a>
			<a href="" className={styles.link}>Communities</a>
			<a href="" className={styles.link}>Subscribe</a>
			<MagnifyingGlass/>
		</div>
	);
};
export default HeaderNavMenu;
