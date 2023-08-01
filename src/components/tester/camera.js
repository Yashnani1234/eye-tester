import React,{useRef,useEffect,useState} from "react";
import './camera.css'
function Camera(){
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const[hasPhoto]=useState(false);

    const getVideo=() => {
        navigator.mediaDevices
        .getUserMedia({
            video :{width:1920,height:1080}
        })
        .then(stream =>{
            let video=videoRef.current;
            video.srcObject=stream;
            video.play();
        })
        .catch(err => {
            console.error(err);
        })
    }
    useEffect(()=> {
        getVideo();}
        ,[videoRef]
    )
    return (
        <div className="Camera">
            <div className="camsub">
                <video ref={videoRef}></video>
                <button><strong>snap</strong></button>   
             <div className={'result'+ (hasPhoto ? 'hasPhoto':'')}>
                <canvas ref={photoRef}></canvas>
                <button><strong>CLOSE!</strong></button>
             </div>

            </div>
        </div>
    );
}
export default Camera