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
          {personagens.guardioes.map(personagem => <InformacaoCard key={personagem.id} nome={personagem.nome}/>)}
          {personagens.cavaleiros.map(personagem => <InformacaoCard key={personagem.id} nome={personagem.nome}/>)}
          {personagens.anjos.map(personagem => <InformacaoCard key={personagem.id} nome={personagem.nome}/>)}
          {personagens.inimigos.map(personagem => <InformacaoCard key={personagem.id} nome={personagem.nome}/>)}
        </section>
      </Container>
    </div>
  );
}