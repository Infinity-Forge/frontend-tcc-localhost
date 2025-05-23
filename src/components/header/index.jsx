"use client";

import Image from "next/image";
import styles from "./index.module.css";

function Header() {

    function toggleMenu() {
        console.log("a");
    }

    function abrirSuporte() {
        console.log("a");
    }

    return(
        <header>
            <nav className={styles.nav}>
                <Image height={40} width={65} src="/gd.png" alt="Logo do jogo" id="logoNavbar"/>
                <button className={styles.hamburger} onClick={toggleMenu}>&#9776;</button>
                <div className={styles.dropdown}>
                    <button className={styles.navbarButton}>Informações do Jogo</button>
                    <div className={styles["dropdown-content"]}>
                        <a className={styles.navLink} href="pages/paginaPersonagens.html">Personagens</a>
                        <a className={styles.navLink} href="pages/paginaMapasPrincipal.html">Mapas</a>
                        <a className={styles.navLink} href="pages/paginaArsenal.html">Arsenal</a>
                    </div>
                </div>
                <a href="pages/paginaNoticias.html">
                    <button className={styles.navbarButton}>Notícias</button>
                </a>
                <a href="#">
                    <button className={styles.navbarButton} onClick={abrirSuporte}>Suporte</button>
                </a>
                <button id={styles.jogar}>Jogar Agora</button>
            </nav>
        </header>
    )
}

export default Header;