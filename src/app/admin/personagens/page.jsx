import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Container from "@/components/Container";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import styles from "./page.module.css";

export default function Page() {

  const personagens = {
    guardioes: [
      { id: 1, nome: "Rato", src: "/Rato.jpg", alt: "Imagem do Rato" },
      { id: 2, nome: "Urso", src: "/Urso.jpg", alt: "Imagem do Urso" },
      { id: 3, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Guardião" },
      { id: 4, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Guardião" }
    ],
    cavaleiros: [
      { id: 5, nome: "Peste", src: "/peste.jpg", alt: "Imagem do Cavaleiro da Peste" },
      { id: 6, nome: "Morte", src: "/morte.jpg", alt: "Imagem do Cavaleiro da Morte" },
      { id: 7, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Cavaleiro" },
      { id: 8, nome: "Fome", src: "/fome.jpg", alt: "Imagem do Cavaleiro da Fome" }
    ],
    anjos: [
      { id: 9, nome: "Anjos", src: "/anjos.jpg", alt: "Imagem dos Anjos" },
      { id: 10, nome: "Arcanjos", src: "/arcanjos.jpg", alt: "Imagem dos Arcanjos" },
      { id: 11, nome: "Querubins", src: "/querubins.jpg", alt: "Imagem dos Querubins" },
      { id: 12, nome: "Serafins", src: "/serafins.jpg", alt: "Imagem dos Serafins" },
      { id: 13, nome: "Anjo Miguel", src: "/anjoMiguel.jpg", alt: "Imagem do Anjo Miguel" },
      { id: 14, nome: "Anjo Gabriel", src: "/anjoGabriel.jpg", alt: "Imagem do Anjo Gabriel" }
    ],
    inimigos: [
      { id: 15, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 16, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 17, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 18, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 19, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 20, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 21, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 22, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 23, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 24, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 25, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 26, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" },
      { id: 27, nome: "Luffy", src: "/luffy.jpg", alt: "Imagem de um Inimigo" }
    ]
  };

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