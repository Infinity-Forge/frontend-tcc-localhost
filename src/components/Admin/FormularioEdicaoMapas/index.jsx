import { useState } from "react";
import Input from "../FormularioEdicao/Input";
import styles from "./index.module.css";

function FormularioEdicaoMapas({ item, onSave }) {
  const [nome, setNome] = useState(item.nome);
  const [descricao, setDescricao] = useState(item.descricao);
  const [imagem, setImagem] = useState(item.src);

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Editar Arma</h1>
      <div className={styles.divFormEImagem}>
        <form className={styles.form}>
          <Input label="Nome:" value={nome} onChange={setNome} />
          <Input label="Descrição:" value={descricao} onChange={setDescricao} />
          <button type="submit" className={styles.btnSalvar}>Salvar</button>
        </form>
        <img src={imagem} className={styles.imagem}/>
      </div>
    </div>
  );
}

export default FormularioEdicaoMapas;