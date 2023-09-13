import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonInput,
  IonText,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import "./Home.css";
import Panjang from "./Panjang";
import MenuSuhu from "./Suhu";
import Massa from "./Massa";
import Waktu from "./Waktu";
import ArusListrik from "./ArusListrik";
import IntensitasCahaya from "./IntensitasCahaya";
import JumlahZat from "./JumblahZat";
import { useState } from "react";

const Home: React.FC = () => {
  const [metric, setMetric] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center">Metric Converter</IonTitle>
          <p className="ion-text-center ion-no-margin">
            By: Abigail Hadasa Wina Pantow
          </p>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p className="container">Pilih metric : </p>
        <IonList>
          <IonItem>
            <IonSelect
              placeholder="Pilih satuan"
              onIonChange={(e) => setMetric(e.detail.value)}
            >
              <IonSelectOption value="panjang">Panjang</IonSelectOption>
              <IonSelectOption value="massa">Massa</IonSelectOption>
              <IonSelectOption value="suhu">Suhu</IonSelectOption>
              <IonSelectOption value="waktu">Waktu</IonSelectOption>
              <IonSelectOption value="Jumlah">Jumlah Zat</IonSelectOption>
              <IonSelectOption value="arus">Arus Listrik</IonSelectOption>
              <IonSelectOption value="cahaya">
                Intensitas Cahaya
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        {metric === "panjang" ? <Panjang /> : null}
        {metric === "zat" ? <JumlahZat /> : null}
        {metric === "massa" ? <Massa /> : null}
        {metric === "suhu" ? <MenuSuhu /> : null}
        {metric === "waktu" ? <Waktu /> : null}
        {metric === "arus" ? <ArusListrik /> : null}
        {metric === "cahaya" ? <IntensitasCahaya /> : null}
      </IonContent>
    </IonPage>
  );
};

export default Home;
