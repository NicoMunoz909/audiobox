import { Link } from "react-router-dom";
import styles from "./ImgTextBelow.module.css";
import { IoIosArrowDropright } from "react-icons/io";

const ImgTextBelow = ({ pie, link }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src="https://placehold.co/600x400" alt="" />
        <div className={styles.imgFooter}>
          <p>{pie}</p>
          <Link to={link}>
            <IoIosArrowDropright />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImgTextBelow;
