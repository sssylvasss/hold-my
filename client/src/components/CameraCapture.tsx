import React, { useRef, useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import brutalistStyles from "../styles/themes/brutalist.module.css";
import neumorphicStyles from "../styles/themes/neumorphic.module.css";
import japaneseStyles from "../styles/themes/japanese.module.css";
import organicStyles from "../styles/themes/organic.module.css";

interface CameraCaptureProps {
  onPhotoCapture: (photo: string) => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onPhotoCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string>("");
  const { theme } = useTheme();

  const getStyles = () => {
    switch (theme) {
      case "brutalist":
        return brutalistStyles;
      case "neumorphic":
        return neumorphicStyles;
      case "japanese":
        return japaneseStyles;
      case "organic":
        return organicStyles;
      default:
        return brutalistStyles;
    }
  };

  const styles = getStyles();

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // Use the back camera on mobile devices
          width: { ideal: 1920 },
          height: { ideal: 1080 },
        },
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setCameraError("");
    } catch (error) {
      console.error("Error accessing camera:", error);
      setCameraError(
        "Unable to access camera. Please make sure you have granted camera permissions."
      );
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const context = canvas.getContext("2d");

    if (context) {
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const photoData = canvas.toDataURL("image/jpeg");
      setPhoto(photoData);
      onPhotoCapture(photoData);
    }
  };

  const retakePhoto = () => {
    setPhoto(null);
    startCamera();
  };

  return (
    <div className={styles.cameraContainer}>
      {cameraError && <p className={styles.error}>{cameraError}</p>}

      {!photo && (
        <>
          <video
            ref={videoRef}
            className={styles.videoPreview}
            autoPlay
            playsInline
            muted
          />
          <button className={styles.button} onClick={capturePhoto}>
            Take Photo
          </button>
        </>
      )}

      {photo && (
        <>
          <img src={photo} alt="Captured" className={styles.capturedImage} />
          <button className={styles.button} onClick={retakePhoto}>
            Retake Photo
          </button>
        </>
      )}
    </div>
  );
};

export default CameraCapture;
