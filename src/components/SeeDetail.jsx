import styled from "styled-components";

const SeeProduct = styled.nav`
    font-family: Inter;
    display: flex;
    justify-content: start;
    align-items: end;
    width: 100%;
`;

const Icons = styled.a`
    font-family: Inter;
    text-decoration-line: none;
    color: #353a49;
    text-align: center;
    margin:10px;
`;

const Detail = styled.h3`
    font-size: 12px;
    font-weight: 400;
    color: #353a49;
`;

const SeeDetail = () => {
    return(
        <>
        <SeeProduct className="detail">
            <Icons href="">
                <img src="../img/icons/Arrow.svg" alt="return" />
            </Icons>
            <Detail>See product details</Detail>
        </SeeProduct>
        </>
    )
};

export { SeeDetail };