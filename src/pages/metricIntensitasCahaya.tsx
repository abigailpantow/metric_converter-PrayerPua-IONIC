import {
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonInput,
} from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const IntensitasCahaya: React.FC = () => {
  const [dari, asal] = useState("");
  const [ke, tujuan] = useState("");
  const [angka, bilangan] = useState(0);
  const [hasil, result] = useState(0);

  const jumblah = () => {
    const satuan = ["cd", "lm/m²", "lux", "foot-candle"];
    const kali = [1, 1 / (683 * Math.PI), 1 / (100 * Math.PI), 1 / 0.0929];
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
            aria-label="intensitas cahaya"
            placeholder="Pilih Satuan"
            onIonChange={(e) => asal(e.target.value)}
          >
            <IonSelectOption value="cd">Candela</IonSelectOption> <br />
            <IonSelectOption value="lm/m²">
              Lumens per square meter
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="lux">Lux</IonSelectOption> <br />
            <IonSelectOption value="foot-candle">
              Foot-candle
            </IonSelectOption>{" "}
            <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="dari">Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="intensitas cahaya"
            placeholder="Pilih Satuan"
            onIonChange={(e) => tujuan(e.target.value)}
          >
            <IonSelectOption value="cd">Candela</IonSelectOption> <br />
            <IonSelectOption value="lm/m²">
              Lumens per square meter
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="lux">Lux</IonSelectOption> <br />
            <IonSelectOption value="foot-candle">
              Foot-candle
            </IonSelectOption>{" "}
            <br />
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

export default IntensitasCahaya;
