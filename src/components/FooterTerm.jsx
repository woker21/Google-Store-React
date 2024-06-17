//import "../styles/footer.css"
import styled from "styled-components";

const TermLegal = styled.div`
    padding-left: 35px;
    width: 50%;
    display: flex;
    align-items: center;
    text-align: justify;
`;

const Legal = styled.a`
    font-family: Inter;
    text-decoration-line: none;
    color: #353a49;
    text-align: center;
    padding-right: 30px;
`;


const FooterTerm = () => {
    return (
        <>
        <TermLegal>
            <img className="flat" src="../../public/img/icons/Spain.svg" />
            <Legal  href="">           
                {" "}Spain
            </Legal>
            <Legal  href="">            
                Privacy
            </Legal>
            <Legal href="">
                Google Nest Commitment to Privacy
            </Legal>
            <Legal href="">
                Sales Terms
            </Legal>
            <Legal href="">
                Terms of Service
            </Legal>
        </TermLegal>
        </>
    )
};


export { FooterTerm };