function ExibicaoPersonagens() {

    return(
        <section className={styles.gurdioesCavleirosSection}>
            <article className={styles.gurdioesCavaleiros}>
                <h1 className={styles.tituloParaAbas}>Guardiões</h1>
                <div className={styles.containerGardiaoCavaleirosPai}>
                <div
                    className={styles.containerGardiaoCavaleiros}
                    onClick={() => (window.location.href = 'pages/paginaPersonagensDescricao.html')}>
                    <img src="images/luffy.jpg" alt="Imagem de um guardião" />
                    <p className={styles.nomeDoGuardiao}>Luffy</p>
                </div>
                <div
                    className={styles.containerGardiaoCavaleiros}
                    onClick={() => (window.location.href = 'pages/paginaPersonagensDescricao.html')}>
                    <img src="images/luffy.jpg" alt="Imagem de um guardião" />
                    <p className={styles.nomeDoGuardiao}>Zoro</p>
                </div>
                <div
                    className={styles.containerGardiaoCavaleiros}
                    onClick={() => (window.location.href = 'pages/paginaPersonagensDescricao.html')}>
                    <img src="images/luffy.jpg" alt="Imagem de um guardião" />
                    <p className={styles.nomeDoGuardiao}>Sanji</p>
                </div>
                <div
                    className={styles.containerGardiaoCavaleiros}
                    onClick={() => (window.location.href = 'pages/paginaPersonagensDescricao.html')}>
                    <img src="images/luffy.jpg" alt="Imagem de um guardião" />
                    <p className={styles.nomeDoGuardiao}>Nami</p>
                </div>
                </div>
            </article>
            </section>
    )
}

export default ExibicaoPersonagens