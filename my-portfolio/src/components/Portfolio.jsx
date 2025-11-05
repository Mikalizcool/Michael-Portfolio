import React from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";
import concernworldwide from '../assets/concern-worldwide.jpg'
import homelandsecurity from '../assets/homeland-security.jpg'
import cunymedicine from '../assets/cuny-medicine.jpg'
const portfolioItems = [
  {
    src: concernworldwide,
    title: "Concern Worldwide",
    description: "Humanitarian company on a mission to end extreme poverty",
    link: "/concernworldwide",
  },
  {
    src: homelandsecurity,
    title: "Department of Homeland Security",
    description: "A federal agency dedicated to protecting national security",
    link: "/homelandsecurity",
  },
  {
    src: cunymedicine,
    title: "CUNY School of Medicine",
    description: "A leading institution for medical education and research",
    link: "/cunymedicine",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="portfolio-gallery">
        {portfolioItems.map((item, index) => (
          <Link 
            to={item.link || "#"} 
            className="portfolio-item" 
            key={index}
            style={{ textDecoration: 'none' }}
          >
            <img src={item.src} alt={item.title} />
            <div className="overlay">
              <div className="overlay-text">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
