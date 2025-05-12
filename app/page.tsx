import Header from './components/Header/Header';
import Footer from "@/app/components/Footer/Footer";
import Services from "./components/Services/Services";
import HeroComponent from "@/app/components/Hero/Hero";

export default function Home() {
  return (
    <>
        <Header />
        <HeroComponent />
        <Services />
        <Footer />
    </>
  );
}
