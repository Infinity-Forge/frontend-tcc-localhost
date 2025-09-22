import styles from "./index.module.css";

function Input({ label, value, onChange }) {

    return(
        <div className={styles.inputDiv}>
            <label>
                {label}
            </label>
            <br />
            <input 
                type="text" 
                value={value}
                className={styles.input}
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    )
}

export default Input;