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

  const [arsenal, setArsenal] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
  const token = localStorage.getItem("token");
  
  if (!token) {
      alert("Você precisa estar logado.");
      return router.push("/admin/login");
  } else {
    listarArsenal();
  }

  }, []);

  async function listarArsenal() {
    try {
        setLoading(true);
        const response = await api.get('/arsenal');

        if (response.data.sucesso) {
          const arsenalApi = response.data.dados;
          setArsenal(arsenalApi);
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

  async function criarArma(novaArma) {
    try {
      setLoading(true);

      const response = await api.post("/arsenal", novaArma);

      if (response.data.sucesso) {
        alert("Arma criada com sucesso!");

        setArsenal(prev => [...prev, response.data.dados]);

        setArmaSelecionada(null);
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

  async function atualizarArma(dadosAtualizados) {
    try {
      setLoading(true);

      const response = await api.put(`/arsenal/${dadosAtualizados.ars_id}`, dadosAtualizados);

      if (response.data.sucesso) {
        alert("Arma atualizada com sucesso!");

        // Atualiza o estado local também
        setArsenal(prev =>
          prev.map(item =>
            item.ars_id === dadosAtualizados.ars_id ? dadosAtualizados : item
          )
        );

        setArmaSelecionada(null); // Fecha o modal
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

  async function deletarArma(id) {
    try {
      setLoading(true);

      const response = await api.delete(`/arsenal/${id}`);

      if (response.data.sucesso) {
        alert("Arma deletada com sucesso!");
        setArsenal(prev => prev.filter(item => item.ars_id !== id));

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

  const [armaSelecionada, setArmaSelecionada] = useState(null);

  const armaModelo = {
    ars_id: null,
    usu_id: 1,
    ars_src: "/arma.png",
    ars_tipo: "",
    ars_nome: "",
    ars_alt: "",
    ars_dano: "",
    ars_raridade: "",
    ars_municao: "",
    ars_alcance: "",
    ars_taxa_disparo: "",
    ars_taxa_acerto: "",
  };

  const termo = busca.trim().toLowerCase();

  const arsenalFiltrado = arsenal.filter((item) => {
    if (!termo) return true;

    const nome = item?.ars_nome ? String(item.ars_nome).toLowerCase() : "";
    const tipo = item?.ars_tipo ? String(item.ars_tipo).toLowerCase() : "";
    const id = item?.ars_id ? String(item.ars_id) : "";

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
        <CabecalhoPolitica tituloPagina="Arsenal" route="../admin/home"/>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Buscar..." value={busca} onChange={(e) => setBusca(e.target.value)}/>
          <span>🔍</span>
        </div>
      </header>

      <Container>
        {/* Grid de personagens */}
        <section className={styles.grid}>
          {/* Card adicionar */}
          <div className={styles.card} onClick={() => setArmaSelecionada({ ...armaModelo })}>
            <div className={styles.addCharacter}>
              <span className={styles.bigSymbol}>+</span>
            </div>
            <div className={styles.cardFooter}>Adicionar Arma</div>
          </div>
          {/* Cards de personagens */}
          {arsenalFiltrado.map((arsenal) => <InformacaoCard key={arsenal.ars_id} tipo={arsenal.ars_tipo} nome={arsenal.ars_nome} src={arsenal.ars_src} alt={arsenal.ars_alt} handleDeletar={() => deletarArma(arsenal.ars_id)} onClick={() => setArmaSelecionada(arsenal)}/>)}
        </section>

        {armaSelecionada && (
          <Modal onClose={() => setArmaSelecionada(null)}>
            <FormularioEdicao
              item={armaSelecionada}
              titulo={armaSelecionada.ars_id ? "Editar Arma" : "Criar Arma"}
              onSave={armaSelecionada.ars_id ? atualizarArma : criarArma}
            />
          </Modal>
        )}
      </Container>
    </div>
  );
}