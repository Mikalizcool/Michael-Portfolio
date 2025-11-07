import './projects.css';
import game from '../assets/game.gif';
import matchingGame from '../assets/matching-game.jpg';
import companionApp from '../assets/companion-app.jpg';
import cvapp from '../assets/cv-application.png';
import player from '../assets/player_stance.gif';
import cartApp from '../assets/shopping-cart.jpg';

const projects = [
    {
        key: 'game',
        title: "2D Beat 'Em Up Game",
        blurb: 'Unity • C# • Animation System',
        description: [
            'An in‑progress action game built in Unity using C#.',
            "Features a modular player state system enabling dynamic combat transitions."
        ],
        media: game,
        alt: 'Animated sprite preview of 2D beat em up game'
    },
    {
        key: 'memorygame',
        title: 'Memory Game',
        blurb: 'React • API Integration • State',
        description: [
            'A card matching memory game built with React.',
            'Demonstrates state management and external API data usage.'
        ],
        media: matchingGame,
        alt: 'Memory game card layout'
    },
    {
        key: 'rockpaperscissors',
        title: 'Defeat the Hostile A.I!',
        blurb: 'JavaScript • Animation • Game Logic',
        description: [
            'Challenge an adaptive A.I. in a game of Rock Paper Scissors.',
            'Enhances a simple game premise with playful animations.'
        ],
        media: player,
        alt: 'Player stance animation for rock paper scissors game'
    },
    {
        key: 'store',
        title: 'Online Store',
        blurb: 'React • Routing • useEffect',
        description: [
            'Mock e‑commerce experience with cart functionality.',
            'Leverages React Router, hooks, and external API product data.'
        ],
        media: cartApp,
        alt: 'Screenshot of online store interface'
    },
    {
        key: 'companionapp',
        title: 'Companion App',
        blurb: 'React • Theming • Content Architecture',
        description: [
            'A Mass Effect universe companion built for fans & newcomers.',
            'Organizes lore and assets into an accessible interface.'
        ],
        media: companionApp,
        alt: 'Mass Effect companion app screenshot'
    },
    {
        key: 'cvapplication',
        title: 'CV Application',
        blurb: 'React • Forms • State Synchronization',
        description: [
            'Interactive job application builder using controlled inputs.',
            'Demonstrates real‑time form state updates.'
        ],
        media: cvapp,
        alt: 'CV application form screenshot'
    }
];

const Projects = () => {
    const handleClick = (key) => {
        if (key === 'memorygame') {
            window.open('https://memory-game-two-pied.vercel.app/');
        } else if (key === 'companionapp') {
            window.open('https://mass-effect-companion-app.vercel.app/');
        } else if (key === 'cvapplication') {
            window.open('https://cv-application-gamma-opal.vercel.app/');
        } else if (key === 'rockpaperscissors') {
            window.open('https://mikalizcool.github.io/Rock-Paper-Scissors/');
        } else if (key === 'store') {
            window.open('https://shopping-cart-flame-eight-82.vercel.app/');
        } else if (key === 'game') {
            window.open('https://youtu.be/mSCl8Xe2V1Y');
        }
    };

    return (
        <section className="project-container" aria-labelledby="projects-heading">
            <header className="projects-header">
                <h1 id="projects-heading" className="h1">
                    I love <span className="bold">creating.</span>
                </h1>
                <p className="projects-intro">
                    On my design and programming journey, I've created several projects. I still have a lot to learn, but I'm having a lot of fun!
                </p>
            </header>

            <div className="projects-grid">
                        {projects.map((p) => (
                            <article key={p.key} className="project-card" aria-labelledby={`title-${p.key}`}>
                                <div className="project-media-wrapper" onClick={() => handleClick(p.key)}>
                                    <img src={p.media} alt={p.alt} className="project-media" loading="lazy" />
                                    <div className="project-media-overlay">
                                        <span>Open Project →</span>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <div className="project-text-block">
                                        <h2 id={`title-${p.key}`}>{p.title}</h2>
                                        <p className="project-blurb">{p.blurb}</p>
                                        {p.description.map((line, i) => (
                                            <p key={i} className="project-line">{line}</p>
                                        ))}
                                    </div>
                                    <button className="button project-button" onClick={() => handleClick(p.key)}>
                                        View
                                    </button>
                                </div>
                            </article>
                        ))}
            </div>
        </section>
    );
};

export default Projects;