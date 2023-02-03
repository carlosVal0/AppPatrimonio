import { useState, useRef } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DocumentItem from "../components/DocumentItem";
import '../styles/UserDashboard.css'

const items = [
    {
        id: 1,
        title: 'Censo Funza 1982',
        description: 'Libro con el censo de Funza del año 1982',
        year: 1982,
        img: '/public/documentImages/1.jpg'
    },
    {
        id: 2,
        title: 'Registro de natalicios 50\'s ',
        description: 'Registros de natalicios de la década de los 50',
        year: 1982,
        img: 'public/documentImages/2.jpg'
    },
    {
        id: 3,
        title: 'Profe rarito',
        description: 'Pues eso, un profe rarito',
        year: 2022,
        img: 'public/documentImages/3.jpg'
    }
]

const UserDashboard = () => {

    const [itemsToRender, setItemsToRender] = useState([])
    const searchTerm = useRef()

    const searchButton = () => {

        const searchTermValue = searchTerm.current.value.toLocaleLowerCase()
        const queryItems = items.filter((item) => item.title.toLocaleLowerCase().includes(searchTermValue))
        setItemsToRender(queryItems)
        searchTerm.current.value = ''

    }

    return (
        <>
        <DashboardHeader />
        <div className="container">
            <div className="search-bar">
                <input type="text" placeholder="Búsqueda" ref={searchTerm}></input>
                <button onClick={() => searchButton()}>Buscar</button>
            </div>
            <div className="items-container">
                {itemsToRender.map((item) => {
                    return <DocumentItem document={item} key={item.id} />
                })}
            </div>
            
        </div>
        </>
        
    );
}

export default UserDashboard;