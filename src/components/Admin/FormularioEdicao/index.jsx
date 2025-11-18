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
    onSave(dados);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Editar {titulo}</h1>
      <div className={styles.divFormEImagem}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {Object.entries(dados).map(([campo, valor]) => {
            if (campo.includes("src") || campo.includes("data_criacao") || campo.includes("id") || campo === "pers_data_criacao" || valor === null) return null;

            return (
              <Input
                key={campo}
                label={`${campo[0].toUpperCase()}${campo.slice(1)}:`}
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