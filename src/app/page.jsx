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
    <>
      <Navbar/>
      <main>
        <CarrosselBanner/>
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
        </Carrossel>
      </article>

      {/*Seção dos guardiões com o banner*/}
      <section className="guardioesSection">
        <Banner imageSrc="/tigrinho.jpg" alt="Banner dos Guardiões"/>
         <article className={styles.guardioes}>
            <Title text="Guardiões"/>
            <ContainerPersonagens>
              <CardPersonagem imageSrc={"/luffy.jpg"} nome={"Luffy"}/>
              <CardPersonagem imageSrc={"/luffy.jpg"} nome={"Zoro"}/>
              <CardPersonagem imageSrc={"/luffy.jpg"} nome={"Sanji"}/>
              <CardPersonagem imageSrc={"/luffy.jpg"} nome={"Nami"}/>
            </ContainerPersonagens>
         </article>
      </section>

      {/* parte com a imagem do mapa do jogo e texto com botao do lado */}
      <section className="jogoEBanner" style={{ marginTop: '120px' }}>
          <InformacaoEsquerda  
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, itaque provident ut asperiores praesentium quasi ipsum excepturi aspernatur mollitia officia ea doloribus? Quidem doloribus hic officia facere, repellendus fugit adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae optio esse quaerat, qui vitae culpa impedit! Atque in quasi, nisi necessitatibus amet suscipit dicta maiores consectetur quos corporis dolorum!"
          btnText="Jogar"
          imageSrc="/cat.jpg"/>
          <Banner imageSrc="/clash.jpg" alt="Banner dos Guardiões"/>
      </section>

      {/* Seção dos cavaleiros com o banner */}
      <section className="cavaleirosSection">
         <article className={styles.cavaleiros}>
            <Title text="Cavaleiros"/>
            <ContainerPersonagens>
              <CardPersonagem imageSrc={"/peste.jpg"} nome={"Peste"}/>
              <CardPersonagem imageSrc={"/patrick.jpg"} nome={"Patrick"}/>
              <CardPersonagem imageSrc={"/anjoMiguel.jpg"} nome={"Anjo Miguel"}/>
              <CardPersonagem imageSrc={"/patrick.jpg"} nome={"Patrick"}/>
              <CardPersonagem imageSrc={"/patrick.jpg"} nome={"Patrick"}/>
            </ContainerPersonagens>
         </article>
        <Banner imageSrc="/bannerCavaleiro.jpg" alt="Banner dos Cavaleiros"/>
      </section>

      {/* Seção dos mapas */}
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
      <Banner imageSrc="/gd.png" alt="Banner"/>
      <Footer/>
      <Suporte/>
      </main>
    </>
  );
}

export default Home