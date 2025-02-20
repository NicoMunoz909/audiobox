import styles from "./proyectosPage.module.css";
import MainLayout from "../../Layouts/MainLayout";
import ImgCarousel from "../../Components/ImgCarousel";

const ProyectosPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <ImgCarousel
          images={[
            "https://placehold.co/1200x1200",
            "https://placehold.co/1200x1200",
            "https://placehold.co/1200x1200",
            "https://placehold.co/1200x1200",
            "https://placehold.co/1200x1200",
            "https://placehold.co/1200x1200",
            "https://placehold.co/1200x1200",
          ]}
        />
        <div className={styles.footer}>
          <div className={styles.imgsContainer}>
            <div className={styles.imgContainer}>
              <img src="/martin_audio_logo.png" alt="" />
            </div>
            <div className={styles.imgContainer}>
              <img src="/powersoft_logo.png" alt="" />
            </div>
            <div className={styles.imgContainer}>
              <img src="/nexo_logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProyectosPage;
