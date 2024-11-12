import './App.css';
import CommunityUpdates from "./sections/CommunityUpdates";
import Header from "./components/Header";
import GradientBar from "./components/GradientBar";
import UpcomingEvents from "./sections/UpcomingEvents";
import OurPurpose from "./sections/OurPurpose";
import OurNeighborhoods from "./sections/OurNeighborhoods";
import OurFounder from "./sections/OurFounder";
import TestimonialsAndReviews from "./sections/TestimonialsAndReviews";
import mockReviews from './mock/HomePageReviews.json'
import Footer from "./components/Footer";

function App() {
    const reviews = [
        {
            "text": "We’re thrilled to be joining Mana Tech and to have the opportunity to operate at a whole new scale.",
            "name": "Charly Esnal",
            "rating": 5,
            "role": "Managing Director",
            "image": "Team Charly Esnal Foto 1.png",
            "company": "Mana Tech"
        },
        {
            "text": "Mana Wynwood Convention Center is more than just a venue; it’s a dynamic space where creativity and community come together.",
            "name": "Vanja Plavša",
            "rating": 5,
            "role": "Event Director",
            "image": "Team_Vanja.png",
            "company": "Mana Wynwood Convention Center"
        },
        {
            "text": "Mana Fashion Services is here to unite and uplift Miami's fashion community.",
            "name": "Aleksandra Sivokoneva",
            "rating": 5,
            "role": "Creative Director",
            "image": "Aleks.png",
            "company": "Mana Fashion Services"
        }
    ]
  return (
      <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
      >
          <Header />
          <CommunityUpdates />
          <GradientBar height={2}/>
          <UpcomingEvents />
          <GradientBar height={2}/>
          <OurPurpose />
          <OurNeighborhoods />
          <OurFounder />
          <TestimonialsAndReviews reviews={reviews}/>
          <Footer />
      </div>
  );
}

export default App;
