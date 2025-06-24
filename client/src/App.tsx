import React, { useState } from "react";
import CameraCapture from "./components/CameraCapture";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import brutalistStyles from "./styles/themes/brutalist.module.css";
import neumorphicStyles from "./styles/themes/neumorphic.module.css";
import japaneseStyles from "./styles/themes/japanese.module.css";
import organicStyles from "./styles/themes/organic.module.css";

const AppContent: React.FC = () => {
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
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

  const handlePhotoCapture = (photoData: string) => {
    setCapturedPhoto(photoData);
    // Here you'll later add the logic to send the photo to your AI service
  };

  const styles = getStyles();

  return (
    <div className={`${styles.theme} ${styles.container}`}>
      <ThemeSwitcher />
      <h1 className={styles.title}>Hold My Beer AI Photo Editor</h1>
      <CameraCapture onPhotoCapture={handlePhotoCapture} />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
