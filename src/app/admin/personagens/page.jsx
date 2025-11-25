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

  const [personagens, setPersonagens] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
        alert("Você precisa estar logado.");
        return router.push("/admin/login");
    } else {
      listarPersonagens();
    }
  
  }, []);

  async function listarPersonagens() {
    try {
      setLoading(true);
      const response = await api.get('/personagens');

      if (response.data.sucesso) {
        const personagensApi = response.data.dados;
        setPersonagens(personagensApi);
      } else {
        alert('Erro:' + response.data.mensagem + '\n' + response.data.dados);
      }

    } catch (error) {
      if (error.response) {
        alert(error.response.data.mensagem + '\n' + error.response.data.dados);
      } else {
        alert('Erro no front-end' + '\n' + error);
      }
    } finally {
      setLoading(false);
    }
  }

  async function criarPersonagem(novoPersonagem) {
    try {
      setLoading(true);

      const formData = new FormData();
      
      Object.keys(novoPersonagem).forEach(key => {
        if (key !== 'imagem' && key !== 'id' && novoPersonagem[key] !== null) {
          formData.append(key, novoPersonagem[key]);
        }
      });

      if (novoPersonagem.imagem && novoPersonagem.imagem instanceof File) {
        formData.append('imagem', novoPersonagem.imagem);
      }

      const response = await api.post("/personagens", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.sucesso) {
        alert("Personagem criado com sucesso!");

        // ⬇️ ATUALIZA A LISTA COMPLETA (COMO UM F5) ⬇️
        await listarPersonagens();

        setPersonagemSelecionado(null);
      } else {
        alert(
          "Erro:\n" +
          response.data.mensagem +
          "\n" +
          response.data.dados
        );
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

  async function atualizarPersonagem(dadosAtualizados) {
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

      const response = await api.put(`/personagens/${dadosAtualizados.pers_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.data.sucesso) {
        alert("Personagem atualizado com sucesso!");

        // ⬇️ ATUALIZA A LISTA COMPLETA (COMO UM F5) ⬇️
        await listarPersonagens();

        setPersonagemSelecionado(null);
      } else {
        alert(
          "Erro: " +
          response.data.mensagem +
          "\n" +
          response.data.dados
        );
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

  async function deletarPersonagem(id) {
    try {
      setLoading(true);

      const response = await api.delete(`/personagens/${id}`);

      if (response.data.sucesso) {
        alert("Personagem deletado com sucesso!");
        
        // ⬇️ ATUALIZA A LISTA COMPLETA (COMO UM F5) ⬇️
        await listarPersonagens();

      } else {
        alert(
          "Erro: " +
          response.data.mensagem +
          "\n" +
          response.data.dados
        );
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

  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  const personagemModelo = {
    pers_id: null,
    usu_id: 1,
    pers_tipo: "",
    pers_nome: "",
    pers_src: "",
    pers_alt: "",
    pers_descricao: "",
    pers_frase: ""
  };

  const termo = busca.trim().toLowerCase();

  const personagensFiltrados = personagens.filter((item) => {
    if (!termo) return true;

    const nome = item?.pers_nome ? String(item.pers_nome).toLowerCase() : "";
    const tipo = item?.pers_tipo !== undefined ? String(item.pers_tipo).toLowerCase() : "";
    const id = item?.pers_id ? String(item.pers_id) : "";

    return (
      nome.includes(termo) ||
      tipo.includes(termo) ||
      id.includes(termo)
    );
  });

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <CabecalhoPolitica tituloPagina="Personagens" route="../admin/home"/>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Buscar..." value={busca} onChange={(e) => setBusca(e.target.value)}/>
          <span>🔍</span>
        </div>
      </header>

      <Container>
        {/* Grid de personagens */}
        <section className={styles.grid}>
          {/* Card adicionar */}
          <div className={styles.card} onClick={() => setPersonagemSelecionado({ ...personagemModelo })}>
            <div className={styles.addCharacter}>
              <span className={styles.bigSymbol}>+</span>
            </div>
            <div className={styles.cardFooter}>Adicionar Personagem</div>
          </div>
          {/* Cards de personagens */}
          {personagensFiltrados.map((personagem) => (
            <InformacaoCard
              key={personagem.pers_id}
              tipo={personagem.pers_tipo}
              nome={personagem.pers_nome}
              src={personagem.pers_src}
              alt={personagem.pers_alt}
              handleDeletar={() => deletarPersonagem(personagem.pers_id)}
              onClick={() => setPersonagemSelecionado(personagem)}
            />
          ))}
        </section>

        {personagemSelecionado && (
          <Modal onClose={() => setPersonagemSelecionado(null)}>
            <FormularioEdicao
              item={personagemSelecionado}
              titulo={personagemSelecionado.pers_id ? "Editar Personagem" : "Criar Personagem"}
              onSave={personagemSelecionado.pers_id ? atualizarPersonagem : criarPersonagem}
            />
          </Modal>
        )}
      </Container>
    </div>
  );
}