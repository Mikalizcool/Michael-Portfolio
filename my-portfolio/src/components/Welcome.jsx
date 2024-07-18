import '../index.css'
import './welcome.css'
import welcomeImage from '../assets/welcome.gif'
const Welcome = () => {
    return (
        <>
            <div className="header">
                <div className="starter">
                    <div className="welcome-message">
                        <h1 className="welcome">
                            Hi! My <br /> name is <div className="bold-message">Michael.</div>
                        </h1>
                        <div className="welcome-description">
                            I'm a <div className="bold-description">web developer</div> and <div className="bold-description">graphic designer</div> from New York.
                        </div>
                    </div>
                    <img src= {welcomeImage}></img>
                </div>
                <div className="scroll">
                    <p>SCROLL</p>
                    <hr className="vertical-line"></hr>
                </div>
            </div>
        </>
    );
}
 
export default Welcome;