import MainLayout from "../../Layouts/MainLayout";
import styles from "./nosotrosPage.module.css";

const NosotrosPage = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Quienes Somos?</h1>
        </div>
        <p>
          Nos dedicamos a proporcionar servicios integrales de audio e
          iluminación para una amplia variedad de eventos, desde corporativos
          hasta privados, hoteles, bares y restaurantes.
        </p>
        <p>
          En AUDIOBOX contamos con un equipo de profesionales altamente
          capacitados. Desde diseñadores de sonido e iluminación hasta técnicos
          de instalación, nuestro equipo está comprometido con la excelencia y
          la satisfacción del cliente en todo momento.
        </p>
        <p>
          Nuestra experiencia nos permite tener un profundo entendimiento del
          alcance de un evento, del tamaño que sea, para lograr el impacto
          deseado en la audiencia.
        </p>
      </div>
    </MainLayout>
  );
};

export default NosotrosPage;
