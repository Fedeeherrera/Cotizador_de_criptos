import React, { useEffect, useState } from "react";
import useSelectMonedas from "../hooks/useSelectMonedas";
import styled from "@emotion/styled";
import Error from "../components/Error";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elije tu moneda", monedas);
  const [criptoMoneda, SelectCriptomoneda] = useSelectMonedas(
    "Elije tu Criptomoneda",
    criptos
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando Form");

    if ([moneda, criptoMoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({
      moneda,
      criptoMoneda
    })
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const URL =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(URL);
      const resultado = await respuesta.json();

      const arrayCripto = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });

      setCriptos(arrayCripto);
    };

    consultarAPI();
  }, []);

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form value="cotizar" type="submit" onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  );
};

export default Formulario;
