import { useNavigate } from "react-router-dom";
import "../styles/Login.css"

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('navigating')
        navigate('/dashboard')
    }

    return (
        <div className="form-container">
            <form className="login-form" action="/dashboard" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" placeholder="correo@dominio.com" />

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="*******"/>

                <input type="submit" value="Iniciar sesión" className="login-button"/>
            </form>
        </div>
    );
}

export default Login;