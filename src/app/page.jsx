import styles from "./page.module.css";
import Navbar from "@/components/Navbar/index";
import CarrosselBanner from "@/components/CarrosselBanner/index";
import Title from "@/components/Title/index";
import Carrossel from "@/components/Carrossel/index";
import CarrosselItem from "@/components/Carrossel/CarrosselItem/index";
import CarrosselCard from "@/components/Carrossel/CarrosselItem/CarrosselCard/index";
import Banner from "@/components/Banner/index";

function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <CarrosselBanner/>
        <article className={styles.novidades}>
        {/* Artigo com o carrocel das novidades */}
        <Title text="Novidades"/>
        <Carrossel>
          <CarrosselItem extraClass={"active"}>
            <CarrosselCard
            imageUrl={"/clash.jpg"}
            alt={""}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."}/>

            <CarrosselCard
            imageUrl={"/gd.png"}
            alt={""}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."}/>

            <CarrosselCard
            imageUrl={"/cat.jpg"}
            alt={""}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."}/>
          </CarrosselItem>
          
          <CarrosselItem>
            <CarrosselCard
            imageUrl={"/clash.jpg"}
            alt={""}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellate..."}/>

            <CarrosselCard
            imageUrl={"/gd.jpg"}
            alt={""}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."}/>

            <CarrosselCard
            imageUrl={"/cat.jpg"}
            alt={""}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, itaque neque asperiores esse assumenda repellat..."}/>
          </CarrosselItem>
        </Carrossel>
      </article>
      <section>
        <Banner imageSrc={"/tigrinho.jpg"} alt={"Banner dos Guardiões"}/>
      </section>
      </main>
    </>
  );
}

export default Home