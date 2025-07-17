import styled from 'styled-components';

export const MainStyle = styled.div`
    height: calc(60vh + 30vw); /* Makes <main> tag have 100% hardware view height -> If there's too much content, will not be enough */
    width: 70%;
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`

export const ImageStyle = styled.img`
    max-width: 90%;
    max-height: 90%;
    display: block;
    margin: 1.5vh auto;
`

export const MainUlStyle = styled.ul<{$Center?:boolean}>`
    padding-left: 0;
    text-align: ${props => props.$Center ? "center" : "left"};
    list-style: ${props => props.$Center ? "none" : "disc"};
    margin-bottom: calc(3vh + 1vw);
    
    @media screen and (max-width: 1000px) {
        margin-bottom: calc(0.5vh + 2.5vw);
    }
`

export const Mainh6Style = styled.h6`
    margin-bottom: calc(3vh + 1vw);
    
    @media screen and (max-width: 1000px) {
        margin-bottom: calc(0.5vh + 2.5vw);
    }
`

export const MainWrapperStyle = styled.div`
    font-size: calc(2px + 0.9vw + 0.6vh);
    padding: 2vh 0;
    color: #3a4454;
    display: flex;
    flex-direction: column;
    margin: 0 3%;
    text-align: center;
`

export const Newlineh3Style = styled.h3`
    margin-bottom: calc(3vh + 1vw);
    
    @media screen and (max-width: 1000px) {
        margin-bottom: calc(0.5vh + 2.5vw);
    }
`