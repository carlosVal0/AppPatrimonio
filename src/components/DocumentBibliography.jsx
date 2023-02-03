import '../styles/DocumentBibliography.css'

const DocumentBibliography = () => {
    return (
        <div className="bibliography">
            <div className="identify-title"> <p>Identificacion</p> </div>
            <div className="document-file">
                 <div className="doc-file">
                    <p>Archivo documental</p>
                    <p>Documento impreso manuscrito</p>
                </div> 
            </div>
            <div className="section-series"> 
                <div className="section-series-content">
                    <p>Fondo seccion serie</p>
                    <p>XX-##</p>
                </div>
            </div>
            <div className="font-type">
                <div className="font-type-content">
                    <p>Tipo de fuente</p>
                    <p>Libro manuscrito</p>
                </div>
            </div>
            <div className="title">
                <div className="title-content">
                    <p> Titulo </p> 
                    <p>TITULO DEL DOCUMENTO</p>
                </div>
            </div>
            <div className="date"> 
                <div className="date-content">
                    <p>Fecha</p>
                    <p>03/02/2023</p>
                </div>
            </div>
            <div className="geo-index"> 
                <div className="geo-index-content">
                    <p>Indice geografico</p>
                    <p>Municipio de Funza</p>
                </div>
            </div>
            <div className="onomastic-index"> 
                <div className="onomastic-index-content">
                    <p>Indice onomastico</p>
                    <p>Sabrá Dios que es</p>
                </div>
            </div>
            <div className="tematic-index"> 
                <div className="tematic-index-content">
                    <p>Indice tematico</p>
                    <p>Información del documentos según temática</p>
                </div>  
            </div>
            <div className="context-title">
                <div className="context-title-content">
                    <p>Contexto</p>
                </div>
                
            </div>
            <div className="photo">
                <div className="photo-content">
                    <p>Foto</p>
                    <img src="https://drive.google.com/uc?export=view&id=1PYuKNt0PJXAZxSeljFrpBTHeIkAeLh7q" alt="Imagen del documento" />
                </div>
            </div>
            <div className="context-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta reprehenderit perspiciatis possimus? Saepe odio nihil ex neque atque, iste alias inventore, odit, dicta voluptate at delectus. Quis, dignissimos culpa? </div>
            <div className="content">
                <div className="content-container">
                    <p>Resumen</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit fugiat ea soluta. Iste sint quibusdam natus illum perspiciatis quos ipsam excepturi, adipisci recusandae consequatur ipsa id maxime possimus veritatis harum.</p>
                </div> 
            </div>
        </div>
    );
}

export default DocumentBibliography;