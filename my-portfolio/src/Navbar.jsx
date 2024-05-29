import './navbar.css'
import { useState } from 'react';
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
    const [menu, setMenu] = useState("MENU");
    return (
        <>
                <nav className="navbar">
                    <button className="navbar-button" onClick={handleClick} type="button">{menu}</button>
                    <button className="navbar-button" type="button">HIRE ME</button>
                </nav>
                <div id="dropdown-menu" className="dropdown-menu">
                    <ul className="list">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#graphic design">Graphic Design</a>
                        </li>
                    </ul>
                </div>
        </>
    );
}
 
export default Navbar;