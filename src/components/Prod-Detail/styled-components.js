import styled from "styled-components";

export const ProdColors = styled.div`
  width: 90%;
  padding-top: 15px;
  
  @media (max-width: 440px) {
    width: 100%;
    padding: 10px;
  }
`;
export const P = styled.p`
font-size: 12px;
color: #353A49;
`;
export const Colors = styled.div`
    display: flex;
    padding:20px 0 90px 0;
    width: 90%;
`;
export const Blue = styled.div`
  background-color: #9EC6EA;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  margin-right: 10px;
  border: 1px solid #57626B;
`;

export const White = styled.div`
background-color: #E7E3E0;
border-radius: 50%;
    width: 33px;
    height: 33px;
    margin-right: 10px;
    border: 1px solid #57626B;

` ;
export const Gray = styled.div` 
  background-color: #56636C; 
  border-radius: 50%;
    width: 33px;
    height: 33px;
    margin-right: 10px;
    border: 1px solid #57626B;
`;

export const Sky = styled.div`
  background-color: #D2D7DA; 
  border-radius: 50%;
  width: 33px;
  height: 33px;
  margin-right: 10px;
  border: 1px solid #57626B;
`;
export const Lemon = styled.div`
  background-color: #DFE5B7; 
  border-radius: 50%;
  width: 33px;
  height: 33px;
  margin-right: 10px;
  border: 1px solid #57626B;
`;
export const Red = styled.div`
  background-color: #E18472;
  border-radius: 50%;
  width: 33px;
  height: 33px;
  margin-right: 10px;
  border: 1px solid #57626B;
`; 
export const ProdPrice = styled.div`
background-color: #F8F9FB;
padding: 30px 15px;
width: 80%;
border-radius: 5px;
`;
export const H1 = styled.h1`
font-size: 35px;
font-weight: bold;
color: #353A49;
`;
  export const Hr =styled.hr` 
  color: #57626B; 
  padding: 0 10px;
  `;

  export const Form = styled.form`
    paddingLeft: "10px"
  `;
  export const Select = styled.select`
  font-size: 12px;
  width: 15%;
  height: 45px;
  border-color: #57626B;
  border-radius: 5px;
  text-align: center;
  `;
  export const SelectOption = styled.option`
    padding: 2px 10px; 
  `;
  export const InputButton = styled.input.attrs({type: 'button'})`
    background-color: 1A73E8;
    font-size: 14px;
    width: 83%;
    padding: 15px;
    border-radius: "5px;
    border: none;
    color: #FFFAFA;
    font-weight: 800;
  `;
  export const Delivery = styled.div`
  display: flex;
  padding: 10px 0px;
  `
  export const DeliveryIcon = styled.img`
    padding-right: 5px;
`
export const DeliveryP = styled.p `
    padding-right: 5px;
    color: black;
    `

export const PBold = styled.p `
  font-weight: bold;
  color: #1A73E8;
`;  
  // export const ProdDetailSw = styled.div `
  // width: "90%"
  // paddingTop: "15px"
  // `;

// export const Product = styled.div`
//     width: 100%;
//     display: flex;
//     padding: 5px 30px 0 0;  
// `;

// export const ProdTitle = styled.div`
//     margin-bottom: 20px;
// `;


// export const ProdPriceSw = styled.div`
//     backgroundColor: "#F8F9FB",
//     padding: "30px 15px",
//     width: "80%",
//     borderRadius: "5px"
//   `;