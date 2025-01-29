import Navbar from "../NavBar";
import { ThemeProvider } from "../UI/ThemeContext";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const showNavbar = !["/", "/login", "/register"].includes(router.pathname); // Hide navbar on these pages

  return (
    <ThemeProvider>
      {showNavbar && <Navbar />}
      <main className="pt-16">{children}</main>
    </ThemeProvider>
  );
}
