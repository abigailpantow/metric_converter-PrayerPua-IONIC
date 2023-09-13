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

const Suhu: React.FC = () => {
  const [dari, asal] = useState("");
  const [ke, tujuan] = useState("");
  const [angka, bilangan] = useState(0);
  const [hasil, result] = useState(0);

  const jumblah = () => {
    if (dari === "c" && ke === "f") {
      result((9 / 5) * angka + 32);
    } else if (dari === "c" && ke === "k") {
      result(angka + 273);
    } else if (dari === "c" && ke === "r") {
      result((4 / 5) * angka);
    } else if (dari === "f" && ke === "c") {
      result((5 / 9) * (angka - 32));
    } else if (dari === "f" && ke === "k") {
      result((5 / 9) * (angka - 32) + 273);
    } else if (dari === "f" && ke === "r") {
      result((4 / 9) * (angka - 32));
    } else if (dari === "k" && ke === "c") {
      result(angka - 273);
    } else if (dari === "k" && ke === "f") {
      result((9 / 5) * (angka - 273) + 32);
    } else if (dari === "k" && ke === "r") {
      result((4 / 5) * (angka - 273));
    } else if (dari === "r" && ke === "c") {
      result((5 / 4) * angka);
    } else if (dari === "r" && ke === "f") {
      result((9 / 4) * angka + 32);
    } else if (dari === "r" && ke === "k") {
      result((5 / 4) * angka + 273);
    } else {
      result(angka);
    }
  };

  return (
    <>
      <p className="dari"> Dari :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="suhu"
            placeholder="Pilih satuan"
            onIonChange={(e) => asal(e.target.value)}
          >
            <IonSelectOption value="c">Celcius</IonSelectOption> <br />
            <IonSelectOption value="f">Fahrenheit</IonSelectOption> <br />
            <IonSelectOption value="k">Kelvin</IonSelectOption> <br />
            <IonSelectOption value="r">Reamur</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="dari"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="suhu"
            placeholder="Pilih satuan"
            onIonChange={(e) => tujuan(e.target.value)}
          >
            <IonSelectOption value="c">Celcius</IonSelectOption> <br />
            <IonSelectOption value="f">Fahrenheit</IonSelectOption> <br />
            <IonSelectOption value="k">Kelvin</IonSelectOption> <br />
            <IonSelectOption value="r">Reamur</IonSelectOption> <br />
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

export default Suhu;
