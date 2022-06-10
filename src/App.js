import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import LoginControls from "./components/LoginControls";
import HeroSection from "./components/HeroSection";
import NewsletterForm from "./components/NewsletterForm";
import StatsBar from "./components/StatsBar";
import "./App.css";

function App() {
  return (
    <main>
      <NavigationBar></NavigationBar>
      <SearchBar></SearchBar>
      <LoginControls></LoginControls>
      <HeroSection></HeroSection>
      <NewsletterForm></NewsletterForm>
      <StatsBar></StatsBar>
    </main>
  );
}

export default App;
