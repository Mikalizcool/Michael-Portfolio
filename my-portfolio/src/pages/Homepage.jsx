import Navbar from '../components/Navbar'
import Body from '../components/Body'
import NormalNavbar from '../components/NormalNavbar'
import Portfolio from '../components/Portfolio'
const Homepage = () => {
    return (
        <>
        <div className="body">
            <NormalNavbar />
            <Portfolio />
        </div>
        <div className="center">
            <Body />
        </div>
        </>
    );
}
 
export default Homepage;