import styles from "./index.module.css";

function Modal({ children, onClose }) {
  return (
    <div className={styles.backdrop} onClick={onClose}>
      {/* Evita que clicar dentro do modal feche */}
      <div className={styles.conteudoModal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;