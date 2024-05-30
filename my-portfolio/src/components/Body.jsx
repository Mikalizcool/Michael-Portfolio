import '../index.css'
import './body.css'
import github from '../assets/github-mark.svg'
import linkedin from '../assets/linkedin.png'
import { Link } from 'react-router-dom'
const Body = () => {
    return (
        <>
            <div className="heading">
                <h1 className="h1">Let's work <div className="bold">together.</div></h1>
                <p>From web development to graphic design, to web apps and animation. I help great people and organizations create amazing projects.</p>
                <p>Organizations such as: <div className="bold">The Department of Homeland Security</div> and <div className="bold">Concern Worldwide.</div></p>
                <div className="links">
                    <button className="button">Download my resume</button>
                    <img className="logo" src={github}></img>
                    <img className="logo" src={linkedin}></img>
                    <button className="button-a">Graphic Design Work</button>
                </div>
            </div>
        </>
    );
}
 
export default Body;