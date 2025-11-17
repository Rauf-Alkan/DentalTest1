import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FastAppointment from "@/components/sections/FastAppointment";
import Esthetic from "@/components/sections/Esthetic";
import FourFeatures from "@/components/sections/FourFeatures";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FastAppointment />
        <Esthetic />
        <FourFeatures />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
