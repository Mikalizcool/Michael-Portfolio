import './index.css'
import './projects.css'
import game from './assets/game.gif'
const Projects = () => {
    return (
        <>
            <div className="project-container">
                <div>
                    <h1 className="h1">I love creating <div className="bold">projects.</div></h1>
                    <p>As part of my web development and programming journey, I've integrated my artistic skills into several fun projects. I have a lot to learn and its been a great journey so far!</p>
                </div>
                <div className="projects-container">
                    <img src={game}></img>
                </div>
            </div>
        </>
    );
}
 
export default Projects;