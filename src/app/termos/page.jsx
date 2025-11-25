import CabecalhoPolitica from "@/components/CabecalhoPolitica";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

function Termos() {
  return (
    <>
      <CabecalhoPolitica tituloPagina="Termos e condições" route="/"/>
      <main className={styles.main} style={{ padding: "40px 20px" }}>
        <section className={styles.termos}>
            <h3 className={styles["titulo-3"]}>Nossos Termos e condições</h3>
            <p className={styles.paragrafo}>Ao acessar ao site mask vessels, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.</p>

            <p className={styles.paragrafo}>2. Uso de Licença</p>
            <p className={styles.paragrafo}>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site mask vessels , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: </p>

            <p className={styles.paragrafo}>modificar ou copiar os materiais; </p>
            <p className={styles.paragrafo}>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial); </p>
            <p className={styles.paragrafo}>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site mask vessels; </p>
            <p className={styles.paragrafo}>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</p>
            <p className={styles.paragrafo}>Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por mask vessels a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.</p>

            <p className={styles.paragrafo}>3. Isenção de responsabilidade</p>
            <p className={styles.paragrafo}>Os materiais no site da mask vessels são fornecidos 'como estão'. mask vessels não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
            <p className={styles.paragrafo}>Além disso, o mask vessels não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.</p>
            <p className={styles.paragrafo}>4. Limitações</p>
            <p className={styles.paragrafo}>Em nenhum caso o mask vessels ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em mask vessels, mesmo que mask vessels ou um representante autorizado da mask vessels tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.</p>

            <p className={styles.paragrafo}>5. Precisão dos materiais</p>
            <p className={styles.paragrafo}>Os materiais exibidos no site da mask vessels podem incluir erros técnicos, tipográficos ou fotográficos. mask vessels não garante que qualquer material em seu site seja preciso, completo ou atual. mask vessels pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, mask vessels não se compromete a atualizar os materiais.</p>

            <p className={styles.paragrafo}>6. Links</p>
            <p className={styles.paragrafo}>O mask vessels não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por mask vessels do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

            <p className={styles.paragrafo}>Modificações</p>
            <p className={styles.paragrafo}>O mask vessels pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>

            <p className={styles.paragrafo}>Lei aplicável</p>
            <p className={styles.paragrafo}>Estes termos e condições são regidos e interpretados de acordo com as leis do mask vessels e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>

        </section>
      </main>
      <Footer />
    </>
  )
}

export default Termos