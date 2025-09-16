import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import styles from "./page.module.css";

async function DescricaoPersonagens({ params }) {

  const personagens = [
    { id: "1", nome: "Rato", imagem: "/rato.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Sempre alerta!" },
    { id: "2", nome: "Urso", imagem: "/urso.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Força e coragem." },
    { id: "3", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Vamos juntos!" },
    { id: "4", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Sempre lutando!" },
    { id: "5", nome: "Peste", imagem: "/peste.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Cuidado com a peste!" },
    { id: "6", nome: "Morte", imagem: "/morte.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "A morte é certa." },
    { id: "7", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Lutando sempre!" },
    { id: "8", nome: "Fome", imagem: "/fome.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "A fome não espera." },
    { id: "9", nome: "Anjos", imagem: "/anjos.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Sempre protegendo." },
    { id: "10", nome: "Arcanjos", imagem: "/arcanjos.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Mensageiros divinos." },
    { id: "11", nome: "Querubins", imagem: "/querubins.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Pequenos protetores." },
    { id: "12", nome: "Serafins", imagem: "/serafins.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Chama sagrada." },
    { id: "13", nome: "Anjo Miguel", imagem: "/anjoMiguel.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "O guerreiro divino." },
    { id: "14", nome: "Anjo Gabriel", imagem: "/anjoGabriel.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "O mensageiro sagrado." },
    { id: "15", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Inimigo!" },
    { id: "16", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Perigo à frente!" },
    { id: "17", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Cuidado!" },
    { id: "18", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Atenção!" },
    { id: "19", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Ação rápida!" },
    { id: "20", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Perigo!" },
    { id: "21", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Fique atento!" },
    { id: "22", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Alerta!" },
    { id: "23", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Perigo eminente!" },
    { id: "24", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Atenção máxima!" },
    { id: "25", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Perigo!" },
    { id: "26", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Cuidado!" },
    { id: "27", nome: "Luffy", imagem: "/luffy.jpg", descricao: "Lorem ipsum dolor sit amet.", frase: "Fique alerta!" }
  ];

  async function getPersonagem(id) {
    await new Promise(resolve => setTimeout(resolve, 50)); // simula delay
    return personagens.find(p => p.id === id);
  }

  const { id } = params;
  const personagem = await getPersonagem(id);

  if (!personagem) return <p>Personagem não encontrado.</p>;

  return (
    <>
      <CabecalhoPolitica tituloPagina={`"${personagem.nome}"`} rota={"/personagens"}/>
      <main className={styles.mainDescricao}>
        <section className={styles.textoImagem}>
            <article className={styles.articlePersonagem}> {/*<!-- Descrição dos Personagens -->*/}
              <p className={styles.paragraph}>{personagem.descricao}</p>
            </article>
            <section className={styles.imagemPersonagemSection}>
                <img src={personagem.imagem} alt={personagem.nome} className={styles.imagemPersonagem} />
            </section>
        </section>
        <div className={styles.frasePersonagem}>
            <h2>{personagem.frase}</h2>
        </div>
    </main>
    </>
  )
}

export default DescricaoPersonagens