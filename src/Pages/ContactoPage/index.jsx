import MainLayout from "../../Layouts/MainLayout";
import styles from "./contactoPage.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const ContactoPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Contacto</h1>
        <div className={styles.icons}>
          <a href="mailto:audiobox@gmail.com">
            <MdOutlineEmail />
          </a>
          <a href="https://wa.link/nz7rig" target="_blank">
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/audiobox.mx/?hl=es"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactoPage;
