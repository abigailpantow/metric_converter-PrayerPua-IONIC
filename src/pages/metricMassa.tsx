import {
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonInput,
  IonText,
} from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const Massa: React.FC = () => {
  const [dari, asal] = useState("");
  const [ke, tujuan] = useState("");
  const [angka, bilangan] = useState(0);
  const [hasil, result] = useState(0);

  const jumblah = () => {
    const metrik = ["mg", "cg", "dg", "g", "dag", "hg", "kg"];
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
            aria-label="massa"
            placeholder="Pilih Satuan"
            onIonChange={(e) => asal(e.target.value)}
          >
            <IonSelectOption value="mg">mililigram</IonSelectOption> <br />
            <IonSelectOption value="cg">centigram</IonSelectOption> <br />
            <IonSelectOption value="dg">dekagram</IonSelectOption> <br />
            <IonSelectOption value="g">gram</IonSelectOption> <br />
            <IonSelectOption value="dag">dekagram</IonSelectOption> <br />
            <IonSelectOption value="hg">hektagram</IonSelectOption> <br />
            <IonSelectOption value="kg">kilogram</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="dari"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="massa"
            placeholder="Pilih Satuan"
            onIonChange={(e) => tujuan(e.target.value)}
          >
            <IonSelectOption value="mg">mililigram</IonSelectOption> <br />
            <IonSelectOption value="cg">centigram</IonSelectOption> <br />
            <IonSelectOption value="dg">dekagram</IonSelectOption> <br />
            <IonSelectOption value="g">gram</IonSelectOption> <br />
            <IonSelectOption value="dag">dekagram</IonSelectOption> <br />
            <IonSelectOption value="hg">hektagram</IonSelectOption> <br />
            <IonSelectOption value="kg">kilogram</IonSelectOption> <br />
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

export default Massa;
