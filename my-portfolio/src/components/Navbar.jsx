import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const handleClick = () => {
        let display = document.getElementById("dropdown-menu").style.display;
        if (display=="none" || display==""){
            document.getElementById("dropdown-menu").style.display = "flex";
        }
        else {
            document.getElementById("dropdown-menu").style.display = "none";
        }
        if (menu == "MENU"){
            setMenu("CLOSE");
        }
        else {
            setMenu("MENU");
        }
    }
    const handleEmail = () => {
        window.open("mailto:michael@madamico.me");
    }
    const [menu, setMenu] = useState("MENU");
    return (
        <>
                <nav className="navbar">
                    <button className="navbar-button" onClick={handleClick} type="button">{menu}</button>
                    <button className="navbar-button" onClick={handleEmail} type="button">HIRE ME</button>
                </nav>
                <div id="dropdown-menu" className="dropdown-menu">
                    <ul className="list">
                        <li>
                            <Link to="/">Homepage</Link>
                        </li>
                        <li>
                            <Link to="graphicdesign">Graphic Design</Link>
                        </li>
                    </ul>
                </div>
        </>
    );
}
 
export default Navbar;