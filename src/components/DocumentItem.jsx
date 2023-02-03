import '../styles/DocumentItem.css'

const DocumentItem = ({document}) => {

    return (
        <div className="card">
            <img src={document.img} alt="Imagen del documento" className='card-image'/>
            <h2 className='card-title'>{document.title}</h2>
            <p className='card-year'>Año {document.year}</p>
            <p className='card-description'>{document.description}</p>
        </div>
    );
}

export default DocumentItem;