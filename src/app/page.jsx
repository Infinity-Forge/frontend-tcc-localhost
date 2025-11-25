"use client";

import { useState, useEffect } from "react";
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
import api from "@/services/api";

function Home() {

  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarPersonagens();
  }, []);

  async function listarPersonagens() {
    try {
      setLoading(true);
      const response = await api.get('/personagens');
      console.log(response);

      if (response.data.sucesso == true) {
          const personagemApi = response.data.dados;
          setPersonagens(personagemApi);
      } else {
          alert(`Erro ${response.data.message} \n ${response.data.dados}`);
      }
      
    } catch (error) {

      if (error.response) {
          alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
          alert("Erro no front-end" + "\n" + error);
      }

    } finally {
        setLoading(false);
    }
  }

  const guardioes = personagens.filter(personagem => personagem.pers_tipo === 0);
  const cavaleiros = personagens.filter(personagem => personagem.pers_tipo === 1);

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
                {loading ? (
                    <div>Carregando...</div>
                ) : guardioes.length > 0 ? (
                  guardioes.map((guardiao) => (
                      <CardPersonagem key={guardiao.pers_id} rota={"personagens"} id={guardiao.pers_id} nome={guardiao.pers_nome} imageSrc={guardiao.pers_src} alt={guardiao.pers_alt}/>
                  ))
                ) : (
                    <h1>Não foi possível carregar os guardiões</h1>
                )}
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
                {loading ? (
                    <div>Carregando...</div>
                ) : cavaleiros.length > 0 ? (
                  cavaleiros.map((cavaleiro) => (
                      <CardPersonagem key={cavaleiro.pers_id} rota={"personagens"} id={cavaleiro.pers_id} nome={cavaleiro.pers_nome} imageSrc={cavaleiro.pers_src} alt={cavaleiro.pers_alt}/>
                  ))
                ) : (
                    <h1>Não foi possível carregar os cavaleiros</h1>
                )}
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