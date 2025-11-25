import { useState } from "react";
import Input from "./Input";
import styles from "./index.module.css";

function FormularioEdicao({ item, titulo, onSave }) {

  const [dados, setDados] = useState(item);
  const [imagem, setImagem] = useState(null); // Estado para a nova imagem
  const [imagemPreview, setImagemPreview] = useState(null); // Preview da imagem

  const handleChange = (campo, valor) => {
    setDados((prev) => ({ ...prev, [campo]: valor }));
  };

  // ⬇️ NOVA FUNÇÃO PARA MANIPULAR UPLOAD DE IMAGEM ⬇️
  const handleImagemChange = (e) => {
    const arquivo = e.target.files[0];
    
    if (arquivo) {
      setImagem(arquivo);
      
      // Criar preview da imagem
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagemPreview(e.target.result);
      };
      reader.readAsDataURL(arquivo);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const erros = validarDados(dados);

    if (erros.length > 0) {
      alert("Corrija os seguintes erros:\n\n" + erros.join("\n"));
      return;
    }

    // ⬇️ ENVIAR DADOS COM IMAGEM ⬇️
    onSave({ 
      ...dados, 
      id: obterId(dados),
      imagem: imagem // Inclui o arquivo de imagem
    });
  };

  /**
   * Identifica ID correto para qualquer item
   */
  function obterId(dados) {
    const ids = ["id", "_id", "mapa_id", "ars_id", "pers_id", "not_id"];
    for (const id of ids) {
      if (dados[id] !== undefined && dados[id] !== null) {
        return dados[id];
      }
    }
    return null;
  }

  /**
   * Validações de todos os tipos (ATUALIZADO)
   */
  const validacoes = {
    // Arsenal
    ars_tipo:         { required: true, type: "number", allowed: [0, 1, 2], mensagem: "Tipo deve ser 0 (pistola), 1 (faca) ou 2 (rifle)." },
    ars_nome:         { required: true, type: "string", min: 1, max: 100 },
    ars_src:          { required: false, type: "string", max: 255 }, // ⬅️ NÃO É MAIS OBRIGATÓRIO
    ars_alt:          { required: false, type: "string", max: 100 },
    ars_dano:         { required: false, type: "number", min: 0, max: 999 },
    ars_raridade:     { required: false, type: "string", max: 50 },
    ars_municao:      { required: false, type: "number", min: 0, max: 999 },
    ars_alcance:      { required: false, type: "number", min: 0, max: 999 },
    ars_taxa_disparo: { required: false, type: "decimal", min: 0, max: 999 },
    ars_taxa_acerto:  { required: false, type: "decimal", min: 0, max: 999 },

    // Mapas
    mapa_nome:        { required: true, type: "string", min: 1, max: 100 },
    mapa_src:         { required: false, type: "string", max: 255 }, // ⬅️ NÃO É MAIS OBRIGATÓRIO
    mapa_alt:         { required: false, type: "string", max: 100 },
    mapa_descricao:   { required: false, type: "string", max: 1000 },

    // Notícia
    not_titulo:       { required: true, type: "string", min: 1, max: 150 },
    not_conteudo:     { required: true, type: "string", min: 10, max: 5000 },
    not_imagem:       { required: false, type: "string", max: 255 }, // ⬅️ NÃO É MAIS OBRIGATÓRIO
    not_alt:          { required: false, type: "string", max: 100 },

    // Personagens
    pers_tipo:        { required: true, type: "number", allowed: [0,1,2,3], mensagem: "Tipo deve ser 0 (guardião), 1 (cavaleiro), 2 (anjo), 3 (inimigo)." },
    pers_nome:        { required: true, type: "string", min: 1, max: 100 },
    pers_src:         { required: false, type: "string", max: 255 }, // ⬅️ NÃO É MAIS OBRIGATÓRIO
    pers_alt:         { required: false, type: "string", max: 100 },
    pers_descricao:   { required: false, type: "string", max: 5000 },
    pers_frase:       { required: false, type: "string", max: 255 },
  };

  /**
   * Validador genérico (ATUALIZADO)
   */
  function validarDados(dados) {
    const erros = [];
    const campos = Object.keys(dados);

    const usarArsenal = campos.some(c => c.startsWith("ars_"));
    const usarMapa = campos.some(c => c.startsWith("mapa_"));
    const usarNoticia = campos.some(c => c.startsWith("not_"));
    const usarPersonagem = campos.some(c => c.startsWith("pers_"));

    for (const campo in validacoes) {
      const regras = validacoes[campo];
      const valor = dados[campo];

      if (
        (usarArsenal && campo.startsWith("ars_")) ||
        (usarMapa && campo.startsWith("mapa_")) ||
        (usarNoticia && campo.startsWith("not_")) ||
        (usarPersonagem && campo.startsWith("pers_"))
      ) {

        // Campos de imagem NÃO SÃO mais obrigatórios no frontend
        if (campo.includes("_src") || campo.includes("_imagem")) {
          continue; // Pula validação de campos de imagem
        }

        if (regras.required && !valor) {
          erros.push(`${formatar(campo)} é obrigatório.`);
          continue;
        }

        if (!valor) continue;

        if (regras.type === "number" && isNaN(Number(valor))) {
          erros.push(`${formatar(campo)} deve ser número.`);
          continue;
        }

        if (regras.type === "decimal" && isNaN(parseFloat(valor))) {
          erros.push(`${formatar(campo)} deve ser decimal.`);
          continue;
        }

        if (regras.type === "string" && typeof valor !== "string") {
          erros.push(`${formatar(campo)} deve ser texto.`);
          continue;
        }

        if (regras.min !== undefined && Number(valor) < regras.min) {
          erros.push(`${formatar(campo)} deve ser no mínimo ${regras.min}.`);
        }

        if (regras.max !== undefined && Number(valor) > regras.max) {
          erros.push(`${formatar(campo)} deve ser no máximo ${regras.max}.`);
        }

        if (typeof valor === "string" && regras.max && valor.length > regras.max) {
          erros.push(`${formatar(campo)} deve ter no máximo ${regras.max} caracteres.`);
        }

        if (regras.allowed && !regras.allowed.includes(Number(valor))) {
          erros.push(regras.mensagem || `${formatar(campo)} inválido.`);
        }
      }
    }

    return erros;
  }

  const formatar = (campo) =>
    campo
      .replace("ars_", "")
      .replace("mapa_", "")
      .replace("not_", "")
      .replace("pers_", "");

  // ⬇️ FUNÇÃO PARA OBTER URL DA IMAGEM ATUAL ⬇️
  const obterImagemAtual = () => {
    return dados.not_imagem || dados.mapa_src || dados.ars_src || dados.pers_src || dados.src;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>

      <div className={styles.divFormEImagem}>
        <form className={styles.form} onSubmit={handleSubmit}>

          {Object.entries(dados).map(([campo, valor]) => {
            if (
              campo.includes("src") ||
              campo.includes("imagem") ||
              campo.includes("data_criacao") ||
              campo.includes("data_publicacao") ||
              campo === "usu_id" ||
              campo.endsWith("_id") ||
              valor === null
            ) return null;

            return (
              <Input
                key={campo}
                label={`${formatar(campo)[0].toUpperCase()}${formatar(campo).slice(1)}:`}
                value={valor}
                onChange={(val) => handleChange(campo, val)}
              />
            );
          })}

          {/* ⬇️ INPUT DE UPLOAD DE IMAGEM ⬇️ */}
          <div className={styles.uploadContainer}>
            <label className={styles.uploadLabel}>
              Nova Imagem:
              <input
                type="file"
                accept="image/*"
                onChange={handleImagemChange}
                className={styles.uploadInput}
              />
            </label>
            {imagem && (
              <p className={styles.arquivoSelecionado}>
                Arquivo selecionado: {imagem.name}
              </p>
            )}
          </div>

          {/* ⬇️ PREVIEW DA IMAGEM ⬇️ */}
          <div className={styles.imagemContainer}>
            <img
              src={imagemPreview || obterImagemAtual()}
              className={styles.imagem}
              alt="Preview"
              onError={(e) => {
                e.target.src = '/sem.jpg'; // Fallback para imagem padrão
              }}
            />
            <p className={styles.legendaImagem}>
              {imagemPreview ? "Nova imagem" : "Imagem atual"}
            </p>
          </div>

          <button type="submit" className={styles.btnSalvar}>Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default FormularioEdicao;
