"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";

function Navbar({ children }) {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSuporte, setToggleSuporte] = useState(false);

    function handleToggleMenu() {
        setToggleMenu(prevToggleMenu => !prevToggleMenu);
    }

    function handleToggleSuporte() {
        setToggleSuporte(prevToggleSuporte => !prevToggleSuporte);
    }

    return(
        <header>
            <nav className={styles.nav}>
                <Image height={40} width={65} src="/gd.png" alt="Logo do jogo" id="logoNavbar"/>
                <button className={styles.hamburger} onClick={handleToggleMenu}>&#9776;</button>
                <div className={styles.dropdown}>
                    <button className={styles.navbarButton}>Informações do Jogo</button>
                    <div className={styles["dropdown-content"]}>
                        <Link className={styles.navLink} href="/personagens">Personagens</Link>
                        <Link className={styles.navLink} href="/mapas">Mapas</Link>
                        <Link className={styles.navLink} href="/arsenal">Arsenal</Link>
                    </div>
                </div>
                <Link href="/noticias">
                    <button className={styles.navbarButton}>Notícias</button>
                </Link>
                <a href="#">
                    <button className={styles.navbarButton} onClick={handleToggleSuporte}>Suporte</button>
                </a>
                {children}
                <button id={styles.jogar}>Jogar Agora</button>
            </nav>
        </header>
    )
}

export default Navbar;