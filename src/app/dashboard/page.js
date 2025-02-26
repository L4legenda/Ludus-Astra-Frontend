import styles from "./page.module.css";
import { BgCosmic } from "@/components/cosmic/BgCosmic"
import { Header } from "./component/header/header";
import { PanelProject } from "./component/panel-project/PanelProject";
export default function Dashboard() {
    return (
        <BgCosmic>
            <main className={styles.main}>
                <Header />
                <div className={styles.area_work}>
                    <div className="void-horizontal"></div>
                    <PanelProject />
                </div>

            </main>
        </BgCosmic>
    )
}