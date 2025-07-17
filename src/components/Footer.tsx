import styled from "styled-components"

const FooterStyle = styled.footer`
    background-color: #f5dddd;
`

const ContentStyle = styled.p`
    text-align: center;
    padding: 1vh 0;
    font-size: calc(2px + 0.75vw + 0.5vh);
`

export default function Footer() {

    return (
        <FooterStyle>
            <ContentStyle>&#169; All rights reserved, <a href="">Credits</a></ContentStyle>
        </FooterStyle>
    );
}