import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Carrossel from "@/components/Carrossel";
import CarrosselItem from "@/components/Carrossel/CarrosselItem";
import CardArma from "@/components/ContainerPersonagens/CardArma";
import styles from "./page.module.css";
import { todasArmas } from "@/simulacaoDeDados"

async function DescricaoArma({ params }) {

  async function getArma(id) {
      await new Promise(resolve => setTimeout(resolve, 50)); // simula delay
      return todasArmas.find(a => a.id === id);
    }
  
    const { id } = params;
    const arma = await getArma(id);
  
    if (!arma) return <p>Arma não encontrada.</p>;

  return (
    <>
      <CabecalhoPolitica tituloPagina={`${arma.nome}`} rota={"/arsenal"}/>
      <main>
          <article className={styles.containerArma}>
            <section className={styles.descricaoArma}>
                  <h1 className={styles.informacaoTitle}>Dano:</h1>
                  <p className={styles.paragraph}>{arma.dano}</p>
                  <h1 className={styles.informacaoTitle}>Raridade:</h1>
                  <p className={styles.paragraph}>{arma.raridade}</p>
                  <h1 className={styles.informacaoTitle}>Munição:</h1>
                  <p className={styles.paragraph}>{arma.municao}</p>
                  <h1 className={styles.informacaoTitle}>Alcance:</h1>
                  <p className={styles.paragraph}>{arma.alcance}</p>
                  <h1 className={styles.informacaoTitle}>Taxa de Disparo:</h1>
                  <p className={styles.paragraph}>{arma.taxaDisparo}</p>
                  <h1 className={styles.informacaoTitle}>Taxa de Acerto:</h1>
                  <p className={styles.paragraph}>{arma.taxaAcerto}</p>
              </section>

              <section className={styles.imagemArma}>
                  <img src="/arma.png" alt="Arma" className={styles.arma}/>
              </section>
          </article>

          <Carrossel target="armas">
            <CarrosselItem extraClass={"active"}>
              <CardArma nome="Pistola" 
                        alt="Imagem de uma Pistola" 
                        src="/arma.png"/>

              <CardArma nome="Pistola" 
                        alt="Imagem de uma Pistola" 
                        src="/arma.png"/>

              <CardArma nome="Pistola" 
                        alt="Imagem de uma Pistola" 
                        src="/arma.png"/>

              <CardArma nome="Pistola" 
                        alt="Imagem de uma Pistola" 
                        src="/arma.png"/>
            </CarrosselItem>
            
            <CarrosselItem>
              <CardArma nome="Pistola" 
                        alt="Imagem de uma Pistola" 
                        src="/arma.png"/>

              <CardArma nome="Pistola" 
                        alt="Imagem de uma Pistola" 
                        src="/arma.png"/>

              <CardArma nome="Pistola" 
                        alt="Imagem de uma Pistola" 
                        src="/arma.png"/>

              <CardArma nome="Pistola" 
                        alt="Imagem de uma Pistola" 
                        src="/arma.png"/>
            </CarrosselItem>
          </Carrossel>
      </main>
    </>
  )
}

export default DescricaoArma