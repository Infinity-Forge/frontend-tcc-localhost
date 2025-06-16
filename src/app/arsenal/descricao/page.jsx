import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Carrossel from "@/components/Carrossel";
import CarrosselItem from "@/components/Carrossel/CarrosselItem";
import CardArma from "@/components/ContainerPersonagens/CardArma";
import styles from "./page.module.css";

function DescricaoArma() {
  return (
    <>
      <CabecalhoPolitica tituloPagina='"Nome da Arma"' rota={"/arsenal"}/>
      <main>
          <article className={styles.containerArma}>
            <section className={styles.descricaoArma}>
                  <h1 className={styles.informacaoTitle}>Dano:</h1>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam.</p>
                  <h1 className={styles.informacaoTitle}>Raridade:</h1>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
                  <h1 className={styles.informacaoTitle}>Munição:</h1>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
                  <h1 className={styles.informacaoTitle}>Alcance:</h1>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
                  <h1 className={styles.informacaoTitle}>Taxa de Disparo:</h1>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
                  <h1 className={styles.informacaoTitle}>Taxa de Acerto:</h1>
                  <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
              </section>

              <section className={styles.imagemArma}>
                  <img src="/arma.png" alt="Arma" className={styles.arma}/>
              </section>
          </article>

          <Carrossel>
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