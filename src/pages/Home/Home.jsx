import NavBar from "../../components/NavBar/NavBar"
import Hero from "./sections/Hero/Hero";
import Blog from "./sections/Blog/Blog";
import Projects from "./sections/Projects/Projects";
import Footer from "./sections/Footer/Footer";


function Home() {
  return (
    <>
      <NavBar />

      {/* IMPORTANTE por causa da navbar fixa */}
      <div style={{ paddingTop: "70px" }}>
        
        <div id="home">
          <Hero />
        </div>

        <div id="blog">
          <Blog />
        </div>

       <div id="projetos">
          <Projects />
        </div>

         <div id="contato">
          <Footer />
        </div>

      </div>
    </>
  );
}

export default Home;