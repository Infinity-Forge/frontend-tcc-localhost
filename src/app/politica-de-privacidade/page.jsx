import Link from "next/link";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

function PoliticaDePrivacidade() {
  return (
    <>
      <CabecalhoPolitica tituloPagina="Politicas de privacidade"/>
      <main style={{ padding: "20px 40px", marginBottom: "20px", marginTop: "20px" }}>
        <section className={styles.politicas}>
            <h3 className={styles["titulo-3"]}>Nossa politica de privacidade</h3>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique aperiam cupiditate corrupti nobis deserunt numquam excepturi saepe soluta, beatae odio voluptates hic exercitationem unde quis earum veniam reiciendis quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ad dolores, ab, odio quaerat omnis mollitia exercitationem repellat illo quam atque sequi. Ut quibusdam fuga alias, incidunt veritatis eligendi voluptate.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique aperiam cupiditate corrupti nobis deserunt numquam excepturi saepe soluta, beatae odio voluptates hic exercitationem unde quis earum veniam reiciendis quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ad dolores, ab, odio quaerat omnis mollitia exercitationem repellat illo quam atque sequi. Ut quibusdam fuga alias, incidunt veritatis eligendi voluptate
            </p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique aperiam cupiditate corrupti nobis deserunt numquam excepturi saepe soluta, beatae odio voluptates hic exercitationem unde quis earum veniam reiciendis quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ad dolores, ab, odio quaerat omnis mollitia exercitationem repellat illo quam atque sequi. Ut quibusdam fuga alias, incidunt veritatis eligendi voluptate.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique aperiam cupiditate corrupti nobis deserunt numquam excepturi saepe soluta, beatae odio voluptates hic exercitationem unde quis earum veniam reiciendis quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ad dolores, ab, odio quaerat omnis mollitia exercitationem repellat illo quam atque sequi. Ut quibusdam fuga alias, incidunt veritatis eligendi voluptate
            </p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique aperiam cupiditate corrupti nobis deserunt numquam excepturi saepe soluta, beatae odio voluptates hic exercitationem unde quis earum veniam reiciendis quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ad dolores, ab, odio quaerat omnis mollitia exercitationem repellat illo quam atque sequi. Ut quibusdam fuga alias, incidunt veritatis eligendi voluptate.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique aperiam cupiditate corrupti nobis deserunt numquam excepturi saepe soluta, beatae odio voluptates hic exercitationem unde quis earum veniam reiciendis quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ad dolores, ab, odio quaerat omnis mollitia exercitationem repellat illo quam atque sequi. Ut quibusdam fuga alias, incidunt veritatis eligendi voluptate
            </p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique aperiam cupiditate corrupti nobis deserunt numquam excepturi saepe soluta, beatae odio voluptates hic exercitationem unde quis earum veniam reiciendis quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ad dolores, ab, odio quaerat omnis mollitia exercitationem repellat illo quam atque sequi. Ut quibusdam fuga alias, incidunt veritatis eligendi voluptate.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto similique aperiam cupiditate corrupti nobis deserunt numquam excepturi saepe soluta, beatae odio voluptates hic exercitationem unde quis earum veniam reiciendis quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione ad dolores, ab, odio quaerat omnis mollitia exercitationem repellat illo quam atque sequi. Ut quibusdam fuga alias, incidunt veritatis eligendi voluptate
            </p>

            <div className={styles.botoesConcordar}>
                <Link href="/">
                    <button className={styles.fechar}>Fechar</button>
                </Link>
                <Link href="/">
                    <button className={styles.concordo}>Li e concordo</button>
                </Link>
            </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default PoliticaDePrivacidade;