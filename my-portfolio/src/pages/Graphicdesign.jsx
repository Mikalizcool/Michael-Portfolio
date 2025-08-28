import Navbar from '../components/Navbar.jsx'
import './graphicdesign.css'
import animation from '../assets/Animation.mp4'
import storyboard from '../assets/Storyboard.png'
import numbers from '../assets/by_the_numbers.png'
import report from '../assets/annual-report.png'
import review from '../assets/year-in-review.png'
import technical from '../assets/technical-art.png'
import postera from '../assets/poster-a.png'
import bkcover from '../assets/book_cover.png'
import seal from '../assets/seal.jpg'
import cnrwlreport from '../assets/cnrwl_annual_report.jpg'
import React, { useEffect } from 'react';
const Graphicdesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const handleClick = (name) => {
        if (name=="report"){
            window.open("https://www.dhs.gov/sites/default/files/2024-03/23_0508_cio_2022-annual-report-review.pdf");
        }
        else if (name=="review"){
            window.open("https://www.dhs.gov/sites/default/files/2024-03/24_0320_cio_2022-year-in-review.pdf");
        }
        else if (name=="bkcover"){
            window.open("https://www.amazon.com/Soul-Manifest-Survival-Dystopian-Adventure-ebook/dp/B0B3HM8VT9")
        }
        else if (name=="cnrwreport"){
            window.open("https://concernusa.org/reports/concern-us-ar-2022_web.pdf")
        }
    }
    return (
        <>
            <div className="body">
                <Navbar />
                <div className="graphic-design-container">
                    <h1 className="graphic-design-title">My <div className="bold">Graphic Design work.</div></h1>
                    <div className="line-container">
                        <hr className="horizontal-line"></hr>
                        
                    </div>
                    <p className="design-description">I work with incredible people to create amazing content and products. From working with the <b className="bold"  >Department of Homeland Security</b> to <b className="bold">Concern Worldwide</b>, I've devoted
                                many years to making creative and exciting content.
                    </p>
                    <div className="graphic-design-work">
                        <div className="work-container">
                            <div className="work-left">
                                <h1 className="work-title">Malawi Animation</h1>
                                <p className="work-description">A short animation that acts as an introduction to a larger video project informing the public on the struggles of Malawi farmers and the conditions faced by
                                    those who reside in the region.
                                </p>
                                <p>Created using Clip Studio Paint and Adobe Premiere Pro.</p>
                            </div>
                            <div className="work-right">
                            <video className="video"  controls >
                                <source src={animation} type="video/mp4"/>
                            </video>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <img src={storyboard}></img>
                            </div>
                            <div className="work-right">
                                <h1 className="work-title">Storyboard</h1>
                                <p className="work-description"> A storyboard for the Malawi animation. Storyboards are used to plan animation projects from start to finish.
                                </p>
                                <p>Created using Adobe Indesign and Adobe Photoshop.</p>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <h1 className="work-title">By The Numbers</h1>
                                <p className="work-description"> A fact sheet used to inform potential contributers to Concern Worldwide's cause.
                                </p>
                                <p>Created using Adobe Indesign.</p>
                            </div>
                            <div className="work-right">
                                <img src={numbers}></img>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <img src={cnrwlreport}></img>
                            </div>
                            <div className="work-right">
                                <h1 className="work-title">Annual Report</h1>
                                <p className="work-description"> The annual report for Concern Worldwide I helped create. Click to view full version hosted on the Concern Worldwide site.
                                </p>
                                <p>Created using Adobe Indesign, Adobe Photoshop and Adobe Illustrator.</p>
                                <button className="work-button" onClick={() => (handleClick("cnrwreport"))}>Check it out</button>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <h1 className="work-title">IMDE Seal</h1>
                                <p className="work-description"> The seal I created for the IMDE program of the DHS.
                                </p>
                                <p>Created using Adobe Illustrator.</p>
                            </div>
                            <div className="work-right">
                                <img src={seal}></img>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                            <img src={report}></img>
                            </div>
                            <div className="work-right">
                                <h1 className="work-title">Annual Report</h1>
                                <p className="work-description"> The annual report for DHS HSIN. Click to view full version hosted on the DHS site.
                                </p>
                                <p>Created using Adobe Indesign, Adobe Photoshop and Adobe Illustrator.</p>
                                <button className="work-button" onClick={() => (handleClick("report"))}>Check it out</button>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <h1 className="work-title">Year in Review</h1>
                                <p className="work-description"> The Year in Review for DHS HSIN. Click to view full version hosted on the DHS site.
                                </p>
                                <p>Created using Adobe Indesign and Adobe Illustrator.</p>
                                <button className="work-button" onClick={() => (handleClick("review"))}>Check it out</button>
                            </div>
                            <div className="work-right">
                                <img src={review}></img>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <img src={technical}></img>
                            </div>
                            <div className="work-right">
                                <h1 className="work-title">Technical Illustration</h1>
                                <p className="work-description"> An example of my ability to create technical illustrations.
                                </p>
                                <p>Created using Clip Studio Paint.</p>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <h1 className="work-title">Poster Commission</h1>
                                <p className="work-description"> A poster I created for the popular web show The Angry Joe Show.
                                </p>
                                <p>Created using Adobe Photoshop.</p>
                            </div>
                            <div className="work-right">
                                <img src={postera}></img>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <img src={bkcover}></img>
                            </div>
                            <div className="work-right">
                                <h1 className="work-title">Book cover</h1>
                                <p className="work-description"> The cover for the book I wrote. This complicated project helped me learn project management skills.
                                </p>
                                <p>Created using Clip Studio Paint.</p>
                                <button className="work-button" onClick={() => (handleClick("bkcover"))}>Check it out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Graphicdesign;