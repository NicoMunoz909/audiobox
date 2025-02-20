import MainLayout from "../../Layouts/MainLayout";
import styles from "./homePage.module.css";

const Home = () => {
  return (
    <MainLayout>
      <div className={styles.container}>
        <img
          className={styles.logo}
          src="/logo_bco_sin_fondo.png"
          alt="Audiobox Logo"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
          deserunt dignissimos sed dolorem similique quo asperiores vero,
          numquam ipsa temporibus, eos a quas laboriosam debitis? Ex, magnam
          excepturi! Atque, ut.
        </p>
      </div>
    </MainLayout>
  );
};

export default Home;
