import { Element } from "react-scroll";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stacks from "./components/Stacks";
import ScrollProfile from "./components/ScrollProfile";
import Footer from "./components/Footer";
import ProjectsOverview from "./components/ProjectsOverview";

function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Hero />
      </Element>
      <Element name="techStack">
        <Stacks />
      </Element>
      <Element name="profile">
        <ScrollProfile />
      </Element>
      <Element name="projects">
        <ProjectsOverview />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
}

export default App;
