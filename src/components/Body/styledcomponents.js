
import styled from 'styled-components';



const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Galeria = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-around;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const ImagenMini = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 60%; /* Ajusta según tu diseño */
  justify-content: center;

  @media (max-width: 768px) {
    display: none; /* Oculta las miniaturas en dispositivos móviles */
  }
`;

const FullImage = styled.div`
  background-color: #F8F9FB;
  width: 85%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;

  @media (max-width: 768px) {
    width: 100%; /* Asegura que la imagen grande ocupe todo el ancho en dispositivos móviles */
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;