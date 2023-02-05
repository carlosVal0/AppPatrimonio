import { useState, useRef } from "react";
import DashboardHeader from "../components/DashboardHeader";
import DocumentItem from "../components/DocumentItem";
import DocumentBibliography from "../components/DocumentBibliography";
import '../styles/UserDashboard.css'
import { items } from "../scripts/resources.js";
import VideoResource from "../components/VideoResource";

const UserDashboard = () => {

    const [itemsToRender, setItemsToRender] = useState([])
    const [bibliography, setBibliography] = useState({})
    const [renderBibliography, setRenderBibliography] = useState(false)
    const [renderVideo, setRenderVideo] = useState(false)
    const [video, setVideo] = useState({})
    const [noResults, setNoResults] = useState(false)
    const searchTerm = useRef()

    const searchButton = () => {

        const searchTermValue = searchTerm.current.value.toLocaleLowerCase()
        const queryItems = items.filter((item) => 
            item.title.toLocaleLowerCase().includes(searchTermValue) ||
            item.description.toLocaleLowerCase().includes(searchTermValue)
            )
        if(queryItems.length === 0){
            setNoResults(true)
        }
        else{
            setNoResults(false)
        }
        setItemsToRender(queryItems)
        setRenderBibliography(false)
        setRenderVideo(false)
        setVideo({})
        searchTerm.current.value = ''

    }

    const renderDocument = (resource) => {
        console.log('event triggered')
        if(resource.type === 'document'){
            setRenderBibliography(true)
        }
        else if(resource.type === 'video'){
            setVideo(resource)
            setRenderVideo(true)
        }
        setItemsToRender([])
    }

    return (
        <>
        <DashboardHeader />
        <div className="container-2">
        <div className="container">
            <div className="search-bar">
                <input type="text" placeholder="Búsqueda" ref={searchTerm}></input>
                <button onClick={() => searchButton()}><ion-icon name="search-sharp"></ion-icon></button>
            </div>
            <div className="items-container">
                {itemsToRender.map((item) => {
                    return <DocumentItem document={item} key={item.id} childToParent={renderDocument} />
                })}
            </div>
            <div className="container-bib container-fluid">
                {renderBibliography && <DocumentBibliography />}
            </div>
            <div className="container-video">
               {renderVideo && <VideoResource video={video}/>}
            </div>
            {noResults && <div className="container-not-found">
                <img src="https://drive.google.com/uc?export=view&id=1Ksafkwx4CBbZxOy_MA264pd7sn9NYmx8" alt="Sin resultados de búsqueda" />
                <p>Los criterios de búsqueda no existen</p>
            </div>}
            
            
            </div>
        </div>
        </>
        
    );
}

export default UserDashboard;