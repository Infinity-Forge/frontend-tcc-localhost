import styles from "./page.module.css";
import Navbar from "../components/Navbar/index";
import Carrossel from "../components/Carrossel/index";
import Banner from "../components/Banner/index"

function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <Carrossel/>
        <article className={styles.novidades}>
        {/* Artigo com o carrocel das novidades */}
        <h1>Novidades</h1>
        <div className={`carousel slide ${styles.novidadeCarousel}`} data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className={styles.containersComNovidades}>
                <div className={styles.containerNovidade}>
                  <img src="/cat.jpg" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat...</p>
                </div>
                <div className={styles.containerNovidade}>
                  <img src="/clash.jpg" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat...</p>
                </div>
                <div className={styles.containerNovidade}>
                  <img src="/gd.png" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat...</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className={styles.containersComNovidades}>
                <div className={styles.containerNovidade}>
                  <img src="/gd.png" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat...</p>
                </div>
                <div className={styles.containerNovidade}>
                  <img src="/cat.jpg" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat...</p>
                </div>
                <div className={styles.containerNovidade}>
                  <img src="/clash.jpg" alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat...</p>
                </div>
              </div>
            </div>
            {/* Adicione mais itens de carrossel conforme necessário */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={styles.novidadeCarousel} data-bs-slide="prev">
            <span className={`carousel-control-prev-icon ${styles.prevIcon}`} aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-targe={styles.novidadeCarousel} data-bs-slide="next">
            <span className={`carousel-control-next-icon ${styles.nextIcon}`} aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>
      <section>
        <Banner imageSrc={"/tigrinho.jpg"} alt={"Banner dos Guardiões"}/>
      </section>
      </main>
    </>
  );
}

export default Home