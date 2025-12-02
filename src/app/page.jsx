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

  const [novidades, setNovidades] = useState([]);
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarNoticias();
    listarPersonagens();
  }, []);

    async function listarNoticias() {
    try {
      setLoading(true);

      const response = await api.get("/noticiasPaginado");

      if (response.data.sucesso) {
        setNovidades(response.data.dados);
      } else {
        alert("Erro:\n" + response.data.mensagem + "\n" + response.data.dados);
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end\n" + error);
      }
    } finally {
      setLoading(false);
    }
  }

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
                {novidades.slice(0, 2).map((novidade) => (
                  <Noticia
                    key={novidade.not_id}
                    src={novidade.not_imagem}
                    titulo={novidade.not_titulo}
                    texto={novidade.not_conteudo}
                  />
                ))}
              </CarrosselItem>
            
              <CarrosselItem>
                {novidades.slice(2, 4).map((novidade) => (
                  <Noticia
                    key={novidade.not_id}
                    src={novidade.not_imagem}
                    titulo={novidade.not_titulo}
                    texto={novidade.not_conteudo}
                  />
                ))}
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
          text="Um RPG de ação em um mundo arruinado por anjos vingativos. Explore cidades devastadas, enfrente criaturas do Condato e domine o poder das Máscaras para sobreviver ao fim da humanidade.
          Em combates intensos no estilo beat’em up, avance por cenários destruídos, libere habilidades únicas de cada Máscara e encare hordas de inimigos divinos enquanto desbrava as ruínas de grandes civilizações tomadas pelo caos.
          Lute, evolua e descubra até onde você irá para impedir que o céu apague o último resquício da humanidade."
          btnText="Jogar"
          imageSrc="/jogoLogo.png"/>
        </Container>
        <Banner imageSrc="/bannerReuniao.jpg" alt="Banner dos Guardiões"/>
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
            text="O antigo teatro de Kalensky, antes palco de histórias e aplausos, torna-se o cenário do primeiro contato com o terror do Condato. Entre bastidores escuros, corredores apertados e salas abandonadas, você descobrira o poder das Máscaras enquanto tenta sobreviver ao ataque que marca o início do fim.
            Este é o começo da sua jornada — o instante em que o mundo ruirá diante dos seus olhos."
            btnText="Ver mais"
            rota={"/mapas"}
            imageSrc="/cenarioexemplo1.png"/>
            <InformacaoDireita
            text="Após escapar do caos, você chega a uma Berlim fria, silenciosa e dominada pelo medo. Ruas vazias, sirenes distantes e prédios que parecem observar cada movimento criam o clima perfeito para as primeiras batalhas reais contra as forças do Condato.
            Aqui, não há palco: apenas combate. É onde sua luta de verdade começa — e onde você entende que nada em Kalensky será como antes."
            btnText="Ver mais"
            rota={"/mapas"}
            imageSrc="/cenarioexemplo2.png"/>
        </section>
      </Container>
      <Banner imageSrc="/bannerAnjoDerretendo.jpg" alt="Banner"/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home