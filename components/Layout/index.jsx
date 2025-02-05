import Navbar from "../Navbar"; // Ensure proper casing
import Sidebar from "../../pages"; // Sidebar for navigation
import { ThemeProvider } from "../UI/ThemeContext";
import { useRouter } from "next/router";
import styles from "../../styles/Layout.module.css"; // Import CSS Module for styling

export default function Layout({ children }) {
  const router = useRouter();
  const hideLayout = ["/", "/login", "/register"].includes(router.pathname); // Hide Navbar and Sidebar on these pages

  return (
    <ThemeProvider>
      {!hideLayout && <Navbar />}
      <div className={styles.container}>
        {!hideLayout && <Sidebar />}
        <main className={styles.content}>{children}</main>
      </div>
    </ThemeProvider>
  );
}
