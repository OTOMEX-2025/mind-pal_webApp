import Navbar from "../NavBar";
import { ThemeProvider } from "../UI/ThemeContext";

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="pt-16">{children}</main>
    </ThemeProvider>
  );
}