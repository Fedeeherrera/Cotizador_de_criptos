import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "lato", sans-serif;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMGURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Precio>
        El precio es de: <span>{PRICE}</span>
      </Precio>
      <Texto>
        El precio mas alto del dia es: <span>{HIGHDAY}</span>
      </Texto>
      <Texto>
        El precio mas bajo del dia es: <span>{LOWDAY}</span>
      </Texto>
      <Texto>
        Variacion de las ultimas 24HS: <span>{CHANGEPCT24HOUR}</span>
      </Texto>
      <Texto>
        Ultima actualizacion: <span>{LASTUPDATE}</span>
      </Texto>
    </Contenedor>
  );
};

export default Resultado;
