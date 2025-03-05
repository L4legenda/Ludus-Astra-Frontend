import styles from "./page.module.css";
import { BgCosmic } from "@/components/cosmic/BgCosmic"
import { Header } from "./component/header/header";
import { PanelProject } from "./component/panel-project/PanelProject";
import { WorkArea } from "./component/work-area/WorkArea";
import { ForceGraph3DVanilla } from "@/components/force-graph/ForceGraph3DComponent";

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <ForceGraph3DVanilla />
        </div>
    )
}