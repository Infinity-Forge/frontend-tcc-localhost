import styles from "./index.module.css";

function Minimapa({ imgUrl, nome, descricao }) {

    return(
        <img
            src={imgUrl}
            alt={`Imagem do ${nome}`}
            className={styles.miniMapa}
            data-nome={nome}
            data-descricao={descricao}
        />
    )
}

export default Minimapa;