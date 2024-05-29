import './navbar.css'
const Navbar = () => {
    const handleClick = () => {
        let display = document.getElementById("dropdown-menu").style.display;
        if (display=="none" || display==""){
            document.getElementById("dropdown-menu").style.display = "flex";
        }
        else {
            document.getElementById("dropdown-menu").style.display = "none";
        }
    }
    return (
        <>
            <nav className="navbar">
                <button className="navbar-button" onClick={handleClick} type="button">MENU</button>
                <button className="navbar-button" type="button">HIRE ME</button>
            </nav>
            <div id="dropdown-menu" className="dropdown-menu">
                <ul>
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