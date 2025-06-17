"use client";

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import CarrosselBanner from "@/components/CarrosselBanner";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Carrossel from "@/components/Carrossel";
import CarrosselItem from "@/components/Carrossel/CarrosselItem";
import CarrosselCard from "@/components/Carrossel/CarrosselItem/CarrosselCard";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardPersonagem from "@/components/ContainerPersonagens/CardPersonagem";
import InformacaoEsquerda from "@/components/InformacaoEsquerda";
import InformacaoDireita from "@/components/InformacaoDireita";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";

function Home() {
  return (
    <div className="app">
      <Navbar/>
      <CarrosselBanner/>
      <main>
        <div className="appContainer">
          <article className={styles.novidades}>
          {/* Artigo com o carrocel das novidades */}
          <Carrossel target="Novidades">
          <Title text="Novidades" marginBottomValue="8px"/>
            <CarrosselItem extraClass={"active"}>
              <CarrosselCard
              imageUrl="/clash.jpg"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>
              <CarrosselCard
              imageUrl="/gd.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>
              <CarrosselCard
              imageUrl="/cat.jpg"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>
            </CarrosselItem>
          
            <CarrosselItem>
              <CarrosselCard
              imageUrl="/arcanjos.jpg"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>
              <CarrosselCard
              imageUrl="/gd.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>
              <CarrosselCard
              imageUrl="/cat.jpg"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>
            </CarrosselItem>
          </Carrossel>
          </article>
        </div>

      {/*Seção dos guardiões com o banner*/}
      <section className="guardioesSection">
        <Banner imageSrc="/tigrinho.jpg" alt="Banner dos Guardiões"/>
         <div className="appContainer">
           <article className={styles.guardioes}>
              <Title text="Guardiões"/>
              <ContainerPersonagens>
                <CardPersonagem imageSrc={"/luffy.jpg"} nome={"Luffy"}/>
                <CardPersonagem imageSrc={"/luffy.jpg"} nome={"Zoro"}/>
                <CardPersonagem imageSrc={"/luffy.jpg"} nome={"Sanji"}/>
                <CardPersonagem imageSrc={"/luffy.jpg"} nome={"Nami"}/>
              </ContainerPersonagens>
           </article>
         </div>
      </section>

      {/* parte com a imagem do mapa do jogo e texto com botao do lado */}
      <section className="jogoEBanner" style={{ marginTop: '120px' }}>
        <div className="appContainer">
          <InformacaoEsquerda
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, itaque provident ut asperiores praesentium quasi ipsum excepturi aspernatur mollitia officia ea doloribus? Quidem doloribus hic officia facere, repellendus fugit adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae optio esse quaerat, qui vitae culpa impedit! Atque in quasi, nisi necessitatibus amet suscipit dicta maiores consectetur quos corporis dolorum!"
          btnText="Jogar"
          imageSrc="/cat.jpg"/>
        </div>
          <Banner imageSrc="/clash.jpg" alt="Banner dos Guardiões"/>
      </section>

      {/* Seção dos cavaleiros com o banner */}
      <section className="cavaleirosSection">
         <div className="appContainer">
           <article className={styles.cavaleiros}>
              <Title text="Cavaleiros"/>
              <ContainerPersonagens>
                <CardPersonagem nome="Peste" imageSrc="/peste.jpg" alt="Imagem do Cavaleiro da Peste"/>
                <CardPersonagem nome="Morte" imageSrc="/morte.jpg" alt="Imagem do Cavaleiro da Morte"/>
                <CardPersonagem nome="Luffy" imageSrc="/luffy.jpg" alt="Imagem de um Cavaleiro"/>
                <CardPersonagem nome="Fome" imageSrc="/fome.jpg" alt="Imagem do Cavaleiro da Fome"/>
              </ContainerPersonagens>
           </article>
         </div>
        <Banner imageSrc="/bannerCavaleiro.jpg" alt="Banner dos Cavaleiros"/>
      </section>

      {/* Seção dos mapas */}
      <div className="appContainer">
        <section className={styles.mapas} style={{ marginTop: "120px" }}>
          <Title text="Mapas" marginBottomValue={0}/>
            <InformacaoEsquerda marginValue={"70px"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, itaque provident ut asperiores praesentium quasi ipsum excepturi aspernatur mollitia officia ea doloribus? Quidem doloribus hic officia facere, repellendus fugit adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae optio esse quaerat, qui vitae culpa impedit! Atque in quasi, nisi necessitatibus amet suscipit dicta maiores consectetur quos corporis dolorum!"
            btnText="Ver mais"
            imageSrc="/cat.jpg"/>
            <InformacaoDireita
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, itaque provident ut asperiores praesentium quasi ipsum excepturi aspernatur mollitia officia ea doloribus? Quidem doloribus hic officia facere, repellendus fugit adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae optio esse quaerat, qui vitae culpa impedit! Atque in quasi, nisi necessitatibus amet suscipit dicta maiores consectetur quos corporis dolorum!"
            btnText="Ver mais"
            imageSrc="/cat.jpg"/>
        </section>
      </div>
      <Banner imageSrc="/gd.png" alt="Banner"/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home