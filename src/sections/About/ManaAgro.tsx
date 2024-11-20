import styles from './Styles.module.css';
import TripleColumnSection from "./components/TripleColumnSection";
import AgroSegmentIcon from "../../components/SegmentIcons/AgroSegmentIcon";

const ManaAgro = () => {
	return (
		<TripleColumnSection
			backgroundImageUrl={`${process.env.PUBLIC_URL}/About/Backgrounds/Agro-BG.png`}
			iconElement={<AgroSegmentIcon/>}
			leftColumnWidth={560}
			mainTextElement={<p>Mana <span className={styles.agroColoredText}>Agro</span></p>}
			rightColumnText={
				<p className={styles.infoText}><span className={styles.agroColoredText}>Mana Agro</span> is our
					initiative to invest in and build the future of agriculture, for producers and consumers alike. The
					division specializes in top-quality produce, including mangoes, Hass avocados, Tahiti limes, and
					MD-2 pineapples while strengthening the Latin American farming industry by providing education,
					connections and access to digital platforms for farmers.
				</p>
			}
		/>
	);
};
export default ManaAgro;
