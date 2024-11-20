import AboutSection from "../sections/About/AboutSection";
import MiamiCommitment from "../sections/About/MiamiCommitment";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GradientBar from "../components/GradientBar";
import ManaProperties from "../sections/About/ManaProperties";
import ManaCommerce from "../sections/About/ManaCommerce";
import ManaCulture from "../sections/About/ManaCulture";
import ManaTech from "../sections/About/ManaTech";
import ManaAgro from "../sections/About/ManaAgro";
import ManaImpact from "../sections/About/ManaImpact";

type Props = {};

const About = (props: Props) => {
	return (
		<Page>
			<Header/>

			<AboutSection/>
			<GradientBar/>

			<MiamiCommitment/>
			<GradientBar/>

			<ManaProperties/>
			<GradientBar/>

			<ManaCommerce/>
			<GradientBar/>

			<ManaCulture/>
			<GradientBar/>

			<ManaTech/>
			<GradientBar/>

			<ManaAgro/>
			<GradientBar/>

			<ManaImpact/>
			<Footer/>

		</Page>
	);
};
export default About;
