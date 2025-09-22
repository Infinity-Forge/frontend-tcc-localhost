import { useState } from "react";
import Input from "./Input";
import styles from "./index.module.css";

function FormularioEdicao({ item, onSave }) {
  const [nome, setNome] = useState(item.nome);
  const [dano, setDano] = useState(item.dano);
  const [raridade, setRaridade] = useState(item.raridade);
  const [municao, setMunicao] = useState(item.municao);
  const [alcance, setAlcance] = useState(item.alcance);
  const [taxaDisparo, setTaxaDisparo] = useState(item.taxaDisparo);
  const [taxaAcerto, setTaxaAcerto] = useState(item.taxaAcerto);
  const [imagem, setImagem] = useState(item.imagem || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...item, nome, imagem });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Editar Arma</h1>
      {imagem && <img src={imagem} alt={nome} className={styles.imagem} />}
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Nome:" value={nome} onChange={setNome} />
        <Input label="Dano:" value={dano} onChange={setDano} />
        <Input label="Raridade:" value={raridade} onChange={setRaridade} />
        <Input label="Munição:" value={municao} onChange={setMunicao} />
        <Input label="Alcance:" value={alcance} onChange={setAlcance} />
        <Input label="Taxa de Disparo:" value={taxaDisparo} onChange={setTaxaDisparo} />
        <Input label="Taxa de Acerto:" value={taxaAcerto} onChange={setTaxaAcerto} />
        <button type="submit" className={styles.btnSalvar}>Salvar</button>
      </form>
    </div>
  );
}

export default FormularioEdicao;