import './concernworldwide.css';
import hero from '../assets/cnrwl_annual_report.jpg';
import reportThumb from '../assets/cnrwl_annual_report.jpg';
import bythenumbers from '../assets/by_the_numbers.png';
import book from '../assets/book_cover.png';
import posterA from '../assets/poster-a.png';
import concernAnimation from '../assets/Animation.mp4';
import annualReportPdf from '../assets/concern-worldwide-annual-report-2022.pdf';
import storyBoard from '../assets/Storyboard.png';
import NormalNavbar from '../components/NormalNavbar';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react';

const ConcernWorldwide = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    
    const showcaseImages = [
        { src: reportThumb, title: "Annual Report", description: "Main report layout and design", type: "pdf", pdfUrl: annualReportPdf },
        { src: bythenumbers, title: "Impact by Numbers", description: "Data visualization and infographics", type: "image" },
        { src: concernAnimation, title: "Animation", description: "Campaign animation and motion graphics for a younger audience", type: "video" },
        { src: storyBoard, title: "Storyboard", description: "Storyboard for the Malawi animation", type: "image" }
    ];
    return (
        <main className="cnrw-page">
            <NormalNavbar />
            <h1 className="cnrw-page-title">Concern Worldwide</h1>
            <p className="cnrw-subtitle">PRINT / WEBSITE GRAPHICS / ANIMATION</p>

            {/* Large, left-aligned project overview title */}
            <h2 className="cnrw-overview-title">PROJECT OVERVIEW</h2>
            <div className="cnrw-divider" aria-hidden="true"></div>

            {/* Three equal feature/summary cards (title + description) */}
            <section className="cnrw-features" aria-label="Project highlights">
                <div className="feature-card">
                    <h3>Challenge</h3>
                    <p>Raise awareness for the Malawi humanitarian crisis and Concern's impact globally.</p>
                </div>

                <div className="feature-card">
                    <h3>Solution</h3>
                    <p>Design digital and print assets to effectively communicate the campaign message to stakeholders, donors, and the public.</p>
                </div>

                <div className="feature-card">
                    <h3>Impact</h3>
                    <p>In 2022, Concern reached 36 million people across 25 countries through six areas of programming.</p>
                </div>
            </section>

            <div className="cnrw-divider" aria-hidden="true"></div>

            {/* Second row of feature cards */}
            <section className="cnrw-features" aria-label="Project details">
                <div className="feature-card">
                    <h3>Process</h3>
                    <p>DISCOVERY/ RESEARCH/ DESIGN/ TEST/ DEPLOY</p>
                </div>

                <div className="feature-card">
                    <h3>Services</h3>
                    <p>Art direction, animation development, print design, digital assets, data visualization, and marketing collateral development for donor engagement.</p>
                </div>
            </section>

            {/* Showcase section with lightbox */}
            <section className="cnrw-showcase">
                <h2 className="showcase-title">Project Showcase</h2>
                <div className="showcase-divider" aria-hidden="true"></div>
                
                <div className="showcase-grid">
                    {showcaseImages.map((image, index) => (
                        <div 
                            key={image.title} 
                            className="showcase-item"
                        >
                            <div className="showcase-caption">
                                <h3>{image.title}</h3>
                                <p>{image.description}</p>
                            </div>
                            <div 
                                className="showcase-image"
                                onClick={() => {
                                    if (image.type === 'pdf') {
                                        window.open(image.pdfUrl, '_blank');
                                    } else if (image.type !== 'video') {
                                        setPhotoIndex(index);
                                        setIsOpen(true);
                                    }
                                }}
                                style={{ cursor: image.type === 'video' ? 'default' : 'pointer' }}
                            >
                                {image.type === 'video' ? (
                                    <video 
                                        src={image.src} 
                                        controls 
                                        style={{ width: '100%', height: 'auto', display: 'block', maxWidth: '600px' }}
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={image.src} alt={image.title} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    index={photoIndex}
                    slides={showcaseImages}
                />
            </section>

            {/* What I Loved About This Project */}
            <section className="cnrw-loved">
                <h2 className="loved-title">What I Loved About This Project</h2>
                <div className="loved-content">
                    <p>
                        This was the first office job I ever had. Thinking back on it, I was so nervous!    
                        It was located in a tall office building in Manhattan on one of the top floors.
                        I had to show my ID to the doorman every day. It was exciting to feel so professional!
                        The office was so nice it was a great work environment.
                    </p>
                    <p>
                        This company has such a noble cause that every day I worked there I felt a sense
                        of pride. I was proud to tell people where I worked and I didn't mind the commute
                        to the office at all. It was so exciting.
                    </p>
                    <p>
                        If I had to take one thing away from this project, it would be the way it made me
                        feel like a true professional and the feeling that my work mattered.
                    </p>
                    <p>
                        
                    </p>
                </div>
            </section>
        </main>
    );
}

export default ConcernWorldwide;