import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Carrossel from "@/components/Carrossel";
import CarrosselItem from "@/components/Carrossel/CarrosselItem";
import CarrosselCard from "@/components/Carrossel/CarrosselItem/CarrosselCard";
import styles from "./page.module.css";

function DescricaoArma() {
  return (
    <>
      <CabecalhoPolitica tituloPagina='"Nome da Arma"'/>
      <main>
          <article className={styles.containerArma}>
            <section className={styles.descricaoArma}>
                  <h1>Dano:</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam.</p>
                  <h1>Raridade:</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
                  <h1>Munição:</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
                  <h1>Alcance:</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
                  <h1>Taxa de Disparo:</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
                  <h1>Taxa de Acerto:</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloribus ab unde adipisci velit itaque rem ullam repellat, deserunt cum harum, asperiores officia iusto beatae in impedit facere laboriosam nam</p>
              </section>

              <section className={styles.imagemArma}>
                  <img src="/arma.png" alt="Arma" className={styles.arma}/>
              </section>
          </article>

          <Carrossel>
            <CarrosselItem extraClass={"active"}>
              <CarrosselCard
              imageUrl="/arma.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>

              <CarrosselCard
              imageUrl="/arma.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>

              <CarrosselCard
              imageUrl="/arma.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>

              <CarrosselCard
              imageUrl="/arma.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>
            </CarrosselItem>
            
            <CarrosselItem>
              <CarrosselCard
              imageUrl="/arma.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>

              <CarrosselCard
              imageUrl="/arma.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>

              <CarrosselCard
              imageUrl="/arma.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>

              <CarrosselCard
              imageUrl="/arma.png"
              alt=""
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."/>
            </CarrosselItem>
          </Carrossel>
      </main>
    </>
  )
}

export default DescricaoArma