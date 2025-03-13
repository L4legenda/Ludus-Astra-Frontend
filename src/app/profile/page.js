import styles from './page.module.css';
import { BgCosmic } from "@/components/cosmic/BgCosmic"
import { Header } from "../dashboard/component/header/header"
export default function Profile() {
    return (
        <BgCosmic>
            <main className={styles.main}>
                <Header />
                <div className={styles.area_work}>
                    
                </div>
            </main>
        </BgCosmic>
    )
}