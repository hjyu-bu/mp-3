import { Link } from "react-router"
import styled from "styled-components"

const StyledNav = styled.nav`
    width: 30%;
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`

const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 1000px) {
        flex-direction: row;
    }
`

const StyledLi = styled.li`
    border: 3px #3a4454 solid;
    text-align: center;
    margin: 5vh auto;
    padding: 1.5vh 0;
    width: 80%; /* 80% of ul */
    text-decoration: none;
    
    @media screen and (max-width: 1000px) {
        border: 1px #3a4454 solid;
        margin: 1vh 0.5%;
        padding: calc(0.5vh + 0.5vw) 0;
        width: 13%;
    }
`

const StyledLink = styled(Link)`
    font-size: calc(2px + 1vw + 0.75vh);
    color: #3a4454;
    text-decoration: none;
    
    @media screen and (max-width: 1000px) {
        font-size: calc(2px + 1vw);   
    }
`

export default function Nav() {

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to={`/`}>Home</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/education.html`}>Education</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/employment.html`}>Employment</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/project.html`}>Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/experience.html`}>Experiences</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/skill.html`}>Skills</StyledLink></StyledLi>
                <StyledLi><StyledLink to={`/other.html`}>Others</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}