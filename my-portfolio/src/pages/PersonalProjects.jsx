import "./personalprojects.css";
import Projects from '../components/Projects';
import NormalNavbar from "../components/NormalNavbar";
const PersonalProjects = () => {
    return (
        <>
        <div className="body">
            <NormalNavbar />
            <Projects />
        </div>
        </>
    );
}
export default PersonalProjects;