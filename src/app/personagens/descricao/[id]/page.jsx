import { use } from "react";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import styles from "./page.module.css";
import { personagensArray } from "@/simulacaoDeDados";

function DescricaoPersonagens({ params, searchParams }) {

  const awaitedParams = use(Promise.resolve(params));
  const awaitedSearchParams = use(Promise.resolve(searchParams));
  const { from } = awaitedSearchParams;
  const { id } = awaitedParams;

  const personagem = personagensArray.find(personagem => personagem.id === id);

  if (!personagem) return <p>Personagem não encontrado.</p>;

  return (
    <>
      <CabecalhoPolitica tituloPagina={`"${personagem.nome}"`} route={`../../${from}`}/>
      <main className={styles.mainDescricao}>
        <section className={styles.textoImagem}>
          <article className={styles.articlePersonagem}>
            <p className={styles.paragraph}>{personagem.descricao}</p>
          </article>
          <section className={styles.imagemPersonagemSection}>
            <img src={personagem.src} alt={personagem.nome} className={styles.imagemPersonagem} />
          </section>
        </section>
        <div className={styles.frasePersonagem}>
          <h2>{personagem.frase}</h2>
        </div>
      </main>
    </>
  );
}

export default DescricaoPersonagens;