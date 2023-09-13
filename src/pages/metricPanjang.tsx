import {
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonButton,
  IonText,
} from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const Panjang: React.FC = () => {
  const [dari, asal] = useState("");
  const [ke, tujuan] = useState("");
  const [angka, bilangan] = useState(0);
  const [hasil, result] = useState(0);

  const jumblah = () => {
    const metrik = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
    const kali = [1, 10, 100, 1000, 10000, 100000, 1000000];

    const a = metrik.findIndex((i) => i === dari);
    const b = metrik.findIndex((i) => i === ke);

    if (a - b < 0) {
      result(angka / kali[Math.abs(a - b)]);
    } else {
      result(angka * kali[Math.abs(a - b)]);
    }
  };

  return (
    <>
      <p className="dari"> Dari :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="panjang"
            placeholder="Pilih satuan"
            onIonChange={(e) => asal(e.detail.value)}
          >
            <IonSelectOption value="mm">mililimeter</IonSelectOption> <br />
            <IonSelectOption value="cm">centimeter</IonSelectOption> <br />
            <IonSelectOption value="dm">desimeter</IonSelectOption> <br />
            <IonSelectOption value="m">meter</IonSelectOption> <br />
            <IonSelectOption value="dam">dekameter</IonSelectOption> <br />
            <IonSelectOption value="hm">hektameter</IonSelectOption> <br />
            <IonSelectOption value="km">kilometer</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="dari"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="panjang"
            placeholder="Pilih satuan"
            onIonChange={(e) => tujuan(e.detail.value)}
          >
            <IonSelectOption value="mm">mililimeter</IonSelectOption> <br />
            <IonSelectOption value="cm">centimeter</IonSelectOption> <br />
            <IonSelectOption value="dm">desimeter</IonSelectOption> <br />
            <IonSelectOption value="m">meter</IonSelectOption> <br />
            <IonSelectOption value="dam">dekameter</IonSelectOption> <br />
            <IonSelectOption value="hm">hektameter</IonSelectOption> <br />
            <IonSelectOption value="km">kilometer</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <IonInput
        label="Masukan angka"
        labelPlacement="floating"
        fill="outline"
        type="number"
        placeholder="Masukan angka"
        onIonInput={(e: any) => bilangan(parseInt(e.target.value))}
      ></IonInput>
      <IonButton expand="block" color="primary" onClick={() => jumblah()}>
        Convert
      </IonButton>
      <p className="total">
        Hasil : {hasil} {ke}
      </p>
    </>
  );
};

export default Panjang;
