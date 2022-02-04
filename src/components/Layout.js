import CuilForm from "./CuilForm";
import CuilInfo from "./CuilInfo";
import Footer from "./Footer";
import { useState } from "react";
import { toast } from 'react-hot-toast';

const Layout = () => {
  const [cuil, setCuil] = useState("");
  const [state, setState] = useState(false);
  const handleChange = (e) => setState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { dni, genero } = e.target.elements;
    const dniValue = dni.value;
    const generoValue = genero.value;
    let sum = 0;
    let z = 0;
    let xy = 20;
    if (dniValue > 999999 && generoValue !== "") {
      if (generoValue === "femenino") {
        xy = 27;
      }
      let cadena = xy + dniValue;
      let arreglo = cadena.split("").map(num => (Number(num)));
      let multiplicador = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

      for (let i = 0; i < arreglo.length; i++) {
        sum += arreglo[i] * multiplicador[i];
      }
      sum = sum % 11;
      if (sum > 0) {
        if (sum === 1) {
          xy = 23;
          if (xy === 20) {
            z = 9;
          }
          z = 4;

        }
        z = 11 - sum;
      }
      setCuil(`${xy}-${dniValue}-${z}`);
      setState(true);
    } else {

      toast(
        "Complete correctamente los campos",
        {
          style: {
            borderRadius: '10px',
            background: 'red',
            color: 'white',
          },
          position: "top-center",
          icon: '❎'
        }
      )
    }
  }
  return (
    <>
      <div className="container container-fluid py-5" style={{display: 'flex', flexDirection: 'column'}}>
        <h1 className="text-center text-light mb-3">Obtener mi número de CUIL</h1>
        <div className="row">
          <div className="col-md-6 col-sm-3 mx-auto my-auto">
            <CuilForm handleSubmit={handleSubmit} handleChange={handleChange} />
            <CuilInfo cuil={cuil} state={state} />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
export default Layout;
