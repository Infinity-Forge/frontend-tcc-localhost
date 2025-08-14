import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import styles from "./page.module.css";

function DescricaoPersonagens() {
  return (
    <>
      <CabecalhoPolitica tituloPagina='"Arcanjos"' rota={"/personagens"}/>
      <main className={styles.mainDescricao}>
        <section className={styles.textoImagem}>
            <article className={styles.articlePersonagem}> {/*<!-- Descrição dos Personagens -->*/}
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iusto placeat excepturi repellat amet repudiandae dolorum aliquam autem, ut quisquam quae atque vero magni assumenda laudantium? Animi eos sequi qui. <br/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, autem velit sed minus modi pariatur magni ducimus nobis quod odit ad repellendus iure voluptate neque placeat quis eveniet possimus est. <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa adipisci, eveniet aperiam corporis, iusto placeat facere consequuntur, ea vero cum dolores. Sit quam quod assumenda ipsa quia necessitatibus quos modi. <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus ducimus facere architecto. Dignissimos aut consequuntur perspiciatis. Fuga ut quod itaque, libero nisi autem, ex illum quidem culpa soluta perferendis. <br/> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque perferendis ea exercitationem eum. Iste unde quo veritatis quas illo porro, commodi dicta ratione eveniet numquam fugit quisquam, incidunt dolorum eligendi.</p>
            </article>
            <section className={styles.imagemPersonagemSection}>
                <img src="/arcanjo.png" alt="Foto do Personagem" className={styles.imagemPersonagem}/>
            </section>
        </section>
        <div className={styles.frasePersonagem}>
            <h2>"Lorem, ipsum dolor sit amet consectetur adipisicing elit."</h2>
        </div>
    </main>
    </>
  )
}

export default DescricaoPersonagens