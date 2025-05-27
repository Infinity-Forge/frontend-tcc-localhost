import Link from "next/link";
import Navbar from "@/components/Navbar";
import CarrosselBanner from "@/components/CarrosselBanner";
import Title from "@/components/Title";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardPersonagem from "@/components/ContainerPersonagens/CardPersonagem";
import Footer from "@/components/Footer";
import styles from "./page.module.css"

function Personagens() {
  return (
    <>
      <Navbar>
        <Link href="/">
            <button className={styles.navbarButton}>Home</button>
        </Link>
      </Navbar>
      <CarrosselBanner/>
      <section className={styles.characters}>
        <Title text="Guardiões" className={styles.title}/>
        <ContainerPersonagens className={styles.container}>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Guardião"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Guardião"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Guardião"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Guardião"/>
        </ContainerPersonagens>

        <Title text="Cavaleiros" className={styles.title}/>
        <ContainerPersonagens className={styles.container}>
          <CardPersonagem nome="Peste" imageSrc="/Peste.jpg" alt="Imagem do Cavaleiro da Peste"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Cavaleiro"/>
          <CardPersonagem nome="Anjo Miguel" imageSrc="/anjoMiguel.jpg" alt="Imagem do Anjo Miguel"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Cavaleiro"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Cavaleiro"/>
        </ContainerPersonagens>

        <Title text="Inimigos" className={styles.title}/>
        <ContainerPersonagens className={styles.container}>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Inimigo"/>
        </ContainerPersonagens>
      </section>
      <Footer/>
    </>
  )
}

export default Personagens;