import Testimonials from './components/Testimonials/testimonials';
import HeroComponent from "@/app/components/Hero/Hero";
import Process from "@/app/components/Process/Process";
import Services from "./components/Services/Services";
import Consulting from './consulting/page';
import ContactUs from './contactus/page';
import AboutUs from './aboutus/page';

export default function Home() {
  return (
    <>
      <HeroComponent />
      <Services />
      <Process />
      <Testimonials />
      <Consulting />
    </>
  );
}
