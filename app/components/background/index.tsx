// src/VideoBackground.js
import React from 'react';
// import './VideoBackground.css'; // Importa el CSS para el estilo

const VideoBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src="/files/noise.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBackground;
