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
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      },
      {
        nome: "Pistola",
        src: "/arma.png",
        alt: "Pistola"
      }
    ],
    facas: [
      {
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      },
      {
        nome: "Faca",
        src: "/arma.png",
        alt: "Faca"
      }
    ],
    riffles: [
      {
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
        nome: "Riffle",
        src: "/arma.png",
        alt: "Riffle"
      },
      {
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
            {armas.pistolas.map((pistola, index) => <CardArma key={index} nome={pistola.nome} src={pistola.src} alt={pistola.alt}/>)}
          </ContainerPersonagens>
          <Title text="Faca"   marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {armas.facas.map((faca, index) => <CardArma key={index} nome={faca.nome} src={faca.src} alt={faca.alt}/>)}
          </ContainerPersonagens>
          <Title text="Riffle" marginTopValue="48px"/>
          <ContainerPersonagens className={styles.containerPersonagem}>
            {armas.riffles.map((riffle, index) => <CardArma key={index} nome={riffle.nome} src={riffle.src} alt={riffle.alt}/>)}
          </ContainerPersonagens>
        </section>
      </main>
      <Footer />
      <Suporte />
    </>
  )
}

export default Arsenal