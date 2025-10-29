import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import Body from '../components/Body'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
const Homepage = () => {
    return (
        <>
        <div className="body">
            <Navbar />
            <Welcome />
        </div>
        <div className="center">
            <Body />
            <Projects />
        </div>
        </>
    );
}
 
export default Homepage;