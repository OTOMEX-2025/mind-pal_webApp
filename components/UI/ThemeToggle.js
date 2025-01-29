import { useTheme } from "./ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="text-xl">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}