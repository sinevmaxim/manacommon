import styles from './Styles.module.css';
import TripleColumnSection from "./components/TripleColumnSection";
import CultureSegmentIcon from "../../components/SegmentIcons/CultureSegmentIcon";

const ManaCulture = () => {
	return (
		<TripleColumnSection
			backgroundImageUrl={`${process.env.PUBLIC_URL}/About/Backgrounds/Culture-BG.png`}
			iconElement={<CultureSegmentIcon/>}
			leftColumnWidth={394}
			mainTextElement={<p>Mana <span className={styles.cultureColoredText}>Culture</span></p>}
			rightColumnText={
				<p className={styles.infoText}><span className={styles.cultureColoredText}>Mana Culture</span> is our
					division for entertainment, cultural enrichment, and the arts. Our commitment to culture arises from
					our desire to start breathing life into a neighborhood before any constructions begin, and continue
					nurturing the community long afterwards.
					<br/><br/>We connect the art world as a community by collaborating with independent creators in the
					fields of art, fashion and entertainment to revitalize a neighborhood while also ensuring that the
					identity we envision for the area becomes part of its everyday life.
				</p>
			}
		/>
	);
};
export default ManaCulture;
