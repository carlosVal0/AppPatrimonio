import { useState, useRef } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DocumentItem from "../components/DocumentItem";
import DocumentBibliography from "../components/DocumentBibliography";
import '../styles/UserDashboard.css'

const items = [
    {
        id: 1,
        type: 'document',
        title: 'Censo Funza 1982',
        description: 'Libro con el censo de Funza del año 1982',
        year: 1982,
        img: 'https://drive.google.com/uc?export=view&id=1PYuKNt0PJXAZxSeljFrpBTHeIkAeLh7q'
    },
    {
        id: 2,
        type: 'document',
        title: 'Registro de natalicios 50\'s ',
        description: 'Registros de natalicios de la década de los 50',
        year: 1982,
        img: 'https://drive.google.com/uc?export=view&id=1eicF6KcQZVeCNkCGxUO5rI2Rlzs2ixLY'
    },
    {
        id: 3,
        type: 'document',
        title: 'Profe rarito',
        description: 'Pues eso, un profe rarito',
        year: 2022,
        img: 'https://drive.google.com/uc?export=view&id=1kDsq0hb5du3G0utUjKxUAXFikz-U-CYY'
    }
]

const UserDashboard = () => {

    const [itemsToRender, setItemsToRender] = useState([])
    const [bibliography, setBibliography] = useState({})
    const [renderBibliography, setRenderBibliography] = useState(false)
    const searchTerm = useRef()

    const searchButton = () => {

        const searchTermValue = searchTerm.current.value.toLocaleLowerCase()
        const queryItems = items.filter((item) => item.title.toLocaleLowerCase().includes(searchTermValue))
        setItemsToRender(queryItems)
        setRenderBibliography(false)
        searchTerm.current.value = ''

    }

    const renderDocument = (documentFromChild) => {
        console.log('event triggered')
        setRenderBibliography(true)
        setItemsToRender([])
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
                    return <DocumentItem document={item} key={item.id} childToParent={renderDocument} />
                })}
            </div>
            <div className="container-bib">
                {renderBibliography && <DocumentBibliography />}
            </div>
            
            
        </div>
        </>
        
    );
}

export default UserDashboard;