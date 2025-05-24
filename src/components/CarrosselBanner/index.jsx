import Image from "next/image";
import styles from "./index.module.css";

function CarrosselBanner() {

    return(
        <section id="Banner">
            <div className={`carousel slide carousel-fade ${styles.carouselExampleFade}`} data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className={`${styles.carouselItemImgWrapper} position-relative`} style={{ width: '100%', height: '429px' }}>
                      <Image
                        src="/cat.jpg"
                        alt="..."
                        className={`d-block ${styles.carouselItemImg}`}
                        fill
                      />
                    </div>
                    <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                        <button className={styles.jogarBanner}>Jogar</button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className={`${styles.carouselItemImgWrapper} position-relative`} style={{ width: '100%', height: '429px' }}>
                      <Image
                        src="/gd.png"
                        alt="..."
                        className="d-block"
                        fill
                      />
                    </div>
                    <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                        <button className={styles.jogarBanner}>Jogar</button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className={`${styles.carouselItemImgWrapper} position-relative`} style={{ width: '100%', height: '429px' }}>
                      <Image
                        src="/clash.jpg"
                        alt="..."
                        className="d-block"
                        fill
                      />
                    </div>
                    <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                        <button className={styles.jogarBanner}>Jogar</button>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span className={`carousel-control-prev-icon ${styles.prevNextBtn}`} aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span className={`carousel-control-next-icon ${styles.prevNextBtn}`} aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
        </section>
    )
}

export default CarrosselBanner