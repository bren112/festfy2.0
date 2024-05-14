import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import img from './img.png'
function Home() {
  return (
    <>
      <section className={styles.home}>
        <div className={styles.apresentacao}>
          <p>
            Compre
            <br />
            <span>Seu Ingresso</span>
            <br />
            c/a gente!
          </p>

          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
<<<<<<< HEAD
           Compre aqui!
=======
           Compre aqui
>>>>>>> 5b03a8d52eabd93616d767a4c817d542ebfea81f
          </Link>
        </div>
        <figure>
          <img
            className={styles.img}
            src={img}
            alt="imagem de home"
          />
        </figure>
      </section>
    </>
  );
}
export default Home;
