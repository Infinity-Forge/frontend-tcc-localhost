"use client";

import { Link } from "next/link";
import styles from "./index.module.css";

function Suporte() {

    function fecharSuporte() {
        console.log("a");
    }

    function expandirChatBot() {
        console.log("a");
    }

    function recolherChatBot() {
        console.log("a");
    }

    function sendMessage() {
        console.log("a");
    }

    return(
        <div className={styles.suporteAba} id="abaSuporte">
            <div className={styles.suporteHeader}>
                <button className={styles.fecharAba} onClick={fecharSuporte}>X</button>
            </div>
            <p className={styles.paragraph}>Bem-vindo, no que podemos ajudar?</p>
            <div id="suporte">
                <div className={styles.chatbotPreview} onClick={expandirChatBot}>
                <div className={styles.headerPreview}>
                    <p className={styles.pargraph}>CHAT DE DUVIDAS</p>
                </div>
                <div className={styles.footerPreview}>
                    <input type="text" placeholder="Pergunte aqui..."/>
                    <button id="btn-submit-preview">Enviar</button>
                </div>
                </div>
            </div>
            
            {/*Área para o chatbot expandido*/}
            <div id="chatbot-expanded" className={styles.chatbotExpanded}>
                <button className={styles.backButton} onClick={recolherChatBot}>&#8592; Voltar</button>
                <div className={styles.boxQuestions}>
                <div className={styles.header}>
                    <p className={styles.paragraph}>CHAT DE DÚVIDAS</p>
                </div>
                <p id="status" className={styles.paragraph}></p>
                <div id="history">
                    {/*Aqui vai o chat gerado conforme as respostas*/}
                </div>
                <div className={styles.footer}>
                    <input type="text" id="message-input" placeholder="Pergunte aqui..."/>
                    <button className={styles.btnSubmit} id="btn-submit" onClick={sendMessage}>Enviar</button>
                </div>
                </div>
            </div>
            <div className={styles.botoesInfo}>
                <Link href="/politica-de-privacidade">
                    <button>Políticas de Privacidade</button>
                </Link>
                <Link href="/termos">
                    <button>Termos e Condições</button>
                </Link>
            </div>
        </div>
    )
}

export default Suporte;