"use client"
import Image from "next/image";
import styles from "./page.module.css";
import ButtonCosmic from "@/components/buttons/ButtonCosmic";
import Link from "next/link";
import { BgCosmic } from "@/components/cosmic/BgCosmic";

export default function Signup() {
    return (
        <div className={styles.page}>
            <BgCosmic>
                <main className={styles.main}>
                    <Link href={"/signin"}>
                        <ButtonCosmic>Авторизация</ButtonCosmic>
                    </Link>

                    <Link href={"/signup"} className={styles.link_signup}>Регистрация</Link>
                </main>
            </BgCosmic>

        </div>
    );
}
