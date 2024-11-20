import styles from './Styles.module.css';
import TripleColumnSection from "./components/TripleColumnSection";
import CommerceSegmentIcon from "../../components/SegmentIcons/CommerceSegmentIcon";

const ManaCommerce = () => {
	return (
		<TripleColumnSection
			backgroundImageUrl={`${process.env.PUBLIC_URL}/About/Backgrounds/Commerce-BG.png`}
			iconElement={<CommerceSegmentIcon/>}
			leftColumnWidth={559}
			mainTextElement={<p>Mana <span className={styles.commerceColoredText}>Commerce</span></p>}
			rightColumnText={
				<p className={styles.infoText}><span className={styles.commerceColoredText}>Mana Commerce</span> invests
					in people and businesses to ensure entire neighborhoods thrive during revitalization processes.
					<br/> <br/>We believe a healthy commercial ecosystem is dependent on supporting and attracting small
					businesses, while preserving the area’s original values and identity.
				</p>
			}
		/>
	);
};
export default ManaCommerce;
