import './welcome.css'
import welcomeImage from '../assets/welcome.gif'
const Welcome = () => {
    return (
        <>
            <div className="header">
                <div className="starter">
                    <img src= {welcomeImage}></img>
                    <div className="welcome-message">
                        <h1 className="welcome">
                            Hi! My name is <span className='bold-message'>Michael.</span>
                        </h1>
                        <div className="welcome-description">
                            I'm a <div className="bold-description">web developer</div> and <div className="bold-description">graphic designer</div> from New York.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Welcome;