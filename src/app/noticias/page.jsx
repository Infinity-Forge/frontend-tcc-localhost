"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import CarrosselBanner from "@/components/CarrosselBanner";
import Title from "@/components/Title";
import Noticia from "@/components/Noticia";
import Footer from "@/components/Footer";
import styles from "./page.module.css";
import api from "../../services/api";

function Noticias() {

  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listarNoticias();
  }, [])

  async function listarNoticias() {
    try {
        setLoading(true);
        const response = await api.get('/noticias');

        if (response.data.sucesso) {
          const noticiaApi = response.data.dados;
          setNoticias(noticiaApi);
        } else {
          alert('Erro:' + error.response.data.mensagem + '\n' + error.response.data.dados);
        }

    } catch (error) {
        if(error.response) {
            alert(error.response.data.mensagem + '\n' + error.response.data.dados);
        } else {
            alert('Erro no front-end' + '\n' + error);
        }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar>
          <Link href="/">
              <button className={styles.navbarButton}>Home</button>
          </Link>
        </Navbar>
        <CarrosselBanner/>
        <main className={styles.noticiasMain}>
          <Container>
            <Title text="Notícias" marginBottomValue="16px"/>
            <section className={styles.noticiasSection}>
              {loading ? (
                  <div>Carregando...</div>
              ) : noticias.length > 0 ? (
                noticias.map((noticia) => (
                    <Noticia key={noticia.not_id} id={noticia.not_id} titulo={noticia.not_titulo} texto={noticia.not_conteudo} src={noticia.not_imagem}/>
                ))
              ) : (
                  <h1>Não foi possível carregar as notícias</h1>
              )}
            </section>
          </Container>
        </main>
      <Footer/>
    </>
  )
}

export default Noticias;