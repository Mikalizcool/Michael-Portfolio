import './cunyschoolofmedicine.css';
import NormalNavbar from '../components/NormalNavbar';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react';
import cunyIntranet from '../assets/cuny-intranet.jpg';
import cunyInternet from '../assets/cuny-internet.jpg';
import cunyAction from '../assets/callingallsophies.jpg';
const CunySchoolOfMedicine = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    
    const showcaseImages = [
        { src: cunyIntranet, title: "Sharepoint Intranet Site", description: "Intranet site for CUNY School of Medicine", type: "image" },
        { src: cunyInternet, title: "Wordpress Internet Site", description: "Internet site for CUNY School of Medicine", type: "image" },
        { src: cunyAction, title: "Social Media CTA", description: "Social Media Asset", type: "image" }
    ];
    
    return (
        <main className="cuny-page">
            <NormalNavbar />
            <h1 className="cuny-page-title">CUNY School of Medicine</h1>
            <p className="cuny-subtitle">DIGITAL ASSETS / INTRANET DEVELOPMENT / SOCIAL MEDIA MANAGEMENT / WEB DEVELOPMENT</p>

            {/* Large, left-aligned project overview title */}
            <h2 className="cuny-overview-title">PROJECT OVERVIEW</h2>
            <div className="cuny-divider" aria-hidden="true"></div>

            {/* Three equal feature/summary cards (title + description) */}
            <section className="cuny-features" aria-label="Project highlights">
                <div className="feature-card">
                    <h3>Challenge</h3>
                    <p>Rebrand the Medical School to better align with its mission and values.</p>
                </div>

                <div className="feature-card">
                    <h3>Solution</h3>
                    <p>Develop a new visual identity and messaging strategy that reflects the school's commitment to diversity, equity, and inclusion.</p>
                </div>

                <div className="feature-card">
                    <h3>Impact</h3>
                    <p>Increased awareness and engagement with the school's mission, leading to a more diverse and inclusive community.</p>
                </div>
            </section>

            <div className="cuny-divider" aria-hidden="true"></div>

            {/* Second row of feature cards */}
            <section className="cuny-features" aria-label="Project details">
                <div className="feature-card">
                    <h3>Process</h3>
                    <p>Worked on communication team to identify key messages and target audiences.</p>
                </div>

                <div className="feature-card">
                    <h3>Services</h3>
                    <p>Brand strategy, visual identity design, messaging framework, and stakeholder engagement.</p>
                </div>
            </section>

            {/* Showcase section with lightbox */}
            <section className="cuny-showcase">
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
            <section className="cuny-loved">
                <h2 className="loved-title">What I Loved About This Project</h2>
                <div className="loved-content">
                    <p>
                        Working on the CUNY School of Medicine project was an incredibly rewarding experience. I had the opportunity to collaborate with a diverse team of professionals who were all passionate about creating a meaningful impact through our work. The challenge of rebranding an institution with such a rich history pushed me to think creatively and strategically, ultimately leading to a final product that we were all proud of.
                    </p>
                    <p>
                        One of the aspects I loved most was the emphasis on user-centered design. We conducted extensive research to understand the needs and preferences of the students and faculty, which informed our design decisions at every stage. This collaborative approach not only resulted in a more effective website but also fostered a sense of ownership and pride among the stakeholders.
                    </p>
                    <p>
                        Overall, this project reinforced my belief in the power of collaboration and empathy in design. By putting ourselves in the shoes of the users, we were able to create a website that truly met their needs and aspirations. I am proud of what we accomplished and excited to see how the CUNY School of Medicine community will benefit from our work.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default CunySchoolOfMedicine;
