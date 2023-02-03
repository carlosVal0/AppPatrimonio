import "../styles/DashboardHeader.css"
import profilePic from "../assets/person.png"
const DashboardHeader = () => {
    return (
        <header>
            <nav>
                <p className="logo" >App Patrimonio</p>
                <div className="profile-info">
                    <img src={profilePic} alt="profile pic" className="profile-pic"/>
                    <p>Hola, Juan Pablo</p>
                </div>
            </nav>
        </header>
    );
}

export default DashboardHeader;