import AboutSection from "../sections/About/AboutSection";
import MiamiCommitment from "../sections/About/MiamiCommitment";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GradientBar from "../components/GradientBar";

type Props = {};

const About = (props: Props) => {
	return (
		<Page>
			<Header/>
			<AboutSection/>
			<GradientBar/>
			<MiamiCommitment/>
			<Footer/>
		</Page>
	);
};
export default About;
