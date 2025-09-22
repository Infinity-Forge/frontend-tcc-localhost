import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import styles from "./page.module.css";
import { mapas } from "@/simulacaoDeDados";

export default function Page() {

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Mapas" rota="../admin/home"/>

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
            <div className={styles.cardFooter}>Adicionar Mapa</div>
          </div>
          {/* Cards de mapas */}
          {mapas.map(mapa => <InformacaoCard key={mapa.id} nome={mapa.nome} src={mapa.src} alt={mapa.alt}/>)}
        </section>
      </Container>
    </div>
  );
}