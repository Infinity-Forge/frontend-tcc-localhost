import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import styles from "./page.module.css";
import { todosPersonagens } from "@/simulacaoDeDados";

async function DescricaoPersonagens({ params }) {

  async function getPersonagem(id) {
    await new Promise(resolve => setTimeout(resolve, 50)); // simula delay
    return todosPersonagens.find(p => p.id === id);
  }

  const { id } = params;
  const personagem = await getPersonagem(id);

  if (!personagem) return <p>Personagem não encontrado.</p>;

  return (
    <>
      <CabecalhoPolitica tituloPagina={`"${personagem.nome}"`} rota={"/personagens"}/>
      <main className={styles.mainDescricao}>
        <section className={styles.textoImagem}>
            <article className={styles.articlePersonagem}> {/*<!-- Descrição dos Personagens -->*/}
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
  )
}

export default DescricaoPersonagens