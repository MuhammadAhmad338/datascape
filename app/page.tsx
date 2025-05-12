import Login from './components/Login/page';
import Header from './components/Header/Header';
import Footer from "@/app/components/Footer/Footer";
import Services from "./components/Services/Services";
import HeroComponent from "@/app/components/Hero/Hero";
import Process from "@/app/components/Process/Process";
import Consulting from './components/Consulting/Consulting';
import Testimonials from './components/Testimonials/testimonials';

export default function Home() {
  return (
    <>
        <Header />
        <HeroComponent />
        <Services />
        <Process />

        <Testimonials />
        <Consulting />
        <Footer />
    </>
  );
}
