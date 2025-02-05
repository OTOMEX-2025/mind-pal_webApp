import Link from "next/link";
import styles from "../../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>MINDPAL</h2>
      <u className="mt-24"l>

        <li><Link href="/">Home</Link></li>

        <li><Link href="./chat">Chat</Link></li>
        <li><Link href="./meeting">Meeting</Link></li>
        <li><Link href="./articles">Articles</Link></li>
        <li><Link href="./music">Music</Link></li>
        <li><Link href="./games">Games</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
