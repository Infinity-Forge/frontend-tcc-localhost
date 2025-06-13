"use client";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./index.module.css";

function Carrossel({ target, children }) {

    return(
        <div id={target} className={`carousel slide ${styles.carrosselDiv}`} data-bs-ride="carousel">
            <div className="carousel-inner">
                {children}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${target}`} data-bs-slide="prev">
                <span className={`carousel-control-prev-icon ${styles.icon}`} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${target}`} data-bs-slide="next">
                <span className={`carousel-control-next-icon ${styles.icon}`} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carrossel;