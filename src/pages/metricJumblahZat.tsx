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

const JumlahZat: React.FC = () => {
  const [dari, asal] = useState("");
  const [ke, tujuan] = useState("");
  const [angka, bilangan] = useState(0);
  const [hasil, result] = useState(0);

  const jumblah = () => {
    const satuan = ["mol", "mol/L", "mol/m³", "mol/g"];
    const kali = [1, 1 / 1000, 1 / 1000000, 1 / 1000000000];

    const a = satuan.findIndex((i) => i === dari);
    const b = satuan.findIndex((i) => i === ke);

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
            aria-label="jumlah zat"
            placeholder="Pilih Satuan"
            onIonChange={(e) => asal(e.target.value)}
          >
            <IonSelectOption value="mol">Mol</IonSelectOption> <br />
            <IonSelectOption value="mol/L">Mol per liter</IonSelectOption>{" "}
            <br />
            <IonSelectOption value="mol/m³">
              Mol per meter kubik
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="mol/g">Mol per gram</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="dari"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="jumlah zat"
            placeholder="Pilih Satuan"
            onIonChange={(e) => tujuan(e.target.value)}
          >
            <IonSelectOption value="mol">Mol</IonSelectOption> <br />
            <IonSelectOption value="mol/L">Mol per liter</IonSelectOption>{" "}
            <br />
            <IonSelectOption value="mol/m³">
              Mol per meter kubik
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="mol/g">Mol per gram</IonSelectOption> <br />
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
      <IonButton
        className="tombol"
        expand="block"
        color="primary"
        onClick={() => jumblah()}
      >
        Convert
      </IonButton>
      <p className="total">
        Hasil : {hasil} {ke}
      </p>
    </>
  );
};

export default JumlahZat;
