"use client";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import CarrosselBanner from "@/components/CarrosselBanner";
import Banner from "@/components/Banner";
import Title from "@/components/Title";
import Carrossel from "@/components/Carrossel";
import CarrosselItem from "@/components/Carrossel/CarrosselItem";
import Noticia from "@/components/Noticia";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardPersonagem from "@/components/ContainerPersonagens/CardPersonagem";
import InformacaoEsquerda from "@/components/InformacaoEsquerda";
import InformacaoDireita from "@/components/InformacaoDireita";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

function Home() {
  return (
    <div className="app">
      <Navbar/>
      <CarrosselBanner/>
      <main>
        <article className={styles.novidades}>
          {/* Artigo com o carrocel das novidades */}
          <Container>
            <Title text="Novidades"/>
            <Carrossel target="Novidades">
              <CarrosselItem extraClass={"active"}>
                <Noticia src="/empresaLogoTeste.png" alt="Imagem da Notícia" titulo="Título"
                      texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam! Magnam nostrum dolorem ipsum facilis exercitationem reiciendis laudantium? Eligendi!"/>
                <Noticia src="/jogoLogoTransparent.png" alt="Imagem da Notícia" titulo="Título"
                      texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam! Magnam nostrum dolorem ipsum facilis exercitationem reiciendis laudantium? Eligendi!"/>
              </CarrosselItem>
            
              <CarrosselItem>
                <Noticia src="/empresaLogoTeste.png" alt="Imagem da Notícia" titulo="Título"
                      texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam! Magnam nostrum dolorem ipsum facilis exercitationem reiciendis laudantium? Eligendi!"/>
                <Noticia src="/jogoLogoTransparent.png" alt="Imagem da Notícia" titulo="Título"
                      texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam! Magnam nostrum dolorem ipsum facilis exercitationem reiciendis laudantium? Eligendi!"/>
              </CarrosselItem>
            </Carrossel>
          </Container>
        </article>

      {/*Seção dos guardiões com o banner*/}
      <section className="guardioesSection">
        <Banner imageSrc="/bannerAnjoDerretendo.jpg" alt="Banner dos Guardiões"/>
         <Container>
           <article className={styles.guardioes}>
              <Title text="Guardiões" marginTopValue="0"/>
              <ContainerPersonagens>
                <CardPersonagem nome="Teste" imageSrc="/peste.jpg" alt="Imagem do Cavaleiro da Peste"/>
                <CardPersonagem nome="Teste" imageSrc="/morte.jpg" alt="Imagem do Cavaleiro da Morte"/>
                <CardPersonagem nome="Teste" imageSrc="/peste.jpg" alt="Imagem de um Cavaleiro"/>
                <CardPersonagem nome="Teste" imageSrc="/fome.jpg" alt="Imagem do Cavaleiro da Fome"/>
              </ContainerPersonagens>
           </article>
         </Container>
      </section>

      {/* parte com a imagem do mapa do jogo e texto com botao do lado */}
      <section className="jogoEBanner">
        <Container>
          <InformacaoEsquerda
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, itaque provident ut asperiores praesentium quasi ipsum excepturi aspernatur mollitia officia ea doloribus? Quidem doloribus hic officia facere, repellendus fugit adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae optio esse quaerat, qui vitae culpa impedit! Atque in quasi, nisi necessitatibus amet suscipit dicta maiores consectetur quos corporis dolorum!"
          btnText="Jogar"
          imageSrc="/jogoLogo.png"/>
        </Container>
        <Banner imageSrc="/bannerEstatua.jpg" alt="Banner dos Guardiões"/>
      </section>

      {/* Seção dos cavaleiros com o banner */}
      <section className="cavaleirosSection">
         <Container>
           <article className={styles.cavaleiros}>
              <Title text="Cavaleiros" marginTopValue="0"/>
              <ContainerPersonagens>
                <CardPersonagem nome="Peste" imageSrc="/peste.jpg" alt="Imagem do Cavaleiro da Peste"/>
                <CardPersonagem nome="Morte" imageSrc="/morte.jpg" alt="Imagem do Cavaleiro da Morte"/>
                <CardPersonagem nome="Teste" imageSrc="/peste.jpg" alt="Imagem de um Cavaleiro"/>
                <CardPersonagem nome="Fome"  imageSrc="/fome.jpg" alt="Imagem do Cavaleiro da Fome"/>
              </ContainerPersonagens>
           </article>
         </Container>
        <Banner imageSrc="/bannerCavaleiro.jpg" alt="Banner dos Cavaleiros"/>
      </section>

      {/* Seção dos mapas */}
      <Container>
        <section className={styles.mapas}>
          <Title text="Mapas" marginTopValue="0" marginBottomValue="0"/>
            <InformacaoEsquerda
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, itaque provident ut asperiores praesentium quasi ipsum excepturi aspernatur mollitia officia ea doloribus? Quidem doloribus hic officia facere, repellendus fugit adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae optio esse quaerat, qui vitae culpa impedit! Atque in quasi, nisi necessitatibus amet suscipit dicta maiores consectetur quos corporis dolorum!"
            btnText="Ver mais"
            imageSrc="/cenario1.png"/>
            <InformacaoDireita
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, itaque provident ut asperiores praesentium quasi ipsum excepturi aspernatur mollitia officia ea doloribus? Quidem doloribus hic officia facere, repellendus fugit adipisci? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum molestiae optio esse quaerat, qui vitae culpa impedit! Atque in quasi, nisi necessitatibus amet suscipit dicta maiores consectetur quos corporis dolorum!"
            btnText="Ver mais"
            imageSrc="/cenario1.png"/>
        </section>
      </Container>
      <Banner imageSrc="/bannerAnjoDerretendo.jpg" alt="Banner"/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home