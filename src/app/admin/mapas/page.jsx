import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import styles from "./page.module.css";

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
          {/* Cards de personagens */}
          {["Personagem 1", "Personagem 2", "Personagem 3"].map((name, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.characterBox}>
                <div className={styles.actions}>
                  <button className={styles.iconBtn}>✎</button>
                  <button className={styles.iconBtn}>🗑</button>
                </div>
              </div>
              <div className={styles.cardFooter}>{name}</div>
            </div>
          ))}
        </section>
      </Container>
    </div>
  );
}