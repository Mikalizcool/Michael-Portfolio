import './index.css'
import './projects.css'
import game from './assets/game.gif'
import matchingGame from './assets/matching-game.jpg'
const Projects = () => {
    const handleClick = () => {
        window.location.href = "https://memory-game-two-pied.vercel.app/";
    }
    return (
        <>
            <div className="project-container">
                <div>
                    <h1 className="h1">I love creating <div className="bold">projects.</div></h1>
                    <p>As part of my web development and programming journey, I've integrated my artistic skills into several fun projects. I have a lot to learn and its been a great journey so far!</p>
                </div>
                <div className="projects-container">
                    <div className="project">
                        <img src={game}></img>
                        <div className="space"></div>
                        <div className="project-description">
                            <h1>2d Beat em' up Game</h1>
                            <p>An in progress video game created in Unity using the c# programming language.</p>
                            <p>It has a comedic halloween theme and I plan on releasing an early access version in Fall.</p>
                        </div>
                    </div>
                    <hr className="horizontal-line"></hr>
                    <div className="project">
                        <div className="project-description">
                            <h1>Memory Game</h1>
                            <p>A memory game created using React.</p>
                            <p>It has a comedic halloween theme and I plan on releasing an early access version in Fall.</p>
                        </div>
                        <div className="space"></div>
                        <img onClick= {handleClick} src={matchingGame}></img>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Projects;