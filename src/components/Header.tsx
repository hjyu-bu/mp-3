import styled from "styled-components"

const HeaderStyle = styled.header`
    background-color: #f5dddd;
`

const ContentStyle = styled.h1`
    text-align: left;
    padding: 1vh 2vw;
    font-size: calc(2px + 1vw + 0.75vh);
    color: #3a4454;
    
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`

const ContentPStyle = styled.p`
    text-align: left;
    padding: 1vh 2vw;
    font-size: calc(2px + 1vw + 0.75vh);
    color: #3a4454;
    
    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`

export default function Header() {

    return (
        <HeaderStyle>
            <ContentStyle>Yoo, Hanjun</ContentStyle>
            <ContentPStyle>AI researcher/engineer</ContentPStyle>
        </HeaderStyle>
    )
}