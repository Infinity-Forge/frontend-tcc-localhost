import Link from "next/link";
import Navbar from "@/components/Navbar";
import CarrosselBanner from "@/components/CarrosselBanner";
import Title from "@/components/Title";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardPersonagem from "@/components/ContainerPersonagens/CardPersonagem";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";
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
          <CardPersonagem nome="Peste" imageSrc="/peste.jpg" alt="Imagem do Cavaleiro da Peste"/>
          <CardPersonagem nome="Morte" imageSrc="/morte.jpg" alt="Imagem do Cavaleiro da Morte"/>
          <CardPersonagem nome="Anjo Miguel" imageSrc="/anjoMiguel.jpg" alt="Imagem do Anjo Miguel"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Cavaleiro"/>
          <CardPersonagem nome="Fome" imageSrc="/fome.jpg" alt="Imagem do Cavaleiro da Fome"/>
        </ContainerPersonagens>

        <Title text="Anjos" className={styles.title}/>
        <ContainerPersonagens className={styles.container}>
          <CardPersonagem nome="Serafins" imageSrc="/serafins.jpg" alt="Imagem de um Cavaleiro"/>
          <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Cavaleiro"/>
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
      <Suporte/>
    </>
  )
}

export default Personagens;