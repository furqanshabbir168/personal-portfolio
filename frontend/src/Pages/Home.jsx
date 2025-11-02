import AboutMe from "../Components/AboutMe"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import Hero from "../Components/Hero"
import NavBar from "../Components/NavBar"
import Projects from "../Components/Projects"
import Tech from "../Components/Tech"
import WorkExperience from "../Components/WorkExperience"


function Home(){
    return(
        <div>
            <NavBar/>
            <Hero/>
            <AboutMe/>
            <Tech/>
            <Projects/>
            <WorkExperience/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Home