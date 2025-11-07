import './body.css'
import github from '../assets/github-mark.svg'
import linkedin from '../assets/linkedin.png'
import { Link } from 'react-router-dom'
const Body = () => {
    return (
        <>
            <div className="heading">
                <h1 className="h1">About <span className="bold">Me</span></h1>
                
                <div className="about-content">
                    <p className="intro">Hi, I'm Michael—a creative professional who's been passionate about design and storytelling since childhood.</p>
                    
                    <p className="description">
                        I specialize in blending creativity with purpose, crafting visual experiences that communicate meaningful messages. 
                        Whether it's through graphic design, animation, or interactive media, I'm driven by projects that make a positive impact.
                    </p>
                    
                    <div className="interests">
                        <h3>What I Do</h3>
                        <ul>
                            <li>Visual Design & Branding</li>
                            <li>Animation & Motion Graphics</li>
                            <li>Creative Writing & Storytelling</li>
                            <li>Interactive Media Development</li>
                        </ul>
                    </div>
                    
                    <p className="vision">
                        My ultimate goal is to create my own video game—combining all my passions into an immersive experience that resonates with players.
                    </p>
                </div>
                
                <div className="links">
                    {/*<a href="/Michael_Damico_Resume.pdf" download="Michael_Damico_Resume.pdf"><button className="button">Download my resume</button></a>*/}
                    <a href="https://github.com/Mikalizcool" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img className="logo" src={github} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-a-damico/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <img className="logo" src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </>
    );
}
 
export default Body;