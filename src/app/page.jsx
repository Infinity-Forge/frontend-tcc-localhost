import styles from "./page.module.css";
import Header from "../components/header/index";
import Banner from "../components/banner/index";

function Home() {
  return (
    <>
      <Header/>
      <main>
        <Banner/>
      </main>
    </>
  );
}

export default Home