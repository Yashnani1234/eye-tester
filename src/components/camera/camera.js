import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./camera.css";

function Camera() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const anotherImageURL = "image1.jpg";

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 600, height: 300 },
      }) //to access the camera
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);
    let video = videoRef.current;
    let photo = photoRef.current;
    photo.width = width;
    photo.height = height;
    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    // Get the data URL of the canvas (captured image)
    const dataURL = photo.toDataURL();
    // Set the capturedImage state with the data URL
    setCapturedImage(dataURL);
    setHasPhoto(true);
    compareImages();

  };
  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  };
  const compareImages = () => {
    if (capturedImage === anotherImageURL) {
      console.log("Images are the same.");
    } else {
      console.log("Images are different.");
    }
  };
  useEffect(() => {
    getVideo();
  }, [videoRef]); //function to call getvideo()
  return (
    <div className="Camera">
      <div className="camsub">
        <video ref={videoRef}></video>
        <button className="snap-button" onClick={takePhoto}>
          SNAP
        </button>
        <Link to="/tester">
          <button className="back-button-camera">Back</button>
        </Link>
        <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
          <div>
            <canvas ref={photoRef}></canvas>
          </div>
          <button className="snap-button" onClick={closePhoto}>
            CLOSE!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Camera;
