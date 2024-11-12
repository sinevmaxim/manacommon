import styles from './Footer.module.css';
import FacebookIcon from "./icons/Facebook";
import XIcon from "./icons/X";
import TikTokIcon from "./icons/TikTok";
import LinkedInIcon from "./icons/LinkedIn";
import YouTubeIcon from "./icons/YouTube";

type Props = {};

const Footer = (props: Props) => {
	return (
			<footer className={styles.footer}>
				<div className={styles.footerInnerPadded}>
					<div style={{display: 'flex', width: '100%'}}>
						<div className={styles.subscribe}>
							<img
								src="https://manacommon.com/wp-content/uploads/2022/09/mana-common-icon.svg" width="50"
								alt="Mana Common Logo Icon"/>
							<h2>Join our community</h2>
							<p>Subscribe to receive updates from Mana Common:</p>
							<form action={"https://manacommon.com/subscribe"}>
								<div className={styles.emailInputWrapper}>
									<label>
										<input className={styles.emailInput} data-parsley-required="true" type="email"
											   name="guestemail"
											   placeholder="Enter your e-mail address..."/>
									</label>
									<button className={styles.subscribeButton} type="submit"> Subscribe</button>
								</div>
							</form>

							<div className={styles.socialMediaWrapper}>
								<FacebookIcon />
								<XIcon />
								<TikTokIcon />
								<LinkedInIcon />
								<YouTubeIcon />
							</div>
						</div>
						<div className={styles.links}>
							<a className={styles.link}>Home</a>
							<a className={styles.link}>About</a>
							<a className={styles.link}>Events</a>
							<a className={styles.link}>News</a>
							<a className={styles.link}>Contact</a>
						</div>
						<div className={styles.divisions}>
							<a className={styles.link}>Mana Common</a>
							<a className={styles.link}>Impact</a>
							<a className={styles.link}>Properties</a>
							<a className={styles.link}>Commerce</a>
							<a className={styles.link}>Culture</a>
							<a className={styles.link}>Tech</a>
							<a className={styles.link}>Agro</a>
							<a className={styles.link}>Fashion</a>
							<a className={styles.link}>Wynwood</a>
							<a className={styles.link}>Hub</a>
						</div>
					</div>

				</div>
			</footer>
	);
};
export default Footer;
