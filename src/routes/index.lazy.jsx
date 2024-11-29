import { createLazyFileRoute, useRouteContext } from "@tanstack/react-router";
import GreetingMessage from "../components/GreetingMessage";
import HeroImage from "../components/HeroImage";
import ProjectCard from "../components/ProjectCard";
import Bottles from '../assets/bottles-thumbnail.png';
import LP from '../assets/lp-thumbnail.png';
import Breifcase from '../assets/breifcase-thumbnail.png';
import Clapper from '../assets/clapper-thumbnail.png';
import Smartphone from '../assets/smartphone-thumbnail.png';
import Tshirt from '../assets/tshirt-thumbnail.png';
import ProjectGallery from "../components/ProjectGallery";
import '../css/global.css';
import Footer from "../components/Footer";


const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '80vh',
}

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const context = useRouteContext({ from: "/" });
  console.log(context);

  return (
    <>
      <div style={containerStyle}>
        <GreetingMessage />
        <HeroImage />
      </div>
      <ProjectGallery>
        <ProjectCard title="Arctic Monkeys" description="Arctic Monkeys are releasing a new song. They'll need an album cover." imageSrc={LP} projectLink="/contact" />
        <ProjectCard title="CPHBusiness" description="This school needs a way to oranize their meeting room bookings." imageSrc={Breifcase} projectLink="/contact" />
        <ProjectCard title="DREG" description="Can you print criminals on shirts and sell them? Sure you can!" imageSrc={Tshirt} projectLink="/contact" />
        <ProjectCard title="Patagonia" description="Patagonia got a great story to tell. Let's tell it on all the SoMe platforms." imageSrc={Clapper} projectLink="/contact" />
        <ProjectCard title="Hilfe" description="Let's assist the party people, getting home safe." imageSrc={Smartphone} projectLink="/contact" />
        <ProjectCard title="To Kølige" description="Two local rappers need a music video? Sure thing!" imageSrc={Bottles} projectLink="/contact" />
      </ProjectGallery>
      <Footer />
    </>
  )
}
