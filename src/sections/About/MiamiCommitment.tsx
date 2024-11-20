import FullHeightContainer from "../../components/FullHeightContainer";
import styles from './Styles.module.css';

const MiamiCommitment = () => {
	return (
		<FullHeightContainer>
			<div
				style={{height: '100%', backgroundImage: `url(${process.env.PUBLIC_URL}/About/Backgrounds/Miami-Commitment-BG.png)`}}>
				<div className={styles.leftColumn} style={{width: 692}}>
					<p className={styles.mainText}>Our Miami Commitment</p>
				</div>
				<div className={styles.rightColumn} style={{gap: 10}}>
					<div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
						<img src={`${process.env.PUBLIC_URL}/About/Moishe-Mana-Photo.png`} alt="Moishe Mana"/>
						<p className={styles.infoText}>Since 2009, the Mana Organization has been spearheading the
							changes in Miami and turning
							it into the western hemisphere global hub to connect North America and Latin
							America.</p>
						<p className={styles.infoText}>We believe the Americas will become one integrated economy of 1.1
							billion people.</p>
						<p className={styles.infoText}>We’re leading the transformation in the Tech, Fashion, Commerce,
							Art and Entertainment
							industries.</p>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', width: 267}}>
						<img src={`${process.env.PUBLIC_URL}/About/Signature-Moishe-Mana.png`}
							 alt="Signature Moishe Mana"/>
						<p className={styles.infoText} style={{alignSelf: 'end'}}>- Moishe Mana</p>
					</div>
				</div>
			</div>
		</FullHeightContainer>
	);
};
export default MiamiCommitment;
