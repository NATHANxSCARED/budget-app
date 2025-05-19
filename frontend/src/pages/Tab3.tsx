import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Acount from "../components/Acount";
import styles from "./Tab3.module.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className={styles["tab3-container"]}>
          <div className={styles["card-wrapper"]}>
            <Acount />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
