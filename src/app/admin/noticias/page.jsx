"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import Modal from "@/components/Admin/Modal";
import FormularioEdicao from "@/components/Admin/FormularioEdicao";
import styles from "./page.module.css";
import api from "@/services/api";

export default function Page() {

  const [noticias, setNoticias] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

    const router = useRouter();
  
    useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
        alert("Você precisa estar logado.");
        return router.push("/admin/login");
    } else {
      listarNoticias();
    }
  
    }, []);

  async function listarNoticias() {
    try {
      setLoading(true);

      const response = await api.get("/noticias");

      if (response.data.sucesso) {
        setNoticias(response.data.dados);
      } else {
        alert("Erro:\n" + response.data.mensagem + "\n" + response.data.dados);
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end\n" + error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function criarNoticia(novaNoticia) {
    try {
      setLoading(true);

      const formData = new FormData();
      
      Object.keys(novaNoticia).forEach(key => {
        if (key !== 'imagem' && key !== 'id' && novaNoticia[key] !== null) {
          formData.append(key, novaNoticia[key]);
        }
      });

      if (novaNoticia.imagem && novaNoticia.imagem instanceof File) {
        formData.append('imagem', novaNoticia.imagem);
      }

      const response = await api.post("/noticias", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.sucesso) {
        alert("Notícia criada com sucesso!");
        
        // ⬇️ ATUALIZA A LISTA COMPLETA (COMO UM F5) ⬇️
        await listarNoticias();

        setNoticiaSelecionada(null);
      } else {
        alert("Erro:\n" + response.data.mensagem + "\n" + response.data.dados);
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end\n" + error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function atualizarNoticia(dadosAtualizados) {
    try {
      setLoading(true);

      const formData = new FormData();
      
      Object.keys(dadosAtualizados).forEach(key => {
        if (key !== 'imagem' && key !== 'id' && dadosAtualizados[key] !== null) {
          formData.append(key, dadosAtualizados[key]);
        }
      });
      
      if (dadosAtualizados.imagem && dadosAtualizados.imagem instanceof File) {
        formData.append('imagem', dadosAtualizados.imagem);
      }

      const response = await api.patch(`/noticias/${dadosAtualizados.not_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.sucesso) {
        alert("Notícia atualizada com sucesso!");

        // ⬇️ ATUALIZA A LISTA COMPLETA (COMO UM F5) ⬇️
        await listarNoticias();

        setNoticiaSelecionada(null);

      } else {
        alert("Erro:\n" + response.data.mensagem + "\n" + response.data.dados);
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end\n" + error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function deletarNoticia(id) {
    try {
      setLoading(true);

      const response = await api.delete(`/noticias/${id}`);

      if (response.data.sucesso) {
        alert("Notícia deletada com sucesso!");
        
        // ⬇️ ATUALIZA A LISTA COMPLETA (COMO UM F5) ⬇️
        await listarNoticias();

      } else {
        alert("Erro:\n" + response.data.mensagem + "\n" + response.data.dados);
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + "\n" + error.response.data.dados);
      } else {
        alert("Erro no front-end\n" + error);
      }
    } finally {
      setLoading(false);
    }
  }

  const [noticiaSelecionada, setNoticiaSelecionada] = useState(null);

  const noticiaModelo = {
    not_id: null,
    usu_id: 1,
    not_titulo: "",
    not_conteudo: "",
    not_imagem: ""
  };

  const termo = busca.trim().toLowerCase();

  const noticiasFiltradas = noticias.filter((item) => {
    if (!termo) return true;

    const titulo = item?.not_titulo ? String(item.not_titulo).toLowerCase() : "";
    const conteudo = item?.not_conteudo ? String(item.not_conteudo).toLowerCase() : "";
    const id = item?.not_id ? String(item.not_id) : "";

    return (
      titulo.includes(termo) ||
      conteudo.includes(termo) ||
      id.includes(termo)
    );
  });

  return (
    <div className={styles.container}>

      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Notícias" route="../admin/home" />

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Buscar..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
          <span>🔍</span>
        </div>
      </header>

      <Container>

        <section className={styles.grid}>

          <div className={styles.card} onClick={() => setNoticiaSelecionada({ ...noticiaModelo })}>
            <div className={styles.addCharacter}>
              <span className={styles.bigSymbol}>+</span>
            </div>
            <div className={styles.cardFooter}>Adicionar Notícia</div>
          </div>

          {noticiasFiltradas.map((noticia) => (
            <InformacaoCard
              key={noticia.not_id}
              nome={noticia.not_titulo}
              src={noticia.not_imagem}
              handleDeletar={() => deletarNoticia(noticia.not_id)}
              onClick={() => setNoticiaSelecionada(noticia)}
            />
          ))}

        </section>

        {noticiaSelecionada && (
          <Modal onClose={() => setNoticiaSelecionada(null)}>
            <FormularioEdicao
              item={noticiaSelecionada}
              titulo={noticiaSelecionada.not_id ? "Editar Notícia" : "Criar Notícia"}
              onSave={noticiaSelecionada.not_id ? atualizarNoticia : criarNoticia}
            />
          </Modal>
        )}

      </Container>
    </div>
  );
}