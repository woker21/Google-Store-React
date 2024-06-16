
import styled from 'styled-components';



export const Main = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const Galeria = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImagenMini = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 50px; 
  justify-content: center;

  @media (max-width: 768px) {
    display: none; 
  }
`;

export const MiniImg = styled.img`
width: 100%;
height: auto;
display: block;
border: 1px solid #57626B;
border-radius: 50%;
margin-bottom: 15px;
padding: 2.5px;
`;


export const FullImage = styled.div`
  background-color: #F8F9FB;
  width: 65%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;

  @media (max-width: 768px) {
    width: 100%; 
    height: auto;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;