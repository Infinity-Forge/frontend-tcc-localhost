import styles from "./index.module.css";

function CarrosselItem({ extraClass, children }) {

   return (
        <div className={`carousel-item ${extraClass}`}>
            <div className={styles.containersComNovidades}>
                {children}
            </div>
        </div>
   )
}

export default CarrosselItem;