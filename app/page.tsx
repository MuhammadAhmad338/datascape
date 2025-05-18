import Testimonials from './components/Testimonials/testimonials';
import HeroComponent from "@/app/components/Hero/Hero";
import Process from "@/app/components/Process/Process";
import Services from "./components/Services/Services";
import Features from "./components/Features/Features";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <Services />
      <Features />
      <Process />
      <Testimonials />
    </>
  );
}
