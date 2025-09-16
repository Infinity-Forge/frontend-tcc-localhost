import Link from "next/link";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import ContainerPersonagens from "@/components/ContainerPersonagens";
import CardArma from "@/components/ContainerPersonagens/CardArma";
import Footer from "@/components/Footer";
import Suporte from "@/components/Suporte";
import styles from "./page.module.css";

function Arsenal() {
  const armas = {
    pistolas: [
      {
        id: 1,
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        id: 2,
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        id: 3,
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        id: 4,
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        id: 5,
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        id: 6,
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        id: 7,
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        id: 8,
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      }
    ],
    facas: [
      {
        id: 9,
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        id: 10,
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        id: 11,
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        id: 12,
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        id: 13,
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        id: 14,
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        id: 15,
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        id: 16,
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      }
    ],
    riffles: [
      {
        id: 17,
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        id: 18,
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        id: 19,
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        id: 20,
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        id: 21,
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        id: 22,
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        id: 23,
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        id: 24,
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      }
    ]
  };

  return (
    <>
      <Navbar>
        <Link href="/">
            <button className={styles.navbarButton}>Home</button>
        </Link>
      </Navbar>
      <main>
        <section className="armas">
          <Title text="Pistola" marginTopValue="86px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {armas.pistolas.map((pistola, index) => <CardArma key={index} id={pistola.id} nome={pistola.nome} src={pistola.src} alt={pistola.alt}/>)}
          </ContainerPersonagens>
          <Title text="Faca"   marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {armas.facas.map((faca, index) => <CardArma key={index} id={faca.id} nome={faca.nome} src={faca.src} alt={faca.alt}/>)}
          </ContainerPersonagens>
          <Title text="Riffle" marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {armas.riffles.map((riffle, index) => <CardArma key={index} id={riffle.id} nome={riffle.nome} src={riffle.src} alt={riffle.alt}/>)}
          </ContainerPersonagens>
        </section>
      </main>
      <Footer />
      <Suporte />
    </>
  )
}

export default Arsenal