import React from 'react';
import FullHeightContainer from "../../../components/FullHeightContainer";
import styles from '../Styles.module.css';


type Props = {
	backgroundImageUrl: string;
	mainTextElement: React.ReactNode;
	iconElement: React.ReactNode;
	rightColumnText: React.ReactNode;
	leftColumnWidth: number;
}

const TripleColumnSection = ({backgroundImageUrl, rightColumnText, mainTextElement, iconElement, leftColumnWidth}: Props) => {
	return (
		<FullHeightContainer>
			<div
				style={{height: '100%', backgroundImage: `url(${backgroundImageUrl})`}}>
				<div className={styles.leftColumn} style={{width: leftColumnWidth}}>
					<p className={styles.mainText}>{mainTextElement}</p>
				</div>
				<div className={styles.middleColumn}>
					{iconElement}
				</div>
				<div className={styles.rightColumn}>
					{rightColumnText}
				</div>
			</div>
		</FullHeightContainer>
	);
};
export default TripleColumnSection;
