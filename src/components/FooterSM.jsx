import styled from "styled-components";

const SM = styled.a`
    font-family: Inter;
    text-decoration-line: none;
    color: #353a49;
    text-align: center;
    margin:10px;
`;

const FooterSM = () => {
    return(
    <>
    <div className="social-net">    
        <SM href=""> 
            <img src='../../public/img/icons/SM-x.svg' alt="X" />
        </SM>
        <SM href=""> 
            <img src="../../public/img/icons/SM-instagram.svg" alt="Instagram" />
        </SM>
        <SM href=""> 
            <img src="../../public/img/icons/SM-facebook.svg" alt="Facebook" />
        </SM>
        <SM href=""> 
            <img src="../../public/img/icons/SM-youtube.svg" alt="Youtube" />
        </SM>
        <SM href=""> 
            <img src="../../public/img/icons/SM-tiktok.svg" alt="Tiktok" />
        </SM>
    </div>
    </>
)
};

export { FooterSM };