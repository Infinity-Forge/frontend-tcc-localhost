"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Suporte from "../Suporte";
import styles from "./index.module.css";

function Navbar({ children }) {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSuporte, setToggleSuporte] = useState(false);

    function handleToggleMenu() {
        setToggleMenu((prevToggleMenu) => !prevToggleMenu);
    }

    function handleToggleSuporte() {
        setToggleSuporte((prevToggleSuporte) => !prevToggleSuporte);
    }

    return (
        <header className={styles.siteHeader}>
            <nav className={styles.nav}>
                <Image height={65} width={75} src="/jogoLogoTransparent.png" alt="Logo do jogo" className={styles.logoNavbar} />
                
                {/* Botão que controla o menu de hamburguer */}
                <button className={styles.hamburger} onClick={handleToggleMenu}>
                    &#9776;
                </button>

                {/* Menu de hamburguer que expande ou diminui */}
                <div className={`${styles.menu} ${toggleMenu && styles.open}`}>
                    <div className={styles.dropdown}>
                        <a className={styles.navbarButton}>
                            Informações do Jogo
                        </a>
                        <div className={styles["dropdown-content"]}>
                            <Link className={styles.navLink} onClick={handleToggleMenu} href="/personagens">
                                Personagens
                            </Link>
                            <Link className={styles.navLink} onClick={handleToggleMenu} href="/mapas">
                                Mapas
                            </Link>
                            <Link className={styles.navLink} onClick={handleToggleMenu} href="/arsenal">
                                Arsenal
                            </Link>
                        </div>
                    </div>

                    <Link href="/noticias" onClick={handleToggleMenu} className={styles.navbarButton}>
                        Notícias
                    </Link>

                    <a
                        className={styles.navbarButton}
                        onClick={(e) => {
                            e.preventDefault();
                            handleToggleSuporte();
                            handleToggleMenu();
                        }}
                    >
                            Suporte
                    </a>

                    {children}

                    <button className={styles.jogar}>
                        Jogar Agora
                    </button>
                </div>
            </nav>

            {toggleSuporte && <Suporte ativo={toggleSuporte} setAtivo={setToggleSuporte}/>}
        </header>
    )
}

export default Navbar;