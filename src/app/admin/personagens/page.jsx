import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Container from "@/components/Container";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import styles from "./page.module.css";
import { personagens } from "@/simulacaoDeDados";

export default function Page() {

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Personagens" rota="../admin/home"/>

      
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
            <div className={styles.cardFooter}>Adicionar Personagem</div>
          </div>
          {/* Cards de personagens */}
          {personagens.guardioes.map(guardiao => <InformacaoCard key={guardiao.id} nome={guardiao.nome} src={guardiao.src} alt={guardiao.alt}/>)}
          {personagens.cavaleiros.map(cavaleiro => <InformacaoCard key={cavaleiro.id} nome={cavaleiro.nome} src={cavaleiro.src} alt={cavaleiro.alt}/>)}
          {personagens.anjos.map(anjo => <InformacaoCard key={anjo.id} nome={anjo.nome} src={anjo.src} alt={anjo.alt}/>)}
          {personagens.inimigos.map(inimigo => <InformacaoCard key={inimigo.id} nome={inimigo.nome} src={inimigo.src} alt={inimigo.alt}/>)}
        </section>
      </Container>
    </div>
  );
}