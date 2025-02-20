import styles from "./mainLayout.module.css";
import Navbar from "../../Components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <nav>
        <Navbar />
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
