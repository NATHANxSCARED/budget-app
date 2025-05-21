<<<<<<< HEAD
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
=======
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Acount from "../components/Acount";
import styles from "./Tab3.module.css";
>>>>>>> 61179151cf9ecbf8f784c30174c587434471f03c

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
<<<<<<< HEAD
=======

        <div className={styles["tab3-container"]}>
          <div className={styles["card-wrapper"]}>
            <Acount />
          </div>
        </div>
>>>>>>> 61179151cf9ecbf8f784c30174c587434471f03c
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
