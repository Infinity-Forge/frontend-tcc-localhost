import { useState } from "react";
import Input from "./Input";
import styles from "./index.module.css";

function FormularioEdicao({ item, titulo, onSave }) {

  const [dados, setDados] = useState(item);
  const [imagem, setImagem] = useState(null);
  const [imagemPreview, setImagemPreview] = useState(null);

  const handleChange = (campo, valor) => {
    setDados((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleImagemChange = (e) => {
    const arquivo = e.target.files[0];
    
    if (arquivo) {
      setImagem(arquivo);
      
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

    onSave({ 
      ...dados, 
      id: obterId(dados),
      imagem: imagem
    });
  };

  function obterId(dados) {
    const ids = ["id", "_id", "mapa_id", "ars_id", "pers_id", "not_id"];
    for (const id of ids) {
      if (dados[id] !== undefined && dados[id] !== null && dados[id] !== "") {
        return dados[id];
      }
    }
    return undefined;
  }

  const validacoes = {
    // Arsenal
    ars_tipo:         { required: true, type: "number", allowed: [0, 1, 2], mensagem: "Tipo deve ser 0 (pistola), 1 (faca) ou 2 (rifle)." },
    ars_nome:         { required: true, type: "string", min: 1, max: 100 },
    ars_src:          { required: false, type: "string", max: 255 }, 
    ars_alt:          { required: false, type: "string", max: 100 },
    ars_dano:         { required: false, type: "number", min: 0, max: 999 },
    ars_raridade:     { required: false, type: "string", max: 50 },
    ars_municao:      { required: false, type: "number", min: 0, max: 999 },
    ars_alcance:      { required: false, type: "number", min: 0, max: 999 },
    ars_taxa_disparo: { required: false, type: "decimal", min: 0, max: 999 },
    ars_taxa_acerto:  { required: false, type: "decimal", min: 0, max: 999 },

    // Mapas
    mapa_nome:        { required: true, type: "string", min: 1, max: 100 },
    mapa_src:         { required: false, type: "string", max: 255 },
    mapa_alt:         { required: false, type: "string", max: 100 },
    mapa_descricao:   { required: false, type: "string", max: 1000 },

    // Notícia
    not_titulo:       { required: true, type: "string", min: 1, max: 150 },
    not_conteudo:     { required: true, type: "string", min: 10, max: 5000 },
    not_imagem:       { required: false, type: "string", max: 255 },

    // Personagens
    pers_tipo:        { required: true, type: "number", allowed: [0,1,2,3], mensagem: "Tipo deve ser 0 (guardião), 1 (cavaleiro), 2 (anjo), 3 (inimigo)." },
    pers_nome:        { required: true, type: "string", min: 1, max: 100 },
    pers_src:         { required: false, type: "string", max: 255 }, 
    pers_alt:         { required: false, type: "string", max: 100 },
    pers_descricao:   { required: false, type: "string", max: 5000 },
    pers_frase:       { required: false, type: "string", max: 255 },
  };

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

        if (campo.includes("_src") || campo.includes("_imagem")) {
          continue;
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

  const obterImagemAtual = () => {
    return dados.not_imagem || dados.mapa_src || dados.ars_src || dados.pers_src || dados.src;
  };

  // Separar campos que ocupam linha inteira
  const camposNormais = [];
  const camposLinhaInteira = [];

  Object.entries(dados).forEach(([campo, valor]) => {
    if (
      campo.includes("src") ||
      campo.includes("imagem") ||
      campo.includes("data_criacao") ||
      campo.includes("data_publicacao") ||
      campo === "usu_id" ||
      campo.endsWith("_id") ||
      valor === null
    ) return;

    // Campos que devem ocupar linha inteira (descrição, conteúdo, etc)
    if (campo.includes('descricao') || campo.includes('conteudo') || campo.includes('frase')) {
      camposLinhaInteira.push([campo, valor]);
    } else {
      camposNormais.push([campo, valor]);
    }
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>

      <div className={styles.divFormEImagem}>
        <form className={styles.form} onSubmit={handleSubmit}>
          
          {/* Inputs em grid 2 colunas */}
          <div className={styles.inputsGrid}>
            {camposNormais.map(([campo, valor]) => (
              <Input
                key={campo}
                label={`${formatar(campo)[0].toUpperCase()}${formatar(campo).slice(1)}:`}
                value={valor}
                onChange={(val) => handleChange(campo, val)}
              />
            ))}
          </div>

          {/* Campos que ocupam linha inteira */}
          <div className={styles.camposLinhaInteira}>
            {camposLinhaInteira.map(([campo, valor]) => (
              <Input
                key={campo}
                label={`${formatar(campo)[0].toUpperCase()}${formatar(campo).slice(1)}:`}
                value={valor}
                onChange={(val) => handleChange(campo, val)}
                type={campo.includes('conteudo') || campo.includes('descricao') ? "textarea" : "text"}
              />
            ))}
          </div>

          {/* Seção de Imagem */}
          <div className={styles.imagemSection}>
            <div className={styles.imagemContainer}>
              <h3 className={styles.imagemTitulo}>Imagem Atual</h3>
              <img
                src={imagemPreview || obterImagemAtual()}
                className={styles.imagem}
                alt="Preview"
                onError={(e) => {
                  e.target.src = '/sem.jpg';
                }}
              />
              <p className={styles.legendaImagem}>
                {imagemPreview ? "Prévia da nova imagem" : "Imagem atual"}
              </p>
            </div>

            <div className={styles.uploadContainer}>
              <label className={styles.uploadLabel}>
                <span className={styles.uploadText}>Selecionar Nova Imagem</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImagemChange}
                  className={styles.uploadInput}
                />
                <span className={styles.uploadHelper}>
                  Clique para escolher um arquivo de imagem
                </span>
              </label>
              {imagem && (
                <p className={styles.arquivoSelecionado}>
                  ✅ Arquivo selecionado: {imagem.name}
                </p>
              )}
            </div>
          </div>

          <div className={styles.botaoContainer}>
            <button type="submit" className={styles.btnSalvar}>Salvar Alterações</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioEdicao;