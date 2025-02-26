import styles from "./page.module.css";
import { BgCosmic } from "@/components/cosmic/BgCosmic"
import { Header } from "./component/header/header";
import { PanelProject } from "./component/panel-project/PanelProject";
import { WorkArea } from "./component/work-area/WorkArea";

export default function Dashboard({children}) {
    return (
        <BgCosmic>
            <main className={styles.main}>
                <Header />
                <div className={styles.area_work}>
                    <WorkArea>{children}</WorkArea>
                    <PanelProject></PanelProject>
                </div>
            </main>
        </BgCosmic>
    )
}