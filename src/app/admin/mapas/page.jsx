"use client";

import { useState, useEffect } from "react";
import Container from "@/components/Container";
import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import InformacaoCard from "@/components/Admin/InformacaoCard";
import FormularioEdicao from "@/components/Admin/FormularioEdicao";
import Modal from "@/components/Admin/Modal";
import styles from "./page.module.css";
import api from "@/services/api";

export default function Page() {

    const [mapas, setMapas] = useState([]);
    const [busca, setBusca] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      listarMapas();
    }, [])

    async function listarMapas() {
      try {
          setLoading(true);
          const response = await api.get('/mapas');

          if (response.data.sucesso) {
            const mapasApi = response.data.dados;
            setMapas(mapasApi);
          } else {
            alert('Erro:' + response.data.mensagem + '\n' + response.data.dados);
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

    async function criarMapa(novoMapa) {
      try {
        setLoading(true);

        const response = await api.post("/mapas", novoMapa);

        if (response.data.sucesso) {
          alert("Mapa criado com sucesso!");

          setMapas(prev => [...prev, response.data.dados]);

          setMapaSelecionado(null);
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

    async function atualizarMapa(dadosAtualizados) {
      try {
        setLoading(true);

        const response = await api.put(`/mapas/${dadosAtualizados.mapa_id}`, dadosAtualizados);

        if (response.data.sucesso) {
          alert("Mapa atualizado com sucesso!");

          // Atualiza o estado local também
          setMapas(prev =>
            prev.map(item =>
              item.mapa_id === dadosAtualizados.mapa_id ? dadosAtualizados : item
            )
          );

          setMapaSelecionado(null); // Fecha o modal
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

    async function deletarMapa(id) {
      try {
        setLoading(true);

        const response = await api.delete(`/mapas/${id}`);

        if (response.data.sucesso) {
          alert("Mapa deletado com sucesso!");
          setMapas(prev => prev.filter(item => item.mapa_id !== id));

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

    const [mapaSelecionado, setMapaSelecionado] = useState(null);

    // Modelo baseado na tabela MAPAS
    const mapaModelo = {
      mapa_id: null,
      usu_id: 1,
      mapa_src: "/mapa.png",
      mapa_alt: "",
      mapa_nome: "",
      mapa_descricao: "",
      mapa_data_criacao: new Date().toISOString().slice(0, 19).replace('T', ' ')
    };

    const termo = busca.trim().toLowerCase();

    const mapasFiltrado = mapas.filter((item) => {
      if (!termo) return true;

      const nome = item?.mapa_nome ? String(item.mapa_nome).toLowerCase() : "";
      const descricao = item?.mapa_descricao ? String(item.mapa_descricao).toLowerCase() : "";
      const id = item?.mapa_id ? String(item.mapa_id) : "";

      return (
        nome.includes(termo) ||
        descricao.includes(termo) ||
        id.includes(termo)
      );
    });

    return (
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <CabecalhoPolitica tituloPagina="Mapas" route="../admin/home"/>
          
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
          {/* Grid de mapas */}
          <section className={styles.grid}>
            {/* Card adicionar */}
            <div className={styles.card} onClick={() => setMapaSelecionado({ ...mapaModelo })}>
              <div className={styles.addCharacter}>
                <span className={styles.bigSymbol}>+</span>
              </div>
              <div className={styles.cardFooter}>Adicionar Mapa</div>
            </div>
            
            {/* Cards de mapas */}
            {mapasFiltrado.map((mapa) => (
              <InformacaoCard 
                key={mapa.mapa_id} 
                nome={mapa.mapa_nome} // Usando nome como "tipo" para exibição
                descricao={mapa.mapa_descricao ? mapa.mapa_descricao.substring(0, 50) + "..." : "Sem descrição"} // Descrição resumida
                src={mapa.mapa_src} 
                alt={mapa.mapa_alt} 
                handleDeletar={() => deletarMapa(mapa.mapa_id)}
                onClick={() => setMapaSelecionado(mapa)}
              />
            ))}
          </section>

          {mapaSelecionado && (
            <Modal onClose={() => setMapaSelecionado(null)}>
              <FormularioEdicao
                item={mapaSelecionado}
                titulo={mapaSelecionado.mapa_id ? "Editar Mapa" : "Criar Mapa"}
                onSave={mapaSelecionado.mapa_id ? atualizarMapa : criarMapa}
              />
            </Modal>
          )}
        </Container>
      </div>
    );
}