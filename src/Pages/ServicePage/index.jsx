import { Link } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";
import styles from "./servicePage.module.css";
import { IoIosArrowDropleft } from "react-icons/io";

const ServicePage = ({ title }) => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link to="/servicios">
            <IoIosArrowDropleft className={styles.arrow} />
          </Link>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo fugiat
          delectus adipisci sapiente eius, voluptas modi soluta esse quo impedit
          qui reprehenderit magnam itaque incidunt possimus corporis vitae,
          assumenda tenetur?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          quo deleniti molestiae maxime, laboriosam, vitae ad nisi reprehenderit
          labore ratione impedit illo voluptas laborum! Fuga rem quis modi
          placeat amet.
        </p>
      </div>
    </MainLayout>
  );
};

export default ServicePage;
