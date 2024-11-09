import '../index.css'
import './projects.css'
import game from '../assets/game.gif'
import matchingGame from '../assets/matching-game.jpg'
import companionApp from '../assets/companion-app.jpg'
import cvapp from '../assets/cv-application.png'
import player from '../assets/player_stance.gif'
import cartApp from '../assets/shopping-cart.jpg'
const Projects = () => {
    const handleClick = (name) => {
        if (name=="memorygame"){
            window.open("https://memory-game-two-pied.vercel.app/");
        }
        else if (name=="companionapp"){
            window.open("https://mass-effect-companion-app.vercel.app/");
        }
        else if (name=="cvapplication"){
            window.open("https://cv-application-ebon.vercel.app/");
        }
        else if (name=="rockpaperscissors"){
            window.open("https://mikalizcool.github.io/Rock-Paper-Scissors/");
        }
        else if (name=="store"){
            window.open("https://shopping-cart-flame-eight-82.vercel.app/");
        }
        else if (name=="game"){
            window.open("https://youtu.be/mSCl8Xe2V1Y");
        }
    }
    return (
        <>
            <div className="project-container">
                <div>
                    <h1 className="h1">I love <div className="bold">creating.</div></h1>
                    <p>As part of my web development and programming journey, I've integrated my artistic skills into several fun projects. I have a lot to learn and its been a great journey so far!</p>
                </div>
                <div className="projects-container">
                    <div className="project">
                        <img src={game}></img>
                        <div className="space"></div>
                        <div className="project-description">
                            <h1>2d Beat 'em up Game</h1>
                            <p>An in progress video game created in Unity using the c# programming language.</p>
                            <p>This game features the ability to change the player's state dynamically, creating an exciting gameplay experience.</p>
                            <button className="button" onClick={() => (handleClick("memorygame"))}>Check it out!</button>
                        </div>
                    </div>
                    <hr className="vertical-line-projects"></hr>
                    <div className="project">
                        <div className="project-description">
                            <h1>Memory Game</h1>
                            <p>A memory game created using React.</p>
                            <p>This project focuses on utilizing state while fetching and using data from an external API.</p>
                            <button className="button" onClick={() => (handleClick("memorygame"))}>Try it out</button>
                        </div>
                        <div className="space"></div>
                        <img src={matchingGame}></img>
                    </div>
                    <hr className="vertical-line-projects"></hr>
                    <div className="project">
                    <img onClick= {handleClick} src={cartApp}></img>
                    <div className="space"></div>
                        <div className="project-description">
                            <h1>Online Store</h1>
                            <p>A mock online store with a shopping cart.</p>
                            <p>This project uses react routers, useState, and useEffect in order to display store items from an external API.</p>
                            <button className="button" onClick={() => (handleClick("store"))}>Try it out</button>
                        </div>
                    </div>
                    <hr className="vertical-line-projects"></hr>
                    <div className="project">
                        <div className="project-description">
                            <h1>Companion App</h1>
                            <p>A companion app for the Mass Effect game series made using React.</p>
                            <p>This project focuses on providing information on the Mass Effect game series in a way that is interesting for fans and newcomers alike.</p>
                            <button className="button" onClick={() => (handleClick("companionapp"))}>Try it out</button>
                        </div>
                        <div className="space"></div>
                        <img onClick= {handleClick} src={companionApp}></img>
                    </div>
                    <hr className="vertical-line-projects"></hr>
                    <div className="project">
                    <img onClick= {handleClick} src={cvapp}></img>
                    <div className="space"></div>
                        <div className="project-description">
                            <h1>CV-Application</h1>
                            <p>A job application made using React.</p>
                            <p>This project uses user input and state to update a form.</p>
                            <button className="button" onClick={() => (handleClick("cvapplication"))}>Try it out</button>
                        </div>
                    </div>
                    <hr className="vertical-line-projects"></hr>
                    <div className="project">
                    <img onClick= {handleClick} src={player}></img>
                    <div className="space"></div>
                        <div className="project-description">
                            <h1>Defeat the hostile A.I!</h1>
                            <p>Can you defeat this A.I in a game of rock paper scissors?</p>
                            <p>This project involves making a simple game more interesting with animations.</p>
                            <button className="button" onClick={() => (handleClick("rockpaperscissors"))}>Try it out</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Projects;