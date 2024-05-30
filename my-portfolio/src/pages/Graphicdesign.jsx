import Navbar from '../components/Navbar.jsx'
import '../index.css'
import './graphicdesign.css'
import animation from '../assets/Animation.mp4'
const Graphicdesign = () => {
    return (
        <>
            <div className="body">
                <Navbar />
                <div className="graphic-design-container">
                    <h1 className="graphic-design-title">My <div className="bold">Graphic Design work.</div></h1>
                    <div className="line-container">
                        <hr className="horizontal-line"></hr>
                        <p>I work with incredible people to create amazing content and products. From working with the Department of Homeland Security to Concern Worldwide, I've devoted
                                many years to making the web a 
                            </p>
                    </div>
                    <div className="graphic-design-work">
                        <div className="work-left">
                            
                        </div>
                        <div className="work-right">
                        <video className="video" width="750" height="500" controls >
                            <source src={animation} type="video/mp4"/>
                        </video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Graphicdesign;