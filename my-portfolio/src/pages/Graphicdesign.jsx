import Navbar from '../components/Navbar.jsx'
import '../index.css'
import './graphicdesign.css'
import animation from '../assets/Animation.mp4'
import storyboard from '../assets/Storyboard.png'
import numbers from '../assets/by_the_numbers.png'
import report from '../assets/annual-report.png'
import review from '../assets/year-in-review.png'
import technical from '../assets/technical-art.png'
import postera from '../assets/poster-a.png'
import bkcover from '../assets/book_cover.png'
const Graphicdesign = () => {
    return (
        <>
            <div className="body">
                <Navbar />
                <div className="graphic-design-container">
                    <h1 className="graphic-design-title">My <div className="bold">Graphic Design work.</div></h1>
                    <div className="line-container">
                        <hr className="horizontal-line"></hr>
                        <p>I work with incredible people to create amazing content and products. From working with the <b className="bold"  >Department of Homeland Security</b> to <b className="bold">Concern Worldwide</b>, I've devoted
                                many years to making creative and exciting content.
                        </p>
                    </div>
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
                                <img src={report}></img>
                            </div>
                            <div className="work-right">
                                <h1 className="work-title">Annual Report</h1>
                                <p className="work-description"> The annual report for DHS HSIN. Click to view full version hosted on the DHS site.
                                </p>
                                <p>Created using Adobe Indesign, Adobe Photoshop and Adobe Illustrator.</p>
                            </div>
                        </div>

                        <div className="work-container">
                            <div className="work-left">
                                <h1 className="work-title">Year in Review</h1>
                                <p className="work-description"> The Year in Review for DHS HSIN. Click to view full version hosted on the DHS site.
                                </p>
                                <p>Created using Adobe Indesign and Adobe Illustrator.</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Graphicdesign;