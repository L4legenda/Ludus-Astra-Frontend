import styles from "./page.module.css";
import { BgCosmic } from "@/components/cosmic/BgCosmic"
import { Header } from "./component/header/header";

export default function Dashboard() {
    return (
        <BgCosmic>
            <main className={styles.main}>
                <Header />
            </main>
        </BgCosmic>
    )
}