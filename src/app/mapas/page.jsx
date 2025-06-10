import Link from "next/link";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import Minimapa from "@/components/Minimapa";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";
import styles from "./page.module.css";

function Mapas() {
  return (
    <>
      <Navbar>
        <Link href="/">
            <button className={styles.navbarButton}>Home</button>
        </Link> 
      </Navbar>
      <section className={styles.sectionMapas}>
        <Title text="Mapas" marginBottomValue="16px" marginTopValue="72px"/>
        <article>
          <div className={styles.nomeDescricao}>
            <h2 className={styles.nomeMapa}>Mapa Principal</h2>
            <p className={styles.descricaoMapa}>Descrição do mapa principal.</p>
          </div>

          <div className={styles.mapaContainer}>
            <img
              src="/mapa1.jpg"
              alt="Mapa Principal"
              className={styles.mapaPrincipal}
            />
          </div>

          <div className={styles.miniMapas}>
            <Minimapa imgUrl="/mapa2.jpg" nome="Mapa Florestal" 
                      descricao={"Este é o mapa de uma grande floresta cheia de árvores antigas e densas."}/>
            <Minimapa imgUrl="/mapa3.jpg" nome="Mapa Urbano" 
                      descricao={"Este é o mapa de uma cidade moderna com arranha-céus e ruas movimentadas."}/>
            <Minimapa imgUrl="/mapa4.jpg" nome="Mapa do Deserto" 
                      descricao={"Um mapa que retrata vastas dunas de areia e temperaturas escaldantes."}/>
            <Minimapa imgUrl="/mapa5.jpg" nome="Mapa Montanhoso" 
                      descricao={"Este mapa mostra uma paisagem de montanhas altas e trilhas desafiadoras."}/>
          </div>
        </article>
      </section>
      <Footer/>
      <Suporte/>
    </>
  )
}

export default Mapas;