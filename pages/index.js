import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Navigation";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Detail from "../components/Details";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      <Hero />
      <Info />
      <div className="slider01">
        <div className="greenry">
          <h2 style={{ padding: "3rem", color: "#fff" }}>
            Lorem ipsum dolor sit amet
            <br /> consectetur adipisicing elit
          </h2>
          <Slider />
        </div>
      </div>
      <Carousel />
      <Detail />
      <Accordion />
      <Footer />
    </div>
  );
}
