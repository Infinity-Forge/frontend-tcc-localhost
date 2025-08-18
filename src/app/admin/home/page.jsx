import AdminCard from "@/components/Admin/HomeCard";
import styles from "./page.module.css";

function AdminHome() {

    return(
        <div className={styles.app}>
            <header className={styles.header}>Administrador</header>
            <div className={styles.main}>
                <div className={styles.container}>
                    <AdminCard href="personagens" recurso="Personagens"></AdminCard>
                    <AdminCard href="arsenal" recurso="Arsenal"></AdminCard>
                    <AdminCard href="mapas" recurso="Mapas"></AdminCard>
                    <AdminCard href="noticias" recurso="Notícias"></AdminCard>
                 </div>           
            </div>
        </div>
    )
}

export default AdminHome;