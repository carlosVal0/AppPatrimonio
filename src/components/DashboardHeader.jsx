import { Link } from 'react-router-dom'
import "../styles/DashboardHeader.css"
import profilePic from "../assets/person.png"
const DashboardHeader = () => {
    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" href="/dashboard">App Patrimonio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link" href="#">Marcadores</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </header>
    );
}

export default DashboardHeader;