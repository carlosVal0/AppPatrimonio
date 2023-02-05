import "../styles/VideoResource.css"

const VideoResource = ({ video}) => {
    return (
        <div className="video-container">
            <h2>{video.title}</h2>
            <iframe src={video.url}></iframe>
            <p>{video.description}</p>
        </div>
    );
}

export default VideoResource;