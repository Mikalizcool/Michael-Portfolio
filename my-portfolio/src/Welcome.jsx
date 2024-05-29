import './index.css'
import welcomeImage from './assets/welcome.gif'
const Welcome = () => {
    return (
        <>
            <div className="header">
                <div className="welcome-message">
                    <h1 className="welcome">
                        Hi! My <br /> name is <div className="bold-message">Michael.</div>
                    </h1>
                    <p className="welcome-description">
                        I'm a <div className="bold-description">web developer</div> and <div className="bold-description">graphic designer</div> from New York.
                    </p>
                </div>
                <img src= {welcomeImage}></img>
            </div>
        </>
    );
}
 
export default Welcome;