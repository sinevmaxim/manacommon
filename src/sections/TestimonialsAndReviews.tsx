import {createRef, RefObject, useRef, useState} from "react";
import {exists} from "../tools/Null";
import styles from "./TestimonialsAndReviews.module.css";

interface Review {
	text: string;
	image: string;
	rating: number;
	name: string;
	role: string;
	company: string;
}

type Props = {
	reviews: Review[];
};

enum TransitionDirection {
	Left,
	Right
}

const TestimonialsAndReviews = ({reviews}: Props) => {
	const currentImageRef = useRef<HTMLDivElement>(null);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [transitionDirection, setTransitionDirection] = useState<TransitionDirection>(TransitionDirection.Left);

	const moveNext = () => {
		const nextIndex = Math.min(currentIndex + 1, reviews.length - 1);

		if (nextIndex == currentIndex) return;

		setIsTransitioning(true);
		setTransitionDirection(TransitionDirection.Right);

		setTimeout(() => {
			setCurrentIndex(nextIndex);
			setIsTransitioning(false);
		}, 500);
	};

	const movePrev = () => {
		const prevIndex = Math.max(currentIndex - 1, 0);

		if (prevIndex == currentIndex) return;

		setIsTransitioning(true);
		setTransitionDirection(TransitionDirection.Left);

		setTimeout(() => {
			setCurrentIndex(prevIndex);
			setIsTransitioning(false);
		}, 500);
	};

	if (!exists(reviews)) return null;


	return (
		<div
			style={{width: '100vw', backgroundColor: '#fff', height: '90vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', color: '#000'}}>
			<div className={styles.prevButton} onClick={movePrev}>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
						<path d="M8 13.0581L2 7.0581L8 1.05811" stroke="white" strokeWidth="2"/>
					</svg>
				</p>
			</div>
			<div className={styles.nextButton} onClick={moveNext}>
				<p>
					<svg xmlns="http://www.w3.org/2000/svg" width="9" height="14" viewBox="0 0 9 14" fill="none">
						<path d="M1 1.06592L7 7.06592L1 13.0659" stroke="white" strokeWidth="2"/>
					</svg>
				</p>
			</div>
			<h1 style={{fontSize: 54, fontFamily: 'Neue Haas Grotesk Display Pro', textAlign: 'center', margin: '60px auto', color: '#000'}}>
				Testimonials And Reviews
			</h1>
			<div
				style={{height: '100%', display: 'flex', gap: 50, position: 'absolute', left: '50%', top: '185px', transform: `translate(-247px, 0)`}}>
				{reviews.map((review, index) => {
					if (index < currentIndex) return null

					if (index == currentIndex) {
					return <div style={{position: 'relative'}}>
						<img
							className={`${styles.selectedReviewImage} ${isTransitioning && (transitionDirection === TransitionDirection.Right ? styles.slideOutLeft : styles.slideOutRight)}`}
							src={`${process.env.PUBLIC_URL}/${review.image}`} alt={`${review.name} Review`}/>
						<div
							className={`${styles.selectedReviewInfoWrapper} ${isTransitioning && styles.fadeOut}`}>
							<div className={styles.ratingWrapper}>
								{Array(review.rating).fill(0).map((_, index) =>
									<img key={index} src={`${process.env.PUBLIC_URL}/Star-Icon.png`}/>)}
							</div>
							<p style={{maxWidth: 442, fontSize: 46}}>
								{review.text}
							</p>
							<p style={{maxWidth: 442, fontSize: 22}}>{review.name}</p>
							<p style={{maxWidth: 442, fontSize: 14}}>{review.role}</p>
							<p style={{maxWidth: 442, fontSize: 14}}>{review.company}</p>
						</div>
					</div>;
					} else {
						return <div style={{width: 295, height: 376}}>
							<img
								className={`${styles.reviewImage} ${isTransitioning && styles.slideIn}`}
								src={`${process.env.PUBLIC_URL}/${review.image}`}
								alt={`${review.name} Review`}/>
						</div>;
					}
				})}
			</div>
		</div>
	);
};
export default TestimonialsAndReviews;
