import styles from "./index.module.css";

function Input({ label, value, onChange, type = "text" }) {

    return(
        <div className={styles.inputDiv}>
            <label>
                {label}
            </label>
            {type === "textarea" ? (
                <textarea 
                    value={value}
                    className={styles.input}
                    onChange={(e) => onChange(e.target.value)}
                    data-long="true"
                    rows={4}
                />
            ) : (
                <input 
                    type={type}
                    value={value}
                    className={styles.input}
                    onChange={(e) => onChange(e.target.value)} 
                />
            )}
        </div>
    )
}

export default Input;