import "../styles/DocumentItem.css";

const DocumentItem = ({ document, childToParent }) => {
  return (
    // <div className="card">
    //     <img src={document.img} alt="Imagen del documento" className='card-image'/>
    //     <h2 className='card-title'>{document.title}</h2>
    //     <p className='card-year'>Año {document.year}</p>
    //     <p className='card-description'>{document.description}</p>
    // </div>
    <div className="card" style={{width: '18rem'}}>
      <img src={document.img} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{document.title}</h5>
        <p className="card-text">
          {document.description}
        </p>
        <button className="btn btn-primary" onClick={() => childToParent(document)}>
            Info
        </button>
      </div>
    </div>
  );
};

export default DocumentItem;
