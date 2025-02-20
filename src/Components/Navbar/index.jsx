import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src="/logo_bco_sin_fondo.png" alt="" />
      <nav className={styles.links}>
        <ul>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              isActive
                ? [styles.active, styles.link].join(" ")
                : [styles.link].join(" ")
            }
          >
            Quienes Somos?
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive
                ? [styles.active, styles.link].join(" ")
                : [styles.link].join(" ")
            }
          >
            Servicios
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/proyectos"
            className={({ isActive }) =>
              isActive
                ? [styles.active, styles.link].join(" ")
                : [styles.link].join(" ")
            }
          >
            Proyectos
          </NavLink>
        </ul>
        <ul>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? [styles.active, styles.link].join(" ")
                : [styles.link].join(" ")
            }
          >
            Contacto
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
