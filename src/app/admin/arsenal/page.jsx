import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import styles from "./page.module.css";
import { armas } from "@/simulacaoDeDados"

export default function Page() {

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Arsenal" rota="../admin/home"/>
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
            <div className={styles.cardFooter}>Adicionar Arma</div>
          </div>
          {/* Cards de personagens */}
          {armas.pistolas.map((pistola, index) => <InformacaoCard key={index} nome={pistola.nome}/>)}
          {armas.facas.map((faca, index) => <InformacaoCard key={index} nome={faca.nome}/>)}
          {armas.riffles.map((riffle, index) => <InformacaoCard key={index} nome={riffle.nome}/>)}
        </section>
      </Container>
    </div>
  );
}