"use client";

import { useState, useRef } from 'react';
import styles from './index.module.css';

const apiKey = 'sua_api_key'; // Coloque sua chave real aqui
const systemPrompt = `Aqui vamos dar as especificações para a ia saber responder as perguntas do jogo.`

export default function Suporte() {
  const [ativa, setAtiva] = useState(true);
  const [chatExpandido, setChatExpandido] = useState(false);
  const [status, setStatus] = useState('');
  const [inputPreview, setInputPreview] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const historyRef = useRef(null);

  function abrirSuporte() {
    setAtiva(true);
  }
  function fecharSuporte() {
    setAtiva(false);
    setChatExpandido(false);
    setStatus('');
    setHistory([]);
    setInputMessage('');
    setInputPreview('');
  }
  function expandirChatBot() {
    setChatExpandido(true);
  }
  function recolherChatBot() {
    setChatExpandido(false);
    setStatus('');
  }

  async function sendMessage() {
    if (!inputMessage.trim()) return;

    setLoading(true);
    setStatus('Carregando...');

    try {
      const res = await fetch("https://api.openai.com/v1/completions", {
        method: 'POST',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: systemPrompt + "\nUsuário: " + inputMessage + "\nIA:",
          max_tokens: 2048,
          temperature: 0.5
        })
      });

      const data = await res.json();
      let resposta = data.choices?.[0]?.text?.trim() ?? 'Sem resposta da IA.';

      // Atualiza o histórico de mensagens
      setHistory(prev => [...prev, { user: inputMessage, bot: resposta }]);
      setInputMessage('');
      setStatus('');
      // Scroll para o fim do histórico
      setTimeout(() => {
        if (historyRef.current) {
          historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
      }, 100);

    } catch (error) {
      console.error('Erro ->', error);
      setStatus('Erro, tente novamente mais tarde...');
    } finally {
      setLoading(false);
    }
  }

  // Função para enviar mensagem da prévia (opcional, está no preview mas não especifica comportamento no original)
  function sendPreviewMessage() {
    if (!inputPreview.trim()) return;
    // Pode implementar comportamento específico aqui, se quiser
    alert('Envio da prévia: ' + inputPreview);
    setInputPreview('');
  }

  return (
    <>
      {/* Botão para abrir suporte - opcional, você pode chamar abrirSuporte de outro local */}
      {!ativa && (
        <button className={styles.abrirSuporteBtn} onClick={abrirSuporte}>
          Suporte
        </button>
      )}

      <div className={`${styles.suporteAba} ${ativa ? styles.ativa : ''}`} id="abaSuporte">
        <div className={styles.suporteHeader}>
          <button className={styles.fecharAba} onClick={fecharSuporte}>X</button>
        </div>

        {!chatExpandido && (
          <>
            <p className={styles.paragraph} style={{ lineHeight: "1.5" }}>Bem-vindo, no que podemos ajudar?</p>
            <div id="suporte">
              <div className={styles.chatbotPreview} onClick={expandirChatBot} role="button" tabIndex={0} onKeyDown={e => { if(e.key==='Enter') expandirChatBot(); }}>
                <div className={styles.headerPreview}>
                  <p className={styles.paragraph2}>CHAT DE DUVIDAS</p>
                </div>
                <div className={styles.footerPreview}>
                  <input 
                    type="text"
                    placeholder="Pergunte aqui..."
                    className={styles.input}
                    value={inputPreview}
                    onChange={e => setInputPreview(e.target.value)}
                  />
                  <button
                    className={styles["btn-submit-preview"]}
                    onClick={sendPreviewMessage}
                    disabled={loading}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Chatbot expandido */}
        <div
          id="chatbot-expanded"
          className={`${styles.chatbotExpanded} ${chatExpandido ? styles.active : ''}`}
          aria-hidden={!chatExpandido}
        >
          <button className={styles.backButton} onClick={recolherChatBot}>&#8592; Voltar</button>

          <div className={styles.boxQuestions}>
            <div className={styles.header}>
              <p className={styles.paragraph}>CHAT DE DÚVIDAS</p>
            </div>

            <p className={styles.status} style={{ display: status ? 'block' : 'none', color: 'white', fontWeight: 'bold' }}>{status}</p>

            <div className={styles.history} ref={historyRef}>
              {history.map(({ user, bot }, i) => (
                <div key={i}>
                  <div className={styles.boxMyMessage}>
                    <p className={`${styles.myMessage} ${styles.paragraph}`}>{user}</p>
                  </div>
                  <div className={styles.boxResponseMessage}>
                    <p className={`${styles.responseMessage} ${styles.paragraph}`}>{bot}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <input
                type="text"
                id="message-input"
                placeholder="Pergunte aqui..."
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && !loading) {
                    sendMessage();
                  }
                }}
                disabled={loading}
              />
              <button
                className={styles.btnSubmit}
                id="btn-submit"
                onClick={sendMessage}
                disabled={loading}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>

        <div className={styles.botoesInfo}>
          <a href="pages/paginaPoliticaDePrivacidade.html" target="_blank" rel="noopener noreferrer">
            <button>Políticas de Privacidade</button>
          </a>
          <a href="pages/paginaTermos.html" target="_blank" rel="noopener noreferrer">
            <button>Termos e Condições</button>
          </a>
        </div>
      </div>
    </>
  );
}