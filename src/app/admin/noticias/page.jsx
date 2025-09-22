import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import styles from "./page.module.css";
import { noticias } from "@/simulacaoDeDados";

export default function Page() {

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Noticías" rota="../admin/home"/>

        <div className={styles.searchBox}>
          <input type="text" placeholder="Buscar..." />
          <span>🔍</span>
        </div>
      </header>
    

      <Container>
        {/* Grid de personagens */}
        <section className={styles.grid}>
          {/* Card adicionar */}
          <div className={styles.card}>
            <div className={styles.addCharacter}>
              <span className={styles.bigSymbol}>+</span>
            </div>
            <div className={styles.cardFooter}>Adicionar Notícia</div>
          </div>
          {/* Cards de notícias */}
          {noticias.map(noticia => <InformacaoCard key={noticia.id} nome={noticia.titulo} src={noticia.src} alt={noticia.alt}/>)}
        </section>
      </Container>
    </div>
  );
}