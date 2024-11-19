import FullHeightContainer from "../../components/FullHeightContainer";
import Wheel from "../../components/Wheel";
import styles from './AboutSection.module.css';

const AboutSection = () => {
	return (
		<FullHeightContainer>
			<div
				style={{height: '100%', backgroundImage: `url(${process.env.PUBLIC_URL}/About/Backgrounds/BG.png)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<div
					style={{height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1220}}>
					<div style={{display: 'flex', flexDirection: 'column', width: 785}}>
						<p style={{fontFamily: 'Space Grotesk', fontSize: 22}}>Introducing</p>
						<p className={styles.mainText}>Mana Common</p>
						<p style={{fontFamily: 'Space Grotesk', fontSize: 22}}>Mana Common is a platform for urban
							revitalization and community-building led by Founder and Chairman Moishe Mana. Our divisions
							represent the most basic elements upon which a community is built: Property, Commerce,
							Culture, Technology, Agriculture, and Social Impact.</p>
					</div>
					<div>
						<Wheel/>
					</div>
				</div>
			</div>
		</FullHeightContainer>
	);
};
export default AboutSection;
