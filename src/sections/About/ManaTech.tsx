import styles from './Styles.module.css';
import TripleColumnSection from "./components/TripleColumnSection";
import TechSegmentIcon from "../../components/SegmentIcons/TechSegmentIcon";

const ManaTech = () => {
	return (
		<TripleColumnSection
			backgroundImageUrl={`${process.env.PUBLIC_URL}/About/Backgrounds/Tech-BG.png`}
			iconElement={<TechSegmentIcon/>}
			leftColumnWidth={394}
			mainTextElement={<p>Mana <span className={styles.techColoredText}>Tech</span></p>}
			rightColumnText={
				<p className={styles.infoText}><span className={styles.techColoredText}>Mana Tech</span> is our
					initiative to
					cultivate a thriving and innovative tech community.
					<br/><br/>
					Miami is uniquely positioned to become the next great Tech Hub, with a culture of innovation and a
					fertile environment for growth. Already, many companies have left historic cities like San Francisco
					and New York and relocated to the Miami area.
				</p>
			}
		/>
	);
};
export default ManaTech;
