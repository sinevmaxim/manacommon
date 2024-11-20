import styles from './Styles.module.css';
import TripleColumnSection from "./components/TripleColumnSection";
import PropertySegmentIcon from "../../components/SegmentIcons/PropertySegmentIcon";

const ManaProperties = () => {
	return (
		<TripleColumnSection
			backgroundImageUrl={`${process.env.PUBLIC_URL}/About/Backgrounds/Properties-BG.png`}
			iconElement={<PropertySegmentIcon/>}
			leftColumnWidth={559}
			mainTextElement={<p>Mana <span className={styles.propertiesColoredText}>Properties</span></p>}
			rightColumnText={
				<p className={styles.infoText}><span
					className={styles.propertiesColoredText}>Mana Properties</span> represents the physical ownership of
					various buildings that serve as the tangible resource in building sustainable communities.
					<br/> <br/>Unlike traditional real estate companies, we take part in an unconventional process that
					emphasizes the importance of fulfilling an area’s needs and enhancing it’s strengths, while also
					nurturing the heart and soul of the neighborhood.
				</p>
			}
		/>
	);
};
export default ManaProperties;
