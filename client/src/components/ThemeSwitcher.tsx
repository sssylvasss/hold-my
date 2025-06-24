import React from "react";
import { useTheme } from "../context/ThemeContext";
import brutalistStyles from "../styles/themes/brutalist.module.css";
import neumorphicStyles from "../styles/themes/neumorphic.module.css";
import japaneseStyles from "../styles/themes/japanese.module.css";
import organicStyles from "../styles/themes/organic.module.css";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

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

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(
      event.target.value as "brutalist" | "neumorphic" | "japanese" | "organic"
    );
  };

  const styles = getStyles();

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <select
        value={theme}
        onChange={handleThemeChange}
        className={styles.button}
        style={{
          minWidth: "150px",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        <option value="brutalist">Brutalist</option>
        <option value="neumorphic">Neumorphic</option>
        <option value="japanese">Japanese</option>
        <option value="organic">Organic</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
