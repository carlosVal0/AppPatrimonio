import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      {/* <nav>
                <p className="logo" >App Patrimonio</p>
                <ul className='desktop-menu'>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/">Sugerencias</Link></li>
                    <li><Link to="/login">Iniciar sesión</Link></li>
                </ul>
                <ul className='mobile-menu'>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav> */}
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-white" href="#">
            App Patrimonio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse bg-" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link to="/" className="nav-link disabled" href="#">
                    Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link" href="#">
                    Iniciar Sesión
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
