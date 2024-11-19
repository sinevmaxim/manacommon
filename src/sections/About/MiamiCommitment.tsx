import FullHeightContainer from "../../components/FullHeightContainer";
import styles from './AboutSection.module.css';

const MiamiCommitment = () => {
	return (
		<FullHeightContainer>
			<div
				style={{height: '100%', backgroundImage: `url(${process.env.PUBLIC_URL}/About/Backgrounds/Miami-Commitment-BG.png)`, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<div
					style={{height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1333}}>
					<div style={{display: 'flex', flexDirection: 'column', width: 692}}>
						<p className={styles.mainText}>Our Miami Commitment</p>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
						<div style={{display: 'flex', flexDirection: 'column', gap: 30, width: 521}}>
							<img src={`${process.env.PUBLIC_URL}/About/Moishe-Mana-Photo.png`} alt="Moishe Mana"/>
							<p>Since 2009, the Mana Organization has been spearheading the changes in Miami and turning
								it into the western hemisphere global hub to connect North America and Latin
								America.</p>
							<p>We believe the Americas will become one integrated economy of 1.1 billion people.</p>
							<p>We’re leading the transformation in the Tech, Fashion, Commerce, Art and Entertainment
								industries.</p>
						</div>
						<div style={{display: 'flex', flexDirection: 'column', width: 267}}>
							<img src={`${process.env.PUBLIC_URL}/About/Signature-Moishe-Mana.png`}
								 alt="Signature Moishe Mana"/>
							<p style={{alignSelf: 'end'}}>- Moishe Mana</p>
						</div>
					</div>
				</div>
			</div>
		</FullHeightContainer>
	);
};
export default MiamiCommitment;