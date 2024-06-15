import React from 'react';
import styled from 'styled-components';
const Productdetail =  () => {
    return(
    <div className="prod-detail">
                    <p>Choose a color</p>
                    <div className="colors">
                        <div className="circle blue">GDSFGDF</div>
                        <div className="circle white">GDF</div>
                        <div className="circle gray">FGF</div>
                        <div className="circle sky">BF</div>
                        <div className="circle lemon">GF</div>
                        <div className="circle red">FGXCF</div>
                    </div>
                </div>
    )
}
const ProdDetailContainer = styled.div`
  .colors {
    display: flex;
    gap: 10px;
  }
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => props.color};
`;

const ProdDetail = () => {
  return (
    <ProdDetailContainer>
      <p>Choose a color</p>
      <div className="colors">
        <Circle color="#4285f4" />
        <Circle color="#f1f3f4" />
        <Circle color="#bdc1c6" />
        <Circle color="#a8dadc" />
        <Circle color="#fbbc04" />
        <Circle color="#ea4335" />
      </div>
    </ProdDetailContainer>
  );
};

export default Productdetail;