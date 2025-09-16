import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import styles from "./page.module.css";

export default function Page() {

  const mapas = [
    {
      id: 1,
      imgUrl: "/mapa2.jpg",
      nome: "Mapa Florestal",
      descricao: "Este é o mapa de uma grande floresta cheia de árvores antigas e densas."
    },
    {
      id: 2,
      imgUrl: "/mapa3.jpg",
      nome: "Mapa Urbano",
      descricao: "Este é o mapa de uma cidade moderna com arranha-céus e ruas movimentadas."
    },
    {
      id: 3,
      imgUrl: "/mapa4.jpg",
      nome: "Mapa do Deserto",
      descricao: "Um mapa que retrata vastas dunas de areia e temperaturas escaldantes."
    },
    {
      id: 4,
      imgUrl: "/mapa5.jpg",
      nome: "Mapa Montanhoso",
      descricao: "Este mapa mostra uma paisagem de montanhas altas e trilhas desafiadoras."
    }
  ];

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
          {mapas.map(mapa => <InformacaoCard key={mapa.id} nome={mapa.nome}/>)}
        </section>
      </Container>
    </div>
  );
}