"use client";

import { useEffect } from 'react';
import styles from "./index.module.css";

function CarrosselBanner() {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <section id="Banner">
      <div
        id="carouselExampleFade"
        className={`carousel slide carousel-fade ${styles.carouselExampleFade}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={`${styles.carouselItemImgWrapper} position-relative`}>
              <img
                src="/bannerEstatua.jpg"
                alt="Banner da Estátua"
                className={`d-block w-100 ${styles.carouselItemImg}`}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className={`${styles.carouselItemImgWrapper} position-relative`}>
              <img
                src="/bannerCavaleiro.jpg"
                alt="Banner Cavaleiro"
                className={`d-block w-100 ${styles.carouselItemImg}`}
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className={`${styles.carouselItemImgWrapper} position-relative`}>
              <img
                src="/bannerAnjoDerretendo.jpg"
                alt="Banner dos Anjos com o Rosto Derretendo"
                className={`d-block w-100 ${styles.carouselItemImg}`}
              />
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className={`carousel-control-prev-icon ${styles.prevNextBtn}`} aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className={`carousel-control-next-icon ${styles.prevNextBtn}`} aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default CarrosselBanner;