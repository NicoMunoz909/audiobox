import styles from "./serviciosPage.module.css";
import MainLayout from "../../Layouts/MainLayout";
import ImgTextBelow from "../../Components/ImgTextBelow";

const ServiciosPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <ImgTextBelow pie="Produccion de eventos" link="eventos" />
        <ImgTextBelow pie="Venta de Equipos" link="venta" />
        <ImgTextBelow pie="Instalación" link="instalacion" />
      </div>
    </MainLayout>
  );
};

export default ServiciosPage;
