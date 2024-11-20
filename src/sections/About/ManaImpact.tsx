import styles from './Styles.module.css';
import TripleColumnSection from "./components/TripleColumnSection";
import ImpactSegmentIcon from "../../components/SegmentIcons/ImpactSegmentIcon";

const ManaImpact = () => {
	return (
		<TripleColumnSection
			backgroundImageUrl={`${process.env.PUBLIC_URL}/About/Backgrounds/Impact-BG.png`}
			iconElement={<ImpactSegmentIcon/>}
			leftColumnWidth={394}
			mainTextElement={<p>Mana <span className={styles.impactColoredText}>Impact</span></p>}
			rightColumnText={
				<p className={styles.infoText}><span className={styles.impactColoredText}>Mana Impact</span> is
					dedicated to supporting civic engagement within every member of our communities through political
					and social activism. We also raise awareness, engage in education, and advocate on key social issues
					affecting our communities, the country, and the world at large.
				</p>
			}
		/>
	);
};
export default ManaImpact;
