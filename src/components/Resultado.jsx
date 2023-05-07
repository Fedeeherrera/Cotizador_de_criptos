import styled from "@emotion/styled";


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMGURL, LASTUPDATE} = resultado
  return (
    <div>
        <p>El precio es de: <span>{PRICE}</span></p>
        <p>El precio mas alto del dia es: <span>{HIGHDAY}</span></p>
        <p>El precio mas bajo del dia es: <span>{LOWDAY}</span></p>
        <p>Variacion de las ultimas 24HS: <span>{CHANGEPCT24HOUR}</span></p>
        <p>Ultima actualizacion: <span>{LASTUPDATE}</span></p>

    </div>
  )
}

export default Resultado