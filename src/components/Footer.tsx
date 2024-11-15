import styles from './Footer.module.css';
import FacebookIcon from "./CompanyIcons/Facebook";
import XIcon from "./CompanyIcons/X";
import TikTokIcon from "./CompanyIcons/TikTok";
import LinkedInIcon from "./CompanyIcons/LinkedIn";
import YouTubeIcon from "./CompanyIcons/YouTube";
import GradientBar from "./GradientBar";

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
							<a className={styles.link}><span>Home</span></a>
							<a className={styles.link}><span>About</span></a>
							<a className={styles.link}><span>Events</span></a>
							<a className={styles.link}><span>News</span></a>
							<a className={styles.link}><span>Contact</span></a>
						</div>
						<div className={styles.divisions}>
							<a href="https://manacommon.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://a.mana1.co/2022/09/mana-common-icon.svg"
									 alt="Mana Common"/>
								<span>Mana Common</span>
							</a>
							<a href="https://impact.manacommon.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://a.mana1.co/2022/03/mana-impact-icon.svg"
									 alt="Mana impact"/>
								<span>Impact</span>
							</a>
							<a href="https://properties.manacommon.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://a.mana1.co/2022/03/mana-properties-icon.svg"
									 alt="Mana properties"/>
								<span>Properties</span>
							</a>
							<a href="https://commerce.manacommon.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://a.mana1.co/2022/03/mana-commerce-icon.svg"
									 alt="Mana commerce"/>
								<span>Commerce</span>
							</a>
							<a href="https://culture.manacommon.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://a.mana1.co/2022/03/mana-culture-icon.svg"
									 alt="Mana culture"/>
								<span>Culture</span>
							</a>
							<a href="https://tech.manacommon.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://a.mana1.co/2022/03/mana-tech-icon.svg"
									 alt="Mana tech"/>
								<span>Tech</span>
							</a>
							<a href="https://agro.manacommon.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://a.mana1.co/2022/03/mana-agro-icon.svg"
									 alt="Mana agro"/>
								<span>Agro</span>
							</a>
							<a href="https://fashion.manacommon.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://m.mana1.co/wp-content/uploads/2023/06/fashion-icon.svg"
									 alt="Mana Fashion Icon"/>
								<span>Fashion</span>
							</a>
							<a href="https://manawynwood.com" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://m.mana1.co/wp-content/uploads/2023/06/wynwood-icon.svg"
									 alt="Mana Wynwood Logo"/>
								<span>Wynwood</span>
							</a>
							<a href="https://hubs.manacommon.com/" className={styles.divisionsLink}>
								<img className={styles.divisionsIcon}
									 src="https://a.mana1.co/2022/09/mana-common-icon.svg"
									 alt="Mana Hubs Logo"/>
								<span>Mana Hubs</span>
							</a>
						</div>
					</div>

					<div style={{marginTop: '2.5rem', marginBottom: 30}}>

						<GradientBar height={1}/>
					</div>
				</div>
			</footer>
	);
};
export default Footer;
