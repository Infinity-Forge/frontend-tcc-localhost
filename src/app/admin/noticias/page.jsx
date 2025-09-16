import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import styles from "./page.module.css";

export default function Page() {

  const noticias = [
  {
    id: 1,
    src: "/clash.jpg",
    alt: "Imagem da Notícia",
    titulo: "Título",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam!"
  },
  {
    id: 2,
    src: "/clash.jpg",
    alt: "Imagem da Notícia",
    titulo: "Título",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam!"
  },
  {
    id: 3,
    src: "/clash.jpg",
    alt: "Imagem da Notícia",
    titulo: "Título",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam!"
  },
  {
    id: 4,
    src: "/clash.jpg",
    alt: "Imagem da Notícia",
    titulo: "Título",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam!"
  },
  {
    id: 5,
    src: "/clash.jpg",
    alt: "Imagem da Notícia",
    titulo: "Título",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam!"
  },
  {
    id: 6,
    src: "/clash.jpg",
    alt: "Imagem da Notícia",
    titulo: "Título",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut qui odio nostrum? Laudantium in natus error ipsa, ducimus optio aperiam!"
  }
];

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
          {noticias.map(noticia => <InformacaoCard key={noticia.id} nome={noticia.titulo}/>)}
        </section>
      </Container>
    </div>
  );
}