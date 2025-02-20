import Image from "next/image";
import styles from "./page.module.css";
import ButtonCosmic from "@/components/buttons/ButtonCosmic";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.sky_stars}>
        <div className={styles.stars}></div>
        <div className={styles.stars2}></div>
        <div className={styles.stars3}></div>
      </div>
      <main className={styles.main}>
        <ButtonCosmic>Авторизация</ButtonCosmic>
      </main>
    </div>
  );
}
