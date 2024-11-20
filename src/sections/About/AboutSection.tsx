import FullHeightContainer from "../../components/FullHeightContainer";
import Wheel from "../../components/Wheel";
import styles from './Styles.module.css';

const AboutSection = () => {
	return (
		<FullHeightContainer>
			<div
				style={{height: '100%', backgroundImage: `url(${process.env.PUBLIC_URL}/About/Backgrounds/BG.png)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<div
					className={styles.leftColumn}>
					<div style={{display: 'flex', flexDirection: 'column', width: 785}}>
						<p className={styles.infoText}>Introducing</p>
						<p className={styles.mainText}>Mana Common</p>
						<p className={styles.infoText}>Mana Common is a platform for urban
							revitalization and community-building led by Founder and Chairman Moishe Mana. Our divisions
							represent the most basic elements upon which a community is built: Property, Commerce,
							Culture, Technology, Agriculture, and Social Impact.</p>
					</div>
					<div className={styles.rightColumn}>
						<Wheel/>
					</div>
				</div>
			</div>
		</FullHeightContainer>
	);
};
export default AboutSection;
