import './body.css'
import github from '../assets/github-mark.svg'
import linkedin from '../assets/linkedin.png'
import { Link } from 'react-router-dom'
const Body = () => {
    return (
        <>
            <div className="heading">
                <h1 className="h1">About <div className="bold">me</div></h1>

                <p>Hi, my name is Michael. Since I was a kid I've always loved to draw and be creative.</p>
                <p>My favorite hobbies are drawing, writing, and animating.</p>
                <p>I enjoy working for companies with good causes.</p>
                <p>My dream is to make my own video game.</p>
                <div className="links">
                    {/*<a href="/Michael_Damico_Resume.pdf" download="Michael_Damico_Resume.pdf"><button className="button">Download my resume</button></a>*/}
                    <a href="https://github.com/Mikalizcool" target="_blank"><img className="logo" src={github}></img></a>
                    <a href="https://www.linkedin.com/in/michael-a-damico/" target="_blank"><img className="logo" src={linkedin}></img></a>
                </div>
            </div>
        </>
    );
}
 
export default Body;