import './homelandsecurity.css';
import NormalNavbar from '../components/NormalNavbar';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from 'react';
import imdeSeal from '../assets/seal.png';
import dhsAnnualReport from '../assets/annual-report.png';
import dhsAnnualReportPdf from '../assets/dhs-annual-report.pdf';
import technicalArt from '../assets/technical-art.png';
import yearInReview from '../assets/year-in-review.png';
import dhsYearInReviewPdf from '../assets/dhs-year-in-review.pdf';
import dhsAdvocatePdf from '../assets/dhs-advocate.pdf';
import dhsAdvocate from '../assets/dhs-advocate.png';
const HomelandSecurity = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    
    const showcaseImages = [
        { src: dhsAnnualReport, title: "DHS Annual Report", description: "Annual report for the DHS HSIN program", type: "pdf", pdfUrl: dhsAnnualReportPdf },
        { src: imdeSeal, title: "IMDE Seal", description: "Seal for the DHS IMDE program", type: "image" },
        { src: dhsAdvocate, title: "DHS Advocate", description: "Advocacy materials for the DHS HSIN program", type: "pdf", pdfUrl: dhsAdvocatePdf },
        { src: yearInReview, title: "Year in Review", description: "Overview of the DHS HSIN program's achievements", type: "pdf", pdfUrl: dhsYearInReviewPdf },
        { src: technicalArt, title: "Technical Art", description: "Technical art for the DHS IMDE program's fieldwork", type: "image" }
    ].filter(img => img.src);
    
    return (
        <main className="dhs-page">
            <NormalNavbar />
            <h1 className="dhs-page-title">Department of Homeland Security</h1>
            <p className="dhs-subtitle">PRINT / WEBSITE GRAPHICS / ILLUSTRATIONS / INTRANET DEVELOPMENT</p>

            {/* Large, left-aligned project overview title */}
            <h2 className="dhs-overview-title">PROJECT OVERVIEW</h2>
            <div className="dhs-divider" aria-hidden="true"></div>

            {/* Three equal feature/summary cards (title + description) */}
            <section className="dhs-features" aria-label="Project highlights">
                <div className="feature-card">
                    <h3>Challenge</h3>
                    <p>Enhance DHS public outreach and improve communication between sub departments.</p>
                </div>

                <div className="feature-card">
                    <h3>Solution</h3>
                    <p>Develop a comprehensive digital strategy to enhance user engagement and streamline communication.</p>
                </div>

                <div className="feature-card">
                    <h3>Impact</h3>
                    <p>Improved communication and collaboration across departments, leading to more effective public outreach.</p>
                </div>
            </section>

            <div className="dhs-divider" aria-hidden="true"></div>

            {/* Second row of feature cards */}
            <section className="dhs-features" aria-label="Project details">
                <div className="feature-card">
                    <h3>Process</h3>
                    <p>Collaborative workshops and stakeholder interviews were conducted to identify key pain points and opportunities.</p>
                </div>

                <div className="feature-card">
                    <h3>Services</h3>
                    <p>Brand strategy, user experience design, illustration creation, print design, digital assets, and web development.</p>
                </div>
            </section>

            {/* Showcase section with lightbox */}
            <section className="dhs-showcase">
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
            <section className="dhs-loved">
                <h2 className="loved-title">What I Loved About This Project</h2>
                <div className="loved-content">
                    <p>
                        I was scouted by a recruiter for a consulting company randomly and was asked if I was interested
                        in interviewing for a position. The interview I had for this job was probably the best
                        interview I've ever had for a job. The interviewer was a fan of the game series Fallout
                        and we talked about that game for most of the interview. I got the job the next day.
                    </p>
                    <p>
                        This position made me feel like a big deal, haha. I was on two communications teams
                        for two different DHS programs, HSIN and IMDE. I was given so much responsibility and respect
                        that, for a young professional, was really amazing. I was even given a retention bonus a few months
                        into the job!
                    </p>
                    <p>
                        This project really changed my life. It allowed me to afford to pay off debt, improve my
                        dental appearance, and gave me the confidence to apply myself.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default HomelandSecurity;
