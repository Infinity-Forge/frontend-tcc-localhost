import { useState } from "react";
import Input from "./Input";
import styles from "./index.module.css";

function FormularioEdicao({ item, titulo, onSave }) {

  const [dados, setDados] = useState(item);

  const handleChange = (campo, valor) => {
    setDados((prev) => ({ ...prev, [campo]: valor }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const erros = validarDados(dados);

    if (erros.length > 0) {
      alert("Corrija os seguintes erros:\n\n" + erros.join("\n"));
      return;
    }

    onSave(dados);
  }

  const validacoes = {
    ars_tipo:         { required: true,  type: "number",  allowed: [0, 1, 2], mensagem: "Tipo deve ser 0 (pistola), 1 (faca) ou 2 (rifle)." },
    ars_nome:         { required: true,  type: "string",  min: 1, max: 100, mensagem: "Nome é obrigatório e deve ter até 100 caracteres." },
    ars_src:          { required: true,  type: "string",  min: 1, max: 255, mensagem: "O caminho da imagem é obrigatório." },
    ars_alt:          { required: false, type: "string",  max: 100, mensagem: "Alt deve ter no máximo 100 caracteres." },
    ars_dano:         { required: false, type: "number",  min: 0, max: 999, mensagem: "Dano deve ser um número entre 0 e 999." },
    ars_raridade:     { required: false, type: "string",  max: 50, mensagem: "Raridade deve ter no máximo 50 caracteres." },
    ars_municao:      { required: false, type: "number",  min: 0, max: 999, mensagem: "Munição deve ser um número entre 0 e 999." },
    ars_alcance:      { required: false, type: "number",  min: 0, max: 999, mensagem: "Alcance deve ser um número entre 0 e 999." },
    ars_taxa_disparo: { required: false, type: "decimal", min: 0, max: 999, mensagem: "Taxa de disparo deve ser um número decimal entre 0 e 999." },
    ars_taxa_acerto:  { required: false, type: "decimal", min: 0, max: 999, mensagem: "Taxa de acerto deve ser um número decimal entre 0 e 999." }
  }

  function validarDados(dados) {
    const erros = [];

    for (const campo in validacoes) {
      const regras = validacoes[campo];
      const valor = dados[campo];

      // required
      if (regras.required && (valor === "" || valor === null || valor === undefined)) {
        erros.push(`${formatarCampo(campo)} é obrigatório.`);
        continue;
      }

      if (valor === "" || valor === null || valor === undefined) continue;

      // tipo number
      if (regras.type === "number") {
        if (isNaN(Number(valor))) {
          erros.push(`${formatarCampo(campo)} deve ser um número.`);
          continue;
        }
      }

      // tipo decimal
      if (regras.type === "decimal") {
        if (isNaN(parseFloat(valor))) {
          erros.push(`${formatarCampo(campo)} deve ser um número decimal.`);
          continue;
        }
      }

      // tipo string
      if (regras.type === "string") {
        if (typeof valor !== "string") {
          erros.push(`${formatarCampo(campo)} deve ser texto.`);
          continue;
        }
      }

      // min/max
      if (regras.min !== undefined && Number(valor) < regras.min) {
        erros.push(`${formatarCampo(campo)} deve ser no mínimo ${regras.min}.`);
      }

      if (regras.max !== undefined && Number(valor) > regras.max) {
        erros.push(`${formatarCampo(campo)} deve ser no máximo ${regras.max}.`);
      }

      // tamanho string
      if (typeof valor === "string") {
        if (regras.max && valor.length > regras.max) {
          erros.push(`${formatarCampo(campo)} deve ter no máximo ${regras.max} caracteres.`);
        }
      }

      // valores permitidos
      if (regras.allowed && !regras.allowed.includes(Number(valor))) {
        erros.push(regras.mensagem || `${formatarCampo(campo)} possui valor inválido.`);
      }
    }

    return erros;
  }

  const formatarCampo = (campo) => {
    if (campo.startsWith("ars_")) {
      return campo.replace("ars_", "");
    }
    if (campo.startsWith("mapa_")) {
      return campo.replace("mapa_", "");
    }
    if (campo.startsWith("not_")) {
      return campo.replace("not_", "");
    }
    if (campo.startsWith("pers_")) {
      return campo.replace("pers_", "");
    }

    return campo;
  };

  console.log(dados);

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>{titulo}</h1>
      <div className={styles.divFormEImagem}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {Object.entries(dados).map(([campo, valor]) => {
            if (campo.includes("src") || campo.includes("data_criacao") || campo.includes("data_publicacao") || campo.includes("imagem") || campo.includes("_id") || valor === null) return null;

            return (
              <Input
                key={campo}
                label={`${formatarCampo(campo)[0].toUpperCase()}${formatarCampo(campo).slice(1)}:`}
                value={valor}
                onChange={(val) => handleChange(campo, val)}
              />
            );
          })}
          <img src={dados.src} className={styles.imagem}/>
          <button type="submit" className={styles.btnSalvar}>Salvar</button>  
        </form>
      </div>
    </div>
  );
}

export default FormularioEdicao;